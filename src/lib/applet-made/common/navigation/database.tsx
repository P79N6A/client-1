import { commonData, ICommonData } from "../_common/database";

export interface INavigation extends ICommonData {
  type: string;
  typeId: number;
  item: Array<{ title: string; desc: string; img: string }>;
}

const $$navigation: INavigation = {
  type: "navigation",
  typeId: 0,
  item: [
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    },
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    },
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    }
  ],
  // 公共数据
  ...commonData(100)
};

export default $$navigation;
