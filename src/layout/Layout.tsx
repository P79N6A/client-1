import React, { memo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PageRoutes from "../routes/PageRoutes";

/**
 * 功能
 * 1. 为整体程序添加默认样式
 * 2. 路由导航控制
 * 3. 额外程序启动任务
 */
export default memo(() => {
  // ui主题
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontSize: 14,
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "PingFang SC",
        "Hiragino Sans GB",
        "Microsoft YaHei",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ].join(",")
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PageRoutes />
    </MuiThemeProvider>
  );
});
