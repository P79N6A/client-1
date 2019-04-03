export const $$text = (id?: string, typeId?: string) => {
  return {
    type: "text",
    typeId,
    id,
    html: "<p>富文本组件</p>",
    height: 100
  };
};
