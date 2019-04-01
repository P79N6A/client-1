import React, { memo } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import ThemeEdit from "./theme/ThemeEdit";
const EditRender = memo((props) => {
    const { applet } = props;
    // 样式
    const useStyles = makeStyles((theme) => ({
        layout: {
            overflow: "hidden"
        }
    }));
    const classes = useStyles();
    // 列表项
    const item = {
        theme: React.createElement(ThemeEdit, null),
        text: React.createElement("div", null, "text"),
        picture: React.createElement("div", null, "picture"),
        plugin: React.createElement("div", null, "plugin"),
        button: React.createElement("div", null, "button"),
        commodity: React.createElement("div", null, "commodity")
    };
    return React.createElement("div", { className: classes.layout }, item[applet.edit_type]);
});
const mapStateToProps = state => {
    return {
        applet: state.applet
    };
};
export default connect(mapStateToProps, {})(EditRender);
//# sourceMappingURL=EditRender.js.map