/**
 * @description text 组件数据源
 * @param id
 */
const $$text = (id?: string) => {
  return {
    type: "text",
    id: id,
    html: "<p>富文本组件</p>"
  };
};

export { $$text };
