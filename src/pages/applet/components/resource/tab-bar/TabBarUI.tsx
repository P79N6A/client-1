import React, { memo } from 'react';
import { TabBar } from 'antd-mobile';

export default memo(() => {
  const renderContent = pageText => {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}>
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}>
          Click to switch fullscreen
        </a>
      </div>
    );
  };
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
      tabBarPosition="top"
    >
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        badge={1}
        data-seed="logId"
      >
        {renderContent('Life')}
      </TabBar.Item>
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        badge={1}
        data-seed="logId"
      >
        {renderContent('Life')}
      </TabBar.Item>
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        badge={1}
        data-seed="logId"
      >
        {renderContent('Life')}
      </TabBar.Item>
      <TabBar.Item
        title="Life"
        key="Life"
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
            }}
          />
        }
        badge={1}
        data-seed="logId"
      >
        {renderContent('Life')}
      </TabBar.Item>
    </TabBar>
  );
});
