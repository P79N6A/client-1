/**
 * @description 在新窗口中打开连接
 * TODO 性能问题
 * 如果使用常规方式会存在 安全问题及性能问题
 * 下面给出的方案只能解决除safari外，所有浏览器的安全问题，无法解决性能问题
 * @param url
 */
export const windowOpen = (url: string) => {
  const newWindow = window;
  // 解决安全问题
  newWindow.opener = null;
  // 在新窗口中打开连接
  newWindow.open(url);
};
