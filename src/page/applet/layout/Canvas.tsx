import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper } from "@material-ui/core";
import TabBar from "../library/tabbar/TabBar";
import { Button } from "antd-mobile";

// 样式
const useStyles = makeStyles(() => ({
  layout: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
  },
  phone: {
    width: "380px",
    height: "600px",
    position: "relative"
  },
  title: {
    height: "60px",
    background: "#3f51b5",
    position: "relative"
  },
  title_text: {
    position: "absolute",
    top: 30,
    left: "44%",
    color: "white"
  },
  content: {
    height: "490px"
  }
}));

export default memo(() => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.layout}
      container
      alignContent={"center"}
      alignItems={"center"}
      justify={"center"}
    >
      <Paper className={classes.phone}>
        <div className={classes.title}>
          <img
            alt={"img"}
            src={"http://prodect.oss-cn-beijing.aliyuncs.com/1.png"}
          />
          <h3 className={classes.title_text}>小程序</h3>
        </div>
        <div className={classes.content} />
        <TabBar />
      </Paper>
    </Grid>
  );
});
