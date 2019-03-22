import React, { memo, Fragment } from "react";
import { size, xor } from "lodash";
import { connect } from "react-redux";
import { Empty } from "antd";
import { makeStyles } from "@material-ui/styles";
import { HuePicker } from "react-color";
import { Folder, Delete, Edit, Add } from "@material-ui/icons";
import {
  Paper,
  Theme,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Fab,
  Card,
  CardHeader
} from "@material-ui/core";

import { appletsAction } from "../../model/action";
import { IState } from "../../../../typing/model/model";

interface IProps {
  nav: string[];

  ui: {
    [name: string]: { icon: string; title: string; ui: object[]; desc: string };
  };

  appletsAction(type: string, name: string): void;
}

/**
 * Feature
 * 1. judge ui and nav length
 * 2. show component or  empty status
 */
const ThemeEdit = memo((props: IProps) => {
  const { appletsAction, ui, nav } = props;

  // styles
  const useStyles = makeStyles((theme: Theme) => ({
    margin: {
      margin: "6px 0 "
    },
    pageList: {
      height: "100vh",
      position: "relative"
    },
    add: {
      position: "absolute",
      top: -20,
      left: "43%"
    }
  }));
  const classes = useStyles();

  // components
  const NavList = () => {
    return (
      <Paper className={classes.margin}>
        {size(nav) ? (
          <List dense={true}>
            {nav.map((key, index: number) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <Folder />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ui[key].title} secondary={"管理"} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>

                    <IconButton aria-label="Delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Empty
            style={{ paddingTop: 30 }}
            description={<span>暂无页面</span>}
          />
        )}
      </Paper>
    );
  };
  const PageList = () => {
    // remove  nav key
    const list = xor(Object.keys(ui), nav);
    return (
      <Paper className={classes.pageList}>
        <Fab
          aria-label="Create"
          color="primary"
          size="small"
          className={classes.add}
        >
          <Add />
        </Fab>
        {size(xor(Object.keys(ui), nav)) ? (
          <List dense={true}>
            {list.map((key, index: number) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <Folder />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ui[key].title} secondary={"管理"} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="Delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Empty description={<span>暂无页面</span>} />
        )}
      </Paper>
    );
  };

  return (
    <Fragment>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="Recipe">R</Avatar>}
          title="主题色"
          subheader="主题色将运用至全局"
        />
        <HuePicker width={"335px"} />
      </Card>
      <NavList />
      <PageList />
    </Fragment>
  );
});

const mapStateToProps = (state: IState) => {
  const { ui, nav } = state.applets;
  return {
    ui,
    nav
  };
};

export default connect(
  mapStateToProps,
  { appletsAction }
)(ThemeEdit);
