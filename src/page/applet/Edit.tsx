/** @jsx jsx
 *  @description 编辑项
 *  @author 陈迎
 *  功能及完成度
 * */
import React, { memo, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../model/action";
import VideoUI from "../../package/applet-made/video/VideoUI";
import VideoEdit from "../../package/applet-made/video/VideoEdit";

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

    // 可编辑项
    const item = {
      video: <VideoEdit {...applet.pages[applet.page_id].ui[applet.ui_index]} />
    };

    return <div>{item[applet.edit_type]}</div>;
  })
);
