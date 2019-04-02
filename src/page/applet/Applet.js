/**
 *  @description 小程序制作页
 *  @author 陈迎
 *  功能及完成度
 *  1. 布局样式 ✅
 *  2. 组件引用 ✅
 *  3. 数据请求
 *  4. 主题色 与 侧边项 在reducer 中变更 ✅
 * */
import React, { memo, Fragment } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CirclePicker } from "react-color";
import { Divider, Icon, Layout, Menu, Typography } from "antd";
import { Button, Toolbar } from "@material-ui/core";
import Logo from "../../component/Logo";
import Side from "./Side";
import { action } from "../../model/action";
import Canvas from "./Canvas";
import Edit from "./Edit";
/**
 * 获取reducer中的数据
 * @param state
 */
const mapStateToProps = state => {
    return {
        applet: state.applet
    };
};
/**
 * 导出函数
 */
export default connect(mapStateToProps, { action })(memo((props) => {
    //props 结构
    const { applet, action } = props;
    // antd 组件解构
    const { Header, Content, Sider } = Layout;
    // 样式
    const styles = {
        // 侧边栏
        sider: css `
        position: relative;
        z-index: 1101;
        box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
          0px 17px 26px 2px rgba(0, 0, 0, 0.14),
          0px 6px 32px 5px rgba(0, 0, 0, 0.12);
        background: #273543;
      `,
        sider_item: css `
        box-shadow: none;
        height: 60px !important;
        line-height: 0;
        text-align: center;
        padding: 0;

        & > i {
          width: 100%;
        }

        ,
        & > div {
          margin-top: -16px;
        }
      `,
        // 导航
        header: css `
        padding: 0;
        background: #fff;
        box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2),
          0px 15px 22px 2px rgba(0, 0, 0, 0.14),
          0px 6px 28px 5px rgba(0, 0, 0, 0.12);
        & > div {
          height: 64px;
          line-height: 64px;
          overflow: hidden;
          background: transparent;
        }
      `,
        button: css `
        margin-right: 8px !important;
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        border-radius: 3px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
      `,
        icon: css `
        margin-right: 8px;
      `,
        // 内容 及 画布
        content: css `
        padding: 6px 16px;
      `,
        canvas: css `
        width: 340px;
        height: 550px;
        background: white;
        margin: 100px auto 0;
      `
    };
    // side menu 数据记录，默认 text
    const item = [
        {
            desc: "模块",
            icon: React.createElement(Icon, { type: "appstore" }),
            type: "model"
        },
        {
            desc: "控件",
            icon: React.createElement(Icon, { type: "tool" }),
            type: "plugin"
        },
        {
            desc: "页面",
            icon: React.createElement(Icon, { type: "snippets" }),
            type: "pages"
        }
    ]; // 侧边项 数据
    const changeSide = ({ key }) => {
        action({ type: "sideChange", payload: { data: key } });
    };
    // 主题色更改
    const changeTheme = (color) => {
        action({ type: "themeChange", payload: { data: color.hex } });
    };
    return (React.createElement(Fragment, null,
        React.createElement(Sider, { width: 80, css: styles.sider },
            React.createElement(Logo, null),
            React.createElement(Menu, { theme: "dark", selectedKeys: [applet.side], onClick: changeSide }, item.map((data) => {
                return (React.createElement(Menu.Item, { key: data.type, css: styles.sider_item },
                    data.icon,
                    React.createElement("div", null, data.desc)));
            }))),
        React.createElement(Layout, null,
            React.createElement(Header, { css: styles.header },
                React.createElement(Toolbar, { variant: "dense" },
                    React.createElement(Link, { to: "/applet-admin" },
                        React.createElement(Button, null,
                            React.createElement(Typography.Text, null,
                                React.createElement(Icon, { css: styles.icon, type: "database" }),
                                "\u5C0F\u7A0B\u5E8F\u7BA1\u7406"))),
                    React.createElement(Button, null,
                        React.createElement(Typography.Text, null,
                            React.createElement(Icon, { css: styles.icon, type: "layout" }),
                            "\u6A21\u677F\u4E2D\u5FC3")),
                    React.createElement(Button, null,
                        React.createElement(Typography.Text, null,
                            React.createElement(Icon, { css: styles.icon, type: "customer-service" }),
                            "\u5E2E\u52A9")),
                    React.createElement("div", { style: { flexGrow: 1 } }),
                    React.createElement(CirclePicker, { width: "", color: applet.theme, onChange: changeTheme, colors: [
                            "#f44336",
                            "#e91e63",
                            "#9c27b0",
                            "#673ab7",
                            "#3f51b5",
                            "#2196f3",
                            "#cddc39",
                            "#ffeb3b",
                            "#ffc107"
                        ] }),
                    React.createElement("div", { style: { flexGrow: 1 } }),
                    React.createElement(Button, { variant: "contained", css: styles.button },
                        React.createElement(Typography.Text, { style: { color: "white" } },
                            React.createElement(Icon, { css: styles.icon, type: "rocket" }),
                            "\u53D1\u5E03")),
                    React.createElement(Button, null,
                        React.createElement(Typography.Text, null,
                            React.createElement(Icon, { css: styles.icon, type: "eye" }),
                            "\u9884\u89C8")),
                    React.createElement(Button, null,
                        React.createElement(Typography.Text, null,
                            React.createElement(Icon, { css: styles.icon, type: "save" }),
                            "\u4FDD\u5B58")),
                    React.createElement(Divider, { type: "vertical" }),
                    React.createElement(Link, { to: "/" },
                        React.createElement(Button, null,
                            React.createElement(Typography.Text, null,
                                React.createElement(Icon, { css: styles.icon, type: "export" }),
                                "\u9000\u51FA"))))),
            React.createElement(Layout, { css: styles.content },
                React.createElement(Sider, { width: 272 },
                    React.createElement(Side, null)),
                React.createElement(Content, null,
                    React.createElement("div", { css: styles.canvas },
                        React.createElement(Canvas, null))),
                React.createElement(Sider, { width: 336 },
                    React.createElement(Edit, null))))));
}));
//# sourceMappingURL=Applet.js.map