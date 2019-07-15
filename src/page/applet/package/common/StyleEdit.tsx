import { css } from "@emotion/core";
import {
  Col,
  Form,
  Icon,
  Input,
  InputNumber,
  Row,
  Tooltip,
  Upload
} from "antd";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../../model/action";
import { IAppletStore } from "../../model/store";

interface IProps extends IActionFn {
  theme: string | undefined;
  componentStyle: undefined | {} | any;
}
const StyleEdit = memo((props: IProps) => {
  const { action, componentStyle } = props;

  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    bgColor,

    paddingLeft,
    paddingRight
  } = componentStyle;

  // 数据修改同步至reducer 中
  const changeValue = (name: string, e: any) => {
    action({ type: "APPLET_COMPONENT_STYLE_SET", payload: { [name]: e } });
  };

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
    `
  };

  return (
    <Form {...formItemLayout}>
      <Form.Item label="内边距">
        <Row gutter={12}>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="上" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={100}
                value={paddingTop}
                onChange={e => changeValue("paddingTop", e)}
              />
            </Input.Group>
          </Col>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="下" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={100}
                value={paddingBottom}
                onChange={e => changeValue("paddingBottom", e)}
              />
            </Input.Group>
          </Col>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="下" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={10000}
                value={paddingLeft}
                onChange={e => changeValue("paddingLeft", e)}
              />
            </Input.Group>
          </Col>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="下" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={10000}
                value={paddingRight}
                onChange={e => changeValue("paddingRight", e)}
              />
            </Input.Group>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label="外边距">
        <Row gutter={12}>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="上" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={30}
                value={marginTop}
                onChange={e => changeValue("marginTop", e)}
              />
            </Input.Group>
          </Col>
          <Col span={12}>
            <Input.Group compact={true}>
              <Input style={{ width: "35%" }} defaultValue="下" />
              <InputNumber
                style={{ width: "65%" }}
                min={1}
                max={30}
                value={marginBottom}
                onChange={e => changeValue("marginBottom", e)}
              />
            </Input.Group>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label="背景色">
        <Input
          value={bgColor}
          placeholder={"点击右侧色块选择颜色"}
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
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, componentId } = state.appletStore;
    return {
      componentStyle:
        pageId !== undefined && componentId !== undefined
          ? pages[pageId][componentId].style
          : {},
      theme: theme
    };
  },
  { action }
)(StyleEdit);
