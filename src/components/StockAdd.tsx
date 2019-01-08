import React, { memo, Fragment, useState } from "react";
import { Button, Form, Input, message, Select, Steps } from "antd";
import { css, StyleSheet } from "aphrodite";

const Step = Steps.Step;
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

interface IProps {
  form: { getFieldDecorator(label: string, rules: any): any };
}

export default Form.create()(
  memo((props: IProps) => {
    const { getFieldDecorator } = props.form;
    // 步骤控制
    const [current, setCurrent] = useState(0);
    // 步骤文案
    const steps = [
      {
        title: "属性"
      },
      {
        title: "规格"
      },
      {
        title: "配送"
      }
    ];
    // 下一步/确定
    const next = () => {
      setCurrent(current + 1);
    };
    // 上一步
    const prev = () => {
      setCurrent(current - 1);
    };
    // 表单排版样式
    const formItemLayout = {
      labelCol: {
        xs: { span: 7 },
        sm: { span: 7 },
        md: { span: 6 },
        lg: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 },
        md: { span: 17 },
        lg: { span: 18 }
      }
    };
    // 样式
    const styles = StyleSheet.create({
      stepContent: {
        marginTop: 16,
        border: "1px dashed #e9e9e9",
        borderRadius: "6px",
        backgroundColor: "#fafafa",
        minHeight: 200,
        textAlign: "center"
      },
      footer: {
        marginTop: 16,
        display: "flex",
        justifyContent: "center"
      }
    });
    return (
      <Fragment>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={css(styles.stepContent)}>
          {current === 0 ? (
            <Form>
              <Form.Item label="商品名" {...formItemLayout}>
                {getFieldDecorator("name", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品编号" {...formItemLayout}>
                {getFieldDecorator("number", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品条码" {...formItemLayout}>
                {getFieldDecorator("number", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品图片" {...formItemLayout}>
                {getFieldDecorator("img", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品描述" {...formItemLayout}>
                {getFieldDecorator("desc", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="商品状态" {...formItemLayout}>
                {getFieldDecorator("active", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Select defaultValue="售卖" style={{ width: "100%" }}>
                    <Option value="jack">售卖</Option>
                    <Option value="lucy">下架</Option>
                    <Option value="lucy">待上架</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="商品分类" {...formItemLayout}>
                {getFieldDecorator("type", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                  >
                    {children}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="供应商" {...formItemLayout}>
                {getFieldDecorator("商品供应商", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                  >
                    {children}
                  </Select>
                )}
              </Form.Item>
            </Form>
          ) : (
            ""
          )}
          {current === 1 ? (
            <Form>
              <Form.Item label="物品规格" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="单位" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="零售价" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="成本价" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="库存" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="生效日期" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Form>
          ) : (
            ""
          )}
          {current === 2 ? (
            <Form>
              <Form.Item label="快递费（统一，包邮" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="接入达达同城送" {...formItemLayout}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Form>
          ) : (
            ""
          )}
        </div>
        <div className={css(styles.footer)}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("新增商品成功！")}
            >
              提交
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={prev}>
              上一步
            </Button>
          )}
        </div>
      </Fragment>
    );
  })
);
