/**
 * @description text-component data source
 * @param id
 */
export const $$text = (id?: string) => {
  return {
    type: "text",
    id: id,
    html: "<p>富文本组件</p>",
    height: 100
  };
};
