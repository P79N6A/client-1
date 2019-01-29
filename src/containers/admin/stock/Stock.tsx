/** @jsx jsx  */
import React, { memo, useState } from "react";
import { jsx, css } from "@emotion/core";
import { Button, Table, Icon, Tabs, Menu, Dropdown } from "antd";
import StockAdd from "./StockAdd";
import StockSearch from "./StockSearch";

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

export default memo(() => {
  // 控制搜索栏显示
  const [search, setSearch] = useState(false);
  // 显示，关闭搜索栏
  const changeSearch = () => {
    setSearch(!search);
  };
  // 切换tab的回调
  const callback = key => {
    return "";
  };
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
    top: css`
      margin-top: 10px;
    `
  };

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="库存数据" key="1">
        <StockSearch />
        <ButtonGroup css={style.top}>
          <Button htmlType={"button"} type="primary">
            新增商品
          </Button>
          <Dropdown overlay={menu}>
            <Button htmlType={"button"}>
              批量处理
              <Icon type="down" />
            </Button>
          </Dropdown>
          <Button htmlType={"button"}>刷新</Button>
        </ButtonGroup>
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
      </TabPane>
      <TabPane tab="新增商品" key="2">
        <StockAdd />
      </TabPane>
      <TabPane tab="批量导入" key="3">
        批量导入
      </TabPane>
    </Tabs>
  );
});
