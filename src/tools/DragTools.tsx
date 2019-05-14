import React, { memo, useState } from "react";
import { css } from "@emotion/core";

/**
 * @description 接口
 * 1. dataList 数据列表
 * 2. position 当前移动的组件数据
 * 3. reSize 组件数据回调
 * 4. editId 当前编辑的组价id
 */
interface DragRefFace {
  dataList: Array<{ top: number; left: number; width: number; height: number }>;
  position: { top: number; left: number; width: number; height: number };
  editId?: number | string;
  children: object;
  reSize(data: any): void;
}

/**
 * @description 组件自由拖动 + 生成参考先 + 吸附
 * 功能
 */
const DragRef = memo((props: DragRefFace) => {
  const { dataList, children, position, reSize, editId } = props;

  // 记录当前点击下的鼠标位置
  const [markMouse, setMarkMouse] = useState({
    use: false,
    type: "",
    left: 0,
    top: 0
  });
  // 记录组件移动前的数值
  const [value, setValue] = useState({ left: 0, top: 0, width: 0, height: 0 });
  // 鼠标移动，记录数值
  const [move, setMove] = useState({ left: 0, top: 0, width: 0, height: 0 });
  // 参考线
  const [ref, setRef] = useState({
    top: false,
    left: false,
    right: false,
    bottom: false,
    center_left: false,
    center_top: false
  });

  const mouseDown = (type: any, e: any) => {
    setMarkMouse({
      type,
      use: true,
      left: e.clientX,
      top: e.clientY
    });
    setValue({ ...position });
  };
  const mouseMove = (e: any) => {
    if (markMouse.use) {
      // 参考线
      const refData = {
        top: false,
        left: false,
        right: false,
        bottom: false,
        center_left: false,
        center_top: false
      };
      dataList.map((listData, index) => {
        if (index !== editId) {
          if (Math.abs(move.left + value.left - listData.left) < 3) {
            refData.left = true;
          }

          if (
            Math.abs(
              move.left +
                value.left +
                value.width / 2 -
                (listData.left + listData.width / 2)
            ) < 3
          ) {
            refData.center_left = true;
          }

          if (
            Math.abs(
              move.left +
                value.left +
                value.width -
                (listData.left + listData.width)
            ) < 3
          ) {
            refData.right = true;
          }

          if (Math.abs(move.top + value.top - listData.top) < 3) {
            refData.top = true;
          }

          if (
            Math.abs(
              move.top +
                value.top +
                value.height / 2 -
                (listData.top + listData.height / 2)
            ) < 3
          ) {
            refData.center_top = true;
          }

          if (
            Math.abs(
              move.top +
                value.top +
                value.height -
                (listData.top + listData.height)
            ) < 3
          ) {
            refData.bottom = true;
          }
        }
      });
      setRef({ ...refData });
      // 调整大小 + 移动
      switch (markMouse.type) {
        case "left":
          setMove({
            ...move,
            left: e.clientX - markMouse.left,
            width: -(e.clientX - markMouse.left)
          });
          break;
        case "top":
          setMove({
            ...move,
            top: e.clientY - markMouse.top,
            height: -(e.clientY - markMouse.top)
          });
          break;
        case "bottom":
          setMove({
            ...move,
            height: e.clientY - markMouse.top
          });
          break;
        case "right":
          setMove({
            ...move,
            width: e.clientX - markMouse.left
          });
          break;

        case "left_top":
          setMove({
            top: e.clientY - markMouse.top,
            height: -(e.clientY - markMouse.top),
            left: e.clientX - markMouse.left,
            width: -(e.clientX - markMouse.left)
          });
          break;
        case "left_bottom":
          setMove({
            ...move,
            height: e.clientY - markMouse.top,
            left: e.clientX - markMouse.left,
            width: -(e.clientX - markMouse.left)
          });
          break;
        case "right_top":
          setMove({
            ...move,
            width: e.clientX - markMouse.left,
            top: e.clientY - markMouse.top,
            height: -(e.clientY - markMouse.top)
          });
          break;
        case "right_bottom":
          setMove({
            ...move,
            width: e.clientX - markMouse.left,
            height: e.clientY - markMouse.top
          });
          break;
        default:
          setMove({
            ...move,
            left: e.clientX - markMouse.left,
            top: e.clientY - markMouse.top
          });
      }
      // 传递数值
      reSize({
        width: value.width + move.width,
        height: value.height + move.height,
        left: value.left + move.left,
        top: value.top + move.top
      });
    }
  };
  const mouseUp = () => {
    setMove({ left: 0, top: 0, width: 0, height: 0 });
    setMarkMouse({ type: "", use: false, left: 0, top: 0 });
    setValue({ left: 0, top: 0, width: 0, height: 0 });
    setRef({
      top: false,
      left: false,
      right: false,
      bottom: false,
      center_left: false,
      center_top: false
    });
  };

  const styles = {
    layout: css`
      cursor: pointer;
    `,
    layout_move: css`
      width: 100vw;
      height: 100vh;
      position: relative;
      cursor: pointer;
    `,
    block: css`
      outline: 1px black dotted;
      position: absolute;
      z-index: 1;
    `,
    ref_horizontal: css`
      height: 100vh;
      width: 1px;
      background: darkorchid;
      position: absolute;
      z-index: 10;
    `,
    ref_vertical: css`
      width: 100vw;
      height: 1px;
      background: darkorchid;
      position: absolute;
      z-index: 10;
    `,
    svg: css`
      width: 16px;
      height: 16px;
      position: absolute;
      z-index: 10;
    `
  };

  return (
    <div
      css={markMouse.use ? styles.layout_move : styles.layout}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
    >
      <div
        css={styles.block}
        onMouseDown={e => mouseDown("", e)}
        style={{
          width: `${position.width}px`,
          height: `${position.height}px`,
          top: `${position.top}px`,
          left: `${position.left}px`
        }}
      >
        <div style={{ pointerEvents: "none", userSelect: "none" }}>
          {children}
        </div>
      </div>

      {ref.left && (
        <div
          css={styles.ref_horizontal}
          style={{ left: move.left + value.left }}
        />
      )}
      {ref.center_left && (
        <div
          css={styles.ref_horizontal}
          style={{ left: move.left + value.left + value.width / 2 }}
        />
      )}
      {ref.right && (
        <div
          css={styles.ref_horizontal}
          style={{
            left: move.left + value.left + value.width
          }}
        />
      )}

      {ref.top && (
        <div css={styles.ref_vertical} style={{ top: move.top + value.top }} />
      )}

      {ref.center_top && (
        <div
          css={styles.ref_vertical}
          style={{ top: move.top + value.top + value.height / 2 }}
        />
      )}
      {ref.bottom && (
        <div
          css={styles.ref_vertical}
          style={{ top: move.top + value.top + value.height }}
        />
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("left_top", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left - 9,
            top: move.top + position.top - 9
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle1" />
        </svg>
      )}

      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("left", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left - 9,
            top: move.top + position.top + position.height / 2 - 10
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle8" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("left_bottom", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left - 9,
            top: move.top + position.top + position.height - 7
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle3" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("right_top", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left + position.width - 7,
            top: move.top + position.top - 9
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle6" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("right", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left + position.width - 7,
            top: move.top + position.top + position.height / 2 - 10
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle4" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("right_bottom", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left + position.width - 8,
            top: move.top + position.top + position.height - 8
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle2" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("top", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left + position.width / 2 - 8,
            top: move.top + position.top - 9
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle5" />
        </svg>
      )}
      {!markMouse.use && (
        <svg
          onMouseDown={e => mouseDown("bottom", e)}
          aria-hidden="true"
          style={{
            left: move.left + position.left + position.width / 2 - 7,
            top: move.top + position.top + position.height - 7
          }}
          css={styles.svg}
        >
          <use xlinkHref="#icon-semicircle7" />
        </svg>
      )}
    </div>
  );
});

export default DragRef;
