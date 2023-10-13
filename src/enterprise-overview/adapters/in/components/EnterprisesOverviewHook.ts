import { useSelector } from "react-redux";

import { EnterprisesOverviewModel } from "./EnterprisesOverviewModel.ts";
import { enterpriseInteractor } from "../../../infrastructure/EnterpriseInstances.ts";
import { EnterpriseModel } from "../../../usecases/models/EnterpriseModel.ts";
import { selectEnterprises } from "../../../usecases/store/EnterpriseStore.ts";

const EnterprisesOverviewHook = (initialEnterprises: EnterpriseModel[]): EnterprisesOverviewModel => {
  const enterprisesFromStrore = useSelector(selectEnterprises);

  const handleCreateEnterprise = (): void => {
    enterpriseInteractor.dispatchGetEnterprises();
  };

  return {
    latestEnterprises: enterprisesFromStrore.length ? enterprisesFromStrore : initialEnterprises,
    handleCreateEnterprise
  };
};

export default EnterprisesOverviewHook;
