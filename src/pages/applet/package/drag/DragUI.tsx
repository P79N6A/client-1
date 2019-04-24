import { css } from "@emotion/core";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import ButtonUI from "../button/ButtonUI";
import PictureUI from "../picture/PictureUI";
import TextUI from "../text/TextUI";
import { action } from "../../../../models/action";
import { DragStore } from "../../model/reselect";
import { setUIData } from "../../model/logic";
import ResizableRect from "../../../../tools/drag/ResizableRect";

interface DragFace {
  theme;
  data;
  style;

  action;
  dragKey;
  uiStyle;
  ui;
}

const DragUI = memo((props: DragFace) => {
  const { theme, data, action, style, uiStyle, ui } = props;
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
        const Component = uiList[ui[data].type];
        return (
          <ResizableRect
            key={index}
            left={ui[data].left}
            top={ui[data].top}
            width={ui[data].width}
            height={ui[data].height}
            zIndex={200}
            zoomable="n, w, s, e, nw, ne, se, sw"
            onResize={({ top, left, width, height }) =>
              setUIData(action, {
                width,
                height,
                top,
                left
              })
            }
            onDrag={(deltaX: number, deltaY: number) =>
              setUIData(action, {
                left: deltaX + ui[data].left,
                top: deltaY + ui[data].top
              })
            }
          >
            <Component
              absolute={true}
              data={ui[data]}
              theme={theme}
              style={uiStyle[data]}
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
