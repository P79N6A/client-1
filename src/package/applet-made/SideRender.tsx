import React, { memo, useState } from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TextSelect from "./text/TextSelect";
import { Card, Icon } from "antd";

interface IProps {
  type: string;
}

export default memo((props: IProps) => {
  const { type } = props;

  // 样式
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: "hidden"
    },
    card_item: {
      width: "25%",
      textAlign: "center"
    }
  }));
  const classes = useStyles();

  // item data source
  const item: { [type: string]: object } = {
    model: <TextSelect />,
    picture: <div>picture</div>,
    plugin: <div>plugin</div>,
    button: <div>button</div>,
    commodity: <div>commodity</div>
  };
  const gridStyle = {};
  return (
    <div className={classes.layout}>
      {/*{item[type]}*/}
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary
          expandIcon={<Icon type="up" style={{ fontSize: 12 }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>基础模块</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Card>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
          </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary
          expandIcon={<Icon type="up" style={{ fontSize: 12 }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>产品模块</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Card>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
          </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary
          expandIcon={<Icon type="up" style={{ fontSize: 12 }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>互动模块</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Card>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
            <Card.Grid className={classes.card_item}>item</Card.Grid>
          </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
});
