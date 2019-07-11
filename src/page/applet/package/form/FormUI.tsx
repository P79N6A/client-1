import React, { memo, Fragment } from "react";
import InputItem from "antd-mobile/lib/input-item";
import List from "antd-mobile/lib/list";
import Radio from "antd-mobile/lib/radio";
import Switch from "antd-mobile/lib/switch";
import "antd-mobile/lib/input-item/style";
import "antd-mobile/lib/list/style";
import "antd-mobile/lib/radio/style";
import "antd-mobile/lib/switch/style";

import { $$Form0 } from "./database";

interface IProps {
  theme: string;
  data: $$Form0["component"];
}

export default memo((props: IProps) => {
  const { formItem } = props.data;
  const RadioItem = Radio.RadioItem;

  const FormItem = (data: any) => {
    switch (data.type) {
      case "input":
        return (
          <React.Fragment>
            {data.value.map((i: any) => (
              <List
                renderHeader={<div>{data.name}</div>}
                key={`${new Date().getTime()}`}
              >
                <InputItem value={i.value}>{i.label}</InputItem>
              </List>
            ))}
            <br />
          </React.Fragment>
        );
      case "radio":
        return (
          <React.Fragment>
            <List renderHeader={<div>{data.name}</div>}>
              {data.value.map((i: any) => (
                <RadioItem key={i.label}>{i.label}</RadioItem>
              ))}
            </List>
            <br />
          </React.Fragment>
        );
      case "switch":
        return (
          <React.Fragment>
            {data.value.map((i: any) => (
              <List renderHeader={<div>{data.name}</div>} key={i.label}>
                <List.Item extra={<Switch checked={i.value} key={i} />}>
                  {i.label}
                </List.Item>
              </List>
            ))}
          </React.Fragment>
        );
    }
  };

  return (
    <React.Fragment>
      {formItem.map((data, index) => {
        return <Fragment key={index}>{FormItem(data)}</Fragment>;
      })}
    </React.Fragment>
  );
});
