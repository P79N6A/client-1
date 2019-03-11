// 数据接口(类型)
export interface IButton {
  type?: string;
  desc?: string;
  fontSize?: number;
  color?: string;
  background?: string;
  theme?: { color?: string; background?: string };
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
  theme,
  top,
  left,
}: {
  theme?: { color?: string; background?: string };
  top?: number;
  left?: number;
}) => {
  return {
    type: 'button',
    desc: '按钮',
    fontSize: 14,
    theme: { color: theme, background: theme.background },
    color: '',
    background: '',
    link: { use: '', map: [], href: '', phone: '' },
    position: {
      left: left,
      top: top,
      width: 100,
      height: 100,
      zIndex: 100,
      rotate: 0,
    },
  };
};

export default $$button;
