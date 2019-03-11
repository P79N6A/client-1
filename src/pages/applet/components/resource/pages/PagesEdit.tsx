import React, { memo } from 'react';
import { Icon, PageHeader, Tabs, Tree } from 'antd';
import CirclePicker from '@/pages/applet/components/resource/theme/ThemeEdit';

const { TreeNode } = Tree;
const TabPane = Tabs.TabPane;

export default memo(() => {
  const onSelect = (selectedKeys, info) => {};
  return (
    <PageHeader
      onBack={() => null}
      backIcon={<Icon type="setting" />}
      title="编辑"
      subTitle="展示页面结构"
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="页面" key="1">
            <div style={{ marginTop: '14px' }}>
              <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={onSelect}>
                <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0">
                    <TreeNode title="leaf" key="0-0-0-0" />
                    <TreeNode title="leaf" key="0-0-0-1" />
                    <TreeNode title="leaf" key="0-0-0-2" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title="leaf" key="0-0-1-0" />
                  </TreeNode>
                  <TreeNode title="parent 1-2" key="0-0-2">
                    <TreeNode title="leaf" key="0-0-2-0" />
                    <TreeNode title="leaf" key="0-0-2-1" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </div>
          </TabPane>
        </Tabs>
      }
    />
  );
});
