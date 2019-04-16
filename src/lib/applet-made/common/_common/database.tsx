export interface ICommonData {
  left: number;
  top: number;
  marginTop: number;
  marginBottom: number;
  paddingTop: number;
  paddingBottom: number;
  blockHeight: number;
  bgColor: string;
  bgImg: string;
  paddingLeft: 0;
  paddingRight: 0;
}

const commonData = (blockHeight: number): ICommonData => {
  return {
    left: 0,
    top: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    // 背景设置
    bgColor: "#fff",
    // 背景图设置
    bgImg: "",
    // 组件高度
    blockHeight
  };
};

export { commonData };
