import React, { memo, Fragment } from "react";
import UserPageUI_0 from "./UserPageUI_0";

interface IPropsFace {
  data: any;
  theme: string;
}

export default memo((props: IPropsFace) => {
  const template = {
    0: <UserPageUI_0 theme={props.theme} />
  };
  return <Fragment>{template[props.data.typeId]}</Fragment>;
});
