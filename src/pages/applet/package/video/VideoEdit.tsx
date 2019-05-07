import { Form, Input, InputNumber, Switch, Tabs } from "antd";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";

import { UIEditStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";
import { componentSetData } from "../../model/logic";

const VideoEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex } = props;
  const { height, src, autoPlay } = components[componentIndex];
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
    componentSetData(action, { [name]: e });
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
        <CommonEditForm />
      </TabPane>
    </Tabs>
  );
});

export default connect(
  state => UIEditStore(state),
  { action }
)(VideoEdit);
