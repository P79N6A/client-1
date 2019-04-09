import { Card, Form, Input, Switch } from "antd";
import React, { Fragment, memo } from "react";
import { ICommonData } from "./database";

const CommonModuleForm = memo((props: ICommonData) => {
  // props 数据解构
  const { style } = props;
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
    <Fragment>
      <Card
        title={"标题"}
        size={"small"}
        bordered={false}
        bodyStyle={{ paddingBottom: 0 }}
        style={{
          marginTop: 8
        }}
        extra={<Switch />}
      >
        <Form {...formItemLayout}>
          <Form.Item label="标题名称">
            <Input />
          </Form.Item>
          <Form.Item label="字体颜色">
            <Input
              suffix={
                <div style={{ width: 15, height: 15, background: "red" }} />
              }
            />
          </Form.Item>
        </Form>
      </Card>
      <Card
        title={"介绍"}
        size={"small"}
        bordered={false}
        bodyStyle={{ paddingBottom: 0 }}
        style={{ marginTop: 8 }}
        extra={<Switch />}
      >
        <Form {...formItemLayout}>
          <Form.Item label="介绍内容">
            <Input />
          </Form.Item>
          <Form.Item label="字体颜色">
            <Input
              suffix={
                <div style={{ width: 15, height: 15, background: "red" }} />
              }
            />
          </Form.Item>
        </Form>
      </Card>
    </Fragment>
  );
});

export default CommonModuleForm;
