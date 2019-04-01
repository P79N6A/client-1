import * as React from "react";
import { IText } from "./typing";

/**
 * button
 */
export default React.memo((props: IText) => {
  return (
    <div
      style={{ whiteSpace: "pre-wrap", width: "100%" }}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
});
