// 组件接口
interface ButtonFace {
  type: string;
  desc: string;
  typeId: number;
  fontSize: number;
  color: string;
  radius: number;
  width: number;
  height: number;
  top: number;
  left: number;
  btnImg: string;
  btnColor: string;
}
interface PictureFace {
  type: string;
  typeId: number;
  img: string;
  radius: number;
  width: number;
  height: number;
  top: number;
  left: number;
}
interface TextFace {
  type: string;
  typeId: number;
  id: string | number;
  html: string;
  width: number;
  height: number;
  top: number;
  left: number;
}
interface DragFace {
  type: string;
  typeId: number;
  uiList: any;
}
interface NavigationFace {
  type: string;
  typeId: number;
  item: Array<{ title: string; desc: string; img: string }>;
}
interface VideoFace {
  type: string;
  typeId: number;
  src: string;
  autoPlay: boolean;
  height: number;
}
interface FormFace {
  type: string;
  typeId: number;
  formItem: Array<{
    type: string;
    name: string;
    value: Array<{ label: string; value: any }>;
    key: string;
  }>;
}
interface ShowFace {
  type: string;
  typeId: number;
  showItem: Array<{ title: string; desc: string; img: string }>;
}
interface UIMapFace
  extends ButtonFace,
    PictureFace,
    TextFace,
    DragFace,
    NavigationFace,
    FormFace,
    ShowFace,
    VideoFace {}

// applet 默认数据 接口
interface AppletStateFace {
  // 主题色
  theme: string | "#3A82F8";
  // 导航菜单
  tabBar: Array<{
    pageIndex: string | undefined;
    link: { type: string | undefined; data: string | undefined };
  }>;
  // 页面数据
  pages: {
    [id: string]: {
      uiList: string[];
      title: string | undefined;
      icon: string | undefined;
    };
  };
  // 页面ui
  components: {
    [id: string]: UIMapFace;
  };
  // ui样式
  componentStyle: {
    [id: string]: {
      marginTop: number;
      marginBottom: number;
      paddingTop: number;
      paddingBottom: number;
      height: number;
      paddingLeft: number;
      paddingRight: number;
      bgColor: string;
      bgImg: string;
    };
  };
  // 控制组件编辑器的显示
  drawer: boolean;
  // 当前编辑的组件名称
  drawerType:
    | undefined
    | "text"
    | "button"
    | "video"
    | "picture"
    | "drag"
    | "navigation"
    | "show"
    | "form"
    | "video";
  // 当前正在编辑的页面id
  pageIndex: string | undefined;
  // 当前编辑的ui下标
  componentIndex: string | undefined;
  // 拖拽组件当前操作的组件下标
  dragIndex: string | undefined;
}

// applet 页面中使用的 state 数据集合
interface AppletCanvasFace {
  theme: string;
  uiList: string[];
  title: string;
}
interface AppletMadeCanvasFace {
  uiList: string[];
  theme: AppletStateFace["theme"];
  components: AppletStateFace["components"];
  componentStyle: AppletStateFace["componentStyle"];
  componentIndex: AppletStateFace["componentIndex"];
  action({ type, payload }: { type: string; payload: any }): void;
}
interface AppletEditFace {
  theme: AppletStateFace["theme"];
  pageIndex: AppletStateFace["pageIndex"];
  pages: AppletStateFace["pages"];
  action({ type, payload }: { type: string; payload: any }): void;
}
interface AppletMadeEditFace {
  drawer: AppletStateFace["drawer"];
  drawerType: AppletStateFace["drawerType"];
  action({ type, payload }: { type: string; payload: any }): void;
}

// applet 组件中使用的数据集合
interface UIEditFace {
  theme: AppletStateFace["theme"];
  components: AppletStateFace["components"];
  componentIndex: AppletStateFace["componentIndex"];
  dragIndex: AppletStateFace["dragIndex"];
  action({ type, payload }: { type: string; payload: any }): void;
}
interface UIStyleEditFace {
  theme: AppletStateFace["theme"];
  componentStyle: AppletStateFace["componentStyle"];
  componentIndex: AppletStateFace["componentIndex"];
  action({ type, payload }: { type: string; payload: any }): void;
}
interface DragUIFace {
  theme: AppletStateFace["theme"];
  components: AppletStateFace["components"];
  data: any;
  dragIndex: AppletStateFace["dragIndex"];
  action({ type, payload }: { type: string; payload: any }): void;
}
interface TabBarUIFace {
  pageIndex: AppletStateFace["pageIndex"];
  theme: AppletStateFace["theme"];
  tabBar: AppletStateFace["tabBar"];
  pages: AppletStateFace["pages"];
}

export {
  AppletStateFace,
  AppletCanvasFace,
  AppletEditFace,
  AppletMadeEditFace,
  UIEditFace,
  UIStyleEditFace,
  ButtonFace,
  PictureFace,
  TextFace,
  DragFace,
  NavigationFace,
  VideoFace,
  FormFace,
  ShowFace,
  DragUIFace,
  UIMapFace,
  AppletMadeCanvasFace,
  TabBarUIFace
};
