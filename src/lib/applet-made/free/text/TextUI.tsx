import { css } from "@emotion/core";
import React, { memo } from "react";
import { IText } from "./database";

/**
 * @description
 * 功能
 * 1. video必要内容
 * 2. 标题与介绍文本颜色 (默认跟随主题色)
 * 3. 自身颜色设置
 * 4. 背景色，背景图设置
 */
interface IProps extends IText {
  theme?: string;
}

export default memo((props: IProps) => {
  // 私有属性
  const { html } = props;
  // 公共属性
  // const { theme, title, desc, style } = props;

  // const styles = {
  //   // 块高度
  //   layout: css`
  //     height: ${style.blockHeight}px;
  //     background-color: ${style.bgColor};
  //     ${style.bgImg === "#" ? "" : ` background: url(${style.bgImg})`};
  //   `,
  //   // 标题
  //   title: css`
  //     color: ${style.titleColor === "#fff" ? theme : style.titleColor};
  //     min-height: 32px;
  //   `,
  //   // 介绍
  //   desc: css`
  //     color: ${style.descColor === "#fff" ? theme : style.descColor};
  //     min-height: 32px;
  //   `
  // };

  return (
    <div>
      {/*{style.hasTitle && <div css={styles.title}> {title} </div>}*/}

      {/*<div*/}
      {/*style={{ whiteSpace: "pre-wrap", width: "100%" }}*/}
      {/*dangerouslySetInnerHTML={{ __html: html }}*/}
      {/*/>*/}

      {/*{style.hasDesc && <div css={styles.desc}>{desc}</div>}*/}
    </div>
  );
});
