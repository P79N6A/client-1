/**
 * @date  2019年04月09日14:14:52
 * @description 渲染组件ui
 */
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";
import PictureUI from "./picture/PictureUI";
import { IVideo } from "./video/database";
import VideoUI from "./video/VideoUI";

/**
 * @description
 * 功能
 * 1. 循环当前操作的页面
 * 2. 将页面ui 显示出来
 */
const AmCanvas = memo((props: IRedux) => {
  // props 解构
  const { action } = props;
  const { pages, pageId } = props.applet;
  // 根据type展示相应组件
  const components = { video: VideoUI, picture: PictureUI };
  const RenderComponent = ({ data }: { data: IVideo }) => {
    const Component = components[data.type];
    return <Component {...data} />;
  };

  return (
    <Fragment>
      {pages[pageId].ui.map((uiData: IVideo, index: number) => {
        return <RenderComponent data={uiData} key={index} />;
      })}
    </Fragment>
  );
});

/**
 * redux 高阶函数绑定
 */
export default connect(
  (state: IRedux) => {
    return { applet: state.applet };
  },
  { action }
)(AmCanvas);
