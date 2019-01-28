import { connect } from "react-redux";
import React, { memo, Fragment } from "react";
import { IRedux } from "../../typing/redux";
import Stock from "./stock/Stock";
import Supplier from "./supplier/Supplier";
import Distribution from "./distribution/Distribution";
import Purchase from "./purchase/Purchase";

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
  // Code snippet and logic
  memo((props: IProps) => {
    const { admin } = props;
    // 内容相应的组件
    const content = {
      stock: <Stock />,
      supplier: <Supplier />,
      purchase: <Purchase />,
      distribution: <Distribution />
    };
    return <Fragment>{content[admin.siderSelect]}</Fragment>;
  })
);
