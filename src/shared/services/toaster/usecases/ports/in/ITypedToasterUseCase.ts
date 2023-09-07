export interface ITypedToasterUseCase {
  info(content: any): void;

  success(content: any): void;

  warning(content: any): void;

  error(content: any): void;
}
