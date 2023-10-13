import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

import { EnterpriseModel } from "../../../../usecases/models/EnterpriseModel.ts";
import { EnterpriseFormInstance } from "../CreateEditEnterpriseForm/CreateEditEnterpriseFormModel.ts";

export interface EnterpriseFormState {
  visible: boolean;
  rowEditData: EnterpriseFormInstance | undefined;
}

export interface SiteFormState {
  visible: boolean;
  rowData: EnterpriseModel | undefined;

  rowEditData: any;
}

export interface EnterpriseListPropsModel {
  enterprises: EnterpriseModel[];
  onCreateEnterprise?: () => void;
}

export interface EnterpriseListModel {
  enterpriseFormState: EnterpriseFormState;
  siteFormState: SiteFormState;
  paginationModel: {
    pageSize: number;
    page: number;
  };
  setPaginationModel: Dispatch<
    SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
  openEnterpriseForm: (rowData: any) => void;
  handleCloseEnterpriseForm: () => void;

  handleSubmitEnterprise: (enterprise: FieldValues) => void;

  openSiteForm: (rowData: any, rowEditData?: any) => void;
  handleCloseSiteForm: () => void;
}
