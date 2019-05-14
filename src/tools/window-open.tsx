/**
 * @description 在新窗口中打开连接
 * @see https://imweb.io/topic/584cd0459be501ba17b10aaa （安全问题及性能问题）
 * @param url
 */
const windowOpen = (url: string) => {
  const newWindow = window;
  // 解决性能及安全问题
  newWindow.opener = null;
  // 打开新连接
  newWindow.open(url);
};

export { windowOpen };
