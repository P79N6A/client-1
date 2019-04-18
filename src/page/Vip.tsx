import { Layout } from "antd";
import React, { Fragment, memo } from "react";

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
