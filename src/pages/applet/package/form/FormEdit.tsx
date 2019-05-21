import {
  Button,
  Drawer,
  Empty,
  Icon,
  List,
  message,
  Popover,
  Skeleton,
  Tabs
} from "antd";
import produce from "immer";
import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";

import { action, IActionFn } from "../../../../models/action";
import InputForm from "./item/InputForm";
import SwitchForm from "./item/SwitchForm";
import RadioForm from "./item/RadioForm";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";

/**
 * swiper可编辑属性操作栏
 */
interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}
const FormEdit = memo((props: IProps) => {
  const { action, component } = props;
  const { formItem } = component;

  const [itemChoose, setItemChoose] = useState("");

  const styles = {
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };

  // 实现对应操作
  const itemSet = (name: string, index: any): any => {
    switch (name) {
      case "up":
        if (index === 0) {
          return message.warning("已至最顶端");
        } else {
          action({
            type: "APPLET_COMPONENT_SET",
            payload: {
              guideItem: produce(formItem, (draftState: any) => {
                [draftState[index - 1], draftState[index]] = [
                  draftState[index],
                  draftState[index - 1]
                ];
              })
            }
          });
        }
        break;
      case "down":
        if (index + 1 === formItem.length) {
          return message.warning("已至最底端");
        } else {
          action({
            type: "APPLET_COMPONENT_SET",
            payload: {
              formItem: produce(formItem, (draftState: any) => {
                [draftState[index], draftState[index + 1]] = [
                  draftState[index + 1],
                  draftState[index]
                ];
              })
            }
          });
        }
        break;
      case "del":
        action({
          type: "APPLET_COMPONENT_SET",
          payload: {
            formItem: produce(formItem, (draftState: any) => {
              draftState.splice(index, 1);
            })
          }
        });

        break;
      case "add":
        action({
          type: "APPLET_COMPONENT_SET",
          payload: {
            formItem: produce(formItem, (draftState: any) => {
              draftState.push({
                title: "标题",
                desc: "描述",
                img:
                  "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
              });
            })
          }
        });

        break;
    }
  };

  // 添加表单项
  const content = (
    <div>
      <p onClick={() => itemSet("add", "input")}>输入框</p>
      <p onClick={() => itemSet("add", "radio")}>单选</p>
      <p onClick={() => itemSet("add", "switch")}>滑动开关</p>
    </div>
  );

  // 单个项目数值修改后的回调
  const itemValueFeedBack = (value: string) => {
    action({
      type: "APPLET_COMPONENT_SET",
      payload: {
        formItem: produce(formItem, (draftState: any) => {
          draftState[itemChoose] = value;
        })
      }
    });
  };

  // 展示相应组件表单
  const renderFormItem = (type: any) => {
    switch (type) {
      case "input":
        return (
          <InputForm onChange={itemValueFeedBack} data={formItem[itemChoose]} />
        );
      case "switch":
        return (
          <SwitchForm
            onChange={itemValueFeedBack}
            data={formItem[itemChoose]}
          />
        );
      case "radio":
        return (
          <RadioForm onChange={itemValueFeedBack} data={formItem[itemChoose]} />
        );
      default:
        return <div key={1} />;
    }
  };

  const TabPane = Tabs.TabPane;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础" key="1">
        <List
          size="small"
          bordered={false}
          dataSource={formItem}
          renderItem={(item: { name: string }, index: any) => (
            <List.Item
              actions={[
                <a onClick={() => itemSet("up", index)} key={1} href={"/"}>
                  <Icon type="arrow-up" />
                </a>,
                <a onClick={() => itemSet("down", index)} key={2} href={"/"}>
                  <Icon type="arrow-down" />
                </a>,
                <a onClick={() => setItemChoose(index)} key={3} href={"/"}>
                  <Icon type="edit" />
                </a>,
                <a onClick={() => itemSet("del", index)} key={4} href={"/"}>
                  <Icon type="delete" />
                </a>
              ]}
            >
              <Skeleton
                avatar={true}
                title={false}
                loading={false}
                active={true}
              >
                <List.Item.Meta title={<a href={"/"}>{item.name}</a>} />
              </Skeleton>
            </List.Item>
          )}
        />
        <Popover content={content} title="请选择" trigger="hover">
          <Button type="dashed" block={true} style={{ marginTop: 5 }}>
            <Icon type="plus" />
            添加
          </Button>
        </Popover>
      </TabPane>
      <TabPane tab="样式" key="2">
        <StyleEdit />
      </TabPane>
      <TabPane tab="模块" key="3">
        <Empty style={{ marginTop: 32 }} />
      </TabPane>
      <Drawer
        title={<div css={styles.title}>表单项编辑</div>}
        onClose={() => setItemChoose("")}
        closable={true}
        visible={Boolean(itemChoose !== "")}
        width={355}
        mask={false}
      >
        {renderFormItem(itemChoose !== "" ? formItem[itemChoose].type : "")}
      </Drawer>
    </Tabs>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, componentId } = state.appletStore;
    return {
      component:
        pageId !== undefined && componentId !== undefined
          ? pages[pageId][componentId].component
          : {},
      theme: theme
    };
  },
  { action }
)(FormEdit);
