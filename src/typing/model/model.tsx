export interface IGlobalState {
  user: {
    name: string;
    email: string;
  };
}

export interface IApplets {
  edit_id: string;

  nav: string[];

  ui: {
    [name: string]: { icon: string; title: string; ui: object[]; desc: string };
  };

  ui_id: string;
}

export interface IState {
  global: IGlobalState;
  applets: IApplets;
}
