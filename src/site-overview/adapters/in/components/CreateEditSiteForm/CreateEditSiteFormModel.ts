import { Enterprise } from "../../../../../enterprise-overview/domains/Enterprise.ts";

export interface CreateEditSiteFormProps {
  isVisible: boolean;
  rowData: Enterprise | undefined;

  rowEditData: any;
  onClose: () => void;
  onSubmit: (rowData: Enterprise) => void;
}
