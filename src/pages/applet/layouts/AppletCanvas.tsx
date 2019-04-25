import React, { memo } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { Empty, Tooltip } from "antd";
import {
  pageUIListRemoveItem,
  componentMoveDown,
  componentMoveUp,
  componentChange
} from "../model/logic";
import DragUI from "../package/drag/DragUI";
import ShowUI from "../package/show/ShowUI";
import FormUI from "../package/form/FormUI";
import NavigationUI from "../package/navigation/NavigationUI";
import VideoUI from "../package/video/VideoUI";
import { action } from "../../../models/action";
import ButtonUI from "../package/button/ButtonUI";
import TextUI from "../package/text/TextUI";
import PictureUI from "../package/picture/PictureUI";
import { appletCanvasStore } from "../model/reselect";
import { AppletCanvasFace } from "../types";

/**
 * TODO 添加键盘操作
 */
const AppletCanvas = memo((props: AppletCanvasFace) => {
  const {
    theme,
    pageIndex,
    pages,
    components,
    componentStyle,
    componentIndex,
    action
  } = props;

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
        <div css={styles.title}>
          {/*TODO 后期跟着pageIndex 进行设置*/}
          {pageIndex !== undefined ? pages[pageIndex].title : ""}
        </div>
      </div>
      <div css={styles.canvas}>
        {/*TODO 后期跟着pageIndex 进行设置*/}
        {pageIndex
          ? pages[pageIndex].uiList.map((data, index: number) => {
              const Component = componentUI[components[data].type];
              return (
                <Tooltip
                  placement="right"
                  title={
                    <div css={styles.tipTool}>
                      <div
                        key={1}
                        onClick={() => componentMoveUp(action, index)}
                      >
                        上移
                      </div>
                      <div
                        key={2}
                        onClick={() => componentMoveDown(action, index)}
                      >
                        下移
                      </div>
                      <div
                        key={3}
                        onClick={() => pageUIListRemoveItem(action, index)}
                      >
                        删除
                      </div>
                    </div>
                  }
                  key={index}
                  trigger={"click"}
                >
                  <div
                    onClick={() => {
                      componentChange(action, data, components[data].type);
                    }}
                    css={data === componentIndex ? styles.editUItem : ""}
                    style={{ width: "100%" }}
                    key={index}
                  >
                    <Component
                      data={components[data]}
                      theme={theme}
                      style={componentStyle[data]}
                      key={index}
                    />
                  </div>
                </Tooltip>
              );
            })
          : ""}
        {/*TODO 页面什么都没有的时候显示,目前应为pageIndex 的原因，后面进行设置*/}
        {/*{!pages[pageIndex].uiList.length && (*/}
        {/*<Empty description={"请从左侧选择组件"} style={{ marginTop: 32 }} />*/}
        {/*)}*/}
      </div>
    </div>
  );
});

export default connect(
  state => appletCanvasStore(state),
  { action }
)(AppletCanvas);
