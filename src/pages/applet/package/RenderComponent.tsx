import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { Icon, message, Popover } from "antd";
import { action, IActionFn } from "../../../models/action";
import { IAppletStore } from "../model/store";
import BlockStyle from "./common/BlockStyle";
import Text_0 from "./text/Text_0";
import Picture_0 from "./picture/Picture_0";
import Button_0 from "./button/Button_0";
import Video_0 from "./video/Video_0";
import FormUI from "./form/FormUI";
import Show_0 from "./show/Show_0";
import Guide_0 from "./guide/Guide_0";
import DragUI from "./drag/DragUI";
import RenderEdit from "./RenderEdit";

interface IProps extends IActionFn {
  componentList: Array<{
    component: {};
    style: {};
    form: {};
  }>;
  componentId: any;
  theme: string;
}

/**
 * 展示组件
 * 流程
 * 1. 循环当前的uiList
 * 2. 为组件添加附加功能（上移，下移，删除）
 * 3. 渲染组件block样式
 * 4. 渲染组件
 */
const RenderComponent = memo((props: IProps) => {
  const { componentList, componentId, theme, action } = props;

  // 对组件进行操作
  const componentSet = (type: string, index: number | string) => {
    switch (type) {
      // 组件上移
      case "up":
        if (index === 0) {
          message.warning("组件已至最顶端");
        } else {
          action({ type: "APPLET_COMPONENT_MOVE_UP", payload: index });
        }
        break;
      //   组件下移
      case "down":
        if (index === componentList.length - 1) {
          message.warning("组件已至底顶端");
        } else {
          action({ type: "APPLET_COMPONENT_MOVE_DOWN", payload: index });
        }
        break;
      //   删除组件
      case "remove":
        action({ type: "APPLET_COMPONENT_REMOVE", payload: index });
        break;
    }
  };
  // 修改当前componentId
  const changeComponentId = (id: string | number) => {
    action({ type: "APPLET_COMPONENT_ID_SET", payload: id });
  };
  // 组件样式
  const componentUI: { [id: string]: object } = {
    button0: Button_0,
    text0: Text_0,
    picture0: Picture_0,
    video0: Video_0,
    form0: FormUI,
    show0: Show_0,
    guide0: Guide_0,
    drag: DragUI
  };

  const styles = {
    item: css`
      width: 100%;
    `,
    editItem: css`
      position: relative;
      outline: 1px black dashed;
      width: 100%;
    `,
    tooltip: css`
      cursor: pointer;
    `
  };

  return (
    <Fragment>
      {componentList.map((data: any, index: number | string) => {
        const Component: any = componentUI[data.component.typeId];
        return (
          <RenderEdit keyId={index} key={index}>
            <Popover
              visible={Boolean(componentId === index)}
              overlayStyle={{ border: "none", paddingLeft: 0, zIndex: 100 }}
              placement="rightTop"
              trigger="click"
              key={index}
              content={
                <div css={styles.tooltip}>
                  <div key={1} onClick={() => componentSet("up", index)}>
                    <Icon type="arrow-up" />
                  </div>
                  <div key={2} onClick={() => componentSet("down", index)}>
                    <Icon type="arrow-down" />
                  </div>
                  <div key={4} onClick={() => componentSet("remove", index)}>
                    <Icon type="delete" />
                  </div>
                </div>
              }
            >
              <div
                onClick={() => changeComponentId(index)}
                css={
                  Boolean(componentId === index) ? styles.editItem : styles.item
                }
              >
                <BlockStyle {...data.style}>
                  <Component data={data.component} theme={theme} />
                </BlockStyle>
              </div>
            </Popover>
          </RenderEdit>
        );
      })}
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, pageId, pages, componentId } = state.appletStore;
    return {
      componentList: pageId ? pages[pageId] : [],
      componentId: componentId,
      theme: theme
    };
  },
  { action }
)(RenderComponent);
