import React, { memo } from "react";
import { css } from "@emotion/core";

interface IProps {
  marginTop: number;
  marginBottom: number;
  paddingTop: number;
  paddingBottom: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
  bgColor: string;
  bgImg: string;
  children: object;
  drag: boolean;
}

const BlockStyle = memo((props: IProps) => {
  const styles = css`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: ${props.height}px;
    overflow: hidden;
    margin-top: ${props.marginTop}px;
    margin-bottom: ${props.marginBottom}px;
    padding-top: ${props.paddingTop}px;
    padding-bottom: ${props.paddingBottom}px;
    background-color: ${props.bgColor};
    padding-left: ${props.paddingLeft}px;
    padding-right: ${props.paddingRight}px;
    ${props.bgImg ? `background:url(${props.bgImg})` : ""};
  `;

  return <div css={styles}>{props.children}</div>;
});

export default BlockStyle;
