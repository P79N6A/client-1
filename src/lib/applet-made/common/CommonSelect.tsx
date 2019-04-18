import { css } from "@emotion/core";
import { Button, Card, Icon, Modal } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action } from "../../../store/action";
import { IRedux } from "../../../store/typing";
import $$button from "./button/database";
import $$drag from "./drag/database";
import $$form from "./form/database";
import $$navigation from "./navigation/database";
import $$picture from "./picture/database";
import $$show from "./show/database";
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

  // 侧边栏显示项列表
  const itemNameList = ["拖拽", "基础", "产品", "交互"];
  const itemList = [
    [{ name: "自由布局", icon: "icon-jiaohushituozhuaicaozuo-" }],
    [
      { name: "文本", icon: "icon-wenben" },
      { name: "按钮", icon: "icon-anniu" },
      { name: "图片", icon: "icon-tupian" }
    ],
    [
      { name: "魔方导航", icon: "icon-daohang" },
      { name: "商品展示", icon: "icon-zhanshi" }
    ],
    [
      { name: "表单", icon: "icon-biaodanzidingyi" },
      { name: "视频", icon: "icon-shipin" }
    ]
  ];

  // 先redux 中添加选择的组件数据
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
      case "魔方导航":
        return action({
          type: "uiAdd",
          payload: $$navigation
        });
      case "商品展示":
        return action({
          type: "uiAdd",
          payload: $$show
        });
      case "表单":
        return action({
          type: "uiAdd",
          payload: $$form
        });
    }
  };

  // 帮助信息
  const helpMsg = (type: string) => {
    switch (type) {
      case "拖拽":
        Modal.info({
          title: "拖拽组件介绍",
          content: (
            <div>
              <p>
                可以在自由布局中添加 文本、按钮、图片，并通过拖拽进行样式的排版
              </p>
            </div>
          ),
          onOk() {
            return "";
          }
        });
        break;
      case "基础":
        Modal.info({
          title: "基础组件介绍",
          content: (
            <div>
              <p>基础组件适合于简单的网店样式排版及搭建</p>
            </div>
          ),
          onOk() {
            return "";
          }
        });
        break;
      case "产品":
        Modal.info({
          title: "拖拽组件介绍",
          content: (
            <div>
              <p>
                将商品添加至组件中，用户每一次的购买行为都会在后台中进行统计
              </p>
            </div>
          ),
          onOk() {
            return "";
          }
        });
        break;
      case "交互":
        Modal.info({
          title: "拖拽组件介绍",
          content: (
            <div>
              <p>用于收集用户信息，简化用户的操作</p>
            </div>
          ),
          onOk() {
            return "";
          }
        });
        break;
    }
  };
  return (
    <div css={styles.layout}>
      {itemList.map(
        (data: Array<{ name: string; icon: string }>, index: number) => {
          return (
            <Card
              title={
                <div>
                  <Icon type="caret-down" style={{ marginRight: 8 }} />
                  {itemNameList[index]}
                </div>
              }
              bordered={false}
              size={"small"}
              css={styles.mgBottom}
              bodyStyle={{ padding: 0 }}
              extra={
                <Icon
                  type={"question-circle"}
                  onClick={() => helpMsg(itemNameList[index])}
                />
              }
              key={index}
            >
              {data.map(
                (itemName: { name: string; icon: string }, index: number) => {
                  return (
                    <div onClick={() => addUI(itemName.name)} key={index}>
                      <Card.Grid css={styles.component_item}>
                        <svg
                          style={{
                            width: 20,
                            height: 20,
                            fill: "currentColor",
                            overflow: "hidden"
                          }}
                          aria-hidden="true"
                        >
                          <use xlinkHref={`#${itemName.icon}`} />
                        </svg>
                        <div>{itemName.name}</div>
                      </Card.Grid>
                    </div>
                  );
                }
              )}
            </Card>
          );
        }
      )}
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
