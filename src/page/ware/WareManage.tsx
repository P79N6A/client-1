import React, { memo, useState, useEffect } from "react";
import { Carousel, Descriptions, Divider, message, Table, Tag } from "antd";
import { wareGet } from "../../api/wareGet";
import { url } from "inspector";
import { obtainWare } from "../../api/wareObtain";

/**
 * @description 商品管理
 */
export default memo(() => {
  const [dataSource, setDataSource] = useState({ count: "", data: [] });

  // 自动获取数据
  useEffect(() => {
    wareGet({ user_id: "1", page: 1, pageCount: 8 }).then((data: any) => {
      setDataSource({ count: data.count, data: data.data });
    });
  }, []);

  // 切换页面
  const changePage = (e: any) => {
    wareGet({ user_id: "1", page: e, pageCount: 8 }).then((data: any) => {
      setDataSource({ count: data.count, data: data.data });
    });
  };

  // 商品下架
  const obtain = (ware_id: string) => {
    obtainWare({ ware_id }).then(data => {
      message.success(data.msg);
    });
  };

  // 表格样式定义
  const columns = [
    {
      title: "编号",
      dataIndex: "coding",
      key: "coding"
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "售价",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "配送方式",
      dataIndex: "delivery",
      key: "delivery"
    },
    {
      title: "创建时间",
      dataIndex: "created",
      key: "created"
    },
    {
      title: "操作",
      key: "action",

      render: (record: { id: string }) => (
        <span>
          <a>修改</a>
          <Divider type="vertical" />
          <a onClick={() => obtain(record.id)}>下架</a>
        </span>
      )
    }
  ];

  return (
    <Table
      rowKey="id"
      dataSource={dataSource.data}
      columns={columns}
      pagination={{
        pageSize: 8,
        total: Number(dataSource.count),
        hideOnSinglePage: true,
        onChange: e => changePage(e)
      }}
      expandedRowRender={(record: any) => (
        <Descriptions bordered layout={"vertical"} size={"small"}>
          <Descriptions.Item label="商品图片">
            {record.atlas.map((data: any) => {
              return (
                <img
                  alt={"img"}
                  src={data}
                  width={50}
                  height={50}
                  style={{ marginLeft: 16 }}
                />
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="商品描述">{record.desc}</Descriptions.Item>
          <Descriptions.Item label="商品规格/库存">
            {record.format.map((data: any) => {
              return (
                <Tag color="#108ee9">
                  {data.spec}/{data.stock}
                  {data.unit}
                </Tag>
              );
            })}
          </Descriptions.Item>
        </Descriptions>
      )}
    />
  );
});
