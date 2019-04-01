import React, { memo } from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TextSelect from "./text/TextSelect";

interface IProps {
  type: string;
}

export default memo((props: IProps) => {
  const { type } = props;

  // 样式
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: "hidden"
    }
  }));
  const classes = useStyles();

  // item data source
  const item: { [type: string]: object } = {
    text: <TextSelect />,
    picture: <div>picture</div>,
    plugin: <div>plugin</div>,
    button: <div>button</div>,
    commodity: <div>commodity</div>
  };

  return <div className={classes.layout}>{item[type]}</div>;
});
