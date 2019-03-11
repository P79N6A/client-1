import React, { memo, Fragment } from 'react';
import { Avatar, Button, Divider, Icon, Input, List, Skeleton } from 'antd';

const Search = Input.Search;

export default memo(() => {
  const search = value => {};

  return (
    <div style={{ textAlign: 'center', padding: '10px 4px' }}>
      <Search placeholder="请输入素材关键字" onSearch={search} style={{ marginBottom: '16px' }} />

      <List
        bordered
        itemLayout="horizontal"
        dataSource={[1]}
        renderItem={item => (
          <List.Item
            actions={[
              <a>
                <Icon type="plus-circle" />
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="http://marketing.xiuzan.com/src/images/form/text-2x.png" />}
                title={<a href="https://ant.design">文本</a>}
                description="显示文本内容"
              />
            </Skeleton>
          </List.Item>
        )}
      />

      <Divider>素材 </Divider>
    </div>
  );
});
