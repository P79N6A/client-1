import { lazy } from "react";

/**
 * 页面路由拆分
 */
export const Home = lazy(() => import("../pages/home/Home"));
export const Applet = lazy(() => import("../pages/applet/Applet"));
export const Error404 = lazy(() => import("../pages/error/Error404"));
export const Error403 = lazy(() => import("../pages/error/Error403"));
export const Login = lazy(() => import("../pages/user/Login"));
export const RePassword = lazy(() => import("../pages/user/RePassword"));
export const Register = lazy(() => import("../pages/user/Register"));
export const Help = lazy(() => import("../pages/help/Help"));
export const Admin = lazy(() => import("../pages/admin/Admin"));
export const AppletAdmin = lazy(() =>
  import("../pages/applet_admin/AppletAdmin")
);
