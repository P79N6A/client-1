import React, { memo, useState } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { FormComponentProps } from "antd/lib/form";
import {
  Button,
  Col,
  Form,
  Icon,
  Input,
  Layout,
  message,
  Row,
  Statistic
} from "antd";
import { action, IActionFn } from "../../store/action";

interface IProps extends FormComponentProps, IActionFn, RouteComponentProps {}

/**
 * 用户注册
 * 功能
 * 1. 效验手机号是否以注册
 * 2. 发送手机注册验证码
 * 3. 检测确认密码与密码是否一致
 * 4. 检测无误后，提交按钮可点击
 * 5. 数据提交，给出反馈并跳转至用户管理页
 * 6. 发送验证码后，验证码按钮显示60s 倒计时
 */
const Register = memo((props: IProps) => {
  const { getFieldDecorator, getFieldsError, getFieldValue } = props.form;

  // 控制手机验证码发送时间
  const [verify, setVerify] = useState(false);
  // 60倒计时结束时回调
  const onFinish = () => {
    setVerify(false);
  };
  // // 获取手机验证码
  // const getVerify = (): void => {
  //   if (getFieldValue("phone")) {
  //     smsRegisterApi(getFieldValue("phone"))
  //       .then(({ error, msg }) => {
  //         error ? message.warning(msg) : message.success(msg);
  //       })
  //       .catch(({ error, msg }) => message.warning(msg));
  //     setVerify(true);
  //   } else {
  //     message.warning("手机号不能为空");
  //   }
  // };
  // // 提交注册信息
  // const register = (e: any) => {
  //   e.preventDefault();
  //   props.form.validateFields((err: any, values: any) => {
  //     if (!err) {
  //       registerApi({
  //         registerData: {
  //           ...values
  //         },
  //         reduxAction: props.action
  //       })
  //         .then(({ error, msg }) => {
  //           error ? message.warning(msg) : props.history.push("/admin");
  //         })
  //         .catch(({ error, msg }) => message.warning(msg));
  //     }
  //   });
  // };
  // 控制提交按钮，如果表单存在错误信息，提交按钮不可用
  const hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  // 样式
  const styles = {
    layout: css`
      background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
      padding-top: 64px;
    `,
    icon: css`
      line-height: 64px;
      vertical-align: top;
      cursor: pointer;
      float: right;
      font-size: 18px;
    `,
    content: css`
      margin: auto auto;
    `,
    content_logo: css`
      text-align: center;
      height: 44px;
      line-height: 44px;
      & > a > img {
        height: 44px;
        margin-right: 16px;
        vertical-align: top;
      }
      & > a > span {
        position: relative;
        top: 2px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 33px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    `,
    content_font: css`
      text-align: center;
      margin-top: 12px;
      margin-bottom: 40px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `,
    content_tab: css`
      align-items: center;
      text-align: center;
      margin: auto;
      max-width: 500px;
      & > div {
        border: none;
      }
    `,
    footer: css`
      margin: 48px 0 24px;
      padding: 0 16px;
      text-align: center;
    `,
    footer_margin: css`
      margin-bottom: 8px;
      & > a {
        text-align: center;
        margin: 20px;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s;
        touch-action: manipulation;
      }
    `,
    footer_font: css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `
  };

  return (
    <Layout css={styles.layout}>
      {/*<Layout.Content css={styles.content}>*/}
      {/*<div css={styles.content_logo}>*/}
      {/*<a href="/">*/}
      {/*<img*/}
      {/*alt="logo"*/}
      {/*className="antd-pro-layouts-user-layout-logo"*/}
      {/*src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="*/}
      {/*/>*/}
      {/*<span className="antd-pro-layouts-user-layout-title">*/}
      {/*Ant Design*/}
      {/*</span>*/}
      {/*</a>*/}
      {/*</div>*/}
      {/*<div css={styles.content_font}>*/}
      {/*Ant Design 是西湖区最具影响力的 Web 设计规范*/}
      {/*</div>*/}
      {/*<h3 style={{ float: "left" }}>注册</h3>*/}
      {/*<Form style={{ width: "400px" }} onSubmit={register}>*/}
      {/*<Form.Item>*/}
      {/*{getFieldDecorator("phone", {*/}
      {/*rules: [*/}
      {/*{*/}
      {/*required: true,*/}
      {/*message: "手机号不能为空"*/}
      {/*},*/}
      {/*{*/}
      {/*pattern: /^(13[0-9]|14[5-9]|15[0-9]|16[6]|17[0-8]|18[0-9]|19[8|9])\d{8}$/,*/}
      {/*message: "号码格式错误"*/}
      {/*}*/}
      {/*]*/}
      {/*})(<Input size={"large"} placeholder="手机号" />)}*/}
      {/*</Form.Item>*/}
      {/*<Form.Item>*/}
      {/*<Row gutter={16}>*/}
      {/*<Col span={17}>*/}
      {/*{getFieldDecorator("verify", {*/}
      {/*rules: [*/}
      {/*{*/}
      {/*required: true,*/}
      {/*message: "验证码不能为空"*/}
      {/*},*/}
      {/*{*/}
      {/*pattern: /^[0-9]{4}$/,*/}
      {/*message: "验证码格式错误"*/}
      {/*}*/}
      {/*]*/}
      {/*})(<Input size={"large"} maxLength={4} placeholder="验证码" />)}*/}
      {/*</Col>*/}
      {/*<Col span={7}>*/}
      {/*<Button*/}
      {/*size={"large"}*/}
      {/*block={true}*/}
      {/*onClick={getVerify}*/}
      {/*disabled={verify}*/}
      {/*>*/}
      {/*{!verify ? (*/}
      {/*"获取验证码"*/}
      {/*) : (*/}
      {/*<Statistic.Countdown*/}
      {/*value={Date.now() + 1000 * 60}*/}
      {/*format=" s 秒后重试"*/}
      {/*valueStyle={{*/}
      {/*fontSize: 14*/}
      {/*}}*/}
      {/*onFinish={onFinish}*/}
      {/*/>*/}
      {/*)}*/}
      {/*</Button>*/}
      {/*</Col>*/}
      {/*</Row>*/}
      {/*</Form.Item>*/}
      {/*<Form.Item>*/}
      {/*{getFieldDecorator("password", {*/}
      {/*rules: [*/}
      {/*{*/}
      {/*required: true,*/}
      {/*message: "密码不能为空"*/}
      {/*},*/}
      {/*{*/}
      {/*pattern: /^[^]{6,16}$/,*/}
      {/*message: "至少6位密码"*/}
      {/*},*/}
      {/*{*/}
      {/*pattern: /^[a-zA-Z\d!@#$%^&*./|`()_+=]{0,16}$/,*/}
      {/*message: "密码中存在非法字符"*/}
      {/*}*/}
      {/*]*/}
      {/*})(*/}
      {/*<Input.Password*/}
      {/*size={"large"}*/}
      {/*maxLength={16}*/}
      {/*placeholder="至少6位密码，区分大小写"*/}
      {/*/>*/}
      {/*)}*/}
      {/*</Form.Item>*/}
      {/*<Form.Item>*/}
      {/*{getFieldDecorator("re-password", {*/}
      {/*rules: [*/}
      {/*{*/}
      {/*required: true,*/}
      {/*message: "确认密码不能为空"*/}
      {/*},*/}
      {/*{*/}
      {/*message: "与密码不一致",*/}
      {/*validator: (rule, value, cb) =>*/}
      {/*value === getFieldValue("password") ? cb() : cb(true)*/}
      {/*}*/}
      {/*]*/}
      {/*})(*/}
      {/*<Input.Password*/}
      {/*size={"large"}*/}
      {/*maxLength={16}*/}
      {/*placeholder="确认密码"*/}
      {/*/>*/}
      {/*)}*/}
      {/*</Form.Item>*/}
      {/*<Form.Item>*/}
      {/*<Button*/}
      {/*block={true}*/}
      {/*type="primary"*/}
      {/*htmlType="submit"*/}
      {/*size={"large"}*/}
      {/*disabled={hasErrors(getFieldsError())}*/}
      {/*>*/}
      {/*注册*/}
      {/*</Button>*/}
      {/*<div*/}
      {/*style={{*/}
      {/*marginTop: 20,*/}
      {/*float: "left"*/}
      {/*}}*/}
      {/*>*/}
      {/*或者 <Link to="/user/login">使用已有账号登陆</Link>*/}
      {/*</div>*/}
      {/*</Form.Item>*/}
      {/*</Form>*/}
      {/*</Layout.Content>*/}
      <Layout.Footer css={styles.footer}>
        <div css={styles.footer_margin}>
          <a title="help" target="_self" href="/">
            帮助
          </a>
          <a title="privacy" target="_self" href="/">
            隐私
          </a>
          <a title="terms" target="_self" href="/">
            条款
          </a>
        </div>
        <div css={styles.footer_font}>
          Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
        </div>
      </Layout.Footer>
    </Layout>
  );
});

export default connect(
  null,
  { action }
)(Form.create()(withRouter(Register)));
