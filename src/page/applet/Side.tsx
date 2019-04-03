/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 页面部件：侧边栏 相对于一级侧边栏显示对应组件，供用户选择
 */

/**
 * @description 第三方包引用
 */
import { css } from "@emotion/core";
import { Card, Checkbox, Icon, List, Skeleton } from "antd";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";

/**
 * @description 项目文件引用
 */
import { action } from "../../model/action";
import $$video from "../../package/applet-made/video/database";
import { IRedux } from "../../typing/redux";

/**
 * @description 功能
 * 1. 根据side 值显示对应组件 ✅
 * 2. 将选择数据 提交给 reducer ✅
 * 3. 根据reducer 中的值展示相应信息
 */
const Side = memo((props: IRedux) => {
  // props 结构
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
      bodyStyle: { padding: "0", marginBottom: "16px", cursor: "pointer" },
      bordered: false,
      size: "small",

      title: (
        <div>
          <Icon type="caret-down" /> {name}
        </div>
      )
    };
  };
  const addUI = (type: string) => {
    switch (type) {
      case "video":
        action({
          payload: { data: $$video, type },
          type: "uiAdd"
        });
        break;
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
        <Card {...cardConfig("导航页面")} extra={<Icon type="plus" key={2} />}>
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
        <Card {...cardConfig("附属页面")} extra={<Icon type="plus" key={2} />}>
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
    pages: <Pages />,
    plugin: <Plugin />
  };

  return <div>{item[applet.side]}</div>;
});

/**
 * @description 获取reducer中的数据及 action ,并导出函数
 */
const mapStateToProps = state => {
  return {
    applet: state.applet
  };
};
export default connect(
  mapStateToProps,
  { action }
)(Side);
