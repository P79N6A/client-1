import React, { memo, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import {
  Theme,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Card
} from "@material-ui/core";
import { $$text } from "./database";
import { action } from "../../../model/action";

interface IProps {
  action({ type: string, payload: any }): void;
}

const TextSelect = memo((props: IProps) => {
  const { action } = props;
  // 样式
  const useStyles = makeStyles((theme: Theme) => ({
    list: {
      background: "white",
      marginBottom: "8px"
    },
    icon: {
      width: 21,
      height: 21,
      verticalAlign: "-0.15em",
      fill: "currentColor",
      overflow: "hidden"
    },

    search: {
      boxShadow: theme.shadows[0],
      border: "none",
      position: "relative",
      marginRight: theme.spacing(2),
      width: "100%",
      marginTop: 10
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
    input: {
      color: "inherit",
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: 14
    },

    card: {
      boxShadow: theme.shadows[0],
      border: "none",
      marginTop: 8
    }
  }));
  const classes = useStyles();

  // 添加ui数据至reducer中
  const onAdd = (name: string): void => {
    action({
      type: "ui_add",
      payload: { data: $$text(`${new Date().getTime()}`, name) }
    });
  };

  return (
    <Fragment>
      <List dense={true} className={classes.list}>
        <ListItem button={true} onClick={onAdd.bind(this, "default")}>
          <ListItemAvatar>
            <Avatar
              alt={"example"}
              src={`http://marketing.xiuzan.com/src/images/form/text-2x.png`}
            />
          </ListItemAvatar>
          <ListItemText primary={`默认样式`} />
          <ListItemSecondaryAction>
            <svg className={classes.icon} aria-hidden="true">
              <use xlinkHref="#iconyoujiantou" />
            </svg>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Card className={classes.search}>
        <div className={classes.searchIcon}>
          <svg className={classes.icon} aria-hidden="true">
            <use xlinkHref="#iconhuabanfuben" />
          </svg>
        </div>
        <InputBase placeholder="搜索..." className={classes.input} />
      </Card>
      <Card className={classes.card} />
    </Fragment>
  );
});

export default connect(
  null,
  { action }
)(TextSelect);
