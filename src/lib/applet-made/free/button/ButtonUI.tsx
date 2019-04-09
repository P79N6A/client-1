import { Button } from "antd-mobile";
import React, { memo } from "react";
import { IButton } from "./database";

/**
 * 按钮
 */
export default memo((props: IButton) => {
  const style: any = {
    // fontSize: props.fontSize,
    // color: props.color ? props.color : props.theme.color,
    // background: props.background ? props.background : props.theme.background,
    // width: props.position.width + "px",
    // height: props.position.height + "px",
    // lineHeight: props.position.height + "px"
  };
  return <Button style={{ ...style }}>{props.desc}</Button>;
});
