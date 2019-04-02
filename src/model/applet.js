import produce from "immer";
const stateDefault = {
    // 需要ajax 同步信息
    theme: "#3f51b5",
    nav: [
        {
            page_id: "exname1",
            title: "标题一",
            icon: "alipay"
        },
        {
            page_id: "exname2",
            title: "标题二",
            icon: "wechat"
        },
        {
            page_id: "exname3",
            title: "标题三",
            icon: "yuque"
        }
    ],
    pages: {
        exname1: {
            title: "标题一",
            ui: [],
            plug: {
                service: {
                    use: false,
                    phone: ""
                },
                share: {
                    use: false,
                    title: "",
                    desc: "",
                    img: ""
                }
            }
        },
        exname2: {
            title: "标题二",
            ui: [],
            plug: {
                service: {
                    use: false,
                    phone: ""
                },
                share: {
                    use: false,
                    title: "",
                    desc: "",
                    img: ""
                }
            }
        },
        exname3: {
            title: "标题三",
            ui: [],
            plug: {
                service: {
                    use: false,
                    phone: ""
                },
                share: {
                    use: false,
                    title: "",
                    desc: "",
                    img: ""
                }
            }
        }
    },
    // 本地
    side: "model",
    page_id: "exname1",
    ui_index: 0,
    edit_type: "theme"
};
export const applet = (state = stateDefault, action) => produce(state, draft => {
    switch (action.type) {
        case "nav":
            draft.nav = action.payload.data;
            break;
        //  向ui字段中添加数据
        case "ui_add":
            draft.pages[draft.page_id].ui.push(action.payload.data);
            draft.edit_type = action.payload.type;
            draft.ui_index = draft.pages[draft.page_id].ui.length - 1;
            break;
        //  主题色更改
        case "themeChange":
            draft.theme = action.payload.data;
            break;
        // 侧边栏项目选择
        case "sideChange":
            draft.side = action.payload.data;
            break;
        default:
            return state;
    }
});
//# sourceMappingURL=applet.js.map