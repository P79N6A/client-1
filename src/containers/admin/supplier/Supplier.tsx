import React, { memo, Fragment } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import { Button, Table } from "antd";


export default memo(props => {
  const ButtonGroup = Button.Group;

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
      <ButtonGroup className={css(styles.button)}>
        <Button htmlType={"button"} type="primary">
          新增供应商
        </Button>
      </ButtonGroup>
      <Table className={css(styles.top)} columns={columns} />
    </Fragment>
  );
});
