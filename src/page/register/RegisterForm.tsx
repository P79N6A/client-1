import React, { memo, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Col, Form, Input, message, Row, Statistic } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { registerSms } from "../../api/registerSms";
import { register } from "../../api/register";

interface IProps extends FormComponentProps, RouteComponentProps {}

/**
 * @description 注册表单

 */
const Register = memo((props: IProps) => {
  const { getFieldDecorator, getFieldsError, getFieldValue } = props.form;

  // 控制手机验证码发送时间
  const [verify, setVerify] = useState(false);
  // 60倒计时结束时回调
  const onFinish = () => {
    setVerify(false);
  };
  // 获取手机验证码
  const getVerify = async () => {
    if (getFieldValue("phone")) {
      const getSms = await registerSms(getFieldValue("phone"));
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
  // 提交注册信息
  const postRegister = (e: any) => {
    e.preventDefault();
    props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const isRegister = await register({ ...values });

        if (isRegister.state === "success") {
          props.history.push("/");
        }
        if (isRegister.state === "error") {
          message.warning(isRegister.msg);
        }
      }
    });
  };
  // 控制提交按钮，如果表单存在错误信息，提交按钮不可用
  const hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  return (
    <Form style={{ width: "400px" }} onSubmit={postRegister}>
      <Form.Item>
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "手机号不能为空"
            },
            {
              pattern: /^(((13[0-9])|(15[0-9])|(16[0-9])|(17[3-8])|(18[0-9])|(19[0-9])|(14[5-7]))+\d{8})$/,
              message: "手机号格式错误"
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
  );
});

export default Form.create()(withRouter(Register));
