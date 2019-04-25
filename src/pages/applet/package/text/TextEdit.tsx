import { Tabs } from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-extensions/dist/color-picker.css";
import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { action } from "../../../../models/action";
import CommonEditForm from "../common/CommonEditForm";
import { UIEditStore } from "../../model/reselect";
import { UIEditFace } from "../../types";
import { componentSetData } from "../../model/logic";

BraftEditor.use(ColorPicker());

const TextEdit = memo((props: UIEditFace) => {
  const TabPane = Tabs.TabPane;

  const { action, components, componentIndex } = props;

  const { html, id } = components[componentIndex];
  const [state, setState] = useState(BraftEditor.createEditorState(html));

  useEffect(() => {
    setState(BraftEditor.createEditorState(html));
  }, [id]);

  const handleEditorChange = e => {
    setState(e);
    // 用于外部数据同步
    componentSetData(action, { html: e.toHTML() });
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
      "media",
      "hr",
      "separator",
      "separator"
    ]
  };
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        <BraftEditor
          {...editorConfig}
          value={state}
          onChange={handleEditorChange}
        />
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
)(TextEdit);
