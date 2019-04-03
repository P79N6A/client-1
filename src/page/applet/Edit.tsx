/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 页面部件：编辑栏： 显示组件 编辑表单
 */

/**
 * @description 第三方包引用
 */
import { css } from "@emotion/core";
import React, { memo } from "react";
import { connect } from "react-redux";

/**
 * @description 项目文件引用
 */
import { action } from "../../model/action";
import VideoEdit from "../../package/applet-made/video/VideoEdit";
import { IRedux } from "../../typing/redux";

/**
 * @description 功能
 */
const Edit = memo((props: IRedux) => {
  // props 结构
  const { applet, action } = props;

  // 样式
  const styles = {
    header: css``
  };

  // 填充进编辑表单的数据
  const data = applet.pages[applet.pageId].ui[applet.uIndex];

  // 根据字段名称显示 编辑表单
  const item = {
    video: <VideoEdit {...data} />
  };

  return <div>{item[applet.editType]}</div>;
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
)(Edit);
