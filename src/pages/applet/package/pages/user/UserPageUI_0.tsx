import React, { memo } from "react";
import { css } from "@emotion/core";
import { Icon } from "antd";

interface PropsFace {
  theme: string;
}

export default memo((props: PropsFace) => {
  const styles = {
    header: css`
      height: 117px;
      width: 100%;
      text-align: center;
      overflow: hidden;
    `,
    header_circle: css`
      width: 100%;
      height: 154px;
      border-radius: 50% / 50%;
      background-color: ${props.theme};
      margin-top: -77px;
    `,
    header_img: css`
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: -42px auto 0;
      background: black;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    `,
    user_name: css`
      margin: 8px auto 16px;
      text-align: center;
      display: block; /*内联对象需加*/
      width: 100%;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    `,
    card: css`
      background-color: #fff;
      height: 128px;
      padding: 8px;
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
      margin: 0 16px 16px;
    `,
    title: css`
      font-size: 16px;
    `,
    second_title: css`
      font-size: 10px;
    `,
    order: css`
      display: flex;
      flex-wrap: nowrap;
    `,
    order_item: css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      margin: 0 8px;
    `
  };
  return (
    <div>
      <div css={styles.header}>
        <div css={styles.header_circle} />
        <div css={styles.header_img} />
      </div>
      <div css={styles.user_name}>用户名</div>
      <div css={styles.card}>
        <div css={styles.title}>
          我的订单
          <span
            css={styles.second_title}
            style={{ float: "right", color: "rgb(182,182,183)", marginTop: 4 }}
          >
            更多
          </span>
        </div>
        <div
          style={{ background: "rgb(226,226,228)", height: 2, margin: "8px 0" }}
        />
        <div css={styles.order}>
          <div css={styles.order_item}>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Icon
                style={{
                  color: `${props.theme}`,
                  fontSize: 30,
                  marginBottom: 4
                }}
                type="book"
              />
              <div>待付款</div>
            </div>
          </div>
          <div css={styles.order_item}>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Icon
                style={{
                  color: `${props.theme}`,
                  fontSize: 30,
                  marginBottom: 4
                }}
                type="credit-card"
              />
              <div>待发货</div>
            </div>
          </div>
          <div css={styles.order_item}>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Icon
                style={{
                  color: `${props.theme}`,
                  fontSize: 30,
                  marginBottom: 4
                }}
                type="calendar"
              />
              <div>配送中</div>
            </div>
          </div>
          <div css={styles.order_item}>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Icon
                style={{
                  color: `${props.theme}`,
                  fontSize: 30,
                  marginBottom: 4
                }}
                type="hdd"
              />
              <div>已收货</div>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.card}>
        <div css={styles.title} style={{ padding: " 8px 8px 0" }}>
          <Icon
            style={{
              color: `${props.theme}`,
              fontSize: 20,
              marginRight: 8
            }}
            type="book"
          />
          收货地址
          <span
            css={styles.second_title}
            style={{ float: "right", color: "rgb(182,182,183)", marginTop: 4 }}
          >
            更多
          </span>
        </div>
        <div
          style={{ background: "rgb(226,226,228)", height: 2, margin: "8px 0" }}
        />
        <div css={styles.title} style={{ padding: " 0 8px" }}>
          <Icon
            style={{
              color: `${props.theme}`,
              fontSize: 20,
              marginRight: 8
            }}
            type="tags"
          />
          设置
          <span
            css={styles.second_title}
            style={{ float: "right", color: "rgb(182,182,183)", marginTop: 4 }}
          >
            更多
          </span>
        </div>
      </div>
    </div>
  );
});
