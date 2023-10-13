import { LicenseInfo } from "@mui/x-data-grid-premium";

export const MuiConfig = (() => {
  return () => {
    LicenseInfo.setLicenseKey(import.meta.env.ON_UI_MUI_LICENSE);
  };
})();
