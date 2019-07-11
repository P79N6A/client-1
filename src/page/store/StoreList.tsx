import React, { memo, useEffect, useState } from "react";
import { Button, Icon, Skeleton, List, Card, message } from "antd";
import produce from "immer";
import { useSelector } from "react-redux";
import StoreAdd from "./StoreAdd";
import { storeGet } from "../../api/storeGet";
import { storeRemove } from "../../api/storeRemove";
import StoreEdit from "./StoreEdit";

export default memo(() => {
  // 用户id
  const userId = useSelector((state: any) => state.user.userId);
  const [store, setStore] = useState([
    {
      name: "create"
    }
  ]);

  useEffect(() => {
    storeGet({ user_id: userId })
      .then((data: any) => {
        setStore(
          produce(store, draftState => {
            draftState.push.apply(draftState, data);
          })
        );
      })
      .catch();
  }, []);

  // 删除店铺
  const removeStore = (store_id: string) => {
    storeRemove({ store_id })
      .then(() => {
        message.success("删除成功");
      })
      .catch(() => {
        message.error("删除失败");
      });
  };

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4
      }}
      dataSource={store}
      renderItem={(item: any) => (
        <List.Item>
          {item.name === "create" ? (
            <StoreAdd>
              <Button style={{ height: 143 }} block={true} type="dashed">
                <Icon type={"plus"} />
                添加店铺
              </Button>
            </StoreAdd>
          ) : (
            <Card
              actions={[
                <div>
                  <StoreEdit {...item}>编辑</StoreEdit>
                </div>,
                <div onClick={() => removeStore(item.id)}>删除</div>,
                <div>发布</div>
              ]}
            >
              <Skeleton avatar active loading={false}>
                <Card.Meta
                  avatar={
                    <img
                      src={item.logo}
                      alt={"logo"}
                      style={{
                        borderRadius: 10,
                        width: 40,
                        height: 40
                      }}
                    />
                  }
                  title={item.name}
                  description={item.desc}
                />
              </Skeleton>
            </Card>
          )}
        </List.Item>
      )}
    />
  );
});
