import React, { memo, useState } from 'react';
import { Divider, Icon, Layout, Menu } from 'antd';
import { AppBar, Button, makeStyles, Theme, Toolbar } from '@material-ui/core';
import Logo from '@/components/Logo';
import EditRender from '@/pages/applet/components/EditRender';
import SelectRender from '@/pages/applet/components/SelectRender';
const { Header, Sider, Content } = Layout;

export default memo(() => {
  // sider choose controller
  const [sider, setSider] = useState('text');

  // style
  const useStyles = makeStyles((theme: Theme) => ({
    // layout
    root: { height: '100vh', overflow: 'hidden' },
    // header
    bar: {
      paddingLeft: 56,
      height: '64px',
      lineHeight: '64px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: `${theme.shadows[0]} !important`,
    },
    grow: {
      flexGrow: 1,
    },
    menuSpace: {
      marginRight: theme.spacing(2),
    },
    quite: {
      marginLeft: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    button: {
      background: 'linear-gradient(45deg, #2f54eb 30%, #21CBF3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: '#fff',
    },
    // side
    menu: {
      position: 'relative',
      zIndex: 10000,
      boxShadow: `${theme.shadows[15]} !important`,
    },
    menu_item: {
      boxShadow: 'none',
      height: '60px !important',
      lineHeight: 0,
      textAlign: 'center',
      padding: '0 !important',

      '& i': {
        width: '100%',
      },

      '& div': {
        marginTop: '-16px',
      },
    },
    // select
    select: {},
    // edit
    edit: {},
    // content
    content: {
      padding: '16px',
    },
  }));
  const classes = useStyles();

  // side item data and change function
  const changeSide = (name: string) => {
    setSider(name);
  };
  const item: Array<{ type: string; icon: object; desc: string }> = [
    { desc: '文本', icon: <Icon type="font-colors" />, type: 'text' },
    { desc: '按钮', icon: <Icon type="select" />, type: 'button' },
    { desc: '图片', icon: <Icon type="picture" />, type: 'picture' },
    { desc: '商品', icon: <Icon type="shopping" />, type: 'commodity' },
    { desc: '插件', icon: <Icon type="deployment-unit" />, type: 'plugin' },
  ];

  return (
    <Layout className={classes.root}>
      <Sider width={80} className={classes.menu}>
        <Logo />
        <Menu selectedKeys={[sider]} theme={'dark'}>
          {item.map((data: { desc: string; icon: object; type: string }) => {
            return (
              <Menu.Item
                key={data.type}
                className={classes.menu_item}
                onClick={() => changeSide(data.type)}
              >
                {data.icon}
                <div>{data.desc}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <AppBar className={classes.bar}>
            <Toolbar variant="dense" className={classes.bar}>
              <Button className={classes.menuSpace}>
                <Icon type="interation" className={classes.icon} />
                模板中心
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="question-circle" className={classes.icon} />
                帮助
              </Button>
              <div className={classes.grow} />
              <Button variant="contained" className={`${classes.menuSpace} ${classes.button}`}>
                <Icon type="bulb" className={classes.icon} />
                发布
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="eye" className={classes.icon} />
                预览
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="save" className={classes.icon} />
                保存
              </Button>
              <Divider type="vertical" style={{ color: 'blue' }} />
              <Button className={classes.quite}>
                <Icon type="poweroff" className={classes.icon} />
                退出
              </Button>
            </Toolbar>
          </AppBar>
        </Header>
        <Layout className={classes.content}>
          <Sider width={272} theme={'light'}>
            <SelectRender type={sider} />
          </Sider>
          <Content />
          <Sider width={336} theme={'light'}>
            <EditRender />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
});
