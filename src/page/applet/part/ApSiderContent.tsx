import React, { memo, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Paper,
  Theme,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Divider
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// 样式
const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    width: "100%",
    height: "calc(100vh - 50px)",
    overflow: "hidden",
    padding: "4px 10px 0 10px "
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export default memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Paper>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="搜索..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
      </Paper>
      <Paper style={{ marginTop: 10 }}>
        <List dense>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt={"example"}
                src={`http://marketing.xiuzan.com/src/images/form/text-2x.png`}
              />
            </ListItemAvatar>
            <ListItemText primary={`默认样式：显示文本内容`} />
            <ListItemSecondaryAction>
              <KeyboardArrowRightIcon />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
      <Paper style={{ marginTop: 10, height: "800px" }} />
    </div>
  );
});
