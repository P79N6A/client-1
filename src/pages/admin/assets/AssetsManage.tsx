import React, { memo, Fragment } from "react";
import { Button, Divider, Icon, Table } from "antd";
import { css } from "@emotion/core";

/**
 * @description 资金管理
 */
export default memo(() => {
  // 数据源，通过ajax 获取
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  // 表格样式定义
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "操作",
      key: "action",
      render: () => (
        <span>
          <a>修改</a>
          <Divider type="vertical" />
          <a>下架</a>
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
        <Button type="primary">导出账单</Button>
        <span css={styles.help}>
          <Icon type="question-circle" />
          帮助
        </span>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </Fragment>
  );
});
