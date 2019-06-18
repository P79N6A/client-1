import React, { memo, Fragment } from "react";
import { Button, Divider, Icon, Table } from "antd";
import { css } from "@emotion/core";

/**
 * @description 商品配送
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
      title: "配送方式",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "来源",
      dataIndex: "form",
      key: "form"
    },
    {
      title: "操作",
      key: "action",
      render: () => (
        <span>
          <a>修改</a>
          <Divider type="vertical" />
          <a>删除</a>
        </span>
      )
    }
  ];

  const styles = {
    edit: css`
      margin: 8px 0 16px;
      & > button {
        margin-right: 16px;
      }
    `,
    help: css`
      cursor: pointer;
      color: #d1d1d1;
      & > i {
        margin-right: 6px;
      }
    `
  };

  return (
    <Fragment>
      <div css={styles.edit}>
        <Button type="primary">自定义配送</Button>
        <span css={styles.help}>
          <Icon type="question-circle" />
          帮助
        </span>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </Fragment>
  );
});
