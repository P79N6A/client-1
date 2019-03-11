import React, { memo, Fragment } from "react";
import produce from "immer";
import ButtonEdit from "./resource/button/ButtonEdit";
import TextEdit from "./text/TextEdit";
import PictureEdit from "./picture/PictureEdit";
import { IButton } from "./resource/button/button-data";
import { IText } from "./text/text-data";
import SwiperEdit from "./swiper/SwiperEdit";
import VideoEdit from "./video/VideoEdit";
import FormEdit from "./form/FormEdit";
import ArticleEdit from "./article/ArticleEdit";
import { Col, Row } from "antd";
import { IHome } from "./home/home-data";
import HomeEdit from "./home/HomeEdit";

export interface IAmEdit {
  // 主题设置
  home?: IHome;

  setHome?(changedFields): void;

  // ui数据源
  ui?: Array<IButton | IText>;
  // 当前操作的组件下标
  choose?: number;
  // ajax 接口
  ajax?: {
    del?: string;
    upload?: string;
    user_img?: string;
  };

  // 数据源数据重置同步
  restUi?(ui?: Array<IButton | IText>): void;
}

/**
 * 功能
 * 1. 组件显示 ✅
 * 2. 数据重置同步 ✅
 */
export default memo((props: IAmEdit) => {
  const { ui, choose, restUi } = props;
  // 1. 显示相应的组件
  const renderEditor = () => {
    const data = choose >= 0 ? ui[choose] : "";
    switch (choose >= 0 ? ui[choose].type : "") {
      case "button":
        return <ButtonEdit {...data} onChange={reData} />;
      case "text":
        return <TextEdit {...data} onChange={reData} />;
      case "picture":
        return <PictureEdit {...data} onChange={reData} ajax={props.ajax} />;
      case "swiper":
        return <SwiperEdit {...data} onChange={reData} ajax={props.ajax} />;
      case "video":
        return <VideoEdit {...data} onChange={reData} ajax={props.ajax} />;
      case "form":
        return <FormEdit {...data} onChange={reData} />;
      case "article":
        return <ArticleEdit {...data} onChange={reData} />;
      default:
        return <HomeEdit data={props.home} onChange={reData} />;
    }
  };
  // 2. 数据同步
  const reData = (changedFields, theme?): void => {
    switch (theme ? "" : ui[choose].type) {
      case "button":
        const value = {
          [changedFields[Object.keys(changedFields)[0]]["name"]]:
            changedFields[Object.keys(changedFields)[0]]["value"]
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = { ...draftState[choose], ...value };
          })
        );

      case "text":
        const values = {
          html: changedFields.toHTML()
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = {
              ...draftState[choose],
              ...values
            };
          })
        );

      case "picture":
        const picture = {
          [changedFields[Object.keys(changedFields)[0]]["name"]]:
            changedFields[Object.keys(changedFields)[0]]["value"]
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = { ...draftState[choose], ...picture };
          })
        );

      case "swiper":
        const swiper = {
          [changedFields[Object.keys(changedFields)[0]]["name"]]:
            changedFields[Object.keys(changedFields)[0]]["value"]
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = { ...draftState[choose], ...swiper };
          })
        );

      case "form":
        const form = {
          [changedFields[Object.keys(changedFields)[0]]["name"]]:
            changedFields[Object.keys(changedFields)[0]]["value"]
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = { ...draftState[choose], ...form };
          })
        );

      case "article":
        const article = {
          [changedFields[Object.keys(changedFields)[0]]["name"]]:
            changedFields[Object.keys(changedFields)[0]]["value"]
        };
        return restUi(
          produce(ui, draftState => {
            draftState[choose] = { ...draftState[choose], ...article };
          })
        );

      default:
        return props.setHome(changedFields);
    }
  };

  return (
    <Row>
      <Col span={24}>{renderEditor()}</Col>
    </Row>
  );
});
