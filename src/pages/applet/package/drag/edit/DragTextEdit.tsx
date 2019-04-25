import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-extensions/dist/color-picker.css";
import React, { memo, useEffect, useState } from "react";
import { TextFace } from "../../../types";

BraftEditor.use(ColorPicker());

interface IProps {
  data: TextFace;
  theme: string;
  action: any;
}

const DragTextEdit = memo((props: IProps) => {
  const { html, id } = props.data;
  const [state, setState] = useState(BraftEditor.createEditorState(html));

  useEffect(() => {
    setState(BraftEditor.createEditorState(html));
  }, [id]);

  const handleEditorChange = e => {
    setState(e);
    // 用于外部数据同步
    props.action({ type: "changeDragUIValue", payload: { html: e.toHTML() } });
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
    <BraftEditor
      {...editorConfig}
      value={state}
      onChange={handleEditorChange}
    />
  );
});

export default DragTextEdit;