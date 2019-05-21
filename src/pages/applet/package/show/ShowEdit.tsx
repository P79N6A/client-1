import produce from "immer";
import { css } from "@emotion/core";
import React, { memo, useState } from "react";
import { connect } from "react-redux";

import {
  Col,
  Form,
  Icon,
  Input,
  message,
  Row,
  Skeleton,
  Tabs,
  Upload,
  List,
  Button,
  Drawer
} from "antd";

import { action, IActionFn } from "../../../../models/action";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";

interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}

const ShowEdit = memo((props: IProps) => {
  const { action, component } = props;
  const { showItem } = component;

  const [itemChoose, setItemChoose] = useState("");

  const styles = {
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };
  const TabPane = Tabs.TabPane;
  const Dragger = Upload.Dragger;

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
              showItem: produce(showItem, (draftState: any) => {
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
        if (index + 1 === showItem.length) {
          return message.warning("已至最底端");
        } else {
          action({
            type: "APPLET_COMPONENT_SET",
            payload: {
              showItem: produce(showItem, (draftState: any) => {
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
            showItem: produce(showItem, (draftState: any) => {
              draftState.splice(index, 1);
            })
          }
        });

        break;
      case "add":
        action({
          type: "APPLET_COMPONENT_SET",
          payload: {
            showItem: produce(showItem, (draftState: any) => {
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

  // 数据修改同步至reducer 中
  const changeValue = (name: string, e: any) => {
    action({ type: "APPLET_COMPONENT_SET", payload: { [name]: e } });
  };

  // 单个项目数值修改后的回调
  const itemValue = (name: string, value: string) => {
    action({
      type: "APPLET_COMPONENT_SET",
      payload: {
        showItem: produce(showItem, (draftState: any) => {
          draftState[itemChoose][name] = value;
        })
      }
    });
  };

  // 表单样式排版
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 19 }
    }
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
        <List
          size="small"
          bordered={false}
          dataSource={showItem}
          renderItem={(item: any, index: any) => (
            <List.Item
              actions={[
                <a href={"/"} onClick={() => itemSet("up", index)} key={1}>
                  <Icon type="arrow-up" />
                </a>,
                <a href={"/"} onClick={() => itemSet("down", index)} key={2}>
                  <Icon type="arrow-down" />
                </a>,
                <a href={"/"} onClick={() => setItemChoose(index)} key={3}>
                  <Icon type="edit" />
                </a>,
                <a href={"/"} onClick={() => itemSet("del", index)} key={4}>
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
                <List.Item.Meta
                  avatar={
                    <img alt="img" src={item.img} width={20} height={20} />
                  }
                  title={<a href={"/"}>{item.title}</a>}
                />
              </Skeleton>
            </List.Item>
          )}
        />
        <Button
          type="dashed"
          block={true}
          style={{ marginTop: 5 }}
          onClick={() => itemSet("add", "")}
        >
          <Icon type="plus" />
          添加
        </Button>
      </TabPane>
      <TabPane tab="样式" key="2">
        <StyleEdit />
      </TabPane>
      <TabPane tab="模板" key="3">
        <Row>
          <Col span={12} onChange={() => changeValue("typeId", 0)}>
            <img
              src={
                "https://qz.faisys.com/image/thumbnail/swiperA.gif?v=201801311749"
              }
              alt={"img"}
            />
          </Col>
          <Col span={12} onChange={() => changeValue("typeId", 1)}>
            <img
              src={
                "https://qz.faisys.com/image/thumbnail/swiperB.gif?v=201801311749"
              }
              alt={"img"}
            />
          </Col>
          <Col span={12} onChange={() => changeValue("typeId", 2)}>
            <img
              src={
                "https://qz.faisys.com/image/thumbnail/swiperC.jpg?v=201802091046"
              }
              alt={"img"}
            />
          </Col>
        </Row>
      </TabPane>
      <Drawer
        title={<div css={styles.title}>表单项编辑</div>}
        onClose={() => setItemChoose("")}
        closable={true}
        visible={Boolean(itemChoose !== "")}
        width={355}
        mask={false}
      >
        <Form {...formItemLayout}>
          <Form.Item label="图片">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">单击或拖动文件至此上传</p>
              <p className="ant-upload-hint">支持单个或批量上传</p>
            </Dragger>
          </Form.Item>

          <Form.Item label={"标题"}>
            <Input
              placeholder={"请输入标题"}
              value={itemChoose !== "" ? showItem[itemChoose].title : ""}
              onChange={e => itemValue("title", e.target.value)}
            />
          </Form.Item>
          <Form.Item label={"描述"}>
            <Input.TextArea
              placeholder={"请输入描述"}
              value={itemChoose !== "" ? showItem[itemChoose].desc : ""}
              onChange={e => itemValue("desc", e.target.value)}
            />
          </Form.Item>
        </Form>
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
)(ShowEdit);
