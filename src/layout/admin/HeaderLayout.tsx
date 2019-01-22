import React, { memo } from "react";
import { Menu, Icon, Avatar, Dropdown, Row, Col } from "antd";
import { HeaderLayoutStyle } from "./styled";

interface IProps {
  collapsed: boolean;

  mbToggle(): void;

  toggle(): void;
}

export default memo((props: IProps) => {
  const { toggle, collapsed, mbToggle } = props;
  // 头像隐藏菜单
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单一
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单二
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单三
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderLayoutStyle>
      <span>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
            <Icon
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
            <Icon
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={mbToggle}
            />
          </Col>
        </Row>
      </span>
      <div>
        <Dropdown overlay={menu}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Dropdown>
      </div>
      <Menu mode="horizontal">
        <Menu.Item key="help">
          <Icon type="question-circle" />
          帮助
        </Menu.Item>
        <Menu.Item key="msg">
          <Icon type="bell" />
          信息
        </Menu.Item>
      </Menu>
    </HeaderLayoutStyle>
  );
});
