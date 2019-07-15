import produce from "immer";
import { lazy } from "react";
import { Result } from "antd";
import React from "react";

const Register = lazy(() => import("../../page/register/Register"));
const Login = lazy(() => import("../../page/login/Login"));
const Admin = lazy(() => import("../../layout/AdminLayout"));
const Applet = lazy(() => import("../../page/applet/Applet"));
const Home = lazy(() => import("../../page/home/Home"));

/**
 * configStore 默认数据源
 */
export interface IConfigStore {
  routes: Array<{
    path: string | undefined;
    component: object;
    exact: boolean;
  }>;
}

const state: IConfigStore = {
  routes: [
    // 首页
    {
      path: "/",
      component: Home,
      exact: true
    },
    // 注册
    {
      path: "/register",
      component: Register,
      exact: false
    },
    // 登录
    {
      path: "/login",
      component: Login,
      exact: false
    },
    // 中台管理
    {
      path: "/admin",
      component: Admin,
      exact: false
    },
    // 小程序制作
    {
      path: "/applet",
      component: Applet,
      exact: false
    },
    // 404
    {
      path: undefined,
      component: () => (
        <Result
          status="404"
          title="404"
          subTitle="对不起，你访问的页面不存在"
        />
      ),
      exact: false
    }
  ]
};

/**
 * reducer 操作
 */
export const config = produce((draft = state, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return draft;
  }
});
