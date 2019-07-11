import { Form, Input } from "antd";
import produce from "immer";
import React, { memo } from "react";

interface IProps {
  data: {
    type: string;
    value: Array<{ label: string; value: string | number }>;
    key: string;
    name: string;
  };

  onChange(changedFields: any): void;
}

/**
 * button可编辑属性操作栏
 */
export default memo((props: IProps) => {
  // 修改后的数值回调
  const valueChange = (name: string, value: any) => {
    switch (name) {
      case "name":
        return props.onChange(
          produce(props.data, (draftState: any) => {
            draftState.name = value;
          })
        );
      case "value":
        return props.onChange(
          produce(props.data, (draftState: any) => {
            draftState.value[0].value = value;
          })
        );
      case "label":
        return props.onChange(
          produce(props.data, (draftState: any) => {
            draftState.value[0].label = value;
          })
        );
    }
  };

  const formItemLayout = {
    labelCol: {
      lg: { span: 6 }
    },
    wrapperCol: {
      lg: { span: 18 }
    }
  };

  return (
    <Form>
      <Form.Item label="标题" {...formItemLayout}>
        <Input
          allowClear={true}
          value={props.data.name}
          onChange={e => valueChange("name", e.target.value)}
        />
      </Form.Item>
      <Form.Item label="文本" {...formItemLayout}>
        <Input
          allowClear={true}
          value={props.data.value[0].label}
          onChange={e => valueChange("label", e.target.value)}
        />
      </Form.Item>
      <Form.Item label="默认" {...formItemLayout}>
        <Input
          allowClear={true}
          value={props.data.value[0].value}
          onChange={e => valueChange("value", e.target.value)}
        />
      </Form.Item>
    </Form>
  );
});
