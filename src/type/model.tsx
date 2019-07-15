import { IUserStore } from "../model/store/user";
import { IConfigStore } from "../model/store/config";
import { IAppletStore } from "../page/applet/model/store";

/**
 * redux store 所有数据集
 */
export interface StoreFace {
  user: IUserStore;
  config: IConfigStore;
  applet: IAppletStore;
}
