import React, { memo, Fragment } from "react";
import { Divider, Icon, Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import Logo from "../component/Logo";
import { Link } from "react-router-dom";
export default memo(() => {
    const { Header, Content, Sider } = Layout;
    // style
    const useStyles = makeStyles((theme) => ({
        // layout
        root: { height: "100vh", overflow: "hidden" },
        // header
        bar: {
            paddingLeft: 56,
            height: "64px",
            lineHeight: "64px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: `${theme.shadows[0]} !important`
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
            marginRight: theme.spacing(1)
        },
        button: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "#fff"
        },
        // side
        menu: {
            position: "relative",
            zIndex: 10000,
            boxShadow: `${theme.shadows[15]} !important`
        },
        menu_item: {
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
            padding: "16px"
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
    // side item data
    const item = [
        { desc: "文本", icon: React.createElement(Icon, { type: "font-colors" }), type: "text" },
        { desc: "按钮", icon: React.createElement(Icon, { type: "select" }), type: "button" },
        { desc: "图片", icon: React.createElement(Icon, { type: "picture" }), type: "picture" },
        { desc: "商品", icon: React.createElement(Icon, { type: "shopping" }), type: "commodity" },
        { desc: "插件", icon: React.createElement(Icon, { type: "deployment-unit" }), type: "plugin" }
    ];
    return (React.createElement(Fragment, null,
        React.createElement(Sider, { width: 80, className: classes.menu },
            React.createElement(Logo, null),
            React.createElement(Menu, { theme: "dark" }, item.map((data) => {
                return (React.createElement(Menu.Item, { key: data.type, className: classes.menu_item },
                    data.icon,
                    React.createElement("div", null, data.desc)));
            }))),
        React.createElement(Layout, null,
            React.createElement(Header, null,
                React.createElement(AppBar, { className: classes.bar },
                    React.createElement(Toolbar, { variant: "dense", className: classes.bar },
                        React.createElement(Link, { to: "/applet-admin" },
                            React.createElement(Button, { className: classes.menuSpace },
                                React.createElement(Icon, { type: "build", className: classes.icon }),
                                "\u5C0F\u7A0B\u5E8F\u7BA1\u7406")),
                        React.createElement(Button, { className: classes.menuSpace },
                            React.createElement(Icon, { type: "interation", className: classes.icon }),
                            "\u6A21\u677F\u4E2D\u5FC3"),
                        React.createElement(Button, { className: classes.menuSpace },
                            React.createElement(Icon, { type: "question-circle", className: classes.icon }),
                            "\u5E2E\u52A9"),
                        React.createElement("div", { className: classes.grow }),
                        React.createElement(Button, { variant: "contained", className: `${classes.menuSpace} ${classes.button}` },
                            React.createElement(Icon, { type: "bulb", className: classes.icon }),
                            "\u53D1\u5E03"),
                        React.createElement(Button, { className: classes.menuSpace },
                            React.createElement(Icon, { type: "eye", className: classes.icon }),
                            "\u9884\u89C8"),
                        React.createElement(Button, { className: classes.menuSpace },
                            React.createElement(Icon, { type: "save", className: classes.icon }),
                            "\u4FDD\u5B58"),
                        React.createElement(Divider, { type: "vertical", style: { color: "blue" } }),
                        React.createElement(Link, { to: "/" },
                            React.createElement(Button, { className: classes.quite },
                                React.createElement(Icon, { type: "poweroff", className: classes.icon }),
                                "\u9000\u51FA"))))),
            React.createElement(Layout, { className: classes.content },
                React.createElement(Sider, { width: 272, theme: "light" }),
                React.createElement(Content, null,
                    React.createElement("div", { className: classes.canvas })),
                React.createElement(Sider, { width: 336, theme: "light" })))));
});
//# sourceMappingURL=Applet.js.map