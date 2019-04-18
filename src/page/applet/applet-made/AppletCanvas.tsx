import { css } from "@emotion/core";
import { Button, Icon, Popconfirm, Tooltip } from "antd";
import { debounce } from "lodash";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import ButtonUI from "../../../lib/applet-made/common/button/ButtonUI";
import DragUI from "../../../lib/applet-made/common/drag/DragUI";
import FormUI from "../../../lib/applet-made/common/form/FormUI";
import NavigationUI from "../../../lib/applet-made/common/navigation/NavigationUI";
import PictureUI from "../../../lib/applet-made/common/picture/PictureUI";
import ShowUI from "../../../lib/applet-made/common/show/ShowUI";
import TextUI from "../../../lib/applet-made/common/text/TextUI";
import VideoUI from "../../../lib/applet-made/common/video/VideoUI";
import NavUI from "../../../lib/applet-made/NavUI";
import { action } from "../../../store/action";
import { IRedux } from "../../../store/typing";

const AppletCanvas = memo((props: IRedux) => {
  const { applet, action } = props;
  const styles = {
    // 画布
    root: css`
      width: 378px;
      height: 600px;
      margin: 80px auto auto;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0 0 15px;
      overflow: hidden;
      cursor: pointer;
    `,
    header: css`
      height: 65px;
      width: 380px;
      background: ${applet.theme};
    `,
    title: css`
      margin-top: -35px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    `,
    canvas: css`
      height: 485px;
      overflow: auto;
      width: 100%;
      scrollbar-arrow-color: transparent;
      scrollbar-face-color: transparent;
      scrollbar-highlight-color: transparent;
      scrollbar-shadow-color: transparent;
      scrollbar-darkshadow-color: transparent;
      scrollbar-track-color: transparent;
      scrollbar-base-color: transparent;
      &::-webkit-scrollbar {
        border: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
      &::-webkit-scrollbar-button {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-track-piece {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
      }
      &::-webkit-resizer {
        display: none;
      }
    `,
    uiItem: css`
      position: relative;
    `,
    editUItem: css`
      position: relative;
      outline: 1px black dashed;
    `,
    uiItemHelp: css`
      position: absolute;
      top: 0;
      left: 319px;
    `
  };

  // ui项设置管理
  const onEnterHover = uIndex => {
    action({ type: "changeUIndex", payload: uIndex });
  };

  // 删除ui 组件
  const uiDel = (index: number) => {
    action({ type: "uiDel", payload: index });
  };
  // 展示组件列表集合
  const uiList = {
    text: TextUI,
    button: ButtonUI,
    picture: PictureUI,
    drag: DragUI,
    video: VideoUI,
    navigation: NavigationUI,
    show: ShowUI,
    form: FormUI
  };

  // 组件拖动结束回调
  const onSortEnd = ({ oldIndex, newIndex }) => {
    action({ type: "uiReSite", payload: [oldIndex, newIndex] });
  };

  // 显示编辑页
  const openEditShow = () => {
    action({ type: "changeEditShow", payload: true });
  };

  // 拖动渲染
  const SortableItem = SortableElement(({ data, index }) => {
    const Component = uiList[data.type];
    return (
      <div
        css={applet.uIndex === index ? styles.editUItem : styles.uiItem}
        onMouseDown={() => onEnterHover(index)}
      >
        <Component theme={applet.theme} data={data} key={index} />
        {applet.uIndex === index && (
          <div css={styles.uiItemHelp}>
            <Button.Group size={"small"}>
              <Tooltip placement="bottom" title={"编辑"}>
                <Button htmlType={"button"} onClick={openEditShow}>
                  <Icon type="edit" />
                </Button>
              </Tooltip>
              <Popconfirm
                onConfirm={() => uiDel(index)}
                placement="top"
                title={"确定删除此组件?"}
                okText="是"
                cancelText="否"
              >
                <Tooltip placement="bottom" title={"删除"}>
                  <Button htmlType={"button"}>
                    <Icon type="delete" />
                  </Button>
                </Tooltip>
              </Popconfirm>
            </Button.Group>
          </div>
        )}
      </div>
    );
  });

  const SortableList = SortableContainer(() => {
    return (
      <div>
        {applet.pages[applet.pageId].ui.map((data, index: number) => {
          return <SortableItem key={index} index={index} data={data} />;
        })}
      </div>
    );
  });

  // 普通模块渲染
  const ItemShow = () => {
    return (
      <Fragment>
        {applet.pages[applet.pageId].ui.map((data, index: number) => {
          const Component = uiList[data.type];
          return (
            <Fragment key={index}>
              {applet.uIndex === index ? (
                <div
                  css={styles.editUItem}
                  onMouseDown={() => onEnterHover(index)}
                >
                  <Component theme={applet.theme} data={data} key={index} />
                  <div css={styles.uiItemHelp}>
                    <Button.Group size={"small"}>
                      <Tooltip placement="bottom" title={"编辑"}>
                        <Button htmlType={"button"} onClick={openEditShow}>
                          <Icon type="edit" />
                        </Button>
                      </Tooltip>
                      <Popconfirm
                        onConfirm={() => uiDel(index)}
                        placement="top"
                        title={"确定删除此组件?"}
                        okText="是"
                        cancelText="否"
                      >
                        <Tooltip placement="bottom" title={"删除"}>
                          <Button htmlType={"button"}>
                            <Icon type="delete" />
                          </Button>
                        </Tooltip>
                      </Popconfirm>
                    </Button.Group>
                  </div>
                </div>
              ) : (
                <div onMouseDown={() => onEnterHover(index)}>
                  <Component theme={applet.theme} data={data} key={index} />
                </div>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <img
          src={"http://oss-96.oss-cn-hangzhou.aliyuncs.com/applet-heade.png"}
          alt={"phone"}
          height={65}
          width={380}
        />
        <div css={styles.title}>{applet.pages[applet.pageId].title}</div>
      </div>
      <div css={styles.canvas}>
        {applet.dragShow ? (
          <ItemShow />
        ) : (
          <SortableList onSortEnd={onSortEnd} lockAxis={"y"} />
        )}
      </div>
      <NavUI />
    </div>
  );
});

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(AppletCanvas);
