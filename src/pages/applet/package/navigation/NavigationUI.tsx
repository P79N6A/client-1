import React, { memo, Fragment } from "react";
import NavigationUI_0 from "./template/NavigationUI_0";
import { NavigationFace } from "../../types";

interface IProps {
  theme: string;
  data: NavigationFace;
}

export default memo((props: IProps) => {
  const { theme, data } = props;

  const template = { 0: <NavigationUI_0 theme={theme} data={data} key={0} /> };
  return <Fragment>{template[data.typeId]}</Fragment>;
});
