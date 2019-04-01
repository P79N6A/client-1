interface IAppletState {
  // 主题色
  theme: string;
  // 导航菜单
  nav: Array<{ page_id: string; title: string; icon: string }>;
  // 页面数据
  pages: {
    [id: string]: {
      // 标题
      title: string;
      // 展现的ui 数据集
      ui: any[];
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

  // 记录当前显示页面 id
  page_id: string;
  // 记录需编辑的 ui字段下的  组件下标
  ui_index: number;
  // 当前需要编辑的组件类型
  edit_type: string;
}
