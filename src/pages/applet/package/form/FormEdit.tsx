import {
  Button,
  Collapse,
  Drawer,
  Empty,
  Form,
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

import { UIEditStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";
import { componentSetData, drawerSetLogic } from "../../model/logic";
import { css } from "@emotion/core";
import InputForm from "./item/InputForm";
import SwitchForm from "./item/SwitchForm";
import RadioForm from "./item/RadioForm";

/**
 * swiper可编辑属性操作栏
 */
const FormEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, theme } = props;
  const { formItem } = components[componentIndex];

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
          componentSetData(action, {
            formItem: produce(formItem, draftState => {
              [draftState[index - 1], draftState[index]] = [
                draftState[index],
                draftState[index - 1]
              ];
            })
          });
        }
        break;
      case "down":
        if (index + 1 === formItem.length) {
          return message.warning("已至最底端");
        } else {
          componentSetData(action, {
            formItem: produce(formItem, draftState => {
              [draftState[index], draftState[index + 1]] = [
                draftState[index + 1],
                draftState[index]
              ];
            })
          });
        }
        break;
      case "del":
        componentSetData(action, {
          formItem: produce(formItem, draftState => {
            draftState.splice(index, 1);
          })
        });
        break;
      case "add":
        const items = {
          input: {
            type: "input",
            name: "输入框",
            key: "FEWFWfqqwEqwef",
            value: [{ label: "示例", value: "" }]
          },
          radio: {
            type: "radio",
            name: "单选",
            key: "FEWFWfqqgwergwEqwef",
            value: [
              { label: "示例选项一", value: 0 },
              { label: "示例选项一", value: 0 }
            ]
          },
          switch: {
            type: "switch",
            name: "滑动开关",
            key: "FEWFWfqqgwh345wEqwef",
            value: [{ label: "示例", value: true }]
          }
        };
        componentSetData(action, {
          formItem: produce(formItem, draftState => {
            draftState.push(items[index]);
          })
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
  const itemValueFeedBack = value => {
    componentSetData(action, {
      formItem: produce(formItem, draftState => {
        draftState[itemChoose] = value;
      })
    });
  };

  // 展示相应组件表单
  const renderFormItem = type => {
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
                <a onClick={() => itemSet("up", index)} key={1}>
                  <Icon type="arrow-up" />
                </a>,
                <a onClick={() => itemSet("down", index)} key={2}>
                  <Icon type="arrow-down" />
                </a>,
                <a onClick={() => setItemChoose(index)} key={3}>
                  <Icon type="edit" />
                </a>,
                <a onClick={() => itemSet("del", index)} key={4}>
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
                <List.Item.Meta title={<a>{item.name}</a>} />
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
        <CommonEditForm />
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
  state => UIEditStore(state),
  { action }
)(FormEdit);
