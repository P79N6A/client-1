import React, { memo, Fragment, useState } from "react";
import produce from "immer";
import { Form, Icon, Input, message, Modal, Upload } from "antd";
import { ossUpload } from "../../api/upload";
import { storeSet } from "../../api/storeSet";

// 创建店铺
interface IProps {
  children?: any;
  logo: string;
  id: string;
  desc: string;
  name: string;
}

export default memo((props: IProps) => {
  // 展示 创建模态框
  const [visible, setVisible] = useState();

  // 将店铺信息提交给后台并创建店铺
  const handleOk = () => {
    storeSet({ store_id: props.id, ...form })
      .then(() => {
        message.success("店铺信息修改成功");
      })
      .catch(() => {
        message.error("店铺信息修改失败");
      });
    setVisible(false);
  };

  // 文件上传
  const [upload, setUpload] = useState<any>({
    previewVisible: false,
    previewImage: "",
    fileList: [
      {
        uid: "1",
        name: "logo.png",
        status: "done",
        url: props.logo
      }
    ]
  });

  // 控制图片预览
  const handleCancel = () => setUpload({ ...upload, previewVisible: false });

  // 图片预览
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
  };

  // 图片上传
  const upFile = (e: any) => {
    return ossUpload(e)
      .then((s: any) => {
        setUpload(
          produce(upload, draftState => {
            draftState.fileList.push({
              uid: "1",
              name: "logo.png",
              status: "done",
              url: s.fileUrl
            });
          })
        );
        setForm({ ...form, logo: s.fileUrl });
      })
      .catch(e => {
        console.log(e);
      });
  };

  // 删除图片
  const remove = () => {
    setUpload({
      previewVisible: false,
      previewImage: "",
      fileList: []
    });
  };

  // 搜集表单信息
  const [form, setForm] = useState({
    logo: props.logo,
    name: props.name,
    desc: props.desc
  });

  // 表单结构
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 }
    },
    wrapperCol: {
      sm: { span: 20 }
    }
  };

  return (
    <Fragment>
      <span onClick={() => setVisible(true)}>{props.children}</span>
      <Modal
        title="店铺修改"
        visible={visible}
        onOk={handleOk}
        okText={"确认"}
        cancelText={"取消"}
        onCancel={() => setVisible(false)}
      >
        <Form {...formItemLayout}>
          <Form.Item label="店铺标识">
            <Upload
              listType="picture-card"
              fileList={upload.fileList}
              onPreview={handlePreview}
              onRemove={remove}
              customRequest={async files => upFile(files)}
              multiple={true}
            >
              {upload.fileList.length >= 1 ? null : (
                <div>
                  <Icon type="plus" />
                  <div>LOGO 上传</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="店铺名称">
            <Input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="店铺简介">
            <Input.TextArea
              value={form.desc}
              rows={4}
              onChange={e => setForm({ ...form, desc: e.target.value })}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={upload.previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="logo" style={{ width: "100%" }} src={upload.previewImage} />
      </Modal>
    </Fragment>
  );
});
