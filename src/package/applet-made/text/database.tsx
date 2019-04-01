export const $$text = (id?: string, type_id?: string) => {
  return {
    type: "text",
    type_id: type_id,
    id: id,
    html: "<p>富文本组件</p>",
    height: 100
  };
};
