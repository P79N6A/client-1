import React, { memo, Fragment } from "react";

interface $$Video0 {
  component: {
    type: string;
    typeId: string;
    src: string;
    autoPlay: boolean;
    height: number;
  };
  style: {
    bgColor: string;
    bgImg: string;
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
  };
}
export const $$video0 = {
  component: {
    // 类型
    type: "video",
    typeId: "video0",
    // 视频链接
    src: "",
    // 是否自动播放
    autoPlay: false,
    height: 80
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 10,
    height: 120,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 40,
    paddingRight: 40
  }
};

interface IProps {
  theme: string;
  data: $$Video0["component"];
}
export default memo((props: IProps) => {
  const { data } = props;
  return (
    <Fragment>
      {data.src ? (
        <div
          style={{ width: "100%", height: "100%" }}
          dangerouslySetInnerHTML={{
            __html: data.src
          }}
        />
      ) : (
        <video controls={true} src={data.src} />
      )}
    </Fragment>
  );
});
