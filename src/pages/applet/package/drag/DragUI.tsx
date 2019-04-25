import { css } from "@emotion/core";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import ButtonUI from "../button/ButtonUI";
import PictureUI from "../picture/PictureUI";
import TextUI from "../text/TextUI";
import { action } from "../../../../models/action";
import { DragStore } from "../../model/reselect";
import { componentSetData } from "../../model/logic";
import ResizableRect from "../../../../tools/drag/ResizableRect";
import { DragUIFace } from "../../types";

const DragUI = memo((props: DragUIFace) => {
  const { theme, data, action, style, componentStyle, components } = props;
  const styles = {
    block: css`
      position: relative;
      width: 100%;
      height: ${style.height}px;
      margin-top: ${style.marginTop}px;
      margin-bottom: ${style.marginBottom}px;
      padding-top: ${style.paddingTop}px;
      padding-bottom: ${style.paddingBottom}px;
      background-color: ${style.bgColor};
      ${style.bgImg ? `background:url(${style.bgImg})` : ""};
      padding-left: ${style.paddingLeft}px;
      padding-right: ${style.paddingRight}px;
    `
  };

  // 组件列表
  const uiList = {
    text: TextUI,
    picture: PictureUI,
    button: ButtonUI
  };

  return (
    <div css={styles.block}>
      {data.uiList.map((data, index) => {
        const Component = uiList[components[data].type];
        return (
          <ResizableRect
            key={index}
            left={components[data].left}
            top={components[data].top}
            width={components[data].width}
            height={components[data].height}
            zIndex={200}
            zoomable="n, w, s, e, nw, ne, se, sw"
            onResize={({ top, left, width, height }) =>
              componentSetData(action, {
                width,
                height,
                top,
                left
              })
            }
            onDrag={(deltaX: number, deltaY: number) =>
              componentSetData(action, {
                left: deltaX + components[data].left,
                top: deltaY + components[data].top
              })
            }
          >
            <Component
              absolute={true}
              data={components[data]}
              theme={theme}
              style={componentStyle[data]}
            />
          </ResizableRect>
        );
      })}
    </div>
  );
});

export default connect(
  state => DragStore(state),
  { action }
)(DragUI);
