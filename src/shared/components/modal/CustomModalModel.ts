export interface CustomModalModel {
  title?: string;
  children: JSX.Element;
  onClose: () => void;
  show?: boolean;
}
