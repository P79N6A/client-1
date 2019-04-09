// 数据接口(类型)
export interface IButton {
  type?: string;
  desc?: string;
  fontSize?: number;
  color?: string;
  bgColor?: string;
  bgImg?: string;
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
 * @description 按钮组件数据源
 * @param theme
 * @param top
 * @param left
 */
const $$button = ({
  top,
  left
}: {
  theme?: { color?: string; background?: string };
  top?: number;
  left?: number;
}) => {
  return {
    type: "button",
    desc: "按钮",
    fontSize: 14,
    color: "",
    background: "",
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

export default $$button;
