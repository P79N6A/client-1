import React, { lazy, memo, Suspense } from "react";
import { LinearProgress, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

export default memo(() => {
  // ui theme
  const theme = createMuiTheme({
    palette: {
      primary: indigo
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
  const Applets = lazy(() => import("../page/applets/Applets"));
  const Home = lazy(() => import("../page/home/Home"));
  const Admin = lazy(() => import("../page/admin/Admin"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact={true} component={() => <Home />} />
            <Route path="/admin" component={() => <Admin />} />
            <Route path="/applets" component={() => <Applets />} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
});
