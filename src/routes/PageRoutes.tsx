import React, { lazy, memo, Suspense } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "../page/404";

// 接口
interface IProps {
  classes: {
    root: string;
  };
}

// 加载样式
const styles = {
  root: {
    flexGrow: 1
  }
};
const Loading = withStyles(styles)((props: IProps) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
});

// 页面路由切分
export default memo(() => {
  const Applet = lazy(() => import("../page/applet/Applet"));
  const Home = lazy(() => import("../page/home/Home"));
  const Admin = lazy(() => import("../page/admin/Admin"));

  return (
    <Router>
      <Error404>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/admin" component={() => <Admin />} />
            <Route path="/applet" component={() => <Applet />} />
          </Switch>
        </Suspense>
      </Error404>
    </Router>
  );
});
