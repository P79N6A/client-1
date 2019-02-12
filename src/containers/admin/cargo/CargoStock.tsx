/** @jsx jsx  */
import React, { memo, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { Button, Table, Icon, Menu, Dropdown } from "antd";

/**
 * @description 商品管理页
 */
export default memo(() => {
  // antd 组件解构
  const ButtonGroup = Button.Group;
  // 表格头数据
  const columns = [
    {
      title: "商品",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "状态",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "库存",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "编辑",
      key: "action",
      render: (text, record) => <span>操作</span>
    }
  ];
  // 表格数据勾选
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      return "";
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
  // 批量处理影藏设置
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );
  // 样式
  const style = {
    table: css`
      margin-top: 10px;
    `,
    card: css`
      width: 25%;
      text-align: center;
    `
  };
  return (
    <Fragment>
      <Table
        locale={{
          filterConfirm: "确定",
          filterReset: "重置",
          emptyText: "暂无数据"
        }}
        rowSelection={rowSelection}
        css={style.table}
        columns={columns}
      />
      <ButtonGroup>
        <Dropdown overlay={menu}>
          <Button htmlType={"button"}>
            批量处理
            <Icon type="down" />
          </Button>
        </Dropdown>
        <Button htmlType={"button"}>刷新</Button>
      </ButtonGroup>
    </Fragment>
  );
});
