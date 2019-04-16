import React, { Fragment, memo, useCallback, useState } from "react";
import { connect } from "react-redux";
import { animated, useTransition } from "react-spring";
import CommoditySelect from "../../lib/applet-made/commodity/CommoditySelect";
import CommonSelect from "../../lib/applet-made/common/CommonSelect";
import MarketingSelect from "../../lib/applet-made/marketing/MarketingSelect";
import PluginSelect from "../../lib/applet-made/plugin/PluginSelect";
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";

const AppletSelect = memo((props: IRedux) => {
  const { applet } = props;

  // 根据侧边栏的显示展示相应的组件
  const component: object[] = [
    <CommonSelect key={1} />,
    <CommoditySelect key={2} />,
    <MarketingSelect key={3} />,
    <PluginSelect key={4} />
  ];

  // 动画设置
  const transitions: any = useTransition(applet.sider, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          {component[item]}
        </animated.div>
      ))}
    </Fragment>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(AppletSelect);
