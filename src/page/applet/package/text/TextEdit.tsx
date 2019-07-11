import { Empty, Tabs } from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
// @ts-ignore
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-extensions/dist/color-picker.css";
import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../../store/action";
import { IAppletStore } from "../../model/store";
import StyleEdit from "../common/StyleEdit";

BraftEditor.use(ColorPicker());

interface IProps extends IActionFn {
  theme: string | undefined;
  component: undefined | {} | any;
}
const TextEdit = memo((props: IProps) => {
  const TabPane = Tabs.TabPane;

  const { action, component } = props;

  const { html, id } = component;
  const [state, setState] = useState(BraftEditor.createEditorState(html));

  useEffect(() => {
    // eslint-disable-next-line
    setState(BraftEditor.createEditorState(html));
    // eslint-disable-next-line
  }, [id]);

  const handleEditorChange = (e: any) => {
    setState(e);

    // 用于外部数据同步
    action({ type: "APPLET_COMPONENT_SET", payload: { html: e.toHTML() } });
  };

  const editorConfig: { excludeControls: any } = {
    excludeControls: [
      "underline",
      "separator",
      "superscript",
      "subscript",
      "remove-styles",
      "emoji",
      "separator",
      "text-indent",
      "separator",
      "list-ul",
      "list-ol",
      "blockquote",
      "header",
      "code",
      "separator",
      "link",
      "separator",
      "letter-spacing",
      "media",
      "hr",
      "separator",
      "separator",
      "strike-through"
    ]
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="属性" key="1">
        <BraftEditor
          {...editorConfig}
          value={state}
          onChange={handleEditorChange}
        />
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
)(TextEdit);
