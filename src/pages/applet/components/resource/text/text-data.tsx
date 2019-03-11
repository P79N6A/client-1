// 数据接口(类型)
export interface IText {
  type?: string;
  id?: string;
  html?: string;
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

/**
 * @description text 组件数据源
 * @param id
 * @param top
 * @param left
 */
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
    type: "text",
    id: id,
    html: "<p>富文本组件</p>",
    link: { use: "", map: [], href: "", phone: "" },
    position: {
      left: left,
      top: top,
      width: 100,
      height: 100,
      zIndex: 100,
      rotate: 0
    }
  };
};

export default $$text;
