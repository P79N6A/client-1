import { Card, Empty, Form, InputNumber, Slider, Tabs } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../../store/action";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";
import ImgModel from "../../../../components/ImgModel";

interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}
const PictureEdit = memo((props: IProps) => {
  const { action, component } = props;
  const { radius, width, height, img } = component;
  const TabPane = Tabs.TabPane;
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

  // 数据修改同步至reducer 中
  const changeValue = (name: string, e: any) => {
    action({ type: "APPLET_COMPONENT_SET", payload: { [name]: e } });
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
        <Form {...formItemLayout}>
          <Form.Item label={"图片"}>
            <Card
              bodyStyle={{ padding: 0 }}
              style={{ width: "100%" }}
              cover={
                <ImgModel>
                  <img alt="example" src={img} height={138} />
                </ImgModel>
              }
            />
            只能添加*jpg、*png大小不超过1MB
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
              max={100}
              value={radius}
              style={{ width: "100%" }}
              onChange={e => changeValue("radius", e)}
            />
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
)(PictureEdit);
