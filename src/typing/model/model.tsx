import { INav } from "../pages/applets/package/nav";

export interface IGlobalState {
  user: {
    name: string;
    email: string;
  };
}

export interface IApplets {
  edit_id: string;

  nav: INav;

  select: string;

  ui: {};

  ui_id: string;
}
