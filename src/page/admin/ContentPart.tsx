import { connect } from "react-redux";
import React, { memo, Fragment } from "react";
import { IRedux } from "../../typing/redux";
import Stock from "../../containers/admin/cargo/Cargo";
import Supplier from "../../containers/admin/supply/Supplier";
import Distribution from "../../containers/admin/delivery/Delivery";

// Redux data and actions
const rxProps = state => {
  return {
    admin: state.admin
  };
};

/**
 * @description Admin frame and frame animation
 */
interface IProps extends IRedux {
  // example
  someType?: any;
}

export default connect(rxProps)(
  memo((props: IProps) => {
    const { admin } = props;
    // 内容相应的组件
    const content = {
      cargo: <Stock />,
      supply: <Supplier />,
      delivery: <Distribution />
    };
    return <Fragment>{content[admin.siderSelect]}</Fragment>;
  })
);
