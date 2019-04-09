import { Card, Form, Input, Switch } from "antd";
import React, { Fragment, memo } from "react";

const PictureCommonForm = memo(() => {
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
      TODO
    </Card>
  );
});

export default PictureCommonForm;
