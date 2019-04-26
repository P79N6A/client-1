import React, { memo } from "react";
import { TabBar } from "antd-mobile";
import { connect } from "react-redux";
import { appletMadeCanvasStore, TabBarUIStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { TabBarUIFace } from "../../types";

const TabBarUI = memo((props: TabBarUIFace) => {
  const { pageIndex, theme, tabBar, pages } = props;
  // 选择导航栏
  const chooseTab = (): void => {
    "";
  };

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor={theme}
      barTintColor="white"
      tabBarPosition="top"
    >
      {tabBar.map((data, index) => {
        return (
          <TabBar.Item
            onPress={chooseTab}
            selected={pageIndex === data.pageIndex}
            title={pages[pageIndex].title}
            key={index}
            icon={
              <svg
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                  fill: theme
                }}
                aria-hidden="true"
              >
                <use xlinkHref={`#${pages[pageIndex].icon}`} />
              </svg>
            }
            selectedIcon={
              <svg
                style={{
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                  fill: theme
                }}
                aria-hidden="true"
              >
                <use xlinkHref={`#${pages[pageIndex].icon}`} />
              </svg>
            }
          />
        );
      })}
    </TabBar>
  );
});

export default connect(
  state => TabBarUIStore(state),
  { action }
)(TabBarUI);
