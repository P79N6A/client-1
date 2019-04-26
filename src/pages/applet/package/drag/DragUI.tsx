import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import ButtonUI from "../button/ButtonUI";
import PictureUI from "../picture/PictureUI";
import TextUI from "../text/TextUI";
import { action } from "../../../../models/action";
import { DragStore } from "../../model/reselect";
import { componentDragSetData, dragSet } from "../../model/logic";
import ResizableRect from "../../../../tools/drag/ResizableRect";
import { DragUIFace } from "../../types";
import { css } from "@emotion/core";

const DragUI = memo((props: DragUIFace) => {
  const { theme, data, action, components, dragIndex } = props;

  const styles = css`
    user-select: none;
    pointer-events: none;
    overflow: hidden;
  `;

  // 组件列表
  const uiList = {
    text: TextUI,
    picture: PictureUI,
    button: ButtonUI
  };

  return (
    <Fragment>
      {data.uiList.map((data, index) => {
        const Component = uiList[components[data].type];
        return (
          <Fragment key={index}>
            {dragIndex === data ? (
              <ResizableRect
                css={styles}
                onMouseDown={() => dragSet(action, index)}
                key={index}
                left={components[data].left}
                top={components[data].top}
                width={components[data].width}
                height={components[data].height}
                zoomable="n, w, s, e, nw, ne, se, sw"
                onResize={({ top, left, width, height }) =>
                  componentDragSetData(action, {
                    width,
                    height,
                    top,
                    left
                  })
                }
                onDrag={(deltaX: number, deltaY: number) =>
                  componentDragSetData(action, {
                    left: deltaX + components[data].left,
                    top: deltaY + components[data].top
                  })
                }
              >
                <Component
                  data={components[data]}
                  theme={theme}
                  absolute={true}
                />
              </ResizableRect>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: `${components[data].top}px`,
                  left: `${components[data].left}px`
                }}
                onMouseDown={() => dragSet(action, data)}
              >
                <Component
                  css={styles}
                  data={components[data]}
                  theme={theme}
                  absolute={true}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
});

export default connect(
  state => DragStore(state),
  { action }
)(DragUI);
