import { Icon } from "antd";
import { TabBar } from "antd-mobile";
import React, { memo } from "react";
import { connect } from "react-redux";
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";

const NavUI = memo((props: IRedux) => {
  const { action, applet } = props;

  // 选择导航栏
  const changePageId = (pageId: string) => {
    action({ type: "changePageId", payload: pageId });
  };

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor={applet.theme}
      barTintColor="white"
      tabBarPosition="top"
    >
      {applet.nav.map((data, index) => {
        return (
          <TabBar.Item
            onPress={() => changePageId(data.pageId)}
            selected={applet.pageId === data.pageId}
            title={data.title}
            key={index}
            icon={
              <Icon
                type={data.icon}
                style={{ cursor: "pointer", width: "22px", height: "22px" }}
              />
            }
            selectedIcon={
              <Icon
                type={data.icon}
                style={{ cursor: "pointer", width: "22px", height: "22px" }}
              />
            }
            data-seed={data.title}
          />
        );
      })}
    </TabBar>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(NavUI);
