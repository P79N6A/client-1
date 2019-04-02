/** @jsx jsx
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 * */
import { memo } from "react";
import { css, jsx } from "@emotion/core";
import { Form, Input } from "antd";
const { TextArea } = Input;
/**
 * video可编辑属性操作栏
 */
export default Form.create({
    //当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    //把父组件的属性映射到表单项上（如：把 Redux store 中的值读出）
    mapPropsToFields(props) {
        return {
            src: Form.createFormField({
                value: props.src
            }),
            autoPlay: Form.createFormField({
                value: props.autoPlay
            })
        };
    }
})(memo((props) => {
    const { getFieldDecorator } = props.form;
    const style = {
        img: css `
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
    return (jsx(Form, null,
        jsx(Form.Item, Object.assign({ label: "\u89C6\u9891\u94FE\u63A5" }, formItemLayout), getFieldDecorator("src")(jsx(TextArea, { rows: 4, placeholder: "\u89C6\u9891\u94FE\u63A5" })))));
}));
//# sourceMappingURL=VideoEdit.js.map