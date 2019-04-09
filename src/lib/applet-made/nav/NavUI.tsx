import { TabBar } from "antd-mobile";
import React, { memo } from "react";

export default memo(() => {
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
      tabBarPosition="top"
    >
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        badge={1}
        data-seed="logId"
      />
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        badge={1}
        data-seed="logId"
      />
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: "22px",
              height: "22px",
              background:
                "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
            }}
          />
        }
        badge={1}
        data-seed="logId"
      />
    </TabBar>
  );
});
