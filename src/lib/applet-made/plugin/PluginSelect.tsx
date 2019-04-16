import { css } from "@emotion/core";
import { Card, Divider } from "antd";
import React, { Fragment, memo } from "react";

const PluginSelect = memo(() => {
  const styles = {
    // 常用组件
    item: css`
      margin-bottom: 8px !important;
    `,
    // 组件列表
    component_item: css`
      width: 33.3%;
      text-align: center;
      padding: 8px !important;
    `,
    // 模板
    template: css`
      //  TODO 根据具体情况，具体调整
      height: calc(100vh - 154px);
      overflow: auto;
      scrollbar-arrow-color: transparent;
      scrollbar-face-color: transparent;
      scrollbar-highlight-color: transparent;
      scrollbar-shadow-color: transparent;
      scrollbar-darkshadow-color: transparent;
      scrollbar-track-color: transparent;
      scrollbar-base-color: transparent;
      &::-webkit-scrollbar {
        border: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-track-piece {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
      }
      &::-webkit-resizer {
        display: none;
      }
    `
  };
  return (
    <div>
      <Card
        bordered={false}
        size={"small"}
        css={styles.item}
        bodyStyle={{ padding: 0 }}
      >
        <Card.Grid css={styles.component_item}>客户</Card.Grid>
        <Card.Grid css={styles.component_item}>一键拨号</Card.Grid>
        <Card.Grid css={styles.component_item}>地图</Card.Grid>
        <Card.Grid css={styles.component_item}>制作信息</Card.Grid>
      </Card>
      <Card css={styles.template} bodyStyle={{ paddingBottom: 0 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Divider>
          <h6>我也是有底线的</h6>
        </Divider>
      </Card>
    </div>
  );
});

export default PluginSelect;
