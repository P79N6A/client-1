import { css } from "@emotion/core";
import { Form, Icon, Input, InputNumber, Tabs, Tooltip, Upload } from "antd";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import CommonEditForm from "../common/CommonEditForm";
import { UIEditStore } from "../../model/reselect";
import { UIEditFace } from "../../types";
import { componentSetData } from "../../model/logic";

const ButtonEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, theme } = props;

  const {
    color,
    desc,
    radius,
    width,
    height,
    fontSize,
    btnImg,
    btnColor
  } = components[componentIndex];
  const TabPane = Tabs.TabPane;
  const Dragger = Upload.Dragger;
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
  const styles = {
    // 常用组件
    theme: css`
      margin-bottom: 8px !important;
      & > div {
        border: none !important;
        box-shadow: none !important;
        & > div {
          padding: 0 !important;
        }
      }
    `
  };
  // 数据修改同步至reducer 中
  const changeValue = (name, e) => {
    componentSetData(action, { [name]: e });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        <Form {...formItemLayout}>
          <Form.Item label="文案">
            <Input
              value={desc}
              onChange={e => changeValue("desc", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="字体颜色">
            <Input
              value={color ? color : theme}
              onChange={e => changeValue("color", e.target.value)}
              suffix={
                <Tooltip
                  title={
                    <TwitterPicker
                      css={styles.theme}
                      width={"240px"}
                      color={color ? color : theme}
                      colors={[
                        "#DE443A",
                        "#3A82F8",
                        "#56BB37",
                        "#333334",
                        "#ED5D29",
                        "#EB3477",
                        "#F5B43E",
                        "#7360F0"
                      ]}
                      onChange={color => changeValue("color", color.hex)}
                    />
                  }
                >
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      background: color ? color : theme,
                      border: "1px black solid"
                    }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item label={"字体大小"}>
            <InputNumber
              min={1}
              max={1000}
              value={fontSize}
              style={{ width: "100%" }}
              onChange={e => changeValue("fontSize", e)}
            />
          </Form.Item>
          <Form.Item label={"按钮宽度"}>
            <InputNumber
              min={1}
              max={1000}
              value={width}
              style={{ width: "100%" }}
              onChange={e => changeValue("width", e)}
            />
          </Form.Item>
          <Form.Item label={"按钮高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={height}
              style={{ width: "100%" }}
              onChange={e => changeValue("height", e)}
            />
          </Form.Item>
          <Form.Item label={"按钮圆角"}>
            <InputNumber
              min={1}
              max={100}
              value={radius}
              style={{ width: "100%" }}
              onChange={e => changeValue("radius", e)}
            />
          </Form.Item>
          <Form.Item label="背景颜色">
            <Input
              value={btnColor}
              onChange={e => changeValue("btnColor", e.target.value)}
              suffix={
                <Tooltip
                  title={
                    <TwitterPicker
                      css={styles.theme}
                      width={"240px"}
                      color={btnColor}
                      colors={[
                        "#DE443A",
                        "#3A82F8",
                        "#56BB37",
                        "#333334",
                        "#ED5D29",
                        "#EB3477",
                        "#F5B43E",
                        "#7360F0"
                      ]}
                      onChange={color => changeValue("btnColor", color.hex)}
                    />
                  }
                >
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      background: btnColor,
                      border: "1px black solid"
                    }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item label="背景图片">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">单击或拖动文件至此上传</p>
              <p className="ant-upload-hint">支持单个或批量上传</p>
            </Dragger>
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
)(ButtonEdit);
