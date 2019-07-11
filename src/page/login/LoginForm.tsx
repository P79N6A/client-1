import React, { memo, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Icon,
  Input,
  message,
  Row,
  Statistic
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import { loginSms } from "../../api/loginSms";
import { login } from "../../api/login";

interface IProps extends FormComponentProps, RouteComponentProps {
  // 登陆方式 （1：账号登陆 2：手机登陆）
  tag?: string | number;
}

/**
 * 登陆表单
 */
const LoginForm = memo((props: IProps) => {
  const { getFieldDecorator, getFieldValue } = props.form;
  // 控制手机验证码发送时间
  const [verify, setVerify] = useState(false);
  // 60倒计时结束时回调
  const onFinish = () => {
    setVerify(false);
  };
  // 获取手机验证码
  const getVerify = async () => {
    if (getFieldValue("phone")) {
      const getSms = await loginSms(getFieldValue("phone"));
      if (getSms.state === "success") {
        message.success(getSms.msg);
      }
      if (getSms.state === "error") {
        message.warning(getSms.msg);
      }
      setVerify(true);
    } else {
      message.warning("手机号不能为空");
    }
  };
  // 登录
  const postLogin = (e: any) => {
    e.preventDefault();
    props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const isRegister = await login({ password: "", verify: "", ...values });

        if (isRegister.state === "success") {
          props.history.push("/");
        }
        if (isRegister.state === "error") {
          message.warning(isRegister.msg);
        }
      }
    });
  };

  return (
    <Form style={{ width: "400px" }} onSubmit={postLogin}>
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
            prefix={<Icon type="tablet" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="手机号"
          />
        )}
      </Form.Item>
      {props.tag === "1" ? (
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
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
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
        <Button block={true} type="primary" htmlType="submit" size={"large"}>
          登录
        </Button>
        <div style={{ marginTop: 20, float: "left" }}>
          或者 <Link to="/register">立即注册</Link>
        </div>
      </Form.Item>
    </Form>
  );
});

export default Form.create<any>()(withRouter(LoginForm));
