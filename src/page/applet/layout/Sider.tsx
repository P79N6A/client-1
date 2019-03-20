import React, { memo, useState } from "react";
import { Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";

/**
 *  Styles
 */
const useStyles = makeStyles(() => ({
  item: {
    height: "60px !important",
    lineHeight: 0,
    textAlign: "center",
    padding: "0 !important",

    "& i": {
      width: "100%"
    },

    "& div": {
      marginTop: "-16px"
    }
  }
}));

export default memo(() => {
  const classes = useStyles();

  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" className={classes.item}>
        <TextFieldsIcon />
        <div>文本</div>
      </Menu.Item>
      <Menu.Item key="2" className={classes.item}>
        <EditAttributesIcon />
        <div>按钮</div>
      </Menu.Item>
      <Menu.Item key="3" className={classes.item}>
        <PictureInPictureIcon />
        <div>图片</div>
      </Menu.Item>
      <Menu.Item key="4" className={classes.item}>
        <LocalMallIcon />
        <div>商品</div>
      </Menu.Item>
      <Menu.Item key="5" className={classes.item}>
        <SettingsInputCompositeIcon />
        <div>插件</div>
      </Menu.Item>
    </Menu>
  );
});
