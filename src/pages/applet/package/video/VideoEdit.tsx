import { Form, Icon, Input, InputNumber, Switch, Tabs } from "antd";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";

import { UIEditStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";

const VideoEdit = memo((props: UIEditFace) => {
  const { action, ui, uiKey, theme } = props;
  const { height, src, autoPlay } = ui[uiKey];
  const TabPane = Tabs.TabPane;

  // 表单样式排版
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  };
  // 数据修改同步至reducer 中
  const changeValue = (name, e) => {
    action({ type: "changeUIValue", payload: { [name]: e } });
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
              onChange={e => changeValue("auto", e)}
            />
          </Form.Item>
          <Form.Item label={"按钮高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={height}
              style={{ width: "100%" }}
              onChange={e => changeValue("height", e)}
            />
          </Form.Item>
          <Form.Item label={"视频链接"}>
            <Input
              value={src}
              style={{ width: "100%" }}
              onChange={e => changeValue("src", e)}
            />
          </Form.Item>
        </Form>
      </TabPane>
      <TabPane tab="模块样式" key="2">
        <CommonEditForm />
      </TabPane>
    </Tabs>
  );
});

export default connect(
  state => UIEditStore(state),
  { action }
)(VideoEdit);
