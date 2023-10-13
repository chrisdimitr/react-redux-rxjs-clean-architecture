import { ResolvedData } from "@shared/models/CommonModel.ts";

import EnterpriseList from "./EnterpriseList/EnterpriseList.tsx";
import styles from "./EnterprisesOverview.module.scss";
import EnterprisesOverviewHook from "./EnterprisesOverviewHook.ts";
import { EnterpriseModel } from "../../../usecases/models/EnterpriseModel.ts";

function EnterprisesOverview(props: ResolvedData<EnterpriseModel[]>) {
  const initialEnterprises: EnterpriseModel[] = props.data;

  const { latestEnterprises, handleCreateEnterprise } = EnterprisesOverviewHook(initialEnterprises);

  console.log("EnterprisesOverview", initialEnterprises);

  return (
    <main className={styles["enterprise-overview-container"]}>
      <EnterpriseList enterprises={latestEnterprises} onCreateEnterprise={handleCreateEnterprise} />
    </main>
  );
}

export default EnterprisesOverview;
