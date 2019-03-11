import React, { memo, useEffect, useState } from 'react';
import BraftEditor from 'braft-editor';
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/color-picker.css';
import { IText } from './text-data';

// @ts-ignore
BraftEditor.use(ColorPicker());

interface IProps extends IText {
  onChange?(changedFields): void;
}

export default memo((props: IProps) => {
  const { html, onChange, id } = props;
  const [state, setState] = useState(BraftEditor.createEditorState(html));

  useEffect(() => {
    setState(BraftEditor.createEditorState(html));
  }, [id]);

  const handleEditorChange = e => {
    setState(e);
    //用于外部数据同步
    onChange(e);
  };

  const editorConfig: { excludeControls: any } = {
    excludeControls: [
      'underline',
      'separator',
      'superscript',
      'subscript',
      'remove-styles',
      'emoji',
      'separator',
      'text-indent',
      'separator',
      'list-ul',
      'list-ol',
      'blockquote',
      'header',
      'code',
      'separator',
      'link',
      'separator',
      'media',
      'hr',
      'separator',
      'separator',
    ],
  };

  return <BraftEditor {...editorConfig} value={state} onChange={handleEditorChange} />;
});
