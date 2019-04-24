import { css } from "@emotion/core";
import { Card, Icon, Modal } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import { addUiLogic } from "../../model/logic";
import { ActionFace } from "../../../../models/types";

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
    cursor: pointer;
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

const CommonSelect = memo((props: ActionFace) => {
  // props
  const { action } = props;
  // 侧边栏显示项列表
  const itemList = [
    {
      name: "拖拽",
      list: [{ name: "自由布局", icon: "icon-jiaohushituozhuaicaozuo-" }]
    },
    {
      name: "基础",
      list: [
        { name: "文本", icon: "icon-wenben" },
        { name: "按钮", icon: "icon-anniu" },
        { name: "图片", icon: "icon-tupian" }
      ]
    },
    {
      name: "产品",
      list: [
        { name: "魔方导航", icon: "icon-daohang" },
        { name: "商品展示", icon: "icon-zhanshi" }
      ]
    },
    {
      name: "交互",
      list: [
        { name: "表单", icon: "icon-biaodanzidingyi" },
        { name: "视频", icon: "icon-shipin" }
      ]
    }
  ];
  // 帮助信息文案
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
        (
          data: { name: string; list: Array<{ name: string; icon: string }> },
          index: number
        ) => {
          return (
            <Card
              title={
                <div>
                  <Icon type="caret-down" style={{ marginRight: 8 }} />
                  {data.name}
                </div>
              }
              bordered={false}
              size={"small"}
              css={styles.mgBottom}
              bodyStyle={{ padding: 0 }}
              extra={
                <Icon
                  type={"question-circle"}
                  onClick={() => helpMsg(data.name)}
                />
              }
              key={index}
            >
              {data.list.map(
                (item: { name: string; icon: string }, index: number) => {
                  return (
                    <div
                      onClick={() => addUiLogic(action, item.name)}
                      key={index}
                    >
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
                          <use xlinkHref={`#${item.icon}`} />
                        </svg>
                        <div>{item.name}</div>
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
  null,
  { action }
)(CommonSelect);
