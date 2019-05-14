import { Button, Drawer, Empty, Form, Tabs } from "antd";
import { connect } from "react-redux";
import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import { action, IActionFn } from "../../../../models/action";
import DragButtonEdit from "./edit/DragButtonEdit";
import DragPictureEdit from "./edit/DragPictureEdit";
import DragTextEdit from "./edit/DragTextEdit";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";

interface IProps extends IActionFn {
  component: any;
  theme: string;
  dragId: number | undefined;
}
const DragEdit = memo((props: IProps) => {
  const { action, component, dragId, theme } = props;
  const { uiList } = component;
  const styles = {
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };

  // 修改数据同步
  const changeValue = (data: any) => {
    action({
      type: "APPLET_COMPONENT_DRAG_RESIZE",
      payload: data
    });
  };
  // 添加drag组件
  const addDragComponent = (name: string) => {
    switch (name) {
      case "picture":
        break;
      case "text":
        break;
      case "button":
        break;
    }
  };
  // 关闭抽屉
  const closeDrawer = () => {
    action({ type: "APPLET_DRAG_ID_SET", payload: undefined });
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
    <Fragment>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="属性" key="1">
          <Form {...formItemLayout}>
            <Form.Item label={"添加组件"}>
              <Button.Group>
                <Button onClick={() => addDragComponent("picture")}>
                  图片
                </Button>
                <Button onClick={() => addDragComponent("text")}>文本</Button>
                <Button onClick={() => addDragComponent("button")}>按钮</Button>
              </Button.Group>
            </Form.Item>
          </Form>
          {uiList.map((data: any, index: any) => {
            return (
              <Fragment key={index}>
                {dragId === index ? (
                  <Fragment>
                    {data.type === "text" && (
                      <DragTextEdit
                        theme={theme}
                        data={data}
                        action={changeValue}
                      />
                    )}
                    {data.type === "button" && (
                      <DragButtonEdit
                        theme={theme}
                        data={data}
                        action={changeValue}
                      />
                    )}
                    {data.type === "picture" && (
                      <DragPictureEdit
                        theme={theme}
                        data={data}
                        action={changeValue}
                      />
                    )}
                  </Fragment>
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="2">
          <StyleEdit />
        </Tabs.TabPane>
        <Tabs.TabPane tab="模板" key="3">
          <Empty
            style={{
              marginTop: 32
            }}
          />
        </Tabs.TabPane>
      </Tabs>
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, componentId, dragId } = state.appletStore;
    return {
      component:
        pageId !== undefined && componentId !== undefined
          ? pages[pageId][componentId].component
          : {},
      theme: theme,
      dragId: dragId
    };
  },
  { action }
)(DragEdit);
