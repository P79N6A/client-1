import React, { memo, Fragment } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import { Button, Tabs, Card, Table } from "antd";
import Stock from "../stock/Stock";


/**
 * @description 商品页面
 * 包含：
 * 1.库存管理
 * 2.采购管理
 * 3.供应商管理
 */
export default memo((props) => {
  const TabPane = Tabs.TabPane;
  const ButtonGroup = Button.Group;

  const callback = key => {
    return "";
  };

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
      title: "分类",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "供应商",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "日期",
      dataIndex: "address",
      key: "address"
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

  const styles = StyleSheet.create({
    button: {
      marginRight: 10
    },
    search: {
      padding: 24,
      background: "#fbfbfb",
      border: "1px solid #d9d9d9",
      borderRadius: 6,
      marginTop: 10
    },
    table: {
      marginTop: 10
    },
    card: {
      marginTop: 10,
      padding: 24,
      background: "#fbfbfb",
      border: "1px solid #d9d9d9",
      borderRadius: 6
    },
    top: {
      marginTop: 10
    }
  });

  return (
    <Fragment>
      配送管理
    </Fragment>
  );
});
