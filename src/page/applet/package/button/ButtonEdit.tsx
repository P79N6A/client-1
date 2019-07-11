import { css } from "@emotion/core";
import {
  Empty,
  Form,
  Icon,
  Input,
  InputNumber,
  Slider,
  Tabs,
  Tooltip,
  Upload
} from "antd";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../../store/action";
import StyleEdit from "../common/StyleEdit";
import { IAppletStore } from "../../model/store";

interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}

const ButtonEdit = memo((props: IProps) => {
  const { action, component, theme } = props;
  const { color, desc, radius, width, height, fontSize, bgColor } = component;
  const TabPane = Tabs.TabPane;
  const Dragger = Upload.Dragger;
  // 表单样式排版
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 19 }
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
    `,
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };

  // 数据修改同步至reducer 中
  const changeValue = (name: string, e: any) => {
    action({ type: "APPLET_COMPONENT_SET", payload: { [name]: e } });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
        <Form {...formItemLayout}>
          <Form.Item label="文本">
            <Input
              value={desc}
              onChange={e => changeValue("desc", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="字体色">
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
          <Form.Item label={"尺寸"}>
            <InputNumber
              min={1}
              max={1000}
              value={fontSize}
              style={{ width: "100%" }}
              onChange={e => changeValue("fontSize", e)}
            />
          </Form.Item>
          <Form.Item label={"宽度"}>
            <InputNumber
              min={1}
              max={1000}
              value={width}
              style={{ width: "100%" }}
              onChange={e => changeValue("width", e)}
            />
          </Form.Item>
          <Form.Item label={"高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={height}
              style={{ width: "100%" }}
              onChange={e => changeValue("height", e)}
            />
          </Form.Item>
          <Form.Item label={"圆角"}>
            <Slider
              min={1}
              max={25}
              value={radius}
              onChange={e => changeValue("radius", e)}
            />
          </Form.Item>
          <Form.Item label="背景颜">
            <Input
              value={bgColor}
              onChange={e => changeValue("bgColor", e.target.value)}
              suffix={
                <Tooltip
                  title={
                    <TwitterPicker
                      css={styles.theme}
                      width={"240px"}
                      color={bgColor}
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
                      onChange={color => changeValue("bgColor", color.hex)}
                    />
                  }
                >
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      background: bgColor,
                      border: "1px black solid"
                    }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item label="背景图">
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
      <TabPane tab="样式" key="2">
        <StyleEdit />
      </TabPane>
      <TabPane tab="模板" key="3">
        <Empty style={{ marginTop: 32 }} />
      </TabPane>
    </Tabs>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, componentId } = state.appletStore;
    return {
      component:
        pageId !== undefined && componentId !== undefined
          ? pages[pageId][componentId].component
          : {},
      theme: theme
    };
  },
  { action }
)(ButtonEdit);
