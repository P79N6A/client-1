import React, { memo, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import useWindowSize from "react-use/lib/useWindowSize";
import useTitle from "react-use/lib/useTitle";
import Header from "./layout/Header";
import Banner from "./layout/Banner";
import Part1 from "./layout/Part1";
import Part2 from "./layout/Part2";
import Part3 from "./layout/Part3";
import Part4 from "./layout/Part4";
import Footer from "./layout/Footer";
import "./layout/static/style";
import useLocalStorage from "react-use/lib/useLocalStorage";
import { auth } from "../../api/auth";
import { useDispatch } from "react-redux";

const Home = memo((props: RouteComponentProps): any => {
  useTitle("蜗壳云商"); // 修改页面标题
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false); // 判断是否为手机端
  const { width } = useWindowSize(); // 监控屏幕大小，响应式界面
  const [id, setId] = useLocalStorage("woke-id"); //获取 localstorage中的user_id
  const [jwt, setJwt] = useLocalStorage("woke-jwt"); //获取 localstorage中的jwt

  // 检测是否为手机端，并将存储状态调整
  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  // 自动登录
  useEffect(() => {
    // 如果存在id ，jwt 则验证登录
    if (id && jwt) {
      auth({ id, jwt })
        .then(resp => {
          if (resp.state === "success") {
            dispatch({ type: "user/auth", payload: true });
          }
        })
        .catch(() => {});
    }
  }, []);

  return [
    <Header key="header" />,
    <Banner key="banner" isMobile={isMobile} />,
    <Part1 key="part1" isMobile={isMobile} />,
    <Part2 key="part2" isMobile={isMobile} />,
    <Part3 key="part3" isMobile={isMobile} />,
    <Part4 key="part4" />,
    <Footer key="footer" />
  ];
});

export default withRouter(Home);
