import React, { Fragment, memo } from "react";
import { ButtonFace } from "../../types";
import ButtonUI_0 from "./template/ButtonUI_0";

interface IProps {
  theme: string;
  data: ButtonFace;
}

export default memo((props: IProps) => {
  const template = {
    0: <ButtonUI_0 {...props} />
  };
  return <Fragment>{template[props.data.typeId]}</Fragment>;
});
