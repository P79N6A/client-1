import React, { memo, Fragment, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import produce from 'immer';
import { IText } from '@/pages/applet/components/resource/text/text-data';
import TextUI from '@/pages/applet/components/resource/text/TextUI';
import ResizableRect from '@/pages/applet/components/tools/drag/ResizableRect';

interface IProps {
  // ui数据源
  ui?: Array<IText>;
  // 选择组件回调
  choose?(index: number): void;
  // 数据源数据重置同步
  restUi?(ui: any): void;
}

/**
 * 功能
 * 1. 展示ui ✅
 * 2. fn() => 回调选择的ui ✅
 * 3. fn() => 鼠标右键操作,同步ui数据源 ✅
 * 4. 键盘操作 🚧
 * 5. 鼠标移动 ✅
 * 6. 对齐线，吸附 🚧
 *
 */
export default memo((props: IProps) => {
  // 1. 显示相应组件
  const components = {
    text: TextUI,
  };
  const UI = ({ data }) => {
    const UI = components[data.type];
    return <UI {...data} />;
  };

  // 2. 选择当前ui，回调
  const onChoose = (index: number) => {
    // setChoose(index);
    // props.choose(index);
  };

  // 3. 右键菜单
  const [choose, setChoose] = useState(0);
  const menuSetting = (name: string) => {
    switch (name) {
      case 'del':
        props.restUi(
          produce(props.ui, draftState => {
            draftState.splice(choose, 1);
          })
        );
        props.choose(0);
        break;
      case 'copy':
        return props.restUi(
          produce(props.ui, draftState => {
            // 定位稍微移动
            draftState[choose].position.top += 5;
            draftState[choose].position.left += 5;
            // 复制
            draftState.push(props.ui[choose]);
          })
        );
      case 'up':
        return props.restUi(
          produce(props.ui, draftState => {
            // 定位稍微移动
            draftState[choose].position.zIndex += 1;
          })
        );
      case 'down':
        return props.restUi(
          produce(props.ui, draftState => {
            // 定位稍微移动
            draftState[choose].position.zIndex -= 1;
          })
        );
    }
  };
  const menu = (
    <Menu onClick={e => menuSetting(e.key)}>
      <Menu.Item key="del">组件删除</Menu.Item>
      <Menu.Item key="copy">组件复制</Menu.Item>
      <Menu.Item key="down">图层下移</Menu.Item>
      <Menu.Item key="up">图层上移</Menu.Item>
    </Menu>
  );

  // 4. 组件移动
  const handleRotate = (rotateAngle: number) => {
    return props.restUi(
      produce(props.ui, draftState => {
        // 定位稍微移动
        draftState[choose].position.rotate = rotateAngle;
      })
    );
  }; // 旋转组件角度
  const handleResize = (style: { top: any; left: any; width: any; height: any }): void => {
    const { top, left, width, height } = style;
    return props.restUi(
      produce(props.ui, draftState => {
        draftState[choose].position.left = left;
        draftState[choose].position.top = top;
        draftState[choose].position.width = width;
        draftState[choose].position.height = height;
      })
    );
  }; // 调整组件尺寸
  const handleDrag = (deltaX: number, deltaY: number): void => {
    return props.restUi(
      produce(props.ui, draftState => {
        draftState[choose].position.left += deltaX;
        draftState[choose].position.top += deltaY;
      })
    );
  }; // 组件移动

  return (
    <Fragment>
      {props.ui.map((data, index: number) => {
        return (
          <Fragment key={index}>
            {choose === index ? (
              <Dropdown overlay={menu} trigger={['contextMenu']} key={index}>
                <span>
                  <ResizableRect
                    onMouseDown={() => onChoose(index)}
                    key={index}
                    left={data.position.left}
                    top={data.position.top}
                    width={data.position.width}
                    height={data.position.height}
                    zIndex={data.position.zIndex}
                    rotateAngle={data.position.rotate}
                    zoomable="n, w, s, e, nw, ne, se, sw"
                    onRotate={handleRotate}
                    onResize={handleResize}
                    onDrag={handleDrag}
                  >
                    <span
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    >
                      <UI data={data} />
                    </span>
                  </ResizableRect>
                </span>
              </Dropdown>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  top: `${data.position.top}px`,
                  left: `${data.position.left}px`,
                  zIndex: data.position.zIndex,
                  transform: `rotate(${data.position.rotate}deg)`,
                }}
                onMouseDown={() => onChoose(index)}
              >
                <span
                  style={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  <UI data={data} />
                </span>
              </div>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
});
