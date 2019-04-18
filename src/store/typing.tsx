/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 程序商店接口
 */

// 小程序 数据集合 接口
export interface IAppletState {
  // 主题色
  theme: string;
  // 导航菜单
  nav: Array<{ pageId: string; title: string; icon: string }>;
  // 页面数据
  pages: {
    [id: string]: {
      // 标题
      title: string;
      // 展现的ui 数据集
      ui: any[];
      icon: string;
      // 插件
      plug: {
        // 客服
        service: {
          use: false;
          phone: string;
        };
        // 分享
        share: {
          use: false;
          title: string;
          desc: string;
          img: string;
        };
      };
    };
  };

  // 侧边栏选择记录
  sider: number;
  // 记录当前显示页面 id
  pageId: string;
  // 记录需编辑的 ui字段下的  组件下标
  uIndex: number;
  // 当前需要编辑的组件类型
  editType: string;
  // 是否展示编辑界面
  editShow: boolean;
  // 控制画布的渲染，当使用自由布局组件时，将UI排序列表关闭
  dragUse: boolean;
  // 移动的组件下表
  dragIndex: number;
}

// 发送负载
export interface IAction {
  type: string;
  payload: any;
}

// Redux数据集+action
export interface IRedux {
  applet: IAppletState;
  action({ type, payload }: { type: string; payload: any }): void;
}
