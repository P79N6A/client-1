import React, { memo } from "react";
import { TabBar } from "antd-mobile";
import { connect } from "react-redux";
import { appletMadeCanvasStore, TabBarUIStore } from "../../model/reselect";
import { action } from "../../../../models/action";
import { TabBarUIFace } from "../../types";
import { css } from "@emotion/core";

const TabBarUI = memo((props: TabBarUIFace) => {
  const { pageIndex, theme, tabBar, pages } = props;
  // 选择导航栏
  const chooseTab = (): void => {
    "";
  };
  const styles = {
    svg: css`
      width: 22px;
      height: 22px;
      cursor: pointer;
      fill: ${theme};
      overflow: hidden;
    `
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
            selected={pageIndex === data.data}
            title={pages[data.data].title}
            key={index}
            icon={
              <svg css={styles.svg} aria-hidden="true">
                <use xlinkHref={`#${pages[data.data].icon}`} />
              </svg>
            }
            selectedIcon={
              <svg css={styles.svg} aria-hidden="true">
                <use xlinkHref={`#${pages[data.data].icon}`} />
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
