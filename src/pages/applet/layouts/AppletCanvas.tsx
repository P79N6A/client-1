import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../../models/action";
import ButtonUI from "../package/button/ButtonUI";
import TextUI from "../package/text/TextUI";
import PictureUI from "../package/picture/PictureUI";
import { appletCanvasStore } from "../model/reselect";
import { AppletCanvasFace } from "../types";
import {
  canvasUIChoose,
  canvasUIDel,
  canvasUIMoveDown,
  canvasUIMoveUp,
  delPageLogic
} from "../model/logic";
import { Empty, Tooltip } from "antd";
import DragUI from "../package/drag/DragUI";
import ShowUI from "../package/show/ShowUI";
import FormUI from "../package/form/FormUI";
import NavigationUI from "../package/navigation/NavigationUI";
import VideoUI from "../package/video/VideoUI";

const AppletCanvas = memo((props: AppletCanvasFace) => {
  const { theme, pageKey, pages, ui, uiStyle, uiKey, action } = props;

  const styles = {
    // 画布
    root: css`
      width: 378px;
      height: 600px;
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
      height: 485px;
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
    `,
    uiItem: css`
      position: relative;
    `,
    editUItem: css`
      position: relative;
      outline: 1px black dashed;
    `,
    uiItemHelp: css`
      position: absolute;
      top: 0;
      left: 319px;
    `,
    // 工具
    tipTool: css`
      cursor: pointer;
    `
  };

  // 组件样式
  const componentUI = {
    button: ButtonUI,
    text: TextUI,
    picture: PictureUI,
    drag: DragUI,
    show: ShowUI,
    form: FormUI,
    navigator: NavigationUI,
    video: VideoUI
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
        <div css={styles.title}>{pages[pageKey].title}</div>
      </div>
      <div css={styles.canvas}>
        {pages[pageKey].uiList.map((data, index: number) => {
          const Component = componentUI[ui[data].type];
          return (
            <Tooltip
              placement="right"
              title={
                <div css={styles.tipTool}>
                  <div onClick={() => canvasUIMoveUp(action, index)}>上移</div>
                  <div onClick={() => canvasUIMoveDown(action, index)}>
                    下移
                  </div>
                  <div onClick={() => canvasUIDel(action, index)}>删除</div>
                </div>
              }
              key={index}
              trigger={"click"}
            >
              <div
                css={data === uiKey ? styles.editUItem : ""}
                style={{ width: "100%" }}
                key={index}
              >
                <Component
                  data={ui[data]}
                  theme={theme}
                  style={uiStyle[data]}
                  key={index}
                />
              </div>
            </Tooltip>
          );
        })}
        {!pages[pageKey].uiList.length && (
          <Empty description={"请从左侧选择组件"} style={{ marginTop: 32 }} />
        )}
      </div>
    </div>
  );
});

export default connect(
  state => appletCanvasStore(state),
  { action }
)(AppletCanvas);
