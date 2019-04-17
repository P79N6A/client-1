import { css } from "@emotion/core";
import { Button, Drawer, Icon, PageHeader, Tree, Typography } from "antd";
import React, { Fragment, memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import ButtonEdit from "../../lib/applet-made/common/button/ButtonEdit";
import DragEdit from "../../lib/applet-made/common/drag/DragEdit";
import FormEdit from "../../lib/applet-made/common/form/FormEdit";
import NavigationEdit from "../../lib/applet-made/common/navigation/NavigationEdit";
import PictureEdit from "../../lib/applet-made/common/picture/PictureEdit";
import ShowEdit from "../../lib/applet-made/common/show/ShowEdit";
import TextEdit from "../../lib/applet-made/common/text/TextEdit";
import VideoEdit from "../../lib/applet-made/common/video/VideoEdit";
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";

const AppletEdit = memo((props: IRedux) => {
  const { action, applet } = props;
  const { TreeNode } = Tree;
  const { Paragraph } = Typography;
  const styles = {
    // 常用组件
    theme: css`
      margin-bottom: 8px !important;
      & > div > div {
        border: none !important;
        box-shadow: none !important;
        & > div {
          padding: 0 !important;
        }
      }
    `,
    theme_item: css`
      height: 28px;
    `,
    // 组件列表
    component_item: css`
      width: 33.3%;
      text-align: center;
      padding: 8px !important;
    `,
    // 模板
    template: css`
      height: calc(100vh - 222px);
      overflow: auto;
      width: 100%;
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
      background-color: #fff;
    `
  };

  // 修改主题色
  const changeTheme = (color: { hex: string }) => {
    action({ type: "changeTheme", payload: color.hex });
  };

  // 点击树节点，切换页面id
  const changePageId = (selectedKeys: string[]): void => {
    if (selectedKeys.length !== 0) {
      action({ type: "changePageId", payload: selectedKeys[0] });
    }
  };

  // 修改页面标题名称 / 如果是页面的话，则显示页面属性设置
  const pagesTitle = (pageId, title): void => {
    action({ type: "changePageTitle", payload: { pageId, title } });
  };

  // 添加页面
  const addPage = () => {
    action({ type: "addPage", payload: "" });
  };

  // 关闭编辑页
  const closeEditShow = () => {
    action({ type: "changeEditShow", payload: false });
  };

  // 根据名称显示相应组件
  const EditComponent = () => {
    switch (applet.editType) {
      case "text":
        return <TextEdit />;
      case "button":
        return <ButtonEdit />;
      case "picture":
        return <PictureEdit />;
      case "drag":
        return <DragEdit />;
      case "video":
        return <VideoEdit />;
      case "navigation":
        return <NavigationEdit />;
      case "show":
        return <ShowEdit />;
      case "form":
        return <FormEdit />;
    }
  };

  return (
    <Fragment>
      <PageHeader title="主题色" subTitle="应用至所有页面" css={styles.theme}>
        <TwitterPicker
          onChange={changeTheme}
          color={applet.theme}
          colors={[
            "#DE443A",
            "#3A82F8",
            "#56BB37",
            "#333334",
            "#ED5D29",
            "#EB3477",
            "#F5B43E",
            "#57C5AD",
            "#AD986D",
            "#7360F0"
          ]}
        />
      </PageHeader>
      <PageHeader
        title="页面管理"
        css={styles.template}
        extra={[
          <Button
            key="1"
            type="primary"
            htmlType={"button"}
            size={"small"}
            onClick={addPage}
          >
            <Icon type={"plus"} />
            添加页面
          </Button>
        ]}
      >
        <Tree
          blockNode={true}
          defaultExpandAll={true}
          defaultSelectedKeys={[applet.pageId]}
          showLine={true}
          onSelect={selectedKeys => changePageId(selectedKeys)}
        >
          <TreeNode title={"页面"} key="0-0" selectable={false}>
            {Object.keys(applet.pages).map(data => {
              return (
                <TreeNode
                  title={
                    <Paragraph
                      editable={{ onChange: title => pagesTitle(data, title) }}
                    >
                      {applet.pages[data].title}
                    </Paragraph>
                  }
                  key={data}
                />
              );
            })}
          </TreeNode>
        </Tree>
      </PageHeader>
      <Drawer
        title={
          <div style={{ height: "32px", lineHeight: "32px" }}>组件编辑</div>
        }
        onClose={closeEditShow}
        closable={true}
        visible={applet.editShow}
        width={348}
        mask={false}
      >
        {/*放置相应的编辑组件*/}
        {EditComponent()}
      </Drawer>
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
)(AppletEdit);
