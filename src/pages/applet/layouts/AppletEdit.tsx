import { css } from "@emotion/core";
import {
  AutoComplete,
  Button,
  Icon,
  PageHeader,
  Popconfirm,
  Tree,
  Typography
} from "antd";
import React, { Fragment, memo, useEffect, useState } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../models/action";
import {
  pageAddLogic,
  pageRemoveLogic,
  pageSetIndexLogic,
  pageSetTitleLogic,
  themeSetLogic
} from "../model/logic";
import { appletEditStore } from "../model/reselect";
import { AppletEditFace } from "../types";

const AppletEdit = memo((props: AppletEditFace) => {
  const { action, theme, pageIndex, pages } = props;

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

  // 记录需要删除的页面
  const [treeClick, setTreeClick] = useState([pageIndex]);
  const onCheck = (checkedKeys: string[]): void => {
    setTreeClick(checkedKeys);
  };
  useEffect(() => {
    setTreeClick([pageIndex]);
  }, [pageIndex]);

  return (
    <Fragment>
      <PageHeader title="主题色" subTitle="应用至所有页面" css={styles.theme}>
        <TwitterPicker
          onChange={e => themeSetLogic(action, e.hex)}
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
              onClick={() => pageAddLogic(action)}
            >
              <Icon type={"plus"} />
              添加
            </Button>
            <Popconfirm
              title="确定删除此页面?"
              onConfirm={() => pageRemoveLogic(action, treeClick, pages)}
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
          style={{ marginBottom: 8, width: "100%" }}
          placeholder="搜索页面"
          onSelect={e => pageSetIndexLogic(action, [`${e}`])}
          filterOption={(inputValue, option) =>
            typeof option.props.children === "string"
              ? option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              : ""
          }
        >
          {Object.keys(pages).map(data => (
            <AutoComplete.Option key={data}>
              {pages[data].title}
            </AutoComplete.Option>
          ))}
        </AutoComplete>
        <Tree
          blockNode={true}
          defaultExpandAll={true}
          checkable={true}
          selectedKeys={[pageIndex]}
          checkedKeys={treeClick}
          onSelect={e => pageSetIndexLogic(action, e)}
          onCheck={onCheck}
        >
          {Object.keys(pages).map(data => {
            return (
              <Tree.TreeNode
                title={
                  <Typography.Paragraph
                    ellipsis={true}
                    editable={{
                      onChange: title => pageSetTitleLogic(action, data, title)
                    }}
                  >
                    {pages[data].title}
                  </Typography.Paragraph>
                }
                key={data}
              />
            );
          })}
        </Tree>
      </PageHeader>
    </Fragment>
  );
});

export default connect(
  state => appletEditStore(state),
  { action }
)(AppletEdit);
