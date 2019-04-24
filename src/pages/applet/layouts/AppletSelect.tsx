import React, { Fragment, memo } from "react";
import CommonSelect from "./select/CommonSelect";

interface PropsFace {
  sideType: string | "common" | "plugin" | "marketing"; // 需要展现出来的项目名称
}

const AppletSelect = memo((props: PropsFace) => {
  const { sideType } = props;

  // 根据侧边选中类型展示相应的组件
  const component: object = { common: <CommonSelect /> };

  return <Fragment>{component[sideType]}</Fragment>;
});

export default AppletSelect;
