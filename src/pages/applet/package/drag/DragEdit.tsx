import { Button, Drawer, Empty, Tabs } from "antd";
import { css } from "@emotion/core";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import React, { memo, Fragment } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import { UIEditStore } from "../../model/reselect";
import { UIEditFace } from "../../types";
import CommonEditForm from "../common/CommonEditForm";
import {
  componentDragSetData,
  dragAddComponent,
  dragSet
} from "../../model/logic";
import DragButtonEdit from "./edit/DragButtonEdit";
import DragPictureEdit from "./edit/DragPictureEdit";
import DragTextEdit from "./edit/DragTextEdit";

/**
 *  drag组件编辑界面
 *  功能：
 *  1. 展示对应的编辑界面 [基础，样式，模板]
 *  2. 如果用户选择了相对应的组件，则显示对应组件的编辑界面
 */
const DragEdit = memo((props: UIEditFace) => {
  const { action, components, componentIndex, dragIndex, theme } = props;
  const { uiList } = components[componentIndex];
  const styles = {
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };

  const changeValue = data => {
    componentDragSetData(action, { ...data });
  };

  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="属性" key="1">
          添加组件：
          <Button.Group>
            <Button onClick={() => dragAddComponent(action, "picture")}>
              图片
            </Button>
            <Button onClick={() => dragAddComponent(action, "text")}>
              文本
            </Button>
            <Button onClick={() => dragAddComponent(action, "button")}>
              按钮
            </Button>
          </Button.Group>
        </Tabs.TabPane>
        <Tabs.TabPane tab="样式" key="2">
          <CommonEditForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="模板" key="3">
          <Empty style={{ marginTop: 32 }} />
        </Tabs.TabPane>
      </Tabs>
      <Drawer
        title={<div css={styles.title}>组件编辑</div>}
        visible={Boolean(dragIndex)}
        onClose={() => dragSet(action, undefined)}
        closable={true}
        width={355}
        mask={false}
      >
        {uiList.map((data, index) => {
          return (
            <Fragment key={index}>
              {dragIndex === data ? (
                <Fragment>
                  {components[data].type === "text" && (
                    <DragTextEdit
                      theme={theme}
                      data={components[data]}
                      action={changeValue}
                    />
                  )}
                  {components[data].type === "button" && (
                    <DragButtonEdit
                      theme={theme}
                      data={components[data]}
                      action={changeValue}
                    />
                  )}
                  {components[data].type === "picture" && (
                    <DragPictureEdit
                      theme={theme}
                      data={components[data]}
                      action={changeValue}
                    />
                  )}
                </Fragment>
              ) : (
                ""
              )}
            </Fragment>
          );
        })}
      </Drawer>
    </Fragment>
  );
});

export default connect(
  state => UIEditStore(state),
  { action }
)(DragEdit);
