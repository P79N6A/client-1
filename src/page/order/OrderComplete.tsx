import React, { memo } from "react";
import { Table } from "antd";

/**
 * @description 订单表格，根据订单的类型，显示不同的数据
 */
export default memo(() => {
  // 数据源，通过ajax 获取
  const dataSource = [
    {
      key: "1",
      name: "到店取货",
      form: "官方定义",
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "商家配送",
      form: "官方定义",
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "快递邮寄",
      form: "官方定义",
      address: "西湖区湖底公园1号"
    }
  ];

  // 表格样式定义
  const columns = [
    {
      title: "商品名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "完成时间",
      dataIndex: "form",
      key: "form"
    },
    {
      title: "客户名称",
      dataIndex: "form",
      key: "form"
    }
  ];

  return <Table dataSource={dataSource} columns={columns} />;
});
