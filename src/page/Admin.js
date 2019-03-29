import React, { memo, Fragment } from "react";
import { Icon, Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "../component/Logo";
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
        // content
        content: {
            padding: "16px"
        }
    }));
    const classes = useStyles();
    // side item data
    const item = [
        { desc: "概览", icon: React.createElement(Icon, { type: "font-colors" }), type: "text" },
        { desc: "商铺", icon: React.createElement(Icon, { type: "wechat" }), type: "tex" },
        { desc: "商品", icon: React.createElement(Icon, { type: "select" }), type: "button" },
        { desc: "订单", icon: React.createElement(Icon, { type: "picture" }), type: "picture" },
        { desc: "客户", icon: React.createElement(Icon, { type: "shopping" }), type: "commodity" },
        { desc: "数据", icon: React.createElement(Icon, { type: "deployment-unit" }), type: "plugin" },
        { desc: "资产", icon: React.createElement(Icon, { type: "deployment-unit" }), type: "plugin" },
        { desc: "营销", icon: React.createElement(Icon, { type: "deployment-unit" }), type: "plugin" }
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
                    React.createElement(Toolbar, { variant: "dense", className: classes.bar }))),
            React.createElement(Layout, { className: classes.content },
                React.createElement(Sider, { width: 272, theme: "light" }),
                React.createElement(Content, null)))));
});
//# sourceMappingURL=Admin.js.map