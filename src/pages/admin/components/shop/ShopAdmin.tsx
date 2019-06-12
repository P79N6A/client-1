import React, { memo, Fragment } from "react";
import { Button, Card, Icon, List, Skeleton } from "antd";
import CreateShop from "./CreateShop";
import IconFont from "../../../../component/IconFont";

// 商城管理
export const ShopAdmin = memo(() => {
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
    <Fragment>
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
              <CreateShop>
                <Button style={{ height: 143 }} block={true} type="dashed">
                  <Icon type={"plus"} />
                  添加商铺
                </Button>
              </CreateShop>
            ) : (
              <Card
                actions={[<div>编辑</div>, <div>删除</div>, <div>发布</div>]}
              >
                <Skeleton avatar active loading={false}>
                  <Card.Meta
                    avatar={
                      <IconFont
                        type="icon-weibiaoti-"
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
    </Fragment>
  );
});
