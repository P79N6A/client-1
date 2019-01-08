import React, { memo, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { Button, Select, Form, Input, DatePicker, Row, Col, Steps, message } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;



export default Form.create()(
  memo((props: any) => {

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    };
    const styles = StyleSheet.create({
      // 搜索栏背景
      searchBg: {
        marginTop: 10,
        padding: 24,
        background: "#fbfbfb",
        border: "1px solid #d9d9d9",
        borderRadius: 6
      },
      //
      button: {
        marginRight: 10
      },
      table: {
        marginTop: 10
      },

      top: {
        marginTop: 10
      }
    });
    const { getFieldDecorator } = props.form;

    return (
      <Form className={css(styles.searchBg)}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label={`商品筛选`} {...formItemLayout}>
              {getFieldDecorator(`商品筛选`)(
                <InputGroup>
                  <InputGroup compact={true}>
                    <Select defaultValue="商品名称">
                      <Option value="商品名称">商品名称</Option>
                      <Option value="商品条码">商品条码</Option>
                      <Option value="商品编码">商品编码</Option>
                    </Select>
                    <Input
                      style={{ width: "72%" }}
                      placeholder="请输入商品名称"
                    />
                  </InputGroup>
                </InputGroup>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={`商品分类`} {...formItemLayout}>
              {getFieldDecorator(`商品分类`)(
                <Select defaultValue="所有分类">
                  <Option value="所有分类">所有分类</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={`供应商`} {...formItemLayout}>
              {getFieldDecorator(`供应商`)(
                <Select defaultValue="所有供应商">
                  <Option value="所有供应商">所有供应商</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={`创建时间`} {...formItemLayout}>
              {getFieldDecorator(`创建时间`)(
                <DatePicker style={{ width: "100%" }}/>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={`生效时间`} {...formItemLayout}>
              {getFieldDecorator(`生效时间`)(
                <RangePicker style={{ width: "100%" }}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              className={css(styles.button)}
            >
              筛选
            </Button>
            <Button htmlType={"button"} className={css(styles.button)}>
              重置
            </Button>

            <a style={{ fontSize: 12 }}>更多搜索</a>
          </Col>
        </Row>
      </Form>


    );
  })
);
