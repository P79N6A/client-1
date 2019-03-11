import React, { memo } from 'react';
import ChromePicker from 'react-color/lib/Chrome.js';
import { Form, Input, InputNumber, Tooltip } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import LinkEdit from '../../_common/LinkEdit';
import { IButton } from './button-data';

interface IProps extends FormComponentProps, IButton {
  onChange?(changedFields): void;
}

/**
 * button可编辑属性操作栏
 */
export default Form.create({
  //当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store
  onFieldsChange(props: IProps, changedFields) {
    props.onChange(changedFields);
  },
  //把父组件的属性映射到表单项上（如：把 Redux store 中的值读出）
  mapPropsToFields(props: IProps) {
    return {
      desc: Form.createFormField({
        value: props.desc,
      }),
      fontSize: Form.createFormField({
        value: props.fontSize,
      }),
      color: Form.createFormField({
        value: props.color,
      }),
      background: Form.createFormField({
        value: props.background,
      }),
    };
  },
})(
  memo((props: IProps) => {
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
      labelCol: {
        lg: { span: 6 },
      },
      wrapperCol: {
        lg: { span: 18 },
      },
    };
    const bgChange = color => {
      props.onChange({
        background: {
          value: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
          name: 'background',
        },
      });
    };
    const colorChange = color => {
      props.onChange({
        color: {
          value: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
          name: 'color',
        },
      });
    };
    const linkChange = value => {
      props.onChange({
        link: {
          name: 'link',
          value: {
            ...props.link,
            ...value,
          },
        },
      });
    };
    return (
      <Form>
        <Form.Item label="按钮文本" {...formItemLayout}>
          {getFieldDecorator('desc')(<Input allowClear placeholder="请填入按钮文本" />)}
        </Form.Item>
        <Form.Item label="文本字号" {...formItemLayout}>
          {getFieldDecorator('fontSize')(
            <InputNumber min={1} placeholder="请填入字号" style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item label="文字颜色" {...formItemLayout}>
          <Tooltip title={<ChromePicker onChange={colorChange} color={props.color} />}>
            <Input
              disabled={true}
              style={{
                display: 'inline-block',
                width: '20%',
                backgroundColor: `${props.color}`,
                height: '32px',
              }}
            />
          </Tooltip>
          {getFieldDecorator('color')(
            <Input
              allowClear={true}
              placeholder="例：white/#fff/rgba(0,0,0,1)"
              style={{
                display: 'inline-block',
                width: '75%',
                marginLeft: '5%',
              }}
            />
          )}
        </Form.Item>
        <Form.Item label="按钮颜色" {...formItemLayout}>
          <Tooltip title={<ChromePicker onChange={bgChange} color={props.background} />}>
            <Input
              disabled={true}
              style={{
                display: 'inline-block',
                width: '20%',
                backgroundColor: `${props.background}`,
                height: '32px',
              }}
            />
          </Tooltip>
          {getFieldDecorator('background')(
            <Input
              allowClear
              placeholder="例：white/#fff/rgba(0,0,0,1)"
              style={{
                display: 'inline-block',
                width: '75%',
                marginLeft: '5%',
              }}
            />
          )}
        </Form.Item>
        <LinkEdit change={linkChange} link={props.link} />
      </Form>
    );
  })
);
