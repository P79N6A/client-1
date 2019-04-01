import React, { memo, Fragment, useState } from "react";
import { connect } from "react-redux";
import { Icon, List } from "antd";
import { HuePicker } from "react-color";
import { xor, map, keys } from "lodash";
import { Fab, CardHeader, Card, TextField, Snackbar, Slide, SnackbarContent, DialogTitle, DialogContentText, DialogContent, Dialog, DialogActions, Button, FormLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { action } from "../../../model/action";
import produce from "immer";
const mapStateToProps = state => {
    return {
        applet: state.applet
    };
};
export default connect(mapStateToProps, { action })(memo((props) => {
    // 解析数据
    const { action, applet } = props;
    // 全局提醒
    const [snackbar, setSnackbar] = useState({
        use: false,
        msg: ""
    });
    function TransitionLeft(props) {
        return React.createElement(Slide, Object.assign({}, props, { direction: "left" }));
    }
    const handleClose = () => {
        setSnackbar({
            use: false,
            msg: ""
        });
    };
    // 模态框设置
    const [model, setModel] = useState(true);
    const modelOpen = () => {
        setModel(true);
    };
    const modelClose = () => {
        setModel(false);
    };
    // 更新色值
    const changeColor = color => {
        action({
            type: "theme",
            payload: {
                data: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
            }
        });
    };
    const inputChangeColor = color => {
        action({
            type: "theme",
            payload: {
                data: color.target.value
            }
        });
    };
    // nav 数据操作
    const navEdit = (type, data) => {
        switch (type) {
            case "up":
                if (data !== 0) {
                    action({
                        type: "nav",
                        payload: {
                            data: produce(applet.nav, draft => {
                                [draft[data], draft[data - 1]] = [
                                    draft[data - 1],
                                    draft[data]
                                ];
                            })
                        }
                    });
                }
                else {
                    setSnackbar({
                        use: true,
                        msg: "已至最顶层"
                    });
                }
                break;
            case "down":
                if (data < applet.nav.length - 1) {
                    action({
                        type: "nav",
                        payload: {
                            data: produce(applet.nav, draft => {
                                [draft[data + 1], draft[data]] = [
                                    draft[data],
                                    draft[data + 1]
                                ];
                            })
                        }
                    });
                }
                else {
                    setSnackbar({
                        use: true,
                        msg: "已至最下层"
                    });
                }
                break;
            case "del":
                return action({
                    type: "nav",
                    payload: {
                        data: produce(applet.nav, draft => {
                            draft.splice(data, 1);
                        })
                    }
                });
            case "change":
                return action({
                    type: "nav",
                    payload: {
                        data: "change"
                    }
                });
        }
    };
    // page 页面操作
    const pageEdit = (type, data) => {
        switch (type) {
            case "del":
                return action({
                    type: "pages",
                    payload: {
                        data: produce(applet.pages, draft => {
                            delete draft[data];
                        })
                    }
                });
            case "change":
                return action({
                    type: "nav",
                    payload: {
                        data: "change"
                    }
                });
        }
    };
    // 样式
    const useStyles = makeStyles((theme) => ({
        theme_card: {
            boxShadow: theme.shadows[0],
            padding: "8px 16px"
        },
        nav_card: {
            boxShadow: theme.shadows[0],
            padding: "8px 16px",
            margin: "8px 0"
        },
        page_card: {
            boxShadow: theme.shadows[0],
            padding: "8px 16px"
        },
        add: {
            alignCenter: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: -15
        },
        icon: {
            color: "white",
            width: 21,
            height: 21,
            verticalAlign: "-0.15em",
            fill: "currentColor",
            overflow: "hidden"
        },
        snack: {
            backgroundColor: "#ffa000"
        }
    }));
    const classes = useStyles();
    return (React.createElement(Fragment, null,
        React.createElement(Card, { className: classes.theme_card },
            React.createElement(CardHeader, { subheader: "\u4E3B\u9898\u8272", action: React.createElement(TextField, { label: "\u8272\u503C", type: "search", value: applet.theme, onChange: inputChangeColor }) }),
            React.createElement(HuePicker, { width: "300px", color: applet.theme, onChange: changeColor })),
        React.createElement(Card, { className: classes.nav_card },
            React.createElement(CardHeader, { action: React.createElement(Fab, { color: "primary", "aria-label": "Add", size: "small" },
                    React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon}` },
                        React.createElement("use", { xlinkHref: "#iconicon-" }))), subheader: "\u5BFC\u822A\u9875" }),
            React.createElement(List, { size: "small", itemLayout: "horizontal", dataSource: applet.nav, renderItem: (item, index) => (React.createElement(List.Item, { actions: [
                        React.createElement(Icon, { type: "up", key: 1, onClick: navEdit.bind(this, "up", index) }),
                        React.createElement(Icon, { type: "down", key: 2, onClick: navEdit.bind(this, "down", index) }),
                        React.createElement(Icon, { type: "edit", key: 3, onClick: modelOpen }),
                        React.createElement(Icon, { type: "delete", key: 4, onClick: navEdit.bind(this, "del", index) })
                    ] },
                    React.createElement(List.Item.Meta, { avatar: React.createElement(Icon, { type: item.icon }), title: React.createElement("a", { href: "https://ant.design" }, item.title) }))) })),
        React.createElement(Card, { className: classes.page_card },
            React.createElement(CardHeader, { action: React.createElement(Fab, { color: "primary", "aria-label": "Add", size: "small" },
                    React.createElement("svg", { "aria-hidden": "true", className: `${classes.icon}` },
                        React.createElement("use", { xlinkHref: "#iconicon-" }))), subheader: "\u9644\u5C5E\u9875" }),
            React.createElement(List, { size: "small", itemLayout: "horizontal", dataSource: xor(keys(applet.pages), map(applet.nav, "page_id")), renderItem: (item) => (React.createElement(List.Item, { actions: [
                        React.createElement(Icon, { type: "edit", key: 1 }),
                        React.createElement(Icon, { type: "delete", key: 2, onClick: pageEdit.bind(this, "del", item.page_id) })
                    ] },
                    React.createElement(List.Item.Meta, { avatar: React.createElement(Icon, { type: item.icon }), title: React.createElement("a", { href: "https://ant.design" }, item.title) }))) })),
        React.createElement(Snackbar, { key: snackbar.msg, anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            }, open: snackbar.use, TransitionComponent: TransitionLeft, onClose: handleClose, autoHideDuration: 1200 },
            React.createElement(SnackbarContent, { className: classes.snack, "aria-describedby": "client-snackbar", message: React.createElement("span", { id: "client-snackbar" },
                    React.createElement(Icon, { type: "exclamation-circle", style: { marginRight: 8 } }),
                    snackbar.msg) })),
        React.createElement(Dialog, { open: model, onClose: modelClose, "aria-labelledby": "form-dialog-title" },
            React.createElement(DialogTitle, { id: "form-dialog-title" }, "\u521B\u5EFA\u9875\u9762"),
            React.createElement(DialogContent, { style: { zIndex: 100000 } },
                React.createElement(DialogContentText, null, "\u586B\u5199\u4E0B\u5217\u8868\u5355\u540E\uFF0C\u5373\u53EF\u521B\u5EFA\u9875\u9762"),
                React.createElement(FormControl, { style: { width: "100%" } },
                    React.createElement(FormLabel, null, "\u57FA\u7840\u8BBE\u7F6E"),
                    React.createElement(TextField, { autoFocus: true, margin: "dense", id: "name", label: "\u6807\u9898", fullWidth: true }),
                    React.createElement(TextField, { autoFocus: true, margin: "dense", id: "name", label: "\u56FE\u6807", fullWidth: true }))),
            React.createElement(DialogActions, null,
                React.createElement(Button, { onClick: modelClose, color: "primary" }, "\u5173\u95ED"),
                React.createElement(Button, { onClick: modelClose, color: "primary" }, "\u521B\u5EFA")))));
}));
//# sourceMappingURL=ThemeEdit.js.map