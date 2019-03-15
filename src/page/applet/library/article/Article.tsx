import React from "react";
import { List } from "antd-mobile";
import { IArticle } from "./typing";

export default React.memo((props: IArticle) => {
  const { item } = props;
  return (
    <List>
      {item.map((data, index) => {
        return (
          <List.Item arrow="horizontal" multipleLine key={index}>
            {data.title}
            <List.Item.Brief>{data.description}</List.Item.Brief>
          </List.Item>
        );
      })}
    </List>
  );
});
