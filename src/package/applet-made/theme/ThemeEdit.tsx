import React, { memo, Fragment, useState } from "react";
import { connect } from "react-redux";
import { Icon, List } from "antd";
import { HuePicker } from "react-color";
import { xor, map, keys, indexOf } from "lodash";
import {
  Theme,
  Fab,
  CardHeader,
  Card,
  TextField,
  Snackbar,
  Slide,
  SnackbarContent,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Checkbox,
  Drawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { action } from "../../../model/action";
import produce from "immer";

interface IProps {
  applet: IAppletState;

  action({ type: string, payload: ant }): void;
}

const mapStateToProps = state => {
  return {
    applet: state.applet
  };
};

export default connect(
  mapStateToProps,
  { action }
)(
  memo((props: IProps) => {
    // 解析数据
    const { action, applet } = props;

    // 全局提醒
    const [snackbar, setSnackbar] = useState({
      use: false,
      msg: ""
    });

    function TransitionLeft(props) {
      return <Slide {...props} direction="left" />;
    }

    const handleClose = () => {
      setSnackbar({
        use: false,
        msg: ""
      });
    };

    // 模态框设置
    const [model, setModel] = useState(true);
    const modelOpen = () => {
      setModel(true);
    };
    const modelClose = () => {
      setModel(false);
    };

    // 更新色值
    const changeColor = color => {
      action({
        type: "theme",
        payload: {
          data: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
        }
      });
    };
    const inputChangeColor = color => {
      action({
        type: "theme",
        payload: {
          data: color.target.value
        }
      });
    };
    // nav 数据操作
    const navEdit = (type: string, data: any): void => {
      switch (type) {
        case "up":
          if (data !== 0) {
            action({
              type: "nav",
              payload: {
                data: produce(applet.nav, draft => {
                  [draft[data], draft[data - 1]] = [
                    draft[data - 1],
                    draft[data]
                  ];
                })
              }
            });
          } else {
            setSnackbar({
              use: true,
              msg: "已至最顶层"
            });
          }
          break;
        case "down":
          if (data < applet.nav.length - 1) {
            action({
              type: "nav",
              payload: {
                data: produce(applet.nav, draft => {
                  [draft[data + 1], draft[data]] = [
                    draft[data],
                    draft[data + 1]
                  ];
                })
              }
            });
          } else {
            setSnackbar({
              use: true,
              msg: "已至最下层"
            });
          }
          break;
        case "del":
          return action({
            type: "nav",
            payload: {
              data: produce(applet.nav, draft => {
                draft.splice(data, 1);
              })
            }
          });
        case "change":
          return action({
            type: "nav",
            payload: {
              data: "change"
            }
          });
      }
    };
    // page 页面操作
    const pageEdit = (type: string, data: any): void => {
      switch (type) {
        case "del":
          return action({
            type: "pages",
            payload: {
              data: produce(applet.pages, draft => {
                delete draft[data];
              })
            }
          });
        case "change":
          return action({
            type: "nav",
            payload: {
              data: "change"
            }
          });
      }
    };
    // 样式
    const useStyles = makeStyles((theme: Theme) => ({
      theme_card: {
        boxShadow: theme.shadows[0],
        padding: "8px 16px"
      },
      nav_card: {
        boxShadow: theme.shadows[0],
        padding: "8px 16px",
        margin: "8px 0"
      },
      page_card: {
        boxShadow: theme.shadows[0],
        padding: "8px 16px"
      },
      add: {
        alignCenter: "center",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: -15
      },
      icon: {
        color: "white",
        width: 21,
        height: 21,
        verticalAlign: "-0.15em",
        fill: "currentColor",
        overflow: "hidden"
      },
      snack: {
        backgroundColor: "#ffa000"
      }
    }));
    const classes = useStyles();

    return (
      <Fragment>
        <Card className={classes.theme_card}>
          <CardHeader
            subheader="主题色"
            action={
              <TextField
                label="色值"
                type="search"
                value={applet.theme}
                onChange={inputChangeColor}
              />
            }
          />
          <HuePicker
            width={"300px"}
            color={applet.theme}
            onChange={changeColor}
          />
        </Card>
        <Card className={classes.nav_card}>
          <CardHeader
            action={
              <Fab color="primary" aria-label="Add" size={"small"}>
                <svg aria-hidden="true" className={`${classes.icon}`}>
                  <use xlinkHref="#iconicon-" />
                </svg>
              </Fab>
            }
            subheader="导航页"
          />
          <List
            size={"small"}
            itemLayout="horizontal"
            dataSource={applet.nav}
            renderItem={(
              item: {
                page_id: string;
                title: string;
                icon: string;
              },
              index: number
            ) => (
              <List.Item
                actions={[
                  <Icon
                    type="up"
                    key={1}
                    onClick={navEdit.bind(this, "up", index)}
                  />,
                  <Icon
                    type="down"
                    key={2}
                    onClick={navEdit.bind(this, "down", index)}
                  />,
                  <Icon type="edit" key={3} onClick={modelOpen} />,
                  <Icon
                    type="delete"
                    key={4}
                    onClick={navEdit.bind(this, "del", index)}
                  />
                ]}
              >
                <List.Item.Meta
                  avatar={<Icon type={item.icon} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
        <Card className={classes.page_card}>
          <CardHeader
            action={
              <Fab color="primary" aria-label="Add" size={"small"}>
                <svg aria-hidden="true" className={`${classes.icon}`}>
                  <use xlinkHref="#iconicon-" />
                </svg>
              </Fab>
            }
            subheader="附属页"
          />
          <List
            size={"small"}
            itemLayout="horizontal"
            dataSource={xor(keys(applet.pages), map(applet.nav, "page_id"))}
            renderItem={(item: {
              page_id: string;
              title: string;
              icon: string;
            }) => (
              <List.Item
                actions={[
                  <Icon type="edit" key={1} />,
                  <Icon
                    type="delete"
                    key={2}
                    onClick={pageEdit.bind(this, "del", item.page_id)}
                  />
                ]}
              >
                <List.Item.Meta
                  avatar={<Icon type={item.icon} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
        <Snackbar
          key={snackbar.msg}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={snackbar.use}
          TransitionComponent={TransitionLeft}
          onClose={handleClose}
          autoHideDuration={1200}
        >
          <SnackbarContent
            className={classes.snack}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar">
                <Icon type="exclamation-circle" style={{ marginRight: 8 }} />
                {snackbar.msg}
              </span>
            }
          />
        </Snackbar>

        <Dialog
          open={model}
          onClose={modelClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">创建页面</DialogTitle>
          <DialogContent style={{ zIndex: 100000 }}>
            <DialogContentText>填写下列表单后，即可创建页面</DialogContentText>
            <FormControl style={{ width: "100%" }}>
              <FormLabel>基础设置</FormLabel>
              <TextField
                autoFocus={true}
                margin="dense"
                id="name"
                label="标题"
                fullWidth={true}
              />
              <TextField
                autoFocus={true}
                margin="dense"
                id="name"
                label="图标"
                fullWidth={true}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={modelClose} color="primary">
              关闭
            </Button>
            <Button onClick={modelClose} color="primary">
              创建
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  })
);
