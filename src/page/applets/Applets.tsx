import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import {
  TextFields,
  EditAttributes,
  PictureInPicture,
  LocalMall,
  SettingsInputComposite
} from "@material-ui/icons";
import ApHeader from "./Header";
import ApSelect from "./Select";
import ApEdit from "./Edit";
import ApCanvas from "./Canvas";

/**
 * applet made page
 * features
 * 1. layout
 * 2. state controller
 */
export default memo(() => {
  /**
   * Styles and Deconstruction
   */
  const { Header, Sider, Content } = Layout;
  const useStyles = makeStyles(() => ({
    layout: {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      minWidth: "1100px",
      minHeight: "900px"
    },
    header: {
      background: `transparent !important`
    },
    side: {
      background: "transparent !important",
      position: "relative"
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
    },
    page_item: {
      height: "60px !important",
      lineHeight: 0,
      textAlign: "center",
      padding: "0 !important",
      marginTop: "8px !important",

      "& i": {
        width: "100%"
      },

      "& div": {
        marginTop: "-16px"
      }
    }
  }));
  const classes = useStyles();

  /**
   * sider features
   */
  const [sider, setSider] = useState("text");
  const onSider = (name: string) => {
    setSider(name);
  };
  const item: Array<{ type: string; icon: object; desc: string }> = [
    { desc: "文本", icon: <TextFields />, type: "text" },
    { desc: "按钮", icon: <EditAttributes />, type: "button" },
    { desc: "图片", icon: <PictureInPicture />, type: "picture" },
    { desc: "商品", icon: <LocalMall />, type: "commodity" },
    { desc: "插件", icon: <SettingsInputComposite />, type: "plugin" }
  ];

  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <ApHeader />
      </Header>
      <Layout>
        <Sider width={80} theme={"light"}>
          <Menu selectedKeys={[sider]}>
            {item.map((data: { desc: string; icon: object; type: string }) => {
              return (
                <Menu.Item
                  key={data.type}
                  className={classes.item}
                  onClick={() => onSider(data.type)}
                >
                  {data.icon}
                  <div>{data.desc}</div>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Sider width={320} theme={"light"} className={classes.side}>
          <ApSelect type={sider} />
        </Sider>
        <Content>
          <ApCanvas />
        </Content>
        <Sider width={350} theme={"light"} className={classes.side}>
          <ApEdit />
        </Sider>
      </Layout>
    </Layout>
  );
});
