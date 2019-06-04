import React, { memo, Fragment, useState } from "react";
import { Button, Form, Icon, Input, message, Modal, Upload } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { createShopApi } from "../../../../api/shop-create/createShop";
import { ossUpFileApi } from "../../../../api/oss-upFile/oss_up_file";

// 创建商铺
interface ICreateShop extends FormComponentProps {
  children?: any;
}

const CreateShop = memo((props: ICreateShop) => {
  const { getFieldDecorator } = props.form;

  // 展示创建模态框
  const [visible, setVisible] = useState();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        createShopApi({
          user_id: "1",
          title: values["title"],
          desc: values["desc"],
          cover: "d"
        })
          .then(({ error, msg }) => {
            if (error) {
              message.warning(msg);
            } else {
              message.success(msg);
              setVisible(false);
            }
          })
          .catch(({ error, msg }) => message.warning(msg));
      }
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const upFile = (e: any) => {
    console.log(e);
    ossUpFileApi(e)
      .then()
      .catch();
  };

  return (
    <Fragment>
      <span onClick={showModal}>{props.children}</span>
      <Modal
        title="创建商铺"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="logo">
            <input
              type="file"
              multiple
              required
              onChange={({ target: { validity, files } }) => upFile(files)}
            />
          </Form.Item>
          <Form.Item label="名称">
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "请填写商铺名称"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="简介">
            {getFieldDecorator("desc", {
              rules: [
                {
                  required: true,
                  message: "请填写商铺简介"
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
});

export default Form.create()(CreateShop);
