import { Card, Form, Icon, InputNumber, Tabs } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import CommonEditForm from "../common/CommonEditForm";
import { UIEditStore } from "../../model/reselect";
import { UIEditFace } from "../../types";
import { componentSetData } from "../../model/logic";

const PictureEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex } = props;
  const { radius, width, height, img } = components[componentIndex];
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
          <Form.Item label={"图片宽度"}>
            <Card
              style={{ width: "100%" }}
              cover={<img alt="example" src={img} />}
              actions={[
                <Icon type="setting" key={1} />,
                <Icon type="edit" key={2} />,
                <Icon type="ellipsis" key={3} />
              ]}
            />
          </Form.Item>
          <Form.Item label={"图片宽度"}>
            <InputNumber
              min={1}
              max={1000}
              value={width}
              style={{ width: "100%" }}
              onChange={e => changeValue("width", e)}
            />
          </Form.Item>
          <Form.Item label={"图片高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={height}
              style={{ width: "100%" }}
              onChange={e => changeValue("height", e)}
            />
          </Form.Item>
          <Form.Item label={"图片圆角"}>
            <InputNumber
              min={1}
              max={100}
              value={radius}
              style={{ width: "100%" }}
              onChange={e => changeValue("radius", e)}
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
)(PictureEdit);