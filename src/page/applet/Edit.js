/** @jsx jsx
 *  @description 编辑项
 *  @author 陈迎
 *  功能及完成度
 * */
import { memo } from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { action } from "../../model/action";
import VideoEdit from "../../package/applet-made/video/VideoEdit";
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
    // 可编辑项
    const item = {
        video: jsx(VideoEdit, Object.assign({}, applet.pages[applet.page_id].ui[applet.ui_index]))
    };
    return jsx("div", null, item[applet.edit_type]);
}));
//# sourceMappingURL=Edit.js.map