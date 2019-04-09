/**
 * @date  2019年04月09日14:14:52
 * @description 渲染组件ui
 */
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import { action } from "../../store/action";
import { IRedux } from "../../store/typing";
import PictureEdit from "./picture/PictureEdit";
import VideoEdit from "./video/VideoEdit";

/**
 * @description
 * 功能
 * 1. 循环当前操作的页面
 * 2. 将页面ui 显示出来
 */
const AmEdit = memo((props: IRedux) => {
  // props 解构
  const { action } = props;
  const { editType, pages, pageId, uIndex } = props.applet;
  // 根据type展示相应组件
  const RenderEdit = () => {
    // 获取数据 当前操作数据
    switch (editType) {
      case "video":
        return <VideoEdit data={pages[pageId].ui[uIndex]} change={action} />;
      case "picture":
        return <PictureEdit data={pages[pageId].ui[uIndex]} change={action} />;
    }
  };

  return <Fragment>{RenderEdit()}</Fragment>;
});

/**
 * redux 高阶函数绑定
 */
export default connect(
  (state: IRedux) => {
    return { applet: state.applet };
  },
  { action }
)(AmEdit);
