import React, { memo, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import { Button, Toolbar } from "@material-ui/core";
import Logo from "../component/Logo";
import SideRender from "../package/applet-made/SideRender";
import EditRender from "../package/applet-made/EditRender";
export default memo(() => {
    // antd 组件解构
    const { Header, Content, Sider } = Layout;
    // 样式
    const useStyles = makeStyles((theme) => ({
        // layout
        root: { height: "100vh", overflow: "hidden" },
        // header
        header: {
            padding: 0
        },
        bar: {
            height: "64px",
            lineHeight: "64px",
            overflow: "hidden",
            background: "transparent"
        },
        grow: {
            flexGrow: 1
        },
        menuSpace: {
            marginRight: theme.spacing(2)
        },
        quite: {
            marginLeft: theme.spacing(2)
        },
        icon: {
            width: 20,
            height: 20,
            marginRight: theme.spacing(1)
        },
        button: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "#fff"
        },
        divider: {
            background: "red !important"
        },
        // side
        side: {
            position: "relative",
            zIndex: theme.zIndex.appBar + 1,
            boxShadow: theme.shadows[15],
            background: "#273543"
        },
        side_icon: {
            width: 21,
            height: 21,
            verticalAlign: "-0.15em",
            fill: "currentColor",
            overflow: "hidden"
        },
        side_item: {
            boxShadow: "none",
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
        // select
        select: {},
        // edit
        edit: {},
        // content
        content: {
            padding: "24px"
        },
        canvas: {
            width: "340px",
            height: "550px",
            background: "white",
            margin: "auto",
            marginTop: "100px"
        }
    }));
    const classes = useStyles();
    // side menu 数据记录，默认 text
    const [side, setSide] = useState("text");
    const changeSide = ({ key }) => {
        setSide(key);
    }; //menu item 点击时回调
    const item = [
        {
            desc: "文本",
            icon: (React.createElement("svg", { className: classes.side_icon, "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#iconfile" }))),
            type: "text"
        },
        {
            desc: "按钮",
            icon: (React.createElement("svg", { className: classes.side_icon, "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#iconanniu" }))),
            type: "button"
        },
        {
            desc: "图片",
            icon: (React.createElement("svg", { className: classes.side_icon, "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#icontupian" }))),
            type: "picture"
        },
        {
            desc: "商品",
            icon: (React.createElement("svg", { className: classes.side_icon, "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#iconshangpin" }))),
            type: "commodity"
        },
        {
            desc: "插件",
            icon: (React.createElement("svg", { className: classes.side_icon, "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#iconxingzhuanggongnengtubiao-" }))),
            type: "plugin"
        }
    ]; // 侧边项 数据
    return (React.createElement(Fragment, null,
        React.createElement(Sider, { width: 80, className: classes.side },
            React.createElement(Logo, null),
            React.createElement(Menu, { theme: "dark", selectedKeys: [side], onClick: changeSide }, item.map((data) => {
                return (React.createElement(Menu.Item, { key: data.type, className: classes.side_item },
                    data.icon,
                    React.createElement("div", null, data.desc)));
            }))),
        React.createElement(Layout, null,
            React.createElement(Header, { className: classes.header },
                React.createElement(Toolbar, { variant: "dense", className: classes.bar },
                    React.createElement(Link, { to: "/applet-admin" },
                        React.createElement(Button, { className: classes.menuSpace },
                            React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                                React.createElement("use", { xlinkHref: "#icongengduo" })),
                            "\u5C0F\u7A0B\u5E8F\u7BA1\u7406")),
                    React.createElement(Button, { className: classes.menuSpace },
                        React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                            React.createElement("use", { xlinkHref: "#iconmoban" })),
                        "\u6A21\u677F\u4E2D\u5FC3"),
                    React.createElement(Button, { className: classes.menuSpace },
                        React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                            React.createElement("use", { xlinkHref: "#iconbangzhu" })),
                        "\u5E2E\u52A9"),
                    React.createElement("div", { className: classes.grow }),
                    React.createElement(Button, { variant: "contained", className: `${classes.menuSpace} ${classes.button}` },
                        React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                            React.createElement("use", { xlinkHref: "#iconfabu" })),
                        "\u53D1\u5E03"),
                    React.createElement(Button, { className: classes.menuSpace },
                        React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                            React.createElement("use", { xlinkHref: "#iconyulan" })),
                        "\u9884\u89C8"),
                    React.createElement(Button, { className: classes.menuSpace },
                        React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                            React.createElement("use", { xlinkHref: "#iconfuzhi" })),
                        "\u4FDD\u5B58"),
                    React.createElement(Divider, { type: "vertical", className: classes.divider }),
                    React.createElement(Link, { to: "/" },
                        React.createElement(Button, { className: classes.quite },
                            React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon} icon` },
                                React.createElement("use", { xlinkHref: "#icontuichu" })),
                            "\u9000\u51FA")))),
            React.createElement(Layout, { className: classes.content },
                React.createElement(Sider, { width: 272 },
                    React.createElement(SideRender, { type: side })),
                React.createElement(Content, null,
                    React.createElement("div", { className: classes.canvas })),
                React.createElement(Sider, { width: 336 },
                    React.createElement(EditRender, null))))));
});
//# sourceMappingURL=Applet.js.map