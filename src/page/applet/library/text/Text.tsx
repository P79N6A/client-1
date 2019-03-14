import * as React from "react";
import { IText } from "./typing";

/**
 * 按钮
 */
export default React.memo((props: IText) => {
  return (
    <div
      style={{ whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
});
