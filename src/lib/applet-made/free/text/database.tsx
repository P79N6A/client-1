export interface IText {
  type: string;
  id: string;
  html: string;
  link?: {
    use?: string;
    map?: number[];
    href?: string;
    phone?: string;
  };
  position?: {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    zIndex?: number;
    rotate?: number;
  };
}

const $$text = ({
  id,
  top,
  left
}: {
  id?: string;
  top?: number;
  left?: number;
}) => {
  return {
    // 数据块类型
    type: "text",
    // 用于辨析 富文本的id
    id,
    // 文本
    html: "<p>富文本组件</p>",
    link: { use: "", map: [], href: "", phone: "" },
    position: {
      left,
      top,
      width: 80,
      height: 40,
      zIndex: 100,
      rotate: 0
    }
  };
};

export default $$text;
