import { Stack } from "@mui/material";
import { DataGridPremium, GridColDef } from "@mui/x-data-grid-premium";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import styles from "./EnterpriseDetails.module.scss";

const sitesColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 250,
    width: 300,
    maxWidth: 350,
    disableReorder: true,
    renderCell: ({ value }) => {
      return <Link to={`/site-overview/${value}`}>{value}</Link>;
    }
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 125,
    width: 200,
    maxWidth: 300,
    disableReorder: true
  },
  {
    field: "calculationPeriodId",
    headerName: "calculation Period",
    minWidth: 200,
    width: 250,
    maxWidth: 280,
    disableReorder: true,
    renderCell: ({ value }) => {
      return <div className={styles["enterprise-overview-site-item"]}>{value}</div>;
    }
  },
  {
    field: "siteTypeId",
    headerName: "Site Type",
    minWidth: 200,
    width: 250,
    maxWidth: 280,
    disableReorder: true,
    renderCell: ({ value }) => {
      return (
        <div className={styles["enterprise-overview-site-item"]}>
          <div>{value}</div>
        </div>
      );
    }
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    minWidth: 200,
    width: 220,
    maxWidth: 230,
    disableReorder: true,
    renderCell: ({ value }) => {
      return (
        <div className={styles["enterprise-overview-site-item"]}>{dayjs(value).format("DD/MM/YYYY- HH:mm:ss")}</div>
      );
    }
  }
];

const EnterpriseDetails = ({ row: rowProp }: { row: any }) => {
  return (
    <Stack sx={{ width: "100%", height: "100%", boxSizing: "border-box" }} direction="column">
      <DataGridPremium
        sx={{ flex: 1, margin: 1 }}
        density="compact"
        columns={sitesColumns}
        hideFooter={true}
        disableRowGrouping={true}
        disableAggregation={true}
        disableColumnPinning={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        rows={rowProp?.sites || []}
        getRowHeight={() => "auto"}
      />
    </Stack>
  );
};

export default EnterpriseDetails;
