import { Add, Edit, ExpandMore } from "@mui/icons-material";
import { Container, Tooltip, IconButton, Stack } from "@mui/material";
import {
  DataGridPremium,
  GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
  GridColDef,
  GridRenderCellParams,
  GridToolbarExport,
  GridToolbarContainer,
  gridDetailPanelExpandedRowsContentCacheSelector,
  useGridApiContext,
  useGridSelector,
  GridToolbarQuickFilter,
  GridToolbarFilterButton
} from "@mui/x-data-grid-premium";
import { useCallback, isValidElement, lazy } from "react";
import { ToastContainer } from "react-toastify";

import SearchInput from "@shared/components/SearchInput/SearchInput";

import styles from "./EnterpriseList.module.scss";
import EnterpriseListController from "./EnterpriseListController.ts";
import { EnterpriseListPropsModel } from "./EnterpriseListModels.ts";
import EnterpriseDetails from "../EnterpriseDetails/EnterpriseDetails.tsx";

const CreateEditEnterpriseForm = lazy(() => import("../CreateEditEnterpriseForm/CreateEditEnterpriseForm.tsx"));

const CreateEditSiteForm = lazy(
  () => import("../../../../../site-overview/gateways/view/components/CreateEditSiteForm/CreateEditSiteForm.tsx")
);

const CustomDetailPanelToggle = (props: Pick<GridRenderCellParams, "id" | "value">) => {
  const { id, value: isExpanded } = props;
  const apiRef = useGridApiContext();

  // To avoid calling ´getDetailPanelContent` all the time, the following selector
  // gives an object with the detail panel content for each row id.
  const contentCache = useGridSelector(apiRef, gridDetailPanelExpandedRowsContentCacheSelector);

  // If the value is not a valid React element, it means that the row has no detail panel.
  const hasDetail = isValidElement(contentCache[id]);

  return (
    <IconButton size="small" tabIndex={-1} disabled={!hasDetail} aria-label={isExpanded ? "Close" : "Open"}>
      <ExpandMore
        sx={{
          transform: `rotateZ(${isExpanded ? 180 : 0}deg)`,
          transition: (theme: {
            transitions: { create: (arg0: string, arg1: { duration: any }) => any; duration: { shortest: any } };
          }) =>
            theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest
            })
        }}
        fontSize="inherit"
      />
    </IconButton>
  );
};

const columns: GridColDef[] = [
  {
    ...GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
    renderCell: (params) => <CustomDetailPanelToggle id={params.id} value={params.value} />
  },
  {
    field: "id",
    headerName: "Enterprise",
    minWidth: 150,
    width: 200,
    disableReorder: true
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    width: 200,
    disableReorder: true
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    minWidth: 150,
    width: 200,
    disableReorder: true
  },

  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 150,
    width: 200,
    disableReorder: true
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    minWidth: 150,
    width: 200,
    disableReorder: true
  },
  {
    field: "sites",
    headerName: "Number of Sites",
    align: "center",
    minWidth: 150,
    width: 150,
    maxWidth: 150,
    disableReorder: true,
    valueGetter: ({ value }: { value: any[] }) => (value?.length ? value.length : 0)
  }
];

const EnterpriseList = (props: EnterpriseListPropsModel) => {
  const { enterprises } = props;

  const {
    enterprisesData,
    enterpriseFormState,
    siteFormState,
    paginationModel,
    setPaginationModel,
    openEnterpriseForm,
    handleCloseEnterpriseForm,
    handleSubmitEnterprise,
    openSiteForm,
    handleCloseSiteForm
  } = EnterpriseListController(enterprises);

  const actionColumns: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: ({ row }) => {
      return (
        <>
          <Tooltip title="Add Site">
            <IconButton
              color="primary"
              aria-label="Add Site"
              onClick={() => {
                openSiteForm(row);
              }}
            >
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Enterprise">
            <IconButton
              color="primary"
              aria-label="Edit"
              onClick={() => {
                openEnterpriseForm(row);
              }}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          {/* <IconButton color="primary" aria-label="Delete" >
            <Delete />
          </IconButton> */}
        </>
      );
    }
  };

  const CustomToolbar = () => (
    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport
          printOptions={{ disableToolbarButton: true }}
          csvOptions={{ disableToolbarButton: true }}
          excelOptions={{ disableToolbarButton: true }}
        />
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
      <IconButton color="primary" aria-label="Add" onClick={openEnterpriseForm}>
        <Add />
      </IconButton>
    </Stack>
  );

  const getDetailPanelContent = useCallback(({ row }: any) => <EnterpriseDetails row={row} />, []);

  return (
    <>
      <div className={styles["list-container"]}>
        <ToastContainer />
        <div className={styles["list-search"]} style={{ display: "none" }}>
          <SearchInput style={{ width: 300 }} />
        </div>
        <Container maxWidth="xl" sx={{ minHeight: 650 }}>
          <DataGridPremium
            rows={enterprisesData}
            columns={[...columns, actionColumns]}
            disableRowSelectionOnClick={true}
            disableColumnFilter={false}
            disableRowGrouping={true}
            disableAggregation={true}
            disableColumnPinning={true}
            disableColumnSelector={true}
            disableDensitySelector={true}
            slots={{
              toolbar: CustomToolbar
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 }
              }
            }}
            getDetailPanelContent={getDetailPanelContent}
            pagination={true}
            pageSizeOptions={[25, 50, 100]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Container>
      </div>
      {enterpriseFormState.visible ? (
        <CreateEditEnterpriseForm
          isVisible={enterpriseFormState.visible}
          rowEditData={enterpriseFormState.rowEditData}
          onClose={handleCloseEnterpriseForm}
          onSubmit={handleSubmitEnterprise}
        />
      ) : null}
      {siteFormState.visible ? (
        <CreateEditSiteForm
          isVisible={siteFormState.visible}
          rowData={siteFormState.rowData}
          rowEditData={siteFormState.rowEditData}
          onClose={handleCloseSiteForm}
          onSubmit={handleCloseSiteForm}
        />
      ) : null}
    </>
  );
};

export default EnterpriseList;
