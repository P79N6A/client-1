import React, { memo } from "react";
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TextSelect from "./text/TextSelect";
import { Card, Icon } from "antd";
export default memo((props) => {
    const { type } = props;
    // 样式
    const useStyles = makeStyles((theme) => ({
        layout: {
            overflow: "hidden"
        },
        card_item: {
            width: "25%",
            textAlign: "center"
        }
    }));
    const classes = useStyles();
    // item data source
    const item = {
        model: React.createElement(TextSelect, null),
        picture: React.createElement("div", null, "picture"),
        plugin: React.createElement("div", null, "plugin"),
        button: React.createElement("div", null, "button"),
        commodity: React.createElement("div", null, "commodity")
    };
    const gridStyle = {};
    return (React.createElement("div", { className: classes.layout },
        React.createElement(ExpansionPanel, { expanded: true },
            React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(Icon, { type: "up", style: { fontSize: 12 } }), "aria-controls": "panel1bh-content", id: "panel1bh-header" },
                React.createElement(Typography, null, "\u57FA\u7840\u6A21\u5757")),
            React.createElement(ExpansionPanelDetails, null,
                React.createElement(Card, null,
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item")))),
        React.createElement(ExpansionPanel, { expanded: true },
            React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(Icon, { type: "up", style: { fontSize: 12 } }), "aria-controls": "panel2bh-content", id: "panel2bh-header" },
                React.createElement(Typography, null, "\u4EA7\u54C1\u6A21\u5757")),
            React.createElement(ExpansionPanelDetails, null,
                React.createElement(Card, null,
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item")))),
        React.createElement(ExpansionPanel, { expanded: true },
            React.createElement(ExpansionPanelSummary, { expandIcon: React.createElement(Icon, { type: "up", style: { fontSize: 12 } }), "aria-controls": "panel3bh-content", id: "panel3bh-header" },
                React.createElement(Typography, null, "\u4E92\u52A8\u6A21\u5757")),
            React.createElement(ExpansionPanelDetails, null,
                React.createElement(Card, null,
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"),
                    React.createElement(Card.Grid, { className: classes.card_item }, "item"))))));
});
//# sourceMappingURL=SideRender.js.map