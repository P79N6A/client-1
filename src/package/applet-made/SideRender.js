import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
import TextSelect from "./text/TextSelect";
export default memo((props) => {
    const { type } = props;
    // 样式
    const useStyles = makeStyles((theme) => ({
        layout: {
            overflow: "hidden"
        }
    }));
    const classes = useStyles();
    // item data source
    const item = {
        text: React.createElement(TextSelect, null),
        picture: React.createElement("div", null, "picture"),
        plugin: React.createElement("div", null, "plugin"),
        button: React.createElement("div", null, "button"),
        commodity: React.createElement("div", null, "commodity")
    };
    return React.createElement("div", { className: classes.layout }, item[type]);
});
//# sourceMappingURL=SideRender.js.map