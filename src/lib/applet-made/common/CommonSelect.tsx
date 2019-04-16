import { css } from "@emotion/core";
import { Card } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action } from "../../../store/action";
import { IRedux } from "../../../store/typing";
import $$button from "./button/database";
import $$drag from "./drag/database";
import $$picture from "./picture/database";
import $$text from "./text/database";
import $$video from "./video/database";

const CommonSelect = memo((props: IRedux) => {
  const { action } = props;
  // 样式
  const styles = {
    layout: css`
      width: 272px;
    `,
    // 常用组件
    mgBottom: css`
      margin-bottom: 8px !important;
      background: #fff;
    `,
    // 分类标签样式
    tag: css`
      margin-right: 0 !important;
    `,
    // 组件列表
    component_item: css`
      width: 33.3%;
      text-align: center;
      padding: 8px !important;
    `,
    // 模板
    template: css`
      //  TODO 根据具体情况，具体调整
      height: calc(100vh - 154px);
      overflow: auto;
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

  // 可选择列表
  const dragList = ["自由布局"];
  const commonList = ["文本", "按钮", "图片"];
  const commodityList = ["魔方导航", "商品分类", "商品展示"];
  const interactionList = ["表单", "视频"];

  const addUI = (itemName: string) => {
    switch (itemName) {
      case "文本":
        return action({
          type: "uiAdd",
          payload: $$text(new Date().getTime(), 40)
        });
      case "按钮":
        return action({
          type: "uiAdd",
          payload: $$button
        });
      case "图片":
        return action({
          type: "uiAdd",
          payload: $$picture
        });
      case "自由布局":
        return action({
          type: "uiAdd",
          payload: $$drag
        });
      case "视频":
        return action({
          type: "uiAdd",
          payload: $$video
        });
    }
  };

  return (
    <div css={styles.layout}>
      <Card
        title={"拖拽"}
        bordered={false}
        size={"small"}
        css={styles.mgBottom}
        bodyStyle={{ padding: 0 }}
      >
        {dragList.map((itemName: string, index: number) => {
          return (
            <div onClick={() => addUI(itemName)} key={index}>
              <Card.Grid css={styles.component_item}>{itemName}</Card.Grid>
            </div>
          );
        })}
      </Card>
      <Card
        title={"基础"}
        bordered={false}
        size={"small"}
        css={styles.mgBottom}
        bodyStyle={{ padding: 0 }}
      >
        {commonList.map((itemName: string, index: number) => {
          return (
            <div onClick={() => addUI(itemName)} key={index}>
              <Card.Grid css={styles.component_item}>{itemName}</Card.Grid>
            </div>
          );
        })}
      </Card>
      <Card
        title={"产品"}
        bordered={false}
        size={"small"}
        css={styles.mgBottom}
        bodyStyle={{ padding: 0 }}
      >
        {commodityList.map((data: string, index: number) => {
          return (
            <div onClick={() => addUI(data)} key={index}>
              <Card.Grid css={styles.component_item}>{data}</Card.Grid>
            </div>
          );
        })}
      </Card>
      <Card
        title={"交互"}
        bordered={false}
        size={"small"}
        css={styles.mgBottom}
        bodyStyle={{ padding: 0 }}
      >
        {interactionList.map((data: string, index: number) => {
          return (
            <div onClick={() => addUI(data)} key={index}>
              <Card.Grid css={styles.component_item}>{data}</Card.Grid>
            </div>
          );
        })}
      </Card>
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
)(CommonSelect);
