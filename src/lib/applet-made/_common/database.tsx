/**
 * @date 2019年04月08日14:08:55
 * @description
 * 各组件都包含的公共数据
 */
export interface ICommonData {
  module?: {
    hasTitle: boolean;
    hasDesc: boolean;
    title: string;
    desc: string;
  };
  style?: {
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    blockHeight: number;
    titleColor: string;
    descColor: string;
    bgColor: string;
    bgImg: string;
  };
}

const commonData = (title: string, desc: string, blockHeight: number) => {
  return {
    // 模块
    module: {
      // 标题
      title,
      // 介绍
      desc,
      hasDesc: true,
      // 是否使用标题
      hasTitle: true
    },
    // 样式
    style: {
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 0,
      paddingBottom: 0,
      // 组件高度
      blockHeight,
      // 标题文本颜色
      titleColor: "#fff",
      // 介绍文本颜色
      descColor: "#fff",
      // 背景设置
      bgColor: "#fff",
      // 背景图设置
      bgImg: "#"
    }
  };
};

export { commonData };
