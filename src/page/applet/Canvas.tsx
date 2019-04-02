/** @jsx jsx
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 * */
import React, { memo, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../model/action";
import VideoUI from "../../package/applet-made/video/VideoUI";

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

    return (
      <div>
        {applet.pages[applet.page_id].ui.map((data, index) => {
          return (
            <Fragment key={index}>
              {data.type === "video" && <VideoUI {...data} />}
            </Fragment>
          );
        })}
      </div>
    );
  })
);
