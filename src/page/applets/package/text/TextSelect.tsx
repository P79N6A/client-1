import React, { memo } from "react";
import { Tag } from "antd";
import { connect } from "react-redux";
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
  ListItemSecondaryAction
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { appletsAction } from "../../model/action";

interface IProps {
  appletsAction(type: string, name: string): void;
}

const TextSelect = memo((props: IProps) => {
  const { appletsAction } = props;
  /**
   * Styles
   */
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: "hidden",
      padding: "4px 10px 0 10px "
    },
    search: {
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
    recommend: {
      marginTop: 10,
      height: "100vh"
    },
    tag: {
      margin: "5px !important"
    }
  }));
  const classes = useStyles();
  const onAdd = () => {
    appletsAction("add_ui_data", "text");
  };
  return (
    <div className={classes.layout}>
      <Paper key={0}>
        <List dense={true}>
          <ListItem button={true} onClick={onAdd}>
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
      <Paper className={classes.search} key={1}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="搜索..." className={classes.input} />
      </Paper>
      <div className={classes.tag} key={2}>
        <Tag color="magenta" className={classes.tag}>
          ma
        </Tag>
        <Tag color="red" className={classes.tag}>
          red
        </Tag>
        <Tag color="geekblue" className={classes.tag}>
          geekblue
        </Tag>
        <Tag color="purple" className={classes.tag}>
          purple
        </Tag>
        <Tag color="green" className={classes.tag}>
          green
        </Tag>
        <Tag color="cyan" className={classes.tag}>
          cyan
        </Tag>
        <Tag color="blue" className={classes.tag}>
          blue
        </Tag>
        <Tag color="geekblue" className={classes.tag}>
          geekblue
        </Tag>
        <Tag color="purple" className={classes.tag}>
          purple
        </Tag>
      </div>
      <Paper className={classes.recommend} key={3} />
    </div>
  );
});

export default connect(
  null,
  { appletsAction }
)(TextSelect);
