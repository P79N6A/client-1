type IReducer = (
  draft: IRxReducer,
  action: { type: string; payload?: any }
) => IRxReducer;
type IRxAction = <T>(name: string, payload: T) => { type: string; payload: T };
interface IRxReducer {
  admin: {
    siderSelect: string;
  };
}
interface IRedux extends IRxReducer{
  rxAction: IRxAction;
}
export { IReducer, IRxAction, IRxReducer, IRedux };
