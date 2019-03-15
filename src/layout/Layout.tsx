import React, { lazy, memo, Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { LinearProgress } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * 功能
 * 1. 为整体程序添加默认样式
 * 2. 页面路由拆分
 * 3. 路由导航控制
 * 4. 额外程序启动任务
 *
 * TODO
 * 为路由添加错误边界
 */
export default memo(() => {
  // ui theme
  const theme = createMuiTheme({
    typography: {
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
  // Loading Style
  const Loading = () => {
    const useStyles = makeStyles({
      root: {
        flexGrow: 1
      }
    });
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    );
  };
  // code splitting
  const Applet = lazy(() => import("../page/applet/Applet"));
  const Home = lazy(() => import("../page/home/Home"));
  const Admin = lazy(() => import("../page/admin/Admin"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/admin" component={() => <Admin />} />
            <Route path="/applet" component={() => <Applet />} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
});
