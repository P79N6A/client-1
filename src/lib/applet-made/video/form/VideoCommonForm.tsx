import { Card, Form, Input, Switch } from "antd";
import React, { Fragment, memo } from "react";

const VideoCommonForm = memo(() => {
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

  return (
    <Card
      title={"属性"}
      size={"small"}
      bordered={false}
      bodyStyle={{ paddingBottom: 0 }}
      style={{ marginTop: 8 }}
    >
      <Form>
        <Form.Item label="自动播放" {...formItemLayout}>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            defaultChecked={true}
          />
        </Form.Item>
        <Form.Item label="视频链接" {...formItemLayout}>
          <Input.TextArea rows={4} placeholder="视频链接" />
        </Form.Item>
      </Form>
    </Card>
  );
});

export default VideoCommonForm;
