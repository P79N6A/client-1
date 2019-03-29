import React, { memo, Fragment } from "react";
import { Layout } from "antd";
export default memo(() => {
    const { Header, Content, Footer } = Layout;
    return (React.createElement(Fragment, null,
        React.createElement(Header, null),
        React.createElement(Content, null),
        React.createElement(Footer, null)));
});
//# sourceMappingURL=Home.js.map