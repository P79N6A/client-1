interface $$Drag0 {
  component: {
    type: string;
    typeId: string;
    uiList: any;
  };
  style: {
    bgColor: string;
    bgImg: string;
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
  };
}
export const $$drag: $$Drag0 = {
  component: {
    type: "drag",
    typeId: "drag",
    uiList: [
      {
        type: "picture",
        img: "http://src.e7wei.com/0.2823198691104869.png",
        typeId: "picture0",
        radius: 0,
        width: 100,
        height: 100,
        top: 0,
        left: 130
      },
      {
        type: "text",
        typeId: "text0",
        id: 10743257,
        html: "<p>这里填充文案</p>",
        width: 100,
        height: 50,
        top: 150,
        left: 130
      },
      {
        type: "button",
        typeId: "button0",
        desc: "按钮",
        fontSize: 14,
        color: "",
        radius: 0,
        bgImg: "",
        bgColor: "#fff",
        width: 100,
        height: 30,
        top: 200,
        left: 130
      }
    ]
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 0,
    paddingBottom: 0,
    height: 300,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 0,
    paddingRight: 0
  }
};
