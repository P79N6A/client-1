import React, { memo, Fragment } from "react";
import NavigationUI_0 from "./template/ShowUI_0";
import { ShowFace } from "../../types";

interface IProps {
  theme: string;
  data: ShowFace;
}

export default memo((props: IProps) => {
  const { theme, data } = props;

  const template = {
    0: <NavigationUI_0 theme={theme} data={props.data} key={0} />
  };
  return <Fragment>{template[data.typeId]}</Fragment>;
});
