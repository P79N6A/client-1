interface IProps {
  // 项redux 中发送修改数据操作
  reduxAction({ type, payload }: { type: string; payload: string }): void;

  // 当前页面所在页面路由名称
  pathName: string;
}

/**
 * 获取路由，区分路由进行鉴权操作
 * @param props
 * @return pathName
 * @constructor
 */
export const rememberMeApi = ({ reduxAction, pathName }: IProps) =>
  new Promise((resolve, reject) => {
    // 获取 localStorage 的值 查看是否使用 记住我 功能
    const rememberMe = localStorage.getItem("be1d28922");
    // TODO 如果使用了 记住我 ，则将 rememberMe 提交给后台进行验证
    if (rememberMe) {
    }

    // 未使用 记住我 则判断当前页面路由，如需登录则 返回 403
    if (!rememberMe) {
      // 无需鉴权路由集合
      const noPathName = [
        "/",
        "/help",
        "/403",
        "/404",
        "/user/login",
        "/user/register",
        "/user/re-password"
      ];

      // 如果需要鉴权，则进行鉴权操作，鉴权通过则返回原页面，如果不通过则返回权限错误页面
      if (noPathName.indexOf(pathName) === -1) {
        reject("/403");
      }
    }
  });
