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
import { FormFace } from "../../types";

const $$form: FormFace = {
  type: "form",
  typeId: 0,
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
        { label: "示例选项一", value: 0 }
      ]
    },
    {
      type: "switch",
      name: "滑动开关",
      value: [{ label: "示例开关", value: true }],
      key: "FEWFWEqwef"
    }
  ]
};
export const $$formStyle0 = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "",
  bgImg: "",
  paddingLeft: 40,
  paddingRight: 40
};

export default $$form;
