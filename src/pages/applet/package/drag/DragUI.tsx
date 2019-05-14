import React, { Fragment, memo } from "react";
import { Dropdown, Menu } from "antd";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { action, IActionFn } from "../../../../models/action";
import DragRef from "../../../../tools/DragTools";
import { IAppletStore } from "../../model/store";
import Text_0 from "../text/Text_0";
import Picture_0 from "../picture/Picture_0";
import Button_0 from "../button/Button_0";

interface IProps extends IActionFn {
  data: {
    type: string;
    typeId: number;
    uiList: any;
  };
  dragId: number | undefined;
  theme: string;
}

const DragUI = memo((props: IProps) => {
  const { theme, data, action, dragId } = props;

  // 组件列表渲染
  const uiList: { [id: string]: object } = {
    text: Text_0,
    picture: Picture_0,
    button: Button_0
  };

  // 调整组件尺寸
  const reSize = (size: any) => {
    action({ type: "APPLET_COMPONENT_DRAG_RESIZE", payload: size });
  };
  // 修改dragId
  const changeDragId = (id: number) => {
    action({ type: "APPLET_DRAG_ID_SET", payload: id });
  };
  // 删除移动组件
  const removeDragComponent = (id: number) => {
    action({ type: "APPLET_DRAG_REMOVE", payload: id });
  };

  const styles = css`
    user-select: none;
    pointer-events: none;
    overflow: hidden;
  `;

  return (
    <Fragment>
      {data.uiList.map((data: any, index: number) => {
        const Component: any = uiList[data.type];
        return (
          <Fragment key={index}>
            {dragId === index ? (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item
                      key="3"
                      onClick={() => removeDragComponent(index)}
                    >
                      删除
                    </Menu.Item>
                  </Menu>
                }
                trigger={["contextMenu"]}
              >
                <span style={{ userSelect: "none" }}>
                  <DragRef
                    dataList={props.data.uiList}
                    position={data}
                    editId={dragId}
                    reSize={data => reSize(data)}
                  >
                    <Component data={data} theme={theme} absolute={true} />
                  </DragRef>
                </span>
              </Dropdown>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: `${data.top}px`,
                  left: `${data.left}px`
                }}
                onClick={() => changeDragId(index)}
              >
                <Component
                  css={styles}
                  data={data}
                  theme={theme}
                  absolute={true}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { theme, dragId } = state.appletStore;
    return {
      dragId: dragId,
      theme: theme
    };
  },
  { action }
)(DragUI);
