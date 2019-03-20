import React, { memo, Fragment } from "react";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ThemeEdit from "../library/theme/ThemeEdit";
import ColorLensIcon from "@material-ui/icons/ColorLens";

const useStyles = makeStyles(() => ({
  tools: {
    position: "absolute",
    top: 50,
    left: -100
  }
}));

export default memo(() => {
  const classes = useStyles();

  return (
    <Fragment>
      <Fab color="primary" aria-label="theme" className={classes.tools}>
        <ColorLensIcon />
      </Fab>
      <ThemeEdit />
    </Fragment>
  );
});
