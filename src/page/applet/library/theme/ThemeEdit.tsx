import React, { memo, Fragment } from "react";
import { PageHeader, Tabs } from "antd";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { CirclePicker } from "react-color";
import { Paper } from "@material-ui/core";

/**
 * theme可编辑属性操作栏
 */
export default memo((props: any) => {
  const TabPane = Tabs.TabPane;

  const colorConfig = [
    "#ef5350",
    "#f44336",
    "#e53935",
    "#d32f2f",
    "#c62828",
    "#b71c1c",

    "#ec407a",
    "#e91e63",
    "#d81b60",
    "#c2185b",
    "#ad1457",
    "#880e4f",

    "#ab47bc",
    "#9c27b0",
    "#8e24aa",
    "#7b1fa2",
    "#6a1b9a",
    "#4a148c",

    "#7e57c2",
    "#673ab7",
    "#5e35b1",
    "#512da8",
    "#4527a0",
    "#311b92",

    "#5c6bc0",
    "#3f51b5",
    "#3949ab",
    "#303f9f",
    "#283593",
    "#1a237e",

    "#42a5f5",
    "#2196f3",
    "#1e88e5",
    "#1976d2",
    "#1565c0",
    "#0d47a1",

    "#29b6f6",
    "#03a9f4",
    "#039be5",
    "#0288d1",
    "#0277bd",
    "#01579b",

    "#26c6da",
    "#00bcd4",
    "#00acc1",
    "#0097a7",
    "#00838f",
    "#006064",

    "#26a69a",
    "#009688",
    "#00897b",
    "#00796b",
    "#00695c",
    "#004d40",

    "#66bb6a",
    "#4caf50",
    "#43a047",
    "#388e3c",
    "#2e7d32",
    "#1b5e20",

    "#9ccc65",
    "#8bc34a",
    "#7cb342",
    "#689f38",
    "#558b2f",
    "#33691e",

    "#d4e157",
    "#cddc39",
    "#c0ca33",
    "#afb42b",
    "#9e9d24",
    "#827717",

    "#ffee58",
    "#ffeb3b",
    "#fdd835",
    "#fbc02d",
    "#f9a825",
    "#f57f17",

    "#ffca28",
    "#ffc107",
    "#ffb300",
    "#ffa000",
    "#ff8f00",
    "#ff6f00",

    "#ffa726",
    "#ff9800",
    "#fb8c00",
    "#f57c00",
    "#ef6c00",
    "#e65100",

    "#ff7043",
    "#ff5722",
    "#f4511e",
    "#e64a19",
    "#d84315",
    "#bf360c",

    "#8d6e63",
    "#795548",
    "#6d4c41",
    "#5d4037",
    "#4e342e",
    "#3e2723",

    "#78909c",
    "#607d8b",
    "#546e7a",
    "#455a64",
    "#37474f",
    "#263238"
  ];
  return (
    <Fragment>
      <Paper style={{ marginTop: 5 }}>
        <PageHeader
          onBack={() => null}
          backIcon={
            <span>
              <ColorLensIcon style={{ marginBottom: -8 }} />
            </span>
          }
          title="主题编辑"
          subTitle="主题色将运用至全局"
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="主题色" key="1" />
            </Tabs>
          }
        />
      </Paper>
      <Paper
        style={{
          marginTop: "10px",
          width: "400px",
          padding: "16px",
          height: "calc(199vh - 170px)"
        }}
      >
        <CirclePicker color={"red"} colors={colorConfig} width={"350px"} />
      </Paper>
    </Fragment>
  );
});
