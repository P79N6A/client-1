import React, { memo, Fragment } from 'react';
import { Layout } from 'antd';
import styles from './index.scss';

export default memo(() => {
  const { Header, Footer, Content } = Layout;

  return (
    <Fragment>
      <Header tagName={'header'}>header</Header>
      <Content tagName={'main'}>Content</Content>
      <Footer tagName={'footer'}>Footer</Footer>
    </Fragment>
  );
});
