import React, { memo, useState } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import { Button, Select, Form, Input, DatePicker, Row, Col } from "antd";
import { FormComponentProps } from "antd/lib/form";

const { Option } = Select;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;

interface IProps extends FormComponentProps {
  // 替换项
  other?: number;
}

export default Form.create()(
  memo((props: IProps) => {
    const { getFieldDecorator } = props.form;
    // 表单排版样式
    const formItemLayout = {
      labelCol: {
        xs: { span: 7 },
        sm: { span: 7 },
        md: { span: 7 },
        lg: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 17 },
        sm: { span: 17 },
        md: { span: 17 },
        lg: { span: 17 }
      }
    };
    // 样式
    const styles = StyleSheet.create({
      searchBg: {
        marginTop: 10,
        padding: 24,
        background: "#fbfbfb",
        border: "1px solid #d9d9d9",
        borderRadius: 6
      },
      searchButton: {
        marginRight: 4
      },
      searchEdit: {
        textAlign: "right"
      }
    });

    return (
      <Form className={css(styles.searchBg)}>
        <Row gutter={24}>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`商品筛选`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`商品筛选`)(
                <InputGroup compact={true}>
                  <Select defaultValue="名称" style={{ width: "50%" }}>
                    <Option value="名称">名称</Option>
                    <Option value="条码">条码</Option>
                    <Option value="编码">编码</Option>
                  </Select>
                  <Input
                    style={{ width: "50%" }}
                    placeholder="请输入商品名称"
                  />
                </InputGroup>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`商品分类`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`商品分类`)(
                <Select defaultValue="所有分类">
                  <Option value="所有分类">所有分类</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`供应商`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`供应商`)(
                <Select defaultValue="所有供应商">
                  <Option value="所有供应商">所有供应商</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`商品状态`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`状态`)(
                <Select defaultValue="所有供应商">
                  <Option value="所有供应商">所有供应商</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`创建日期`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`创建日期`)(
                <DatePicker style={{ width: "100%" }} />
              )}
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item label={`生效日期`} colon={false} {...formItemLayout}>
              {getFieldDecorator(`生效日期`)(
                <RangePicker style={{ width: "100%" }} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} className={css(styles.searchEdit)}>
            <Button htmlType="submit" className={css(styles.searchButton)}>
              筛选
            </Button>
            <Button htmlType={"button"} className={css(styles.searchButton)}>
              重置
            </Button>
            <a style={{ fontSize: 12 }}> 导出报表</a>
          </Col>
        </Row>
      </Form>
    );
  })
);
