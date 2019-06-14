import React, { memo, useState } from "react";
import { css } from "@emotion/core";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Col, Form, Icon, Input, Layout, Row, Statistic } from "antd";
import { FormComponentProps } from "antd/lib/form";
import IconFont from "../components/IconFont";

interface IProps extends FormComponentProps, RouteComponentProps {}

/**
 * @description 商户注册
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
  //     // smsRegisterApi(getFieldValue("phone"))
  //     //   .then(({ error, msg }) => {
  //     //     error ? message.warning(msg) : message.success(msg);
  //     //   })
  //     //   .catch(({ error, msg }) => message.warning(msg));
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
  //       // registerApi({
  //       //   registerData: {
  //       //     ...values
  //       //   },
  //       //   reduxAction: props.action
  //       // })
  //       //   .then(({ error, msg }) => {
  //       //     error ? message.warning(msg) : props.history.push("/admin");
  //       //   })
  //       //   .catch(({ error, msg }) => message.warning(msg));
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
        <h3 style={{ float: "left" }}>注册</h3>
        <Form style={{ width: "400px" }}>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "手机号不能为空"
                },
                {
                  pattern: /^(13[0-9]|14[5-9]|15[0-9]|16[6]|17[0-8]|18[0-9]|19[8|9])\d{8}$/,
                  message: "号码格式错误"
                }
              ]
            })(<Input size={"large"} placeholder="手机号" />)}
          </Form.Item>
          <Form.Item>
            <Row gutter={16}>
              <Col span={17}>
                {getFieldDecorator("verify", {
                  rules: [
                    {
                      required: true,
                      message: "验证码不能为空"
                    },
                    {
                      pattern: /^[0-9]{4}$/,
                      message: "验证码格式错误"
                    }
                  ]
                })(<Input size={"large"} maxLength={4} placeholder="验证码" />)}
              </Col>
              <Col span={7}>
                <Button
                  size={"large"}
                  block={true}
                  // onClick={getVerify}
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
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "密码不能为空"
                },
                {
                  pattern: /^[^]{6,16}$/,
                  message: "至少6位密码"
                },
                {
                  pattern: /^[a-zA-Z\d!@#$%^&*./|`()_+=]{0,16}$/,
                  message: "密码中存在非法字符"
                }
              ]
            })(
              <Input.Password
                size={"large"}
                maxLength={16}
                placeholder="至少6位密码，区分大小写"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("re-password", {
              rules: [
                {
                  required: true,
                  message: "确认密码不能为空"
                },
                {
                  message: "与密码不一致",
                  validator: (rule, value, cb) =>
                    value === getFieldValue("password") ? cb() : cb(true)
                }
              ]
            })(
              <Input.Password
                size={"large"}
                maxLength={16}
                placeholder="确认密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              block={true}
              type="primary"
              htmlType="submit"
              size={"large"}
              disabled={hasErrors(getFieldsError())}
            >
              注册
            </Button>
            <div
              style={{
                marginTop: 20,
                float: "left"
              }}
            >
              或者 <Link to="/login">使用已有账号登陆</Link>
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

export default Form.create()(withRouter(Register));
