import React, { memo, useState } from "react";
import { Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";

// 样式
const useStyles = makeStyles(() => ({
  layout: {
    height: "calc(100vh - 50px)"
  },
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
  /**
   * @description 记录侧边栏选择值，将记录值返回给父组件，组件内根据选择值显示不同样式
   * 侧边栏工具：
   * 1. 组件
   * 2. 插件
   * 3. 页面
   */
  const [select, setSelect] = useState("页面");
  // 更改侧边栏记录值，数据回调给父组件
  const onSelect = (name: string) => {
    setSelect(name);
    // TODO:数据回调给父组件
  };

  const classes = useStyles();

  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]} className={classes.layout}>
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
