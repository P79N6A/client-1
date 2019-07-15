import { css } from "@emotion/core";
import React, { Fragment, memo, useEffect, useState } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action, IActionFn } from "../../../model/action";
import {
  AutoComplete,
  Button,
  Popconfirm,
  Tree,
  Empty,
  Icon,
  message,
  PageHeader,
  Typography
} from "antd";
import { IAppletStore } from "../model/store";

interface IProps extends IActionFn {
  pageId: string[];
  theme: string;
  pageList: IAppletStore["pageList"];
}

const AppletEdit = memo((props: IProps) => {
  const { action, theme, pageList, pageId } = props;
  // 记录需要删除的页面
  const [tree, setTree] = useState(pageId);
  const onCheck = (checkedKeys: any): void => {
    setTree(checkedKeys);
  };
  // 用于更新当前选中的pageId，将Tree组件自动落点至当前的pageId上
  useEffect(() => {
    setTree(pageId);
  }, [pageId]);

  // 修改主题色
  const changeTheme = (theme: { hex: string }) => {
    action({
      type: "APPLET_THEME_SET",
      payload: theme.hex
    });
  };
  // 修改页面title
  const changePageTitle = (pageId: string, newTitle: string): void => {
    if (newTitle.length > 4) {
      message.warning("页面标题最多4个字");
    }
    const titleSlice = newTitle.slice(0, 4);
    action({
      type: "APPLET_PAGE_TITLE_SET",
      payload: {
        pageId,
        newTitle: titleSlice
      }
    });
  };
  // 新增页面
  const addPage = () => {
    // TODO 链接ajax 获取pageId，下面用于模拟
    const mock = new Date().getTime();
    action({
      type: "APPLET_PAGE_ADD",
      payload: mock
    });
  };
  // 删除页面
  const removePage = () => {
    action({
      type: "APPLET_PAGE_REMOVE",
      payload: tree
    });
  };
  // 页面标题移动
  const movePage = (info: any) => {
    // 移到此key后面
    const dropKey = info.node.props.eventKey;
    // 当前移动的key
    const dragKey = info.dragNode.props.eventKey;
    action({
      type: "APPLET_PAGE_LIST_MOVE",
      payload: { dropId: dropKey, dragId: dragKey }
    });
  };
  // 修改pageId
  const changePageId = (pageId: any): void => {
    if (pageId.length > 0) {
      action({
        type: "APPLET_PAGE_ID_SET",
        payload: pageId
      });
    }
  };

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

  return (
    <Fragment>
      <PageHeader title="主题色" subTitle="应用至所有页面" css={styles.theme}>
        <TwitterPicker
          onChange={changeTheme}
          color={theme}
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
          <Button.Group key={1}>
            <Button
              key="1"
              type="primary"
              htmlType={"button"}
              size={"small"}
              onClick={addPage}
            >
              <Icon type={"plus"} />
              添加
            </Button>
            <Popconfirm
              title="确定删除此页面?"
              onConfirm={removePage}
              okText="是"
              cancelText="否"
            >
              <Button key="1" htmlType={"button"} size={"small"}>
                <Icon type={"delete"} />
                删除
              </Button>
            </Popconfirm>
          </Button.Group>
        ]}
      >
        <AutoComplete
          style={{
            marginBottom: 8,
            width: "100%"
          }}
          placeholder="搜索页面"
          onSelect={changePageId}
          filterOption={(inputValue, option): any =>
            typeof option.props.children === "string"
              ? option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              : ""
          }
        >
          {Object.keys(pageList).map(data => (
            <AutoComplete.Option key={data}>
              {pageList[data].title}
            </AutoComplete.Option>
          ))}
        </AutoComplete>

        <Tree
          draggable
          blockNode
          checkable
          defaultExpandAll
          selectedKeys={pageId}
          checkedKeys={tree}
          onDrop={movePage}
          onSelect={changePageId}
          onCheck={onCheck}
        >
          {Object.keys(pageList).map(data => {
            return (
              <Tree.TreeNode
                title={
                  <Typography.Paragraph
                    ellipsis={true}
                    editable={{
                      onChange: e => changePageTitle(data, e)
                    }}
                  >
                    {pageList[data].title}
                  </Typography.Paragraph>
                }
                key={data}
              />
            );
          })}
        </Tree>

        {!Object.keys(pageList).length && (
          <Empty description={"暂无页面，请添加"} />
        )}
      </PageHeader>
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pageList } = state.appletStore;
    return {
      pageId: pageId ? [`${pageId}`] : [],
      theme: theme,
      pageList: pageList
    };
  },
  { action }
)(AppletEdit);
