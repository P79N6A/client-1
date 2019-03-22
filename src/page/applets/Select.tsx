import React, { memo } from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import PagesSelect from "./package/theme/ThemeEdit";
import TextSelect from "./package/text/TextSelect";

interface IProps {
  type: string;
}

const ApSelect = memo((props: IProps) => {
  const { type } = props;

  // styles
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: "hidden",
      padding: theme.spacing(1)
    }
  }));
  const classes = useStyles();

  // item data source
  const item: any = {
    text: <TextSelect />,
    picture: <div>picture</div>,
    plugin: <div>plugin</div>,
    button: <div>button</div>,
    commodity: <div>commodity</div>
  };

  return <div className={classes.layout}>{item[type]}</div>;
});

export default ApSelect;
