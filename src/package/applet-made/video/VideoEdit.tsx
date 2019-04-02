/** @jsx jsx
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 * */
import React, { memo } from "react";
import { css, jsx } from "@emotion/core";
import { Form, Input, Switch, Row, Col, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { IVideo } from "./database";

interface IProps extends FormComponentProps, IVideo {
  // ajax 接口
  ajax?: {
    del?: string;
    upload?: string;
    user_img?: string;
  };
  onChange?(changedFields): void;
}

const { TextArea } = Input;

/**
 * video可编辑属性操作栏
 */
export default Form.create({
  //当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store
  onFieldsChange(props: IProps, changedFields) {
    props.onChange(changedFields);
  },
  //把父组件的属性映射到表单项上（如：把 Redux store 中的值读出）
  mapPropsToFields(props: IProps) {
    return {
      src: Form.createFormField({
        value: props.src
      }),
      autoPlay: Form.createFormField({
        value: props.autoPlay
      })
    };
  }
})(
  memo((props: IProps) => {
    const { getFieldDecorator } = props.form;
    const style = {
      img: css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        height: 100px;
        border: 1px solid #000;
        color: #e7e7e7;
      `
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const imgChange = src => {
      props.onChange({
        src: {
          name: "poster",
          value: src
        }
      });
    };
    return (
      <Form>
        {/*<Form.Item label="自动播放" {...formItemLayout}>*/}
        {/*{getFieldDecorator("autoPlay")(*/}
        {/*<Switch*/}
        {/*checkedChildren="开"*/}
        {/*unCheckedChildren="关"*/}
        {/*defaultChecked*/}
        {/*/>*/}
        {/*)}*/}
        {/*</Form.Item>*/}
        {/*<Form.Item label="视频封面" {...formItemLayout}>*/}
        {/*<Row gutter={16} type={"flex"}>*/}
        {/*<Col span={10}>*/}
        {/*<ImgModel*/}
        {/*choose={props.poster}*/}
        {/*imgChange={imgChange}*/}
        {/*ajax={props.ajax}*/}
        {/*>*/}
        {/*<div css={style.img}>*/}
        {/*<img*/}
        {/*style={{ maxHeight: "100%", maxWidth: "100%" }}*/}
        {/*src={props.poster}*/}
        {/*alt="img"*/}
        {/*/>*/}
        {/*</div>*/}
        {/*</ImgModel>*/}
        {/*</Col>*/}
        {/*<Col span={14}>*/}
        {/*<ImgModel*/}
        {/*choose={props.src}*/}
        {/*imgChange={imgChange}*/}
        {/*ajax={props.ajax}*/}
        {/*>*/}
        {/*<Button htmlType={"button"}>更换</Button>*/}
        {/*</ImgModel>*/}
        {/*<div>*/}
        {/*<div>格式：*.jpg / *.png</div>*/}
        {/*<div style={{ marginTop: -13 }}>大小不超过2M</div>*/}
        {/*</div>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*</Form.Item>*/}
        <Form.Item label="视频链接" {...formItemLayout}>
          {getFieldDecorator("src")(
            <TextArea rows={4} placeholder="视频链接" />
          )}
        </Form.Item>
      </Form>
    );
  })
);
