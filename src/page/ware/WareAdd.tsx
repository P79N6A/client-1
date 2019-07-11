import React, { memo, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import produce from "immer";
import {
  Button,
  Col,
  Form,
  Icon,
  Input,
  message,
  Modal,
  Result,
  Row,
  Select,
  Steps,
  Tag,
  Upload
} from "antd";
import { ossUpload } from "../../api/upload";
import { wareAdd } from "../../api/wareAdd";

// 创建商品
interface IProps {
  children?: any;
}

export default memo((props: IProps) => {
  // 用户id
  const userId = useSelector((state: any) => state.user.userId);

  // 步骤条当前步骤数
  const [current, setCurrent] = useState(0);

  //搜集表单信息
  const [form, setForm] = useState<any>({
    atlas: [],
    coding: "",
    name: "",
    desc: "",
    format: [],
    delivery: "",
    price: ""
  });

  // 获取图片数据
  const [upload, setUpload] = useState<any>({
    previewVisible: false,
    previewImage: "",
    fileList: []
  });
  const upFile = (files: any) => {
    ossUpload(files).then((data: any) => {
      setUpload(
        produce(upload, draftState => {
          draftState.fileList.push({
            uid: new Date().getTime(),
            name: new Date().getTime(),
            status: "done",
            url: data.fileUrl
          });
        })
      );
    });
  }; // 图片上传
  const handleCancel = () => setUpload({ ...upload, previewVisible: false }); // 关闭图片预览
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      // 获取图像 base 64
      const getBase64 = (file: Blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      };
      file.preview = await getBase64(file.originFileObj);
    }
    setUpload({
      ...upload,
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  }; // 图片预览
  const remove = (file: any): any => {
    setUpload(
      produce(upload, draftState => {
        draftState.previewVisible = false;
        draftState.previewImage = "";
        let newList: any = [];
        draftState.fileList.map((data: any, index: number) => {
          if (data.url !== file.url) {
            newList[index] = data;
          }
        });
        draftState.fileList = newList;
      })
    );
  }; //删除图片

  // 获取规格信息
  const [format, setFormat] = useState({ spec: "", stock: "", unit: "" });
  const changFormat = (type: any, value: any) => {
    switch (type) {
      case "spec":
        return setFormat({ ...format, spec: value.target.value });
      case "stock":
        return setFormat({ ...format, stock: value.target.value });
      case "unit":
        return setFormat({ ...format, unit: value.target.value });
    }
  };
  const saveFormat = () => {
    setForm(
      produce(form, draftState => {
        draftState.format.push(format);
      })
    );
    setFormat({ spec: "", stock: "", unit: "" });
  };
  const removeFormat = (index: number) => {
    setForm(
      produce(form, draftState => {
        draftState.format.splice(index, 1);
      })
    );
  };

  // 提交当前数据，创建商品
  const submit = () => {
    const list: string[] = [];
    // 获取商品图集
    upload.fileList.map((data: any) => {
      list.push(data.url);
    });
    // 数据
    wareAdd({ ...form, atlas: list, user_id: userId }).then(() => {
      setCurrent(3);
    });
  };

  //表单结构
  const formItemLayout = {
    labelCol: {
      sm: { span: 6 }
    },
    wrapperCol: {
      sm: { span: 10 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 10,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  return (
    <Fragment>
      <Steps current={current}>
        <Steps.Step title="商品信息" />
        <Steps.Step title="商品库" />
        <Steps.Step title="商品价格" />
        <Steps.Step title="完成" />
      </Steps>
      <div style={{ margin: "40px auto 0", padding: "0 40px" }}>
        {current === 0 && (
          <Form {...formItemLayout}>
            <Form.Item label="商品图片">
              <Upload
                listType="picture-card"
                fileList={upload.fileList}
                onPreview={handlePreview}
                onRemove={remove}
                customRequest={async files => upFile(files)}
                multiple={true}
              >
                {upload.fileList.length >= 4 ? null : (
                  <div>
                    <Icon type="plus" />
                    <div>点击上传</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
            <Form.Item label="商品名称">
              <Input
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="商品编号">
              <Input
                onChange={e => setForm({ ...form, coding: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="商品简介">
              <Input.TextArea
                rows={4}
                onChange={e => setForm({ ...form, desc: e.target.value })}
              />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" onClick={() => setCurrent(1)}>
                下一步
              </Button>
            </Form.Item>
          </Form>
        )}
        {current === 1 && (
          <Form {...formItemLayout}>
            <Form.Item label="规格/库存">
              {form.format.map((data: any, index: any) => {
                return (
                  <Tag closable key={index} onClose={() => removeFormat(index)}>
                    {data.spec}/{data.stock}
                    {data.unit}
                  </Tag>
                );
              })}
            </Form.Item>
            <Form.Item label="新建">
              <Input.Group compact>
                <Row gutter={8}>
                  <Col span={6}>
                    <Input
                      value={format.spec}
                      placeholder={"规格"}
                      onChange={e => changFormat("spec", e)}
                    />
                  </Col>
                  <Col span={6}>
                    <Input
                      value={format.stock}
                      placeholder={"库存"}
                      onChange={e => changFormat("stock", e)}
                    />
                  </Col>
                  <Col span={4}>
                    <Input
                      value={format.unit}
                      placeholder={"单位"}
                      onChange={e => changFormat("unit", e)}
                    />
                  </Col>
                  <Col span={4}>
                    <Button onClick={saveFormat}>添加</Button>
                  </Col>
                </Row>
              </Input.Group>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                onClick={() => setCurrent(2)}
                style={{ marginRight: 16 }}
              >
                下一步
              </Button>
              <Button onClick={() => setCurrent(0)}>上一步</Button>
            </Form.Item>
          </Form>
        )}
        {current === 2 && (
          <Form {...formItemLayout}>
            <Form.Item label="商品售价">
              <Input
                onChange={e => setForm({ ...form, price: e.target.value })}
              />
            </Form.Item>
            <Form.Item label="配送方式">
              <Select
                defaultValue="邮寄"
                onChange={(value: any) => setForm({ ...form, delivery: value })}
              >
                <Select.Option value="全国邮寄">全国邮寄</Select.Option>
                <Select.Option value="上门自取">上门自取</Select.Option>
                <Select.Option value="商家配送">商家配送</Select.Option>
                <Select.Option value="线上购买">线上购买</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                onClick={submit}
                style={{ marginRight: 16 }}
              >
                提交
              </Button>
              <Button onClick={() => setCurrent(1)}>上一步</Button>
            </Form.Item>
          </Form>
        )}
        {current === 3 && (
          <Result
            status="success"
            title="商品添加成功"
            subTitle="商品添加后，为提高商品转化李，如无必要请不要修改商品信息！"
            extra={[
              <Button type="primary" key="console">
                批量导入
              </Button>,
              <Button key="buy" onClick={() => setCurrent(0)}>
                继续添加
              </Button>
            ]}
          />
        )}
      </div>
      <Modal
        visible={upload.previewVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <img alt="logo" style={{ width: "100%" }} src={upload.previewImage} />
      </Modal>
    </Fragment>
  );
});
