import React, { Fragment } from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import { IRedux } from "../../typing/redux";
import { rxAction } from "../../store/action";

// Redux data and actions
const rxProps = state => {
  return {
    admin: state.admin
  };
};

/**
 * @description Admin  side frame and frame animation
 */
interface IProps extends IRedux {
  someType?: any;
}
export default connect(
  rxProps,
  { rxAction }
)((props: IProps) => {
  const { rxAction, admin } = props;
  // 侧边栏选中的回调
  const select = (param: { key: string }): void => {
    rxAction("ADMIN_SIDER_SELECT", param.key);
  };
  // 拓展菜单
  const SubMenu = Menu.SubMenu;

  return (
    <Fragment>
      <Logo />
      <Menu
        theme="dark"
        mode="inline"
        onSelect={select}
        defaultOpenKeys={["shop"]}
        defaultSelectedKeys={[admin.siderSelect]}
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

/**
 * @description style
 */
const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;
