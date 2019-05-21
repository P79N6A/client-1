import React, { memo, Fragment } from "react";
import { connect } from "react-redux";
import { IAppletStore } from "../model/store";
import ButtonEdit from "./button/ButtonEdit";
import { Drawer } from "antd";
import { css } from "@emotion/core";
import { action, IActionFn } from "../../../models/action";
import DragEdit from "./drag/DragEdit";
import TextEdit from "./text/TextEdit";
import PictureEdit from "./picture/PictureEdit";
import VideoEdit from "./video/VideoEdit";
import GuideEdit from "./guide/GuideEdit";
import ShowEdit from "./show/ShowEdit";
import FormEdit from "./form/FormEdit";

interface IProps extends IActionFn {
  keyId: number | string;
  drawerType: string | undefined;
  children: object;
  componentId: any;
}
const RenderEdit = memo((props: IProps) => {
  const { drawerType, children, keyId, componentId, action } = props;
  // 关闭
  const close = () => {
    action({ type: "APPLET_COMPONENT_ID_RESET", payload: undefined });
  };
  // 根据名称显示相应组件
  const EditComponent = () => {
    switch (drawerType) {
      case "button":
        return <ButtonEdit />;
      case "drag":
        return <DragEdit />;
      case "text":
        return <TextEdit />;
      case "picture":
        return <PictureEdit />;
      case "video":
        return <VideoEdit />;
      case "guide":
        return <GuideEdit />;
      case "show":
        return <ShowEdit />;
      case "form":
        return <FormEdit />;
      default:
        return <span style={{ display: "none" }} />;
    }
  };

  const styles = {
    // 常用组件
    theme: css`
      margin-bottom: 8px !important;
      & > div {
        border: none !important;
        box-shadow: none !important;
        & > div {
          padding: 0 !important;
        }
      }
    `,
    title: css`
      height: 32px;
      line-height: 32px;
    `
  };

  return (
    <Fragment>
      <span>{children} </span>
      <Drawer
        title={<div css={styles.title}>组件编辑</div>}
        onClose={close}
        closable={true}
        visible={keyId === componentId}
        width={375}
        mask={false}
      >
        {EditComponent()}
      </Drawer>
    </Fragment>
  );
});

export default connect(
  (state: { appletStore: IAppletStore }) => {
    const { drawerType, componentId } = state.appletStore;
    return {
      drawerType: drawerType,
      componentId: componentId
    };
  },
  { action }
)(RenderEdit);
