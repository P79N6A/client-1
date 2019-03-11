import React, { Fragment, memo, useState } from 'react';
import { Button, Col, Icon, Layout, Menu, Row } from 'antd';
import styles from './index.scss';
import ThemeEdit from '@/pages/applet/components/resource/theme/ThemeEdit';
import PagesEdit from '@/pages/applet/components/resource/pages/PagesEdit';
import TabBarUI from '@/pages/applet/components/resource/tab-bar/TabBarUI';
import TextList from '@/pages/applet/components/resource/text/TextList';

/**
 * @description
 * 功能
 * 1. 拖动
 * 2. 组件
 * 3. 新页面
 * 参考
 * 秀赞
 */
export default memo(() => {
  // 工具选择
  const [tool, setTool] = useState('theme');
  const onTool = (name: string) => {
    setTool(name);
  };

  const { Header, Sider, Content } = Layout;

  return (
    <Fragment>
      <Sider width={80}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" className={styles.components_menu_item}>
            <Icon type="font-size" />
            <div>文本</div>
          </Menu.Item>
          <Menu.Item key="2" className={styles.components_menu_item}>
            <Icon type="block" />
            <div>按钮</div>
          </Menu.Item>
          <Menu.Item key="3" className={styles.components_menu_item}>
            <Icon type="picture" />
            <div>图片</div>
          </Menu.Item>
          <Menu.Item key="4" className={styles.components_menu_item}>
            <Icon type="shop" />
            <div>商品</div>
          </Menu.Item>
          <Menu.Item key="5" className={styles.components_menu_item}>
            <Icon type="appstore" />
            <div>功能</div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout tagName={'section'}>
        <Header tagName={'header'} className={styles.header}>
          <Menu mode="horizontal" style={{ float: 'left' }}>
            <Menu.Item key="mail">
              <Icon type="file-sync" />
              更换模板
            </Menu.Item>
          </Menu>
          <Menu mode="horizontal" style={{ float: 'right' }}>
            <Menu.Item key="1">
              <Button type="primary" htmlType={'button'}>
                发布
              </Button>
            </Menu.Item>
            <Menu.Item key="2">保存</Menu.Item>
            <Menu.Item key="3">预览</Menu.Item>
            <Menu.Item key="4">
              <Button type={'dashed'} htmlType={'button'}>
                退出
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout tagName={'section'}>
          <Sider className={styles.components} width={300}>
            <TextList />
          </Sider>
          <Content tagName={'main'} className={styles.content}>
            <div className={styles.canvas}>
              <div className={styles.applet_content} />
              <div className={styles.applet_footer}>
                <TabBarUI />
              </div>
            </div>
            <div className={styles.tools}>
              <Row>
                <Col span={24}>
                  <div
                    style={{ color: `${tool === 'theme' ? 'red' : ''}` }}
                    onClick={onTool.bind(this, 'theme')}
                  >
                    <Icon type="bg-colors" />
                    <br />
                    主题
                    <br />
                    <br />
                  </div>
                </Col>
                <Col span={24}>
                  <div
                    style={{ color: `${tool === 'tab-bar' ? 'red' : ''}` }}
                    onClick={onTool.bind(this, 'tab-bar')}
                  >
                    <Icon type="customer-service" />
                    <br />
                    导航
                    <br />
                    <br />
                  </div>
                </Col>
                <Col span={24}>
                  <div
                    style={{ color: `${tool === 'pages' ? 'red' : ''}` }}
                    onClick={onTool.bind(this, 'pages')}
                  >
                    <Icon type="folder-open" />
                    <br />
                    页面
                    <br />
                    <br />
                  </div>
                </Col>
                <Col span={24}>
                  <div
                    style={{ color: `${tool === 'help' ? 'red' : ''}` }}
                    onClick={onTool.bind(this, 'help')}
                  >
                    <Icon type="customer-service" />
                    <br />
                    帮助
                    <br />
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Sider className={styles.edit} width={300}>
            <ThemeEdit />
            {/*<PagesEdit />*/}
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
