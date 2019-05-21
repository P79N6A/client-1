import { Button, Col, Form, Icon, Input, Row, Select } from "antd";
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
  const valueChange = (name: any, value: any, index?: any) => {
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
            draftState.value.map((data, indexs) => {
              if (indexs === index) {
                draftState.value[value].value = 1;
              } else {
                draftState.value[indexs].value = 0;
              }

              return "";
            });
          })
        );
      case "itemLabel":
        return props.onChange(
          produce(props.data, draftState => {
            draftState.value[index].label = value;
          })
        );
      case "itemValue":
        return props.onChange(
          produce(props.data, draftState => {
            draftState.value[index].value = value;
          })
        );
    }
  };
  // 添加选项
  const valueAdd = () => {
    return props.onChange(
      produce(props.data, draftState => {
        draftState.value.push({ label: "示例选项", value: 0 });
      })
    );
  };
  // 删除选项
  const remove = (index: any) => {
    return props.onChange(
      produce(props.data, draftState => {
        draftState.value.splice(index, 1);
      })
    );
  };
  const formItemLayout = {
    labelCol: {
      lg: { span: 6 }
    },
    wrapperCol: {
      lg: { span: 18 }
    }
  };
  const Option = Select.Option;
  // 默认选中
  const defValue = () => {
    let label = "";
    props.data.value.map(data => {
      if (data.value) {
        label = data.label;
      }

      return "";
    });
    return label;
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
      <Form.Item label="默认" {...formItemLayout}>
        <Select
          defaultValue={defValue()}
          onChange={e => valueChange("value", e)}
        >
          {props.data.value.map((data, index: any) => {
            return (
              <Option value={index} key={index}>
                {data.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="选项" {...formItemLayout}>
        {props.data.value.map((data, index) => {
          return (
            <Row gutter={6} key={index}>
              <Col span={20}>
                <Input
                  key={index}
                  allowClear={true}
                  value={props.data.value[index].label}
                  onChange={e =>
                    valueChange("itemLabel", e.target.value, index)
                  }
                />
              </Col>
              <Col span={4}>
                <Icon type="minus-circle-o" onClick={() => remove(index)} />
              </Col>
            </Row>
          );
        })}
        <Button block={true} htmlType={"button"} onClick={valueAdd}>
          <Icon type="plus" /> 添加
        </Button>
      </Form.Item>
    </Form>
  );
});
