import React, { memo, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Theme } from "@material-ui/core";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

// 样式
const useStyles = makeStyles(() => ({
  layout: {
    width: "100%",
    height: "calc(100vh - 50px)",
    position: "relative",
    overflow: "hidden"
  },
  tools: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 20,
    left: -20
  }
}));

export default memo(() => {
  // 多栏操作
  const [tool, setTool] = useState(false);
  const onTool = () => {
    setTool(!tool);
  };

  const classes = useStyles();

  const actions = [
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
    { icon: <DeleteIcon />, name: "Delete" }
  ];
  return (
    <Grid
      className={classes.layout}
      container
      alignContent={"center"}
      alignItems={"center"}
      justify={"center"}
    >
      {/*<div className={classes.tools}>*/}
      {/*<SpeedDial*/}
      {/*ariaLabel="SpeedDial example"*/}
      {/*icon={<DeleteIcon />}*/}
      {/*open={tool}*/}
      {/*direction={"left"}*/}
      {/*onClick={onTool}*/}
      {/*>*/}
      {/*{actions.map((action: any) => (*/}
      {/*<SpeedDialAction*/}
      {/*key={action.name}*/}
      {/*icon={action.icon}*/}
      {/*tooltipTitle={action.name}*/}
      {/*/>*/}
      {/*))}*/}
      {/*</SpeedDial>*/}
      {/*</div>*/}

      <Paper style={{ width: "340px", height: "550px" }} />
    </Grid>
  );
});
