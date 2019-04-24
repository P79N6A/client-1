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
import { action } from "../../../../models/action";
import { UIStyleEditStore } from "../../model/reselect";
import { UIStyleEditFace } from "../../types";
import { setUIStyleData } from "../../model/logic";

const CommonEditForm = memo((props: UIStyleEditFace) => {
  const { action, uiStyle, uiKey } = props;
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
  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    bgColor,
    bgImg,
    paddingLeft,
    paddingRight
  } = uiStyle[uiKey];
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

  // 数据修改同步至reducer 中
  const changeValue = (name, e) => {
    setUIStyleData(action, { [name]: e });
  };
  return (
    <Form {...formItemLayout}>
      <Form.Item label="内边距">
        <Row>
          <Col span={12}>
            <InputNumber
              formatter={value => `上 ${value}`}
              min={1}
              max={100}
              value={paddingTop}
              onChange={e => changeValue("paddingTop", e)}
            />
          </Col>
          <Col span={12}>
            <InputNumber
              formatter={value => `下 ${value}`}
              min={1}
              max={30}
              value={paddingBottom}
              onChange={e => changeValue("paddingBottom", e)}
            />
          </Col>
          <Col span={12}>
            <InputNumber
              formatter={value => `左 ${value}`}
              min={1}
              max={10000}
              value={paddingLeft}
              onChange={e => changeValue("paddingLeft", e)}
            />
          </Col>
          <Col span={12}>
            <InputNumber
              formatter={value => `右 ${value}`}
              min={1}
              max={10000}
              value={paddingRight}
              onChange={e => changeValue("paddingRight", e)}
            />
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label="外边距">
        <Row>
          <Col span={12}>
            <InputNumber
              formatter={value => `上 ${value}`}
              min={1}
              max={30}
              value={marginTop}
              onChange={e => changeValue("marginTop", e)}
            />
          </Col>
          <Col span={12}>
            <InputNumber
              formatter={value => `下 ${value}`}
              min={1}
              max={30}
              value={marginBottom}
              onChange={e => changeValue("marginBottom", e)}
            />
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label="背景颜色">
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
  );
});

export default connect(
  state => UIStyleEditStore(state),
  { action }
)(CommonEditForm);
