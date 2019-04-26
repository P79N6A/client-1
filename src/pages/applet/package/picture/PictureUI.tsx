import React, { memo, Fragment } from "react";
import { PictureFace } from "../../types";
import PictureUI_0 from "./template/PictureUI_0";

interface IProps {
  theme: string;
  data: PictureFace;
  absolute?: boolean;
}

const PictureUI = memo((props: IProps) => {
  const template = {
    0: <PictureUI_0 {...props} />
  };
  return <Fragment>{template[props.data.typeId]}</Fragment>;
});

export default PictureUI;
