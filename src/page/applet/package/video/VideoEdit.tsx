import { Form, Input, InputNumber, Switch, Tabs } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../../model/action";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";

interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}

const VideoEdit = memo((props: IProps) => {
  const { action, component } = props;
  const { height, src, autoPlay } = component;
  const TabPane = Tabs.TabPane;

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
  // 数据修改同步至reducer 中
  const changeValue = (name: string, e: any) => {
    action({ type: "APPLET_COMPONENT_SET", payload: { [name]: e } });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        <Form {...formItemLayout}>
          <Form.Item label="自动播放" {...formItemLayout}>
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              defaultChecked={false}
              checked={autoPlay}
              onChange={e => changeValue("autoPlay", e)}
            />
          </Form.Item>
          <Form.Item label={"视频高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={height}
              style={{ width: "100%" }}
              onChange={e => changeValue("height", e)}
            />
          </Form.Item>
          <Form.Item label={"视频链接"}>
            <Input.TextArea
              rows={4}
              value={src}
              style={{ width: "100%" }}
              placeholder={"请添加视屏链接，仅支持腾讯视频"}
              onChange={e =>
                changeValue(
                  "src",
                  e.target.value
                    .replace("width=", ``)
                    .replace("height=", ``)
                    .replace(">", ` width=100% height=100%>`)
                )
              }
            />
          </Form.Item>
        </Form>
      </TabPane>
      <TabPane tab="模块样式" key="2">
        <StyleEdit />
      </TabPane>
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
)(VideoEdit);
