import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import ButtonUI from "../button/ButtonUI";
import PictureUI from "../picture/PictureUI";
import TextUI from "../text/TextUI";
import { action } from "../../../../models/action";
import { DragStore } from "../../model/reselect";
import {
  componentDragSetData,
  dragRemoveComponent,
  dragSet
} from "../../model/logic";
import { DragUIFace } from "../../types";
import DragRef from "../../../../tools/DragTools";
import { Dropdown, Icon, Menu, Tooltip } from "antd";

const DragUI = memo((props: DragUIFace) => {
  const { theme, data, action, components, dragIndex } = props;

  const styles = css`
    user-select: none;
    pointer-events: none;
    overflow: hidden;
  `;

  // 组件列表
  const uiList = {
    text: TextUI,
    picture: PictureUI,
    button: ButtonUI
  };
  // 拖拽组件的数据列表
  const dataList = [];
  let editId = 0;
  data.uiList.map((data, index) => {
    dataList.push(components[data]);
    if (dragIndex === data) {
      editId = index;
    }
  });

  return (
    <Fragment>
      {data.uiList.map((data, index) => {
        const Component = uiList[components[data].type];
        return (
          <Fragment key={index}>
            {dragIndex === data ? (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item
                      key="3"
                      onClick={() => dragRemoveComponent(action, index, data)}
                    >
                      删除
                    </Menu.Item>
                  </Menu>
                }
                trigger={["contextMenu"]}
              >
                <span style={{ userSelect: "none" }}>
                  <DragRef
                    dataList={dataList}
                    position={components[data]}
                    editId={editId}
                    reSize={data =>
                      componentDragSetData(action, {
                        ...data
                      })
                    }
                  >
                    <Component
                      data={components[data]}
                      theme={theme}
                      absolute={true}
                    />
                  </DragRef>
                </span>
              </Dropdown>
            ) : (
              <div
                onMouseDown={() => dragSet(action, data)}
                style={{
                  position: "absolute",
                  top: `${components[data].top}px`,
                  left: `${components[data].left}px`
                }}
              >
                <Component
                  css={styles}
                  data={components[data]}
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
  state => DragStore(state),
  { action }
)(DragUI);
