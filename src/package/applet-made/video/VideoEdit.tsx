/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 视频组件编辑栏
 */

/**
 * @description 第三方包引用
 */
import { css } from "@emotion/core";
import { Card, Form, Input, PageHeader, Tabs } from "antd";
import { FormComponentProps } from "antd/lib/form";
import React, { Fragment, memo, useState } from "react";

/**
 * @description 项目文件引用
 */
import { IVideo } from "./database";

/**
 * @description 接口
 */
interface IProps extends FormComponentProps, IVideo {
  // ajax 接口
  ajax?: {
    del?: string;
    upload?: string;
    user_img?: string;
  };
  onChange?(changedFields): void;
}

const VideoEdit = memo((props: IProps) => {
  const { getFieldDecorator } = props.form;

  // 控制需要显示的tab
  const [tab, setTab] = useState("common");
  const tabChange = (onChange: string): void => {
    setTab(onChange);
  };

  // antd 组件解构
  const { TextArea } = Input;
  const TabPane = Tabs.TabPane;

  // 表单布局
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
      <PageHeader
        title="视频设置"
        subTitle="精美的视频有助有品牌的宣传"
        footer={
          <Tabs activeKey={tab} onChange={tabChange}>
            <TabPane tab="基础" key="common" />
            <TabPane tab="样式" key="style" />
          </Tabs>
        }
      />
      <Card style={{ marginTop: 16 }}>
        {tab === "common" && (
          <Form>
            <Form.Item label="视频链接" {...formItemLayout}>
              {getFieldDecorator("src")(
                <TextArea rows={4} placeholder="视频链接" />
              )}
            </Form.Item>
          </Form>
        )}
      </Card>
    </Fragment>
  );
});

/**
 * @description 组件包装antd的高阶函数后导出
 */
export default Form.create({
  // 当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store
  onFieldsChange(props: IProps, changedFields) {
    props.onChange(changedFields);
  },
  // 把父组件的属性映射到表单项上（如：把 Redux store 中的值读出）
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
})(VideoEdit);
