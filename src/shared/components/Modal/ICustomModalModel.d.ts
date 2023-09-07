export interface ICustomModalModel {
  title?: string;
  children: JSX.Element;
  onClose: () => void;
  show?: boolean;
}
