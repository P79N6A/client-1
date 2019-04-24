import { Form, Input, Switch } from "antd";
import produce from "immer";
import React, { memo } from "react";

interface IProps {
  data?: {
    type: string;
    value: Array<{ label: string; value: any }>;
    key: string;
    name: string;
  };

  onChange?(changedFields): void;
}

/**
 * button可编辑属性操作栏
 */
export default memo((props: IProps) => {
  // 修改后的数值回调
  const valueChange = (name, value) => {
    switch (name) {
      case "name":
        return props.onChange(
          produce(props.data, draftState => {
            draftState.name = value;
          })
        );
      case "value":
        return props.onChange(
          produce(props.data, draftState => {
            draftState.value[0].value = value;
          })
        );
      case "label":
        return props.onChange(
          produce(props.data, draftState => {
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
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          onChange={e => valueChange("value", e)}
          checked={props.data.value[0].value}
        />
      </Form.Item>
    </Form>
  );
});
