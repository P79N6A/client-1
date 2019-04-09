import { css } from "@emotion/core";
import { PageHeader, Tabs } from "antd";
import React, { Fragment, memo, useState } from "react";
import { IPicture } from "./database";
import PictureCommonForm from "./form/PictureCommonForm";
import PictureModuleForm from "./form/PictureModuleForm";
import PictureStyleForm from "./form/PictureStyleForm";

interface IProps {
  data: IPicture;
  change?({ type, payload }: { type: string; payload: any }): void;
}

/**
 * @description 视频组件编辑栏
 */
const PictureEdit = memo((props: IProps) => {
  // 记录当前tab值
  const [tab, setTab] = useState("common");
  const changeTab = (tabName: string) => {
    setTab(tabName);
  };
  // style
  const styles = {
    tab: css`
      height: calc(100vh - 100px);
    `
  };
  // antd 组件解构
  const TabPane = Tabs.TabPane;

  return (
    <Fragment>
      <PageHeader
        title="视频设置"
        subTitle="精美的视频有助有品牌的宣传"
        footer={
          <Tabs onChange={changeTab} activeKey={tab}>
            <TabPane tab="基础" key="common" />
            <TabPane tab="模块" key="module" />
            <TabPane tab="样式" key="style" />
          </Tabs>
        }
      />
      {tab === "common" && <PictureCommonForm />}
      {tab === "module" && <PictureModuleForm />}
      {tab === "style" && <PictureStyleForm />}
    </Fragment>
  );
});

export default PictureEdit;
