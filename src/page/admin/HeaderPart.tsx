/** @jsx jsx */
import React, { memo } from "react";
import { jsx, css } from "@emotion/core";
import { Menu, Icon, Avatar, Dropdown, AutoComplete, Input } from "antd";

/**
 * @description admin 导航栏
 * 功能
 * 1. 搜索服务 🚧
 * 2. 页面导航 🚧
 */
export default memo(() => {
  // 样式
  const style = css`
    & > ul {
      line-height: 64px;
      float: right;
    }
    & > span {
      height: 64px;
      padding: 15px 0;
      float: right;
      align-items: center;
    }
  `;
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
  const dataSource = ["搜索服务一", "搜索服务二", "搜索服务三"];

  return (
    <div css={style}>
      <Dropdown overlay={menu}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Dropdown>
      <Menu mode="horizontal">
        <Menu.Item key="search">
          <AutoComplete
            style={{ width: 200 }}
            dataSource={dataSource}
            placeholder="搜索服务项"
            filterOption={(inputValue, option) =>
              typeof option.props.children === "string"
                ? option.props.children
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                : ""
            }
          >
            <Input suffix={<Icon type="search" />} />
          </AutoComplete>
        </Menu.Item>
        <Menu.Item key="help">
          <Icon type="question-circle" />
          帮助
        </Menu.Item>
        <Menu.Item key="msg">
          <Icon type="bell" />
          信息
        </Menu.Item>
      </Menu>
    </div>
  );
});
