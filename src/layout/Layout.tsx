import React, { memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default memo(() => {
  const Admin = React.lazy(() => import("../page/admin/Admin"));
  const Home = React.lazy(() => import("../page/home/Home"));
  const Applet = React.lazy(() => import("../page/applet/Applet"));
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/applet" component={Applet} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
});
