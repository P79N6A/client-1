import * as React from "react";
import { Button } from "antd-mobile";
import { IButton } from "./typing";

/**
 * 按钮
 */
export default React.memo((props: IButton) => {
  const style: any = {
    fontSize: props.fontSize,
    color: props.color ? props.color : "white",
    background: props.background ? props.background : props.theme
  };

  // @ts-ignore
  return <Button style={{ ...style }}>{props.desc}</Button>;
});
