import { Button, Collapse, Empty, Tabs } from "antd";
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
import TextEdit from "../text/TextEdit";
import ButtonEdit from "../button/ButtonEdit";
import PictureEdit from "../picture/PictureEdit";

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const DragEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, theme, dragIndex } = props;
  const { uiList } = components[componentIndex];
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
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
        <Collapse bordered={false} activeKey={[`${dragIndex}`]}>
          {uiList.map((data, index) => {
            return (
              <Panel header={`组件-${index}`} key={data}>
                {components[data].type === "text" && <TextEdit />}
                {components[data].type === "button" && <ButtonEdit />}
                {components[data].type === "picture" && <PictureEdit />}
              </Panel>
            );
          })}
        </Collapse>
      </TabPane>
      <TabPane tab="样式" key="2">
        <CommonEditForm />
      </TabPane>
      <TabPane tab="模板" key="3">
        <Empty style={{ marginTop: 32 }} />
      </TabPane>
    </Tabs>
  );
});

export default connect(
  state => UIEditStore(state),
  { action }
)(DragEdit);
