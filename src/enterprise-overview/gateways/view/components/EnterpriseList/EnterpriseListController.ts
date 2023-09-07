import { startTransition, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useSelector } from "react-redux";

import { toaster } from "@shared/services/toaster/usecases/Toaster.ts";

import { EnterpriseFormState, EnterpriseListModel, SiteFormState } from "./EnterpriseListModels.ts";
import { enterpriseInteractor } from "../../../../config/EnterpriseInstances.ts";
import { Enterprise } from "../../../../domains/Enterprise.ts";
import { selectEnterprises } from "../../../../usecases/store/EnterpriseStore.ts";

const EnterpriseListController = (enterprises: Enterprise[]): EnterpriseListModel => {
  const enterprisesData = useSelector(selectEnterprises);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0
  });

  const [enterpriseFormState, setEnterpriseFormState] = useState<EnterpriseFormState>({
    visible: false,
    rowEditData: undefined
  });

  const [siteFormState, setSiteFormState] = useState<SiteFormState>({
    visible: false,
    rowData: undefined,
    rowEditData: undefined
  });

  const openEnterpriseForm = (rowData: any): void => {
    startTransition(() => {
      setEnterpriseFormState({ visible: true, rowEditData: rowData });
    });
  };

  const handleCloseEnterpriseForm = (): void => {
    startTransition(() => {
      setEnterpriseFormState({ visible: false, rowEditData: undefined });
    });
  };

  const handleSubmitEnterprise = (enterprise: FieldValues): void => {
    enterpriseInteractor[enterprise?.id ? "editEnterprise" : "postEnterprise"](enterprise).then(() => {
      handleCloseEnterpriseForm();

      toaster.success(`Enterprise was ${enterprise?.id ? "edited" : "created"} succesfully!`);

      enterpriseInteractor.dispatchGetEnterprises();
    });
  };

  const openSiteForm = (rowData: any, rowEditData: any): void => {
    startTransition(() => {
      setSiteFormState({ visible: true, rowData: rowData, rowEditData: rowEditData });
    });
  };

  const handleCloseSiteForm = (): void => {
    startTransition(() => {
      setSiteFormState({ visible: false, rowData: undefined, rowEditData: undefined });
    });
  };

  /*useEffect(() => {
    enterpriseInteractor.dispatchGetEnterprises();
  }, []);*/

  return {
    enterprisesData: enterprisesData?.length ? enterprisesData : enterprises,
    enterpriseFormState,
    siteFormState,
    paginationModel,
    setPaginationModel,
    openEnterpriseForm,
    handleCloseEnterpriseForm,
    handleSubmitEnterprise,
    openSiteForm,
    handleCloseSiteForm
  };
};

export default EnterpriseListController;
