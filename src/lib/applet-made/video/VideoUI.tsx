import { css } from "@emotion/core";
import React, { memo } from "react";
import { IVideo } from "./database";

interface IProps extends IVideo {
  theme?: string;
}

/**
 * @description
 * 功能
 * 1. video必要内容
 * 2. 标题与介绍文本颜色 (默认跟随主题色)
 * 3. 自身颜色设置
 * 4. 背景色，背景图设置
 */
const VideoUI = memo((props: IProps) => {
  // 组件独有
  const { src, poster, autoPlay } = props;
  // 公共属性
  // const { theme, title, desc, style } = props;
  //
  // const styles = {
  //   // 块高度
  //   layout: css`
  //     margin-top: ${style.marginTop};
  //     margin-left: ${style.marginLeft};
  //     margin-right: ${style.marginRight};
  //     margin-bottom: ${style.marginBottom};
  //     padding-top: ${style.paddingTop};
  //     padding-left: ${style.paddingLeft};
  //     padding-right: ${style.paddingRight};
  //     padding-bottom: ${style.paddingBottom};
  //     height: ${style.blockHeight}px;
  //     background-color: ${style.bgColor};
  //     ${style.bgImg === "#" ? "" : ` background: url(${style.bgImg})`};
  //   `,
  //   // 标题
  //   title: css`
  //     color: ${style.titleColor === "#fff" ? theme : style.titleColor};
  //     min-height: 32px;
  //     text-align: center;
  //     padding: 5px;
  //   `,
  //   // 介绍
  //   desc: css`
  //     color: ${style.descColor === "#fff" ? theme : style.descColor};
  //     min-height: 32px;
  //     padding: 5px;
  //   `
  // };

  return (
    <div>
      {/*{style.hasTitle && <div css={styles.title}> {title} </div>}*/}

      {/*<video*/}
      {/*controls={true}*/}
      {/*style={{ width: "100%" }}*/}
      {/*src={src}*/}
      {/*poster={poster}*/}
      {/*autoPlay={autoPlay}*/}
      {/*/>*/}

      {/*{style.hasDesc && <div css={styles.desc}>{desc}</div>}*/}
    </div>
  );
});

export default VideoUI;
