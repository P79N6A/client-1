import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Button, Result } from "antd";

interface IProps extends RouteComponentProps {
  children: object;
}

/**
 * 功能
 * 1. 监测子组件是否出现网络异常
 * 2. 如果出错则显示错误信息页面
 */
class NetErrorBoundary extends Component<IProps, {}> {
  state = {
    hasError: false
  };

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          status="404"
          title="404"
          subTitle="'对不起，此页面不存在"
          extra={<Button type="primary">回到首页</Button>}
        />
      );
    }

    return this.props.children;
  }
}

export default withRouter(NetErrorBoundary);
