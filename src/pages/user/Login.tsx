import React, { memo, useState } from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Icon,
  Input,
  Layout,
  message,
  Row,
  Tabs,
  Statistic
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import IconFont from "../../components/IconFont";

interface IProps extends FormComponentProps {}

/**
 * 功能
 */
const Login = memo((props: IProps) => {
  const { getFieldDecorator, getFieldValue } = props.form;

  // 记录登陆方式，根据登陆方式
  const [tag, setTag] = useState("1");
  // 控制手机验证码发送时间
  const [verify, setVerify] = useState(false);
  // 60倒计时结束时回调
  const onFinish = () => {
    setVerify(false);
  };
  // 获取手机验证码
  const getVerify = (): void => {
    if (getFieldValue("phone")) {
      // smsLoginApi(getFieldValue("phone"))
      //   .then(({ error, msg }) => {
      //     error ? message.warning(msg) : message.success(msg);
      //   })
      //   .catch(({ error, msg }) => message.warning(msg));
      setVerify(true);
    } else {
      message.warning("手机号不能为空");
    }
  };
  // 登录
  const login = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        // loginApi({
        //   loginData: {
        //     ...values
        //   }
        // })
        //   .then(({ error, msg }) => {
        //     error ? message.warning(msg) : message.success(msg);
        //   })
        //   .catch(({ error, msg }) => message.warning(msg));
      }
    });
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

    layout_content: css`
      margin: auto auto;
    `,
    content_logo: css`
      text-align: center;
      height: 44px;
      line-height: 44px;
      & > a > i {
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

    layout_footer: css`
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
      <Layout.Content css={styles.layout_content}>
        <div css={styles.content_logo}>
          <a href="/">
            <IconFont type={"icon-logo"} style={{ fontSize: 48 }} />
            <span>蜗壳云商</span>
          </a>
        </div>
        <div css={styles.content_font}>蜗壳云商是国内一流的商户saas提供商</div>
        <Tabs
          defaultActiveKey="1"
          css={styles.content_tab}
          onChange={type => setTag(type)}
        >
          <Tabs.TabPane tab="账号登录" key="1" />
          <Tabs.TabPane tab="手机登录" key="2" />
        </Tabs>
        <Form style={{ width: "400px" }} onSubmit={login}>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "手机号不能为空" },
                {
                  pattern: /^(13[0-9]|14[5-9]|15[0-9]|16[6]|17[0-8]|18[0-9]|19[8|9])\d{8}$/,
                  message: "手机号格式错误"
                }
              ]
            })(
              <Input
                size={"large"}
                prefix={
                  <Icon type="tablet" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="手机号"
              />
            )}
          </Form.Item>
          {tag === "1" ? (
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "密码不能为空" },
                  { max: 25, message: "密码最多25位" },
                  { min: 6, message: "密码最少6位" }
                ]
              })(
                <Input.Password
                  size={"large"}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
          ) : (
            <Form.Item>
              <Row gutter={16}>
                <Col span={17}>
                  {getFieldDecorator("verify", {
                    rules: [{ required: true, message: "验证码不能为空" }]
                  })(
                    <Input
                      size={"large"}
                      maxLength={4}
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="验证码"
                    />
                  )}
                </Col>
                <Col span={7}>
                  <Button
                    size={"large"}
                    block={true}
                    onClick={getVerify}
                    disabled={verify}
                  >
                    {!verify ? (
                      "获取验证码"
                    ) : (
                      <Statistic.Countdown
                        value={Date.now() + 1000 * 60}
                        format=" s 秒后重试"
                        valueStyle={{
                          fontSize: 14
                        }}
                        onFinish={onFinish}
                      />
                    )}
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          )}
          <Form.Item>
            {getFieldDecorator("rememberMe", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox style={{ float: "left" }}>记住我</Checkbox>)}
            <Link style={{ float: "right" }} to="/re-password">
              忘记密码
            </Link>
            <Button
              block={true}
              type="primary"
              htmlType="submit"
              size={"large"}
            >
              登录
            </Button>
            <div style={{ marginTop: 20, float: "left" }}>
              或者 <Link to="/register">立即注册</Link>
            </div>
          </Form.Item>
        </Form>
      </Layout.Content>
      <Layout.Footer css={styles.layout_footer}>
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
          Copyright <Icon type="copyright" /> {new Date().getFullYear()}&nbsp;
          蜗壳云商技术部出品
        </div>
      </Layout.Footer>
    </Layout>
  );
});

export default Form.create()(Login);
