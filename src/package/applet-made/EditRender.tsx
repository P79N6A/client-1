import React, { memo } from "react";
import { connect } from "react-redux";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ThemeEdit from "./theme/ThemeEdit";

interface IProps {
  applet: IAppletState;
}

const EditRender = memo((props: IProps) => {
  const { applet } = props;

  // 样式
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: "hidden"
    }
  }));
  const classes = useStyles();

  // 列表项
  const item: { [type: string]: object } = {
    theme: <ThemeEdit />,
    text: <div>text</div>,
    picture: <div>picture</div>,
    plugin: <div>plugin</div>,
    button: <div>button</div>,
    commodity: <div>commodity</div>
  };

  return <div className={classes.layout}>{item[applet.edit_type]}</div>;
});

const mapStateToProps = state => {
  return {
    applet: state.applet
  };
};

export default connect(
  mapStateToProps,
  {}
)(EditRender);
