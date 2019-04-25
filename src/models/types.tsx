// 数据更改请求生成器
export interface ActionFace {
  action({ type, payload }: { type: string; payload: any }): void;
}
