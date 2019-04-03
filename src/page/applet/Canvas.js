/** @jsx jsx
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 * */
import { memo, Fragment } from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../model/action";
import VideoUI from "../../package/applet-made/video/VideoUI";
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
export default connect(mapStateToProps, { action })(memo((props) => {
    //props 结构
    const { applet, action } = props;
    return (jsx("div", null, applet.pages[applet.page_id].ui.map((data, index) => {
        return (jsx(Fragment, { key: index }, data.type === "video" && jsx(VideoUI, Object.assign({}, data))));
    })));
}));
//# sourceMappingURL=Canvas.js.map