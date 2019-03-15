export interface IArticle {
  type?: string;
  item: [{ key: string; id: string; title: string; description: string }];
  targetKeys?: [];
}
