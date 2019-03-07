import React, { memo } from 'react';
import { Layout } from 'antd';
import styles from './index.scss';

interface IProps {
  children?: object;
  history?: History;
  location?: Location;
}

export default memo((props: IProps) => {
  return (
    <Layout tagName={'main'} className={styles.layout}>
      {props.children}
    </Layout>
  );
});
