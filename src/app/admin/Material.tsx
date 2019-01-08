import React, { memo } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Tabs, Card, Table } from "antd";
import Stock from "./Stock";


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
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="库存管理" key="1">
        <Stock/>
      </TabPane>
      <TabPane tab="采购管理" key="2">
        <ButtonGroup className={css(styles.button)}>
          <Button htmlType={"button"} type="primary">
            新增采购订单
          </Button>
        </ButtonGroup>

        <Card className={css(styles.card)}>搜索表单</Card>

        <Tabs onChange={callback} type="card" className={css(styles.top)}>
          <TabPane tab="全部" key="1">
            <Table className={css(styles.table)} columns={columns}/>
          </TabPane>
          <TabPane tab="待入库" key="2">
            <Table className={css(styles.table)} columns={columns}/>
          </TabPane>
          <TabPane tab="已关闭" key="3">
            <Table className={css(styles.table)} columns={columns}/>
          </TabPane>
          <TabPane tab="已完成" key="4">
            <Table className={css(styles.table)} columns={columns}/>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="供应商管理" key="3">
        <ButtonGroup className={css(styles.button)}>
          <Button htmlType={"button"} type="primary">
            新增供应商
          </Button>
        </ButtonGroup>

        <Table className={css(styles.table)} columns={columns}/>
      </TabPane>
      <TabPane tab="配送管理" key="4">
        配送管理
      </TabPane>
    </Tabs>
  );
});
