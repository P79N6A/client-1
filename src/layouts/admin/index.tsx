import React, { memo, useState, Fragment } from 'react';
import { Icon, Layout, Menu } from 'antd';

import styles from './index.scss';

interface IProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const AdminLayout = memo((props: IProps) => {
  const [collapse, setCollapse] = useState(false);
  const onCollapse = () => {
    setCollapse(!collapse);
  };

  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout className={styles.layout} tagName={'main'}>
      <Sider collapsible={true} collapsed={collapse} onCollapse={onCollapse}>
        <div className={styles.logo} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout tagName={'main'}>
        <Header tagName={'header'} className={styles.header}>
          <Menu mode="horizontal" className={styles.header_menu}>
            <Menu.Item key="mail">Navigation One</Menu.Item>
            <Menu.Item key="mails">Navigation One</Menu.Item>
            <Menu.Item key="mailss">Navigation One</Menu.Item>
          </Menu>
        </Header>
        <Content tagName={'main'}>{props.children}</Content>
        <Footer tagName={'footer'}>Footer</Footer>
      </Layout>
    </Layout>
  );
});

export default AdminLayout;
