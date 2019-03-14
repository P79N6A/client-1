export interface IForm {
  type?: string;
  item?: Array<{
    type: string;
    name: string;
    value: Array<{ label: string; value: string | number }>;
    key: string;
  }>;
}
