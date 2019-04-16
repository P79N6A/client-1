import { css } from "@emotion/core";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { action } from "../../../../store/action";
import { IRedux } from "../../../../store/typing";
import ResizableRect from "../../../drag/ResizableRect";
import ButtonUI from "../button/ButtonUI";
import PictureUI from "../picture/PictureUI";
import TextUI from "../text/TextUI";
import { IDrag } from "./database";

interface IProps extends IRedux {
  theme: string;
  data: IDrag;
}

const DragUI = memo((props: IProps) => {
  const { theme, data, action, applet } = props;
  const { blockHeight, bgColor, bgImg } = data;
  const styles = {
    block: css`
      position: relative;
      width: 100%;
      min-height: ${blockHeight}px;
      background-color: ${bgColor};
      ${bgImg ? `background:url(${bgImg})` : ""};
    `
  };
  // 组件列表
  const uiList = {
    text: TextUI,
    picture: PictureUI,
    button: ButtonUI
  };

  const handleResize = (style: {
    top: number;
    left: number;
    width: number;
    height: number;
  }): void => {
    const { top, left, width, height } = style;
    action({
      type: "changeSize",
      payload: {
        top,
        left,
        width,
        height
      }
    });
  }; // 调整组件尺寸
  const handleDrag = (deltaX: number, deltaY: number): void => {
    action({
      type: "changePosition",
      payload: { left: deltaX, top: deltaY }
    });
  }; // 组件移动

  // 当前移动的组件
  const dragIndex = index => {
    action({ type: "setDragIndex", payload: index });
  };
  return (
    <div css={styles.block}>
      {data.uiList.map((data, index) => {
        const Component = uiList[data.type];
        return (
          <Fragment key={index}>
            {index === applet.dragIndex ? (
              <ResizableRect
                onMouseDown={() => dragIndex(index)}
                key={index}
                left={data.left}
                top={data.top}
                width={data.width}
                height={data.height}
                zoomable="n, w, s, e, nw, ne, se, sw"
                onResize={handleResize}
                onDrag={handleDrag}
              >
                <Component data={data} theme={theme} />
              </ResizableRect>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: `${data.top}px`,
                  left: `${data.left}px`
                }}
                onMouseDown={() => dragIndex(index)}
              >
                <Component data={data} theme={theme} />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(DragUI);
