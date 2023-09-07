import { Button, Divider, FormControl, FormLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import CustomDialog from "@shared/components/Dialog/CustomDialog";

import { CreateEditSiteFormProps } from "./CreateEditSiteFormModels";

const columns = [
  {
    field: "entityId",
    headerName: "ID",
    width: 300,
    checkboxSelection: true
  },
  { field: "entityPropertyId", headerName: "Entity Property ID", width: 200 },
  { field: "value", headerName: "Value", width: 100 }
];

const rows = [
  { entityId: "c52cbba6-0476-11ee-8995-acde48001121", entityPropertyId: "c52cbba6-0476-11ee-8995", value: 25 },
  { entityId: "c52cbba6-0476-11ee-8995-acde48001178", entityPropertyId: "c52cbba6-0476-11ee-8999", value: 30 },
  { entityId: "c52cbba6-0476-11ee-8995-acde48001456", entityPropertyId: "c52cbba6-0476-11ee-8996", value: 35 }
];

const CreateEditSiteForm = (props: CreateEditSiteFormProps) => {
  const { isVisible, rowData, rowEditData, onClose } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (rowEditData?.name) reset(rowEditData);
  }, [reset, rowEditData]);

  return (
    <CustomDialog
      title={rowEditData?.name ? "Edit site" : "Add new site"}
      show={isVisible}
      onClose={onClose}
      maxWidth="md"
    >
      <form onSubmit={handleSubmit(onClose)}>
        <Divider />
        <Stack
          sx={{ m: 3 }}
          spacing={{ xs: 1, sm: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Typography variant="h6" gutterBottom={false} m={0}>
            {rowData?.name ? `Enterprise: ${rowData?.name}` : ``}
          </Typography>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Name</FormLabel>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              rules={{
                required: true
              }}
              render={({ field }) => (
                <TextField {...field} error={!!errors.name} helperText={errors.name && "Name is required"} />
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Notes</FormLabel>
            <Controller
              name="notes"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={3}
                  error={!!errors.textArea}
                  helperText={errors.textArea && "Text Area is required"}
                />
              )}
            />
          </FormControl>
          <Stack direction="row" spacing={2} width="100%">
            <FormControl fullWidth variant="outlined">
              <FormLabel>Site Type</FormLabel>
              <Controller
                name="siteTypeId"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Service Profile</FormLabel>
              <Controller
                name="serviceProfileId"
                defaultValue=""
                control={control}
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <Select {...field}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Stack>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Installation Date</FormLabel>
            <Controller
              name="installationDate"
              defaultValue=""
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { ref, ...field } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...field}
                    inputRef={ref}
                    format="DD/MM/YYYY"
                    value={field.value || null}
                    onChange={(date) => field.onChange(field.name, date)}
                  />
                </LocalizationProvider>
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Properties</FormLabel>
            <Controller
              name="properties"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <div style={{ height: 300, width: "100%" }}>
                  <DataGridPremium
                    getRowId={(row) => row.entityId}
                    columns={columns}
                    rows={rows}
                    checkboxSelection
                    rowSelectionModel={field.value}
                    onRowSelectionModelChange={(newSelection) => {
                      field.onChange(newSelection);
                    }}
                    disableRowSelectionOnClick={true}
                    disableColumnFilter={false}
                    disableRowGrouping={true}
                    disableAggregation={true}
                    disableColumnPinning={true}
                    disableColumnSelector={true}
                    disableDensitySelector={true}
                  />
                </div>
              )}
            />
          </FormControl>
        </Stack>
        <Divider />
        <Stack sx={{ m: 3 }} direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button variant="outlined" color="primary" onClick={onClose}>
            CANCEL
          </Button>
          <Button type="submit" variant="contained" color="primary">
            CREATE
          </Button>
        </Stack>
      </form>
    </CustomDialog>
  );
};

export default CreateEditSiteForm;
