/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 页面部件：编辑栏： 显示组件 编辑表单
 */

/**
 * @description 第三方包引用
 */
import { css } from "@emotion/core";
import { Popover, Typography } from "antd";
import React, { memo } from "react";
import { connect } from "react-redux";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

/**
 * @description 项目文件引用
 */
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";
import NavUI from "../../lib/applet-made/nav/NavUI";
import VideoUI from "../../lib/applet-made/video/VideoUI";

/**
 * @description 功能
 * 1. 调用redux 信息，控制主题色
 * 2. 组件上下拖动
 * 3. 组件侧边功能设置
 */
const Canvas = memo((props: IRedux) => {
  // props 结构
  const { applet, action } = props;

  // 样式
  const styles = {
    root: css`
      width: 380px;
      height: 660px;
      margin: auto;
      background: white;
      overflow: hidden;
    `,
    header: css`
      height: 65px;
      width: 380px;
      background: ${applet.theme};
    `,
    title: css`
      margin-top: -35px;
      text-align: center;
    `,
    canvas: css`
      height: 545px;
      overflow: auto;
    `
  };

  // 编辑按钮
  const contentEdit = (
    <div>
      <p>复制</p>
      <p>编辑</p>
      <p>删除</p>
    </div>
  );

  // 拖动
  const SortableItem = SortableElement(({ index, data }) => (
    <div key={index}>
      {data.type === "video" && <VideoUI {...data} theme={applet.theme} />}
    </div>
  ));
  const SortableList = SortableContainer(() => {
    return (
      <div>
        {applet.pages[applet.pageId].ui.map((data, index) => {
          return (
            <Popover
              key={index}
              defaultVisible={true}
              placement="right"
              content={contentEdit}
              trigger="click"
            >
              <SortableItem index={index} data={data} key={index} />
            </Popover>
          );
        })}
      </div>
    );
  });
  const onSortEnd = ({ oldIndex, newIndex }) => {
    action({ type: "uiReSite", payload: { oldIndex, newIndex } });
  };
  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <img
          src={"http://oss-96.oss-cn-hangzhou.aliyuncs.com/applet-heade.png"}
          alt={"phone"}
          height={65}
          width={380}
        />
        <div css={styles.title}>
          <Typography.Text ellipsis={true}>
            <span style={{ color: "#fff", fontSize: 16 }}>
              {applet.pages[applet.pageId].title}
            </span>
          </Typography.Text>
        </div>
      </div>
      <div css={styles.canvas}>
        <SortableList onSortEnd={onSortEnd} />
      </div>
      <NavUI />
    </div>
  );
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
)(Canvas);
