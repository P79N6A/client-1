import { InputItem, List, Radio, Switch } from "antd-mobile";
import React, { memo } from "react";
import { FormFace } from "../../types";

interface IProps {
  theme: string;
  data: FormFace;
}

export default memo((props: IProps) => {
  const { formItem } = props.data;
  const RadioItem = Radio.RadioItem;

  // 渲染form 表单
  const FormItem = ({ data }: any) => {
    // 演示
    return (
      <React.Fragment>
        {data.type === "radio" && (
          <React.Fragment>
            <List renderHeader={<div>{data.name}</div>}>
              {data.value.map(i => (
                <RadioItem key={i.value}>{i.label}</RadioItem>
              ))}
            </List>
            <br />
          </React.Fragment>
        )}
        {data.type === "input" && (
          <React.Fragment>
            {data.value.map(i => (
              <List renderHeader={<div>{data.name}</div>} key={i}>
                <InputItem value={i.value}>{i.label}</InputItem>
              </List>
            ))}
            <br />
          </React.Fragment>
        )}
        {data.type === "switch" && (
          <React.Fragment>
            {data.value.map(i => (
              <List renderHeader={<div>{data.name}</div>} key={i}>
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
      {formItem.map((data, index) => {
        return <FormItem data={data} key={index} />;
      })}
    </React.Fragment>
  );
});
