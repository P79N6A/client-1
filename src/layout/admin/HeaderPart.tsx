import React, { memo } from "react";
import styled from "styled-components";
import { Menu, Icon, Avatar, Dropdown } from "antd";


interface IProps {
  collapsed: boolean;



  toggle(): void;
}

export default memo((props: IProps) => {
  const { toggle, collapsed} = props;
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
      <Icon
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggle}
      />
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

/**
 * @description style
 */
const HeaderLayoutStyle = styled.div`
  & > ul {
    line-height: 64px;
    float: right;
  }
  & > span {
    font-size: 18px;
    line-height: 66px;
    cursor: pointer;
    transition: color 0.3s;
    float: left;
    &:hover {
      color: #1890ff;
    }
  }
  & > div {
    height: 60px;
    float: right;
    align-items: center;
  }
`;
