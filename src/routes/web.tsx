import React, { lazy, memo, Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./route.module.scss";

// 页面加载效果
const Loading = () => (
  <Spin tip="拼命加载中..." className={styles.page_loading} delay={300} />
);

// 页面
const Admin = lazy(() => import("../pages/admin/Admin"));
const Home = lazy(() => import("../pages/home/Home"));

export { Admin, Home, Loading };
