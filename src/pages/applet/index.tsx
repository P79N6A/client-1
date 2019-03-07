import React, { Fragment, memo } from 'react';
import { Card, Col, Collapse, Icon, Layout, Menu, Row } from 'antd';
import styles from './index.scss';

export default memo(() => {
  const { Header, Sider, Content } = Layout;
  const Panel = Collapse.Panel;
  return (
    <Fragment>
      <Sider width={80}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" className={styles.components_menu_item}>
            <Icon type="user" />
            <div>组件</div>
          </Menu.Item>
          <Menu.Item key="2" className={styles.components_menu_item}>
            <Icon type="video-camera" />
            <div>插件</div>
          </Menu.Item>
          <Menu.Item key="3" className={styles.components_menu_item}>
            <Icon type="upload" />
            <div>页面</div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout tagName={'section'}>
        <Header tagName={'header'} className={styles.header}>
          导航栏
        </Header>
        <Layout tagName={'section'}>
          <Sider className={styles.components} width={290}>
            <Collapse bordered={false} defaultActiveKey={['1']} style={{ padding: 0 }}>
              <Panel header="基础组件" key="1" style={{ padding: 0 }}>
                <Card>
                  <Card.Grid>Content</Card.Grid>
                  <Card.Grid>Content</Card.Grid>
                  <Card.Grid>Content</Card.Grid>
                  <Card.Grid>Content</Card.Grid>
                  <Card.Grid>Content</Card.Grid>
                  <Card.Grid>Content</Card.Grid>
                </Card>
              </Panel>
              <Panel header="页面组件" key="2">
                Known for its loyalty and faithfulness,
              </Panel>
              <Panel header="扩展组件" key="3">
                it can be found as a welcome guest in many households across the world.
              </Panel>
            </Collapse>
          </Sider>
          <Content tagName={'main'} className={styles.content}>
            <div className={styles.canvas}>
              <div className={styles.applet_title}>
                <h3>小程序</h3>
              </div>
              <div className={styles.applet_content} />
              <div className={styles.applet_footer} />
            </div>
          </Content>
          <Sider className={styles.edit} width={290}>
            组件数据编辑
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
