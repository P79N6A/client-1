import React, { memo, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { InputBase, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Card } from "@material-ui/core";
import { $$text } from "./database";
import { action } from "../../../model/action";
const TextSelect = memo((props) => {
    const { action } = props;
    // 样式
    const useStyles = makeStyles((theme) => ({
        list: {
            background: "white",
            marginBottom: "8px"
        },
        icon: {
            width: 21,
            height: 21,
            verticalAlign: "-0.15em",
            fill: "currentColor",
            overflow: "hidden"
        },
        search: {
            boxShadow: theme.shadows[0],
            border: "none",
            position: "relative",
            marginRight: theme.spacing(2),
            width: "100%",
            marginTop: 10
        },
        searchIcon: {
            width: theme.spacing(7),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        input: {
            color: "inherit",
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create("width"),
            width: "100%",
            fontSize: 14
        },
        card: {
            boxShadow: theme.shadows[0],
            border: "none",
            marginTop: 8
        }
    }));
    const classes = useStyles();
    // 添加ui数据至reducer中
    const onAdd = (name) => {
        action({
            type: "ui_add",
            payload: { data: $$text(`${new Date().getTime()}`, name) }
        });
    };
    return (React.createElement(Fragment, null,
        React.createElement(List, { dense: true, className: classes.list },
            React.createElement(ListItem, { button: true, onClick: onAdd.bind(this, "default") },
                React.createElement(ListItemAvatar, null,
                    React.createElement(Avatar, { alt: "example", src: `http://marketing.xiuzan.com/src/images/form/text-2x.png` })),
                React.createElement(ListItemText, { primary: `默认样式` }),
                React.createElement(ListItemSecondaryAction, null,
                    React.createElement("svg", { className: classes.icon, "aria-hidden": "true" },
                        React.createElement("use", { xlinkHref: "#iconyoujiantou" }))))),
        React.createElement(Card, { className: classes.search },
            React.createElement("div", { className: classes.searchIcon },
                React.createElement("svg", { className: classes.icon, "aria-hidden": "true" },
                    React.createElement("use", { xlinkHref: "#iconhuabanfuben" }))),
            React.createElement(InputBase, { placeholder: "\u641C\u7D22...", className: classes.input })),
        React.createElement(Card, { className: classes.card })));
});
export default connect(null, { action })(TextSelect);
//# sourceMappingURL=TextSelect.js.map