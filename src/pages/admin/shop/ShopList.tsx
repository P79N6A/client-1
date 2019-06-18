import React, { memo } from "react";
import { Button, Icon, Skeleton, List, Card } from "antd";
import AddShop from "./ShopAdd";
import IconFont from "../../../components/IconFont";

export default memo(() => {
  // 小程序商城列表 （通过ajax 获取）
  const data = [
    {
      title: "create"
    },
    {
      title: "Title 2"
    },
    {
      title: "Title 3"
    },
    {
      title: "Title 4"
    }
  ];

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {item.title === "create" ? (
            <AddShop>
              <Button style={{ height: 143 }} block={true} type="dashed">
                <Icon type={"plus"} />
                添加商铺
              </Button>
            </AddShop>
          ) : (
            <Card actions={[<div>编辑</div>, <div>删除</div>, <div>发布</div>]}>
              <Skeleton avatar active loading={false}>
                <Card.Meta
                  avatar={
                    <IconFont
                      type="icon-upload"
                      style={{ fontSize: 40, borderRadius: "10" }}
                    />
                  }
                  title="水果商店"
                  description="在中台产品的研发过程中"
                />
              </Skeleton>
            </Card>
          )}
        </List.Item>
      )}
    />
  );
});
