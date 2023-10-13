import { toast } from "react-toastify";

import { ITypedToasterUseCase } from "@shared/services/toaster/usecases/ports/in/ITypedToasterUseCase.ts";

import ReactToastifyConfig from "../../../../infrastructure/react-toastify/ReactToastifyConfig.ts";

class Toaster implements ITypedToasterUseCase {
  constructor() {}

  info(content: any): void {
    toast.info(content, ReactToastifyConfig);
  }

  success(content: any): void {
    toast.success(content, ReactToastifyConfig);
  }

  warning(content: any): void {
    toast.warning(content, ReactToastifyConfig);
  }

  error(content: any): void {
    toast.error(content, ReactToastifyConfig);
  }
}

export const toaster = new Toaster();
