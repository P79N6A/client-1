import React, { memo, Fragment } from "react";
import { Layout } from "antd";

export default memo(() => {
  const { Header, Content, Footer } = Layout;
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
});
