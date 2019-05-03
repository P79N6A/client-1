import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import { Tooltip } from "antd";
import {
  pageUIListRemoveItem,
  componentMoveDown,
  componentMoveUp,
  componentChange
} from "../model/logic";
import CommonUI from "./common/CommonUI";
import { AppletMadeCanvasFace } from "../types";

import DragUI from "../package/drag/DragUI";
import ShowUI from "../package/show/ShowUI";
import FormUI from "../package/form/FormUI";
import NavigationUI from "../package/navigation/NavigationUI";
import VideoUI from "../package/video/VideoUI";
import ButtonUI from "../package/button/ButtonUI";
import TextUI from "../package/text/TextUI";
import PictureUI from "../package/picture/PictureUI";
import { connect } from "react-redux";
import { appletMadeCanvasStore } from "../model/reselect";
import { action } from "../../../models/action";
import UserPageUI from "./pages/user/UserPageUI";

/**
 * 展示组件
 * 流程
 * 1. 循环当前的uiList
 * 2. 为组件添加附加功能（上移，下移，删除）
 * 3. 渲染组件block样式
 * 4. 渲染组件
 */
const AppletMadeCanvas = memo((props: AppletMadeCanvasFace) => {
  const {
    theme,
    uiList,
    components,
    componentStyle,
    componentIndex,
    action
  } = props;

  const styles = {
    item: css`
      width: 100%;
    `,
    editItem: css`
      position: relative;
      outline: 1px black dashed;
      width: 100%;
    `,
    tooltip: css`
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
    navigation: NavigationUI,
    video: VideoUI,
    user: UserPageUI
  };

  return (
    <Fragment>
      {uiList.map((data: string, index: number) => {
        const Component = componentUI[components[data].type];
        return (
          <Fragment key={index}>
            {components[data].type === "user" ? (
              <Component data={components[data]} theme={theme} />
            ) : (
              <Tooltip
                placement="right"
                trigger="click"
                key={index}
                title={
                  <div css={styles.tooltip}>
                    <div key={1} onClick={() => componentMoveUp(action, index)}>
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
              >
                <div
                  onClick={() => {
                    componentChange(action, data, components[data].type);
                  }}
                  css={data === componentIndex ? styles.editItem : styles.item}
                >
                  <CommonUI
                    {...componentStyle[data]}
                    drag={components[data].type === "drag"}
                  >
                    <Component data={components[data]} theme={theme} />
                  </CommonUI>
                </div>
              </Tooltip>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
});

export default connect(
  state => appletMadeCanvasStore(state),
  { action }
)(AppletMadeCanvas);
