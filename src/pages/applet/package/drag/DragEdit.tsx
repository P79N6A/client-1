import { css } from "@emotion/core";
import { Button, Collapse, Tabs } from "antd";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import { UIEditStore } from "../../model/reselect";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";
import { dragAddComponent } from "../../model/logic";
import DragTextEdit from "./edit/DragTextEdit";
import DragButtonEdit from "./edit/DragButtonEdit";
import DragPictureEdit from "./edit/DragPictureEdit";

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const DragEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, theme } = props;
  const { uiList } = components[componentIndex];
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        添加组件：
        <Button.Group>
          <Button onClick={() => dragAddComponent(action, "picture")}>
            图片
          </Button>
          <Button onClick={() => dragAddComponent(action, "text")}>文本</Button>
          <Button onClick={() => dragAddComponent(action, "button")}>
            按钮
          </Button>
        </Button.Group>
        <Collapse bordered={false} activeKey={[`${componentIndex}`]}>
          {/*{uiList.map((data, index) => {*/}
          {/*return (*/}
          {/*<Panel header={`组件-${index}`} key={data}>*/}
          {/*{data.type === "text" && (*/}
          {/*<DragTextEdit theme={theme} data={ui[data]} action={action} />*/}
          {/*)}*/}
          {/*{data.type === "button" && (*/}
          {/*<DragButtonEdit*/}
          {/*theme={theme}*/}
          {/*data={ui[data]}*/}
          {/*action={action}*/}
          {/*/>*/}
          {/*)}*/}
          {/*{data.type === "picture" && (*/}
          {/*<DragPictureEdit*/}
          {/*theme={theme}*/}
          {/*data={ui[data]}*/}
          {/*action={action}*/}
          {/*/>*/}
          {/*)}*/}
          {/*</Panel>*/}
          {/*);*/}
          {/*})}*/}
        </Collapse>
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
)(DragEdit);
