import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { Icon, Modal, Card, message } from "antd";
import { action, IActionFn } from "../../../models/action";
import IconFont from "../../../components/IconFont";
import { $$Button0 } from "../package/button/Button_0";
import { $$text0 } from "../package/text/Text_0";
import { $$picture0 } from "../package/picture/Picture_0";
import { IAppletStore } from "../model/store";
import { $$guide0 } from "../package/guide/Guide_0";
import { $$show0 } from "../package/show/Show_0";
import { $$video0 } from "../package/video/Video_0";
import { $$form0 } from "../package/form/database";
import { $$drag } from "../package/drag/database";

interface IProps extends IActionFn {
  pageId: string | undefined; // 添加组件前的前置条件，不得为空
  sideType: string | "common" | "plugin" | "marketing"; // 需要展现出来的项目名称
}

const AppletSelect = memo((props: IProps) => {
  const { sideType, action, pageId } = props;

  // 将需展现数据添加至页面 component 中
  const addComponent = (typeName: string) => {
    if (pageId) {
      switch (typeName) {
        case "自由布局":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$drag });
        case "按钮":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$Button0 });
        case "文本":
          return action({
            type: "APPLET_COMPONENT_ADD",
            payload: $$text0(new Date().getTime())
          });
        case "图片":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$picture0 });
        case "魔方导航":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$guide0 });
        case "商品展示":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$show0 });
        case "视频":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$video0 });
        case "表单":
          return action({ type: "APPLET_COMPONENT_ADD", payload: $$form0 });
      }
    } else {
      message.warning("选择页面后方可添加");
    }
  };

  // 帮助信息文案
  const helpMsg = (type: string) => {
    switch (type) {
      case "拖拽":
        Modal.info({
          title: "拖拽类组件介绍",
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
          title: "基础类组件介绍",
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
          title: "产品类组件介绍",
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
          title: "交互类组件介绍",
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

  // common 可选组件列表
  const commonItemList = [
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
    `,
    // 图标样式
    svg: css`
      font-size: 20px;
      fill: currentColor;
      overflow: hidden;
    `
  };

  return (
    <Fragment>
      {sideType === "common"
        ? commonItemList.map(
            (
              data: {
                name: string;
                list: Array<{ name: string; icon: string }>;
              },
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
                          onClick={() => addComponent(item.name)}
                          key={index}
                        >
                          <Card.Grid css={styles.component_item}>
                            <IconFont css={styles.svg} type={item.icon} />
                            <div>{item.name}</div>
                          </Card.Grid>
                        </div>
                      );
                    }
                  )}
                </Card>
              );
            }
          )
        : ""}
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { pageId } = state.appletStore;
    return {
      pageId: pageId
    };
  },
  { action }
)(AppletSelect);
