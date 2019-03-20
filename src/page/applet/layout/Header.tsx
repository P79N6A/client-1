import React, { memo } from "react";
import { Divider } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, Theme, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import UnarchiveIcon from "@material-ui/icons/Unarchive";

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

export default memo(() => {
  const classes = useStyles();
  return (
    <AppBar position={"fixed"}>
      <Toolbar variant="dense" className={classes.bar}>
        <img
          src={"https://g-hd.faisys.com/version2/image/hdLogoNew.png?v=555"}
          alt={"logo"}
        />
        <div className={classes.grow} />
        <img
          src={"http://prodect.oss-cn-beijing.aliyuncs.com/2.png"}
          alt={"vip"}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.menuSpace}
        >
          <UnarchiveIcon className={classes.icon} />
          发布
        </Button>
        <Button className={classes.menuSpace}>
          <SaveIcon className={classes.icon} /> 保存
        </Button>
        <Button className={classes.menuSpace}>
          <RemoveRedEyeIcon className={classes.icon} />
          预览
        </Button>
        <Divider type="vertical" />
        <Button className={classes.quite}>
          <PowerSettingsNewIcon className={classes.icon} />
          退出
        </Button>
      </Toolbar>
    </AppBar>
  );
});
