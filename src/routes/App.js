import React, { memo, Suspense } from "react";
import { Layout } from "antd";
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
    // Render
    return (React.createElement(Layout, { className: classes.root },
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement(BrowserRouter, null,
                React.createElement(Suspense, { fallback: React.createElement(LinearProgress, null) },
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/", exact: true, component: Home }),
                        React.createElement(Route, { path: "/admin", component: Admin }),
                        React.createElement(Route, { path: "/applet", component: Applet }),
                        React.createElement(Route, { path: "/applet-admin", component: AppletAdmin })))))));
});
//# sourceMappingURL=App.js.map