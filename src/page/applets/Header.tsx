import React, { memo } from "react";
import { Divider } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Theme, Button } from "@material-ui/core";
import {
  Help,
  Save,
  RemoveRedEye,
  PowerSettingsNew,
  Unarchive
} from "@material-ui/icons";
import Logo from "../../component/Logo";

const ApHeader = memo(() => {
  /**
   * Styles and Deconstruction
   */
  const useStyles = makeStyles((theme: Theme) => ({
    grow: {
      flexGrow: 1
    },
    bar: {
      height: "64px",
      lineHeight: "64px",
      overflow: "hidden"
    },
    menuSpace: {
      color: theme.palette.primary.contrastText,
      marginRight: theme.spacing(2)
    },
    quite: {
      color: theme.palette.primary.contrastText,
      marginLeft: theme.spacing(2)
    },
    icon: {
      marginRight: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar variant="dense" className={classes.bar}>
        <Logo />
        <div className={classes.grow} />
        <Button className={classes.menuSpace}>
          <Help className={classes.icon} />
          帮助
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.menuSpace}
        >
          <Unarchive className={classes.icon} />
          发布
        </Button>
        <Button className={classes.menuSpace}>
          <RemoveRedEye className={classes.icon} />
          预览
        </Button>
        <Button className={classes.menuSpace}>
          <Save className={classes.icon} /> 保存
        </Button>
        <Divider type="vertical" />
        <Button className={classes.quite}>
          <PowerSettingsNew className={classes.icon} />
          退出
        </Button>
      </Toolbar>
    </AppBar>
  );
});

export default ApHeader;
