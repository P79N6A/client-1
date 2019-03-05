import React, { memo } from 'react';
import { Layout } from 'antd';
import styles from './index.scss';
import AdminLayout from '@/layouts/admin';

interface IProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

export default memo((props: IProps) => {
  const adminLayout = () => {
    switch (props.location.pathname) {
      case '/admin':
      case '/admin/dashboard':
        return true;
      default:
        return false;
    }
  };
  if (adminLayout()) {
    return <AdminLayout>{props.children}</AdminLayout>;
  }
  return (
    <Layout className={styles.layout} tagName={'main'}>
      {props.children}
    </Layout>
  );
});
