import React, { memo } from "react";
import { css } from "@emotion/core";
import { Empty } from "antd";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../model/action";
import { IAppletStore } from "../model/store";
import RenderComponent from "../package/RenderComponent";

interface IProps extends IActionFn {
  componentList: IAppletStore["pages"]["pageId"];
  theme: string;
  title: string;
}

const AppletCanvas = memo((props: IProps) => {
  const { theme, componentList, title } = props;

  const styles = {
    // 画布
    root: css`
      width: 378px;
      height: 615px;
      margin: 30px auto auto;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0 0 15px;
      overflow: hidden;
      cursor: pointer;
    `,
    header: css`
      height: 65px;
      width: 380px;
      background: ${theme};
    `,
    title: css`
      margin-top: -35px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    `,
    canvas: css`
      background: #f1f1f1;
      height: 500px;
      z-index: 10000;
      overflow: auto;
      width: 100%;
      scrollbar-arrow-color: transparent;
      scrollbar-face-color: transparent;
      scrollbar-highlight-color: transparent;
      scrollbar-shadow-color: transparent;
      scrollbar-darkshadow-color: transparent;
      scrollbar-track-color: transparent;
      scrollbar-base-color: transparent;
      &::-webkit-scrollbar {
        border: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-track-piece {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
      }
      &::-webkit-resizer {
        display: none;
      }
    `
  };

  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <img
          src={"http://wokekj.oss-cn-shanghai.aliyuncs.com/applet-heade.png"}
          alt={"phone"}
          height={65}
          width={380}
        />
        <div css={styles.title}>{title}</div>
      </div>
      <div css={styles.canvas}>
        <RenderComponent />
        {!componentList.length && (
          <Empty
            style={{ marginTop: 32 }}
            description={"点击左侧组件框添加组件"}
          />
        )}
      </div>
    </div>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, pageList } = state.appletStore;
    return {
      componentList: pageId ? pages[pageId] : [],
      title: pageId ? pageList[pageId].title : "",
      theme: theme
    };
  },
  { action }
)(AppletCanvas);
