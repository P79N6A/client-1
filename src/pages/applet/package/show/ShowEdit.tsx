import { Col, Collapse, Form, Icon, Input, Row, Tabs, Upload } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";

import { UIEditStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";

const ShowEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, theme } = props;
  const { showItem } = components[componentIndex];
  const TabPane = Tabs.TabPane;
  const Panel = Collapse.Panel;
  const Dragger = Upload.Dragger;
  // 数据修改同步至reducer 中
  const changeValue = (name, e) => {
    action({ type: "changeUIValue", payload: { [name]: e } });
  };

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
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
        <Collapse bordered={false}>
          {showItem.map((data, index) => {
            return (
              <Panel header={data.title} key={`${index}`}>
                <Form.Item label="图片">
                  <Dragger>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">单击或拖动文件至此上传</p>
                    <p className="ant-upload-hint">支持单个或批量上传</p>
                  </Dragger>
                </Form.Item>
                <Form {...formItemLayout}>
                  <Form.Item label={"标题"}>
                    <Input value={data.title} />
                  </Form.Item>
                  <Form.Item label={"描述"}>
                    <Input.TextArea value={data.desc} />
                  </Form.Item>
                </Form>
              </Panel>
            );
          })}
        </Collapse>
      </TabPane>
      <TabPane tab="样式" key="2">
        <CommonEditForm />
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
    </Tabs>
  );
});

export default connect(
  state => UIEditStore(state),
  { action }
)(ShowEdit);
