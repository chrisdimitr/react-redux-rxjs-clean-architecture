import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

import { Enterprise } from "../../../../domains/Enterprise.ts";
import { EnterpriseFormInstance } from "../CreateEditEnterpriseForm/CreateEditEnterpriseFormModels.ts";

export interface EnterpriseFormState {
  visible: boolean;
  rowEditData: EnterpriseFormInstance | undefined;
}

export interface SiteFormState {
  visible: boolean;
  rowData: Enterprise | undefined;

  rowEditData: any;
}

export interface EnterpriseListPropsModel {
  enterprises: Enterprise[];
}

export interface EnterpriseListModel {
  enterprisesData: Enterprise[];
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
