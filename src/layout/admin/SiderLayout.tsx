import React, { Fragment } from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { Logo } from "./styled";
import { IRxReducer } from "../../typing/store";
import { rxAction } from "../../store/action";

const mapStateToProps = state => {
  return {
    admin: state.admin
  };
};

interface IProps extends IRxReducer {
  rxAction(type, payload): void;
}

export default connect(
  mapStateToProps,
  { rxAction }
)((props: IProps) => {
  // 侧边栏选中的回调
  const select = ({ key }): void => {
    props.rxAction("ADMIN_SIDER_SELECT", key);
  };

  const SubMenu = Menu.SubMenu;

  return (
    <Fragment>
      <Logo />
      <Menu
        theme="dark"
        mode="inline"
        onSelect={select}
        defaultOpenKeys={["shop"]}
        defaultSelectedKeys={[props.admin.siderSelect]}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          <span>概览</span>
        </Menu.Item>
        <SubMenu
          key="shop"
          title={
            <span>
              <Icon type="shop" />
              <span>商品</span>
            </span>
          }
        >
          <Menu.Item key="stock">库存管理</Menu.Item>
          <Menu.Item key="distribution">配送管理</Menu.Item>
          <Menu.Item key="purchase">采购管理</Menu.Item>
          <Menu.Item key="supplier">供货商管理</Menu.Item>
        </SubMenu>
        <Menu.Item key="calendar">
          <Icon type="calendar" />
          <span>订单</span>
        </Menu.Item>
        <Menu.Item key="team">
          <Icon type="team" />
          <span>客户</span>
        </Menu.Item>
        <Menu.Item key="money-collect">
          <Icon type="money-collect" />
          <span>资产</span>
        </Menu.Item>
        <Menu.Item key="deployment-unit">
          <Icon type="deployment-unit" />
          <span>营销</span>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});
