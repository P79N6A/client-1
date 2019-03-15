import * as React from "react";
import { InputItem, List, Radio, Switch } from "antd-mobile";
import { IForm } from "./typing";

export default React.memo((props: IForm) => {
  const { item } = props;
  const RadioItem = Radio.RadioItem;

  // 渲染form 表单
  const FormItem = ({
    data
  }: {
    data: { type: string; name: string; value: [] };
  }) => {
    // 演示
    return (
      <React.Fragment>
        {data.type === "radio" && (
          <React.Fragment>
            <List renderHeader={<div>{data.name}</div>}>
              {data.value.map((i: { value: string; label: string }) => (
                <RadioItem key={i.value}>{i.label}</RadioItem>
              ))}
            </List>
            <br />
          </React.Fragment>
        )}
        {data.type === "input" && (
          <React.Fragment>
            {data.value.map((i: { value: string; label: string }) => (
              <List renderHeader={<div>{data.name}</div>}>
                <InputItem value={i.value}>{i.label}</InputItem>
              </List>
            ))}
            <br />
          </React.Fragment>
        )}
        {data.type === "switch" && (
          <React.Fragment>
            {data.value.map((i: { value: boolean; label: string }) => (
              <List renderHeader={<div>{data.name}</div>}>
                <List.Item extra={<Switch checked={i.value} />}>
                  {i.label}
                </List.Item>
              </List>
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {item.map((data: any, index) => {
        return <FormItem data={data} key={index} />;
      })}
    </React.Fragment>
  );
});
