import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
import { Fab, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { BubbleChart } from "@material-ui/icons";
import PagesSelect from "./package/theme/ThemeEdit";
import { IState } from "../../typing/model/model";

interface IProps {
  edit_id: string;
}

const ApEdit = memo((props: IProps) => {
  const { edit_id } = props;
  // style
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      position: "relative",
      padding: theme.spacing(1)
    },
    tool: {
      position: "absolute",
      top: 10,
      left: -150
    },
    edit: {
      position: "relative",
      top: -56
    }
  }));
  const classes = useStyles();

  // edit items
  const item: any = {
    theme: <PagesSelect />
  };
  return (
    <div className={classes.layout}>
      <Fab color="primary" aria-label="BubbleChart" className={classes.tool}>
        <BubbleChart />
      </Fab>
      <div className={classes.edit}>{item[edit_id]}</div>
    </div>
  );
});

const mapStateToProps = (state: IState) => {
  const { edit_id } = state.applets;
  return {
    edit_id
  };
};

export default connect(
  mapStateToProps,
  ""
)(ApEdit);
