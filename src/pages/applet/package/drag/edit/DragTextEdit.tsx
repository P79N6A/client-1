import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
// @ts-ignore
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-extensions/dist/color-picker.css";
import React, { memo, useEffect, useState } from "react";

BraftEditor.use(ColorPicker());

interface IProps {
  data: any;
  theme: string;
  action: any;
}

const DragTextEdit = memo((props: IProps) => {
  const { html, id } = props.data;
  const [state, setState] = useState(BraftEditor.createEditorState(html));

  useEffect(() => {
    // eslint-disable-next-line
    setState(BraftEditor.createEditorState(html));
    // eslint-disable-next-line
  }, [id]);

  const handleEditorChange = (e: any) => {
    setState(e);
    // 用于外部数据同步
    props.action({ html: e.toHTML() });
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
