import { css } from "@emotion/core";
import {
  Collapse,
  Form,
  Icon,
  Input,
  InputNumber,
  Tabs,
  Tooltip,
  Upload
} from "antd";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../../store/action";
import { IRedux } from "../../../../store/typing";
import DragButtonEdit from "./DragButtonEdit";
import DragPictureEdit from "./DragPictureEdit";
import DragTextEdit from "./DragTextEdit";

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const Dragger = Upload.Dragger;

const DragEdit = memo((props: IRedux) => {
  const { action, applet } = props;
  const { blockHeight, bgColor, uiList, theme } = applet.pages[
    applet.pageId
  ].ui[applet.uIndex];

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
    action({ type: "changeUIValue", payload: { [name]: e } });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        <Collapse bordered={false} activeKey={[`${applet.dragIndex}`]}>
          {uiList.map((data, index) => {
            return (
              <Panel header={`组件-${index}`} key={index}>
                {data.type === "text" && (
                  <DragTextEdit theme={theme} data={data} action={action} />
                )}
                {data.type === "button" && (
                  <DragButtonEdit theme={theme} data={data} action={action} />
                )}
                {data.type === "picture" && (
                  <DragPictureEdit theme={theme} data={data} action={action} />
                )}
              </Panel>
            );
          })}
        </Collapse>
      </TabPane>
      <TabPane tab="模块样式" key="2">
        <Form {...formItemLayout}>
          <Form.Item label={"模块高度"}>
            <InputNumber
              min={1}
              max={1000}
              value={blockHeight}
              style={{ width: "100%" }}
              onChange={e => changeValue("blockHeight", e)}
            />
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
      </TabPane>
    </Tabs>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(DragEdit);
