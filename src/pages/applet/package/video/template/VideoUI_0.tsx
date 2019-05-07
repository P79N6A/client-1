import React, { memo, Fragment } from "react";
import { VideoFace } from "../../../types";

interface IProps {
  theme: string;
  data: VideoFace;
}

export const $$video0: VideoFace = {
  // 类型
  type: "video",
  typeId: 0,
  // 视频链接
  src: "",
  // 是否自动播放
  autoPlay: false,
  height: 80
};
export const $$videoStyle0 = {
  marginTop: 0,
  marginBottom: 8,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "#fff",
  bgImg: "",
  paddingLeft: 40,
  paddingRight: 40
};

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
