import React, { memo, Fragment, useState } from "react";
import { Modal, Tabs } from "antd";

interface PropsFace {
  children: object;
}

/**
 * 图片素材库
 */
export default memo((props: PropsFace) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  // 确认
  const handleOk = () => {
    setVisible(false);
  };
  // 取消
  const handleCancel = () => {
    setVisible(false);
  };

  const TabPane = Tabs.TabPane;
  return (
    <Fragment>
      <span onClick={showModal} style={{ textAlign: "center" }}>
        {props.children}
      </span>
      <Modal
        title="图片"
        visible={visible}
        okText={"确定"}
        cancelText={"取消"}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="我的文件" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="图片库" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  );
});
