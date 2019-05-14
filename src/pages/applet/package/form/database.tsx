/**
 * 表单各项数据示例
 *
 * input:
 * {
 *   type:'input'
 *   value：[{label:'表单示例',value:"表单值"}]
 *   key："3324"
 * }
 *
 * radio:
 * {
 *   type:'radio'
 *   value：[{label:'表单示例',value:"表单值"}]
 *   key："3324"
 * }
 *
 *
 * switch:
 * {
 *   type:'switch'
 *   value：[{label:'表单示例',value:"表单值"}]
 *   key："3324"
 * }
 *
 *
 *
 *
 */

export interface $$Form0 {
  component: {
    type: string;
    typeId: string;
    formItem: Array<{
      type: string;
      name: string;
      value: Array<{ label: string; value: any }>;
      key: string;
    }>;
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
export const $$form0: $$Form0 = {
  component: {
    type: "form",
    typeId: "form0",
    formItem: [
      {
        type: "input",
        value: [{ label: "示例", value: "" }],
        name: "输入框",
        key: "FEWFWE"
      },
      {
        type: "radio",
        name: "单选",
        key: "FEWFWEfsa",
        value: [
          { label: "示例选项一", value: 0 },
          { label: "示例选项二", value: 1 }
        ]
      },
      {
        type: "switch",
        name: "滑动开关",
        value: [{ label: "示例开关", value: true }],
        key: "FEWFWEqwef"
      }
    ]
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 10,
    height: 400,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 40,
    paddingRight: 40
  }
};
