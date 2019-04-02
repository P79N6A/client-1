/** @jsx jsx
 *  @description 小程序制作页
 *  @author 陈迎
 *  功能及完成度
 * */
import React, { memo, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Card, Checkbox, Icon, List, Skeleton } from "antd";
import { action } from "../../model/action";
import $$video from "../../package/applet-made/video/database";

interface IProps {
  applet: IAppletState;

  action({ type: string, payload: any }): void;
}

/**
 * 获取reducer中的数据
 * @param state
 */
const mapStateToProps = state => {
  return {
    applet: state.applet
  };
};

/**
 * 导出函数
 */
export default connect(
  mapStateToProps,
  { action }
)(
  memo((props: IProps) => {
    //props 结构
    const { applet, action } = props;

    // 样式
    const styles = {
      item: css`
        width: 25%;
        text-align: center;
        padding: 24px 8px !important;
        font-size: 12px;
      `
    };

    // 模块
    const cardConfig: any = (name: string) => {
      return {
        size: "small",
        bordered: false,
        title: (
          <div>
            <Icon type="caret-down" /> {name}
          </div>
        ),
        bodyStyle: { padding: "0", marginBottom: "16px", cursor: "pointer" }
      };
    };
    const addUI = (type: string) => {
      switch (type) {
        case "video":
          return action({
            type: "ui_add",
            payload: { data: $$video, type: type }
          });
      }
    };
    const ModelItem = () => {
      return (
        <Fragment>
          <Card {...cardConfig("基础模块")}>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                自由组合
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                图片
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div onClick={() => addUI("video")}>
                <Icon type="font-colors" /> <br />
                视频
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                表单
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                多图文
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                魔方导航
              </div>
            </Card.Grid>
          </Card>
          <Card {...cardConfig("产品模块")}>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                产品展示
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                产品分类
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                产品搜索
              </div>
            </Card.Grid>
          </Card>
          <Card {...cardConfig("营销模块")}>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                多人拼团
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                砍价活动
              </div>
            </Card.Grid>
            <Card.Grid css={styles.item}>
              <div>
                <Icon type="font-colors" /> <br />
                秒杀
              </div>
            </Card.Grid>
          </Card>
        </Fragment>
      );
    };

    // 插件
    const data = ["电话", "微信客服", "制作信息"];
    const Plugin = () => {
      return (
        <Fragment>
          <Card {...cardConfig("控件设置")}>
            <List
              bordered={false}
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[<Checkbox key={1} />, <Icon type="edit" key={2} />]}
                >
                  <Skeleton loading={false}>
                    <List.Item.Meta
                      title={
                        <a href="https://ant.design" style={{ marginLeft: 6 }}>
                          {item}
                        </a>
                      }
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
        </Fragment>
      );
    };

    // 页面
    const pages = ["页面一", "页面二", "页面三", "页面四"];
    const Pages = () => {
      return (
        <Fragment>
          <Card
            {...cardConfig("导航页面")}
            extra={<Icon type="plus" key={2} />}
          >
            <List
              bordered={false}
              dataSource={pages}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Icon type="edit" key={1} />,
                    <Icon type="delete" key={3} />
                  ]}
                >
                  <Skeleton loading={false}>
                    <List.Item.Meta
                      title={
                        <a href="https://ant.design" style={{ marginLeft: 6 }}>
                          {item}
                        </a>
                      }
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
          <Card
            {...cardConfig("附属页面")}
            extra={<Icon type="plus" key={2} />}
          >
            <List
              bordered={false}
              dataSource={pages}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Icon type="copy" key={1} />,
                    <Icon type="edit" key={2} />,
                    <Icon type="delete" key={3} />
                  ]}
                >
                  <Skeleton loading={false}>
                    <List.Item.Meta
                      title={
                        <a href="https://ant.design" style={{ marginLeft: 6 }}>
                          {item}
                        </a>
                      }
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
        </Fragment>
      );
    };

    // 列表
    const item: { [name: string]: object } = {
      model: <ModelItem />,
      plugin: <Plugin />,
      pages: <Pages />
    };

    return <div>{item[applet.side]}</div>;
  })
);
