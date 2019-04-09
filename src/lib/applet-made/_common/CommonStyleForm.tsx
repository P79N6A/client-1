import {
  Card,
  Col,
  Form,
  Icon,
  Input,
  InputNumber,
  Row,
  Slider,
  Upload
} from "antd";
import React, { Fragment, memo } from "react";
import { ICommonData } from "./database";

const CommonStyleForm = memo((props: ICommonData) => {
  // props 数据解构
  const { style } = props;
  const Dragger = Upload.Dragger;
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
        title={"模块"}
        size={"small"}
        bordered={false}
        bodyStyle={{ paddingBottom: 0 }}
        style={{ marginTop: 8 }}
      >
        <Form {...formItemLayout}>
          <Form.Item label="模块高度">
            <Row>
              <Col span={12}>
                <Slider min={1} max={20} />
              </Col>
              <Col span={4}>
                <InputNumber min={1} max={20} style={{ marginLeft: 16 }} />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>

      <Card
        title={"边距"}
        size={"small"}
        bordered={false}
        style={{ marginTop: 8 }}
        bodyStyle={{ paddingBottom: 0 }}
      >
        <Form {...formItemLayout}>
          <Form.Item label="内边距">
            <Row gutter={8}>
              <Col span={12}>
                <InputNumber min={1} max={30} />
              </Col>
              <Col span={12}>
                <InputNumber min={1} max={30} />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="外边距">
            <Row gutter={8}>
              <Col span={12}>
                <InputNumber min={1} max={30} />
              </Col>
              <Col span={12}>
                <InputNumber min={1} max={30} />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
      <Card
        title={"背景"}
        size={"small"}
        bordered={false}
        bodyStyle={{ paddingBottom: 0 }}
        style={{ marginTop: 8 }}
      >
        <Form {...formItemLayout}>
          <Form.Item label="背景图片">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">单击或拖动文件至此上传</p>
              <p className="ant-upload-hint">支持单个或批量上传</p>
            </Dragger>
          </Form.Item>
          <Form.Item label="背景颜色">
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

export default CommonStyleForm;
