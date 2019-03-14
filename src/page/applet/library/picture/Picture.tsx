import * as React from "react";
import { IPicture } from "./typing";

/**
 * 图片
 */
export default React.memo((props: IPicture) => {
  return (
    <img
      src={props.src}
      alt={"图片"}
      style={{ width: "100%", height: "100%" }}
    />
  );
});
