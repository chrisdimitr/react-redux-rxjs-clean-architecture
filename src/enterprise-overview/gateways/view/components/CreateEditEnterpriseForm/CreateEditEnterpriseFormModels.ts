import { FieldValues } from "react-hook-form";

export interface EnterpriseFormInstance {
  id?: string;
  name: string;
  notes?: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  serviceProfileId: string;
}

export interface CreateEditEnterpriseFormProps {
  isVisible: boolean;

  rowEditData: EnterpriseFormInstance | undefined;
  onClose: () => void;
  onSubmit: (enterprise: FieldValues) => void;
}
