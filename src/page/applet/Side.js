/** @jsx jsx
 *  @description 小程序制作页
 *  @author 陈迎
 *  功能及完成度
 * */
import { memo, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Card, Checkbox, Icon, List, Skeleton } from "antd";
import { action } from "../../model/action";
import $$video from "../../package/applet-made/video/database";
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
    // 样式
    const styles = {
        item: css `
        width: 25%;
        text-align: center;
        padding: 24px 8px !important;
        font-size: 12px;
      `
    };
    // 模块
    const cardConfig = (name) => {
        return {
            size: "small",
            bordered: false,
            title: (jsx("div", null,
                jsx(Icon, { type: "caret-down" }),
                " ",
                name)),
            bodyStyle: { padding: "0", marginBottom: "16px", cursor: "pointer" }
        };
    };
    const addUI = (type) => {
        switch (type) {
            case "video":
                return action({
                    type: "ui_add",
                    payload: { data: $$video, type: type }
                });
        }
    };
    const ModelItem = () => {
        return (jsx(Fragment, null,
            jsx(Card, Object.assign({}, cardConfig("基础模块")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u81EA\u7531\u7EC4\u5408")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u56FE\u7247")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", { onClick: () => addUI("video") },
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u89C6\u9891")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u8868\u5355")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u591A\u56FE\u6587")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u9B54\u65B9\u5BFC\u822A"))),
            jsx(Card, Object.assign({}, cardConfig("产品模块")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u4EA7\u54C1\u5C55\u793A")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u4EA7\u54C1\u5206\u7C7B")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u4EA7\u54C1\u641C\u7D22"))),
            jsx(Card, Object.assign({}, cardConfig("营销模块")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u591A\u4EBA\u62FC\u56E2")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u780D\u4EF7\u6D3B\u52A8")),
                jsx(Card.Grid, { css: styles.item },
                    jsx("div", null,
                        jsx(Icon, { type: "font-colors" }),
                        " ",
                        jsx("br", null),
                        "\u79D2\u6740")))));
    };
    // 插件
    const data = ["电话", "微信客服", "制作信息"];
    const Plugin = () => {
        return (jsx(Fragment, null,
            jsx(Card, Object.assign({}, cardConfig("控件设置")),
                jsx(List, { bordered: false, dataSource: data, renderItem: item => (jsx(List.Item, { actions: [jsx(Checkbox, { key: 1 }), jsx(Icon, { type: "edit", key: 2 })] },
                        jsx(Skeleton, { loading: false },
                            jsx(List.Item.Meta, { title: jsx("a", { href: "https://ant.design", style: { marginLeft: 6 } }, item) })))) }))));
    };
    // 页面
    const pages = ["页面一", "页面二", "页面三", "页面四"];
    const Pages = () => {
        return (jsx(Fragment, null,
            jsx(Card, Object.assign({}, cardConfig("导航页面"), { extra: jsx(Icon, { type: "plus", key: 2 }) }),
                jsx(List, { bordered: false, dataSource: pages, renderItem: item => (jsx(List.Item, { actions: [
                            jsx(Icon, { type: "edit", key: 1 }),
                            jsx(Icon, { type: "delete", key: 3 })
                        ] },
                        jsx(Skeleton, { loading: false },
                            jsx(List.Item.Meta, { title: jsx("a", { href: "https://ant.design", style: { marginLeft: 6 } }, item) })))) })),
            jsx(Card, Object.assign({}, cardConfig("附属页面"), { extra: jsx(Icon, { type: "plus", key: 2 }) }),
                jsx(List, { bordered: false, dataSource: pages, renderItem: item => (jsx(List.Item, { actions: [
                            jsx(Icon, { type: "copy", key: 1 }),
                            jsx(Icon, { type: "edit", key: 2 }),
                            jsx(Icon, { type: "delete", key: 3 })
                        ] },
                        jsx(Skeleton, { loading: false },
                            jsx(List.Item.Meta, { title: jsx("a", { href: "https://ant.design", style: { marginLeft: 6 } }, item) })))) }))));
    };
    // 列表
    const item = {
        model: jsx(ModelItem, null),
        plugin: jsx(Plugin, null),
        pages: jsx(Pages, null)
    };
    return jsx("div", null, item[applet.side]);
}));
//# sourceMappingURL=Side.js.map