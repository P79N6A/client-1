// reducer action
export interface ActionFace {
  action({ type, payload }: { type: string; payload: any }): void;
}
