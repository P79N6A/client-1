import produce from "immer";
const stateDefault = {
    theme: "rgb(33, 150, 243)",
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
    page_id: "exname1",
    ui_index: 0,
    edit_type: "theme"
};
export const applet = (state = stateDefault, action) => produce(state, draft => {
    switch (action.type) {
        case "nav":
            draft.nav = action.payload.data;
            break;
        case "ui_add":
            draft.pages[draft.page_id].ui.push(action.payload.data);
            break;
        case "theme":
            draft.theme = action.payload.data;
            break;
        default:
            return state;
    }
});
//# sourceMappingURL=applet.js.map