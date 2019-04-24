import { css } from "@emotion/core";
import { Drawer } from "antd";
import React, { memo } from "react";
import { TwitterPicker } from "react-color";
import { connect } from "react-redux";
import { action } from "../../../models/action";
import TextEdit from "./text/TextEdit";
import ButtonEdit from "./button/ButtonEdit";
import PictureEdit from "./picture/PictureEdit";
import { setDrawerLogic } from "../model/logic";
import { AppletMadeEditStore } from "../model/reselect";
import { AppletMadeEditFace } from "../types";
import DragEdit from "./drag/DragEdit";
import VideoEdit from "./video/VideoEdit";
import NavigationEdit from "./navigation/NavigationEdit";
import ShowEdit from "./show/ShowEdit";
import FormEdit from "./form/FormEdit";

const styles = {
  title: css`
    height: 32px;
    line-height: 32px;
  `
};

const AppletMadeEdit = memo((props: AppletMadeEditFace) => {
  const { action, drawer, drawerType } = props;

  // 根据名称显示相应组件
  const EditComponent = () => {
    switch (drawerType) {
      case "text":
        return <TextEdit />;
      case "button":
        return <ButtonEdit />;
      case "picture":
        return <PictureEdit />;
      case "drag":
        return <DragEdit />;
      case "video":
        return <VideoEdit />;
      case "navigation":
        return <NavigationEdit />;
      case "show":
        return <ShowEdit />;
      case "form":
        return <FormEdit />;
      default:
        return <div />;
    }
  };

  return (
    <Drawer
      title={<div css={styles.title}>组件编辑</div>}
      onClose={() => setDrawerLogic(action, false)}
      closable={true}
      visible={drawer}
      width={355}
      mask={false}
    >
      {EditComponent()}
    </Drawer>
  );
});

export default connect(
  state => AppletMadeEditStore(state),
  { action }
)(AppletMadeEdit);
