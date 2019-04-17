import { Button, Collapse, Form, Icon, Popover, Tabs } from "antd";
import produce from "immer";
import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { action } from "../../../../store/action";
import { IRedux } from "../../../../store/typing";
import CommonEditForm from "../button/ButtonEdit";
import InputForm from "./item/InputForm";
import RadioForm from "./item/RadioForm";
import SwitchForm from "./item/SwitchForm";

/**
 * swiper可编辑属性操作栏
 */
const FormEdit = memo((props: IRedux) => {
  const [itemChoose, setItemChoose] = useState("");
  const { action, applet } = props;
  const { item } = applet.pages[applet.pageId].ui[applet.uIndex];
  const Panel = Collapse.Panel;
  // 实现对应操作
  const itemSet = (name: string, index: number): any => {
    // switch (name) {
    //   case "up":
    //     if (index === 0) {
    //       return message.warning("已至最顶端");
    //     } else {
    //       return onChange({
    //         src: {
    //           name: "item",
    //           value: produce(item, draftState => {
    //             [draftState[index - 1], draftState[index]] = [
    //               draftState[index],
    //               draftState[index - 1]
    //             ];
    //           })
    //         }
    //       });
    //     }
    //
    //   case "down":
    //     if (index + 1 === item.length) {
    //       return message.warning("已至最底端");
    //     } else {
    //       return onChange({
    //         src: {
    //           name: "item",
    //           value: produce(item, draftState => {
    //             [draftState[index], draftState[index + 1]] = [
    //               draftState[index + 1],
    //               draftState[index]
    //             ];
    //           })
    //         }
    //       });
    //     }
    //
    //   case "del":
    //     return onChange({
    //       src: {
    //         name: "item",
    //         value: produce(item, draftState => {
    //           draftState.splice(index, 1);
    //         })
    //       }
    //     });
    // }
  };
  const itemAdd = (type: string): any => {
    const items = {
      input: {
        type: "input",
        key: "FEWFWfqqwEqwef",
        value: [{ label: "示例", value: "" }],
        name: "输入框"
      },
      radio: {
        type: "radio",
        name: "单选",
        key: "FEWFWfqqgwergwEqwef",
        value: [
          { label: "示例选项一", value: 0 },
          { label: "示例选项一", value: 0 }
        ]
      },
      switch: {
        type: "switch",
        name: "滑动开关",
        key: "FEWFWfqqgwh345wEqwef",
        value: [{ label: "switch", value: true }]
      }
    };
    // return onChange({
    //   src: {
    //     name: "item",
    //     value: produce(item, draftState => {
    //       draftState.push(items[type]);
    //     })
    //   }
    // });
  };
  // 对单个项目操作
  const setItem = (index): any => {
    setItemChoose(index);
  };
  // 单个项目数值修改后的回调
  const itemValueFeedBack = value => {
    // return onChange({
    //   src: {
    //     name: "item",
    //     value: produce(item, draftState => {
    //       draftState[itemChoose] = value;
    //     })
    //   }
    // });
  };
  // 添加表单项
  const content = (
    <div>
      <p onClick={() => itemAdd("input")}>输入框</p>
      <p onClick={() => itemAdd("radio")}>单选</p>
      <p onClick={() => itemAdd("switch")}>滑动开关</p>
    </div>
  );
  // 展示相应组件表单
  const renderFormItem = type => {
    switch (type) {
      // case "input":
      //   return <InputForm onChange={itemValueFeedBack} data={item[type]} />;
      // case "switch":
      //   return <SwitchForm onChange={itemValueFeedBack} data={item[type]} />;
      // case "radio":
      //   return <RadioForm onChange={itemValueFeedBack} data={item[type]} />;
      default:
        return <div key={1} />;
    }
  };
  // 返回界面
  const callback = (): any => {
    setItemChoose("");
  };
  const TabPane = Tabs.TabPane;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="基础属性" key="1">
        <Collapse bordered={false} defaultActiveKey={["0"]}>
          {item.map((data, index) => {
            return (
              <Panel
                header={data.name}
                key={index}
                extra={
                  <div>
                    <a onClick={() => itemSet("up", index)} key={1}>
                      <Icon type="arrow-up" />
                    </a>
                    <a onClick={() => itemSet("down", index)} key={2}>
                      <Icon type="arrow-down" />
                    </a>
                    <a onClick={() => setItem(index)} key={3}>
                      <Icon type="edit" />
                    </a>
                    <a onClick={() => itemSet("del", index)} key={4}>
                      <Icon type="delete" />
                    </a>
                  </div>
                }
              >
                <div key={index}>{renderFormItem(data.type)}</div>
              </Panel>
            );
          })}
        </Collapse>
        <Popover content={content} title="请选择" trigger="hover">
          <Button htmlType={"button"} block={true} style={{ marginTop: 5 }}>
            <Icon type="plus" />
            添加
          </Button>
        </Popover>
      </TabPane>
      <TabPane tab="模块样式" key="2">
        <CommonEditForm />
      </TabPane>
    </Tabs>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(FormEdit);
