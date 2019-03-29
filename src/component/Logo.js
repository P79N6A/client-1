import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
export default memo(() => {
    // style
    const useStyles = makeStyles((theme) => ({
        logo: {
            height: 32,
            background: "rgba(255,255,255,.2)",
            margin: 16
        }
    }));
    const classes = useStyles();
    return React.createElement("div", { className: classes.logo });
});
//# sourceMappingURL=Logo.js.map