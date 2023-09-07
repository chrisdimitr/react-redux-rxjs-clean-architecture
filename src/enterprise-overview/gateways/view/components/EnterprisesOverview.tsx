import { ResolvedData } from "@shared/models/CommonModels.ts";

import EnterpriseList from "./EnterpriseList/EnterpriseList.tsx";
import styles from "./EnterprisesOverview.module.scss";
import { Enterprise } from "../../../domains/Enterprise.ts";

function EnterprisesOverview(props: ResolvedData) {
  const enterprises: Enterprise[] = props.data;

  console.log("EnterprisesOverview", enterprises);

  return (
    <main className={styles["enterprise-overview-container"]}>
      <EnterpriseList enterprises={enterprises} />
    </main>
  );
}

export default EnterprisesOverview;
