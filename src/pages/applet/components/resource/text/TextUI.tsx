import React, { memo } from 'react';
import { IText } from './text-data';

/**
 * 按钮
 */
export default memo((props: IText) => {
  const style: any = {
    whiteSpace: 'pre-wrap',
    width: props.position.width + 'px',
    height: props.position.height + 'px',
  };
  return <div style={{ ...style }} dangerouslySetInnerHTML={{ __html: props.html }} />;
});
