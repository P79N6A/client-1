/** @jsx jsx
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 * */
import { memo } from "react";
import { jsx } from "@emotion/core";
/**
 * 视频
 */
export default memo((props) => {
    const { src, poster, autoPlay = false } = props;
    return (jsx("video", { controls: true, style: { width: "100%" }, src: src, poster: poster, autoPlay: autoPlay }));
});
//# sourceMappingURL=VideoUI.js.map