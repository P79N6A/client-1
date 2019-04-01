import React, { memo, Suspense } from "react";
import { ConfigProvider, Empty, Icon, Layout } from "antd";
import { LinearProgress } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

/**
 * TODO
 * 1. error handling
 */
export default memo(() => {
  // theme
  const theme = createMuiTheme({});

  // Global style
  const useStyles = makeStyles(() => ({
    root: {
      width: "100vw",
      height: "100vh"
    }
  }));
  const classes = useStyles();

  // Code splitting
  const Admin = React.lazy(() => import("../page/Admin"));
  const Home = React.lazy(() => import("../page/Home"));
  const Applet = React.lazy(() => import("../page/Applet"));
  const AppletAdmin = React.lazy(() => import("../page/AppletAdmin"));

  const customizeRenderEmpty = () => <Empty description={"暂无数据"} />;
  // Render
  return (
    <Layout className={classes.root}>
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<LinearProgress />}>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/applet" component={Applet} />
                <Route path="/applet-admin" component={AppletAdmin} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </Layout>
  );
});
