import React, { memo } from 'react';
import { Layout } from 'antd';
import styles from './index.scss';

interface IProps {
  children?: object;
  history?: History;
  location?: Location;
}

/**
 * 程序入口
 * 功能
 * 1. 全局父div样式 ✅
 * 2. 通过路由区分父级样式 ✅
 */
export default memo((props: IProps) => {
  if (props.location.pathname === '/applet') {
    return (
      <Layout className={styles.applet} tagName={'main'}>
        {props.children}
      </Layout>
    );
  }

  return (
    <Layout className={styles.layout} tagName={'main'}>
      {props.children}
    </Layout>
  );
});
