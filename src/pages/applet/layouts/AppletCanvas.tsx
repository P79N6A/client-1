import React, { memo } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../../models/action";
import { appletCanvasStore } from "../model/reselect";
import { AppletCanvasFace } from "../types";
import AppletMadeCanvas from "../package/AppletMadeCanvas";
import { Empty } from "antd";
import TabBarUI from "../package/tabbar/TabBarUI";

const AppletCanvas = memo((props: AppletCanvasFace) => {
  const { theme, uiList, title } = props;

  const styles = {
    // 画布
    root: css`
      width: 378px;
      height: 615px;
      margin: 80px auto auto;
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
      height: 500px;
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
          src={"http://oss-96.oss-cn-hangzhou.aliyuncs.com/applet-heade.png"}
          alt={"phone"}
          height={65}
          width={380}
        />
        <div css={styles.title}>{title}</div>
      </div>
      <div css={styles.canvas}>
        <AppletMadeCanvas />
        {!uiList.length && <Empty style={{ marginTop: 32 }} />}
      </div>
      <TabBarUI />
    </div>
  );
});

export default connect(
  state => appletCanvasStore(state),
  { action }
)(AppletCanvas);
