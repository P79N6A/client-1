import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import { TextFace } from "../../types";
import TextUI_0 from "./template/TextUI_0";

interface IProps {
  data: TextFace;
  absolute?: boolean;
}

/**
 * 根据typeId 展示相对应的组件
 */
export default memo((props: IProps) => {
  // 模板列表
  const template = {
    // 默认显示
    0: <TextUI_0 buttonSource={props.data} />
  };

  // 更具typeId 展示组件
  return <Fragment>{template[props.data.typeId]}</Fragment>;
});
