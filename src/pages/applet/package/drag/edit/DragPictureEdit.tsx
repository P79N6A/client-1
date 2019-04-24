import { Card, Form, Icon, InputNumber } from "antd";
import React, { memo } from "react";
import { PictureFace } from "../../../types";

interface IProps {
  data: PictureFace;
  theme: string;
  action: any;
}

const DragPictureEdit = memo((props: IProps) => {
  const { radius, img } = props.data;
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
    props.action({ type: "changeDragUIValue", payload: { [name]: e } });
  };

  return (
    <Form {...formItemLayout}>
      <Form.Item label={"图片"}>
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
  );
});

export default DragPictureEdit;
