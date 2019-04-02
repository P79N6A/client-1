import React, { memo, useState } from "react";
import { TextField, DialogTitle, DialogContent, Dialog, DialogActions, Button, FormControl, FormControlLabel, Checkbox, Select, MenuItem, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export default memo((props) => {
    // 模态框设置
    const [model, setModel] = useState(true);
    const modelOpen = () => {
        setModel(true);
    };
    const modelClose = () => {
        setModel(false);
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
    return (React.createElement(Dialog, { open: model, onClose: modelClose, "aria-labelledby": "form-dialog-title" },
        React.createElement(DialogTitle, { id: "form-dialog-title" }, "\u521B\u5EFA\u9875\u9762"),
        React.createElement(DialogContent, null,
            React.createElement(FormControl, { style: { width: 336 } },
                React.createElement(TextField, { autoFocus: true, margin: "dense", id: "name", label: "\u6807\u9898", fullWidth: true }),
                React.createElement(FormControl, null,
                    React.createElement(InputLabel, { htmlFor: "age-simple" }, "Age"),
                    React.createElement(Select, { MenuProps: {
                            PaperProps: {
                                style: {
                                    maxHeight: 100,
                                    width: 250
                                }
                            }
                        }, inputProps: {
                            name: "age",
                            id: "age-simple"
                        } },
                        " ",
                        React.createElement(MenuItem, { value: 10 }, "Ten"),
                        React.createElement(MenuItem, { value: 20 }, "Twenty"),
                        React.createElement(MenuItem, { value: 30 }, "Thirty"),
                        React.createElement(MenuItem, { value: 10 }, "Ten"),
                        React.createElement(MenuItem, { value: 20 }, "Twenty"),
                        React.createElement(MenuItem, { value: 30 }, "Thirty"),
                        React.createElement(MenuItem, { value: 10 }, "Ten"),
                        React.createElement(MenuItem, { value: 20 }, "Twenty"),
                        React.createElement(MenuItem, { value: 30 }, "Thirty"),
                        React.createElement(MenuItem, { value: 10 }, "Ten"),
                        React.createElement(MenuItem, { value: 20 }, "Twenty"),
                        React.createElement(MenuItem, { value: 30 }, "Thirty"))),
                React.createElement(FormControlLabel, { style: { marginTop: 8 }, control: React.createElement(Checkbox, { value: "checkedC" }), label: "\u5BA2\u670D" }))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: modelClose, color: "primary" }, "\u5173\u95ED"),
            React.createElement(Button, { onClick: modelClose, color: "primary" }, "\u521B\u5EFA"))));
});
//# sourceMappingURL=PageForm.js.map