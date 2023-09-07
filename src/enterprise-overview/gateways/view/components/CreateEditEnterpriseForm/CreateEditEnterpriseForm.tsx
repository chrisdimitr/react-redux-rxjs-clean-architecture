import { Button, Divider, FormControl, FormLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import CustomDialog from "@shared/components/Dialog/CustomDialog";

import { CreateEditEnterpriseFormProps } from "./CreateEditEnterpriseFormModels.ts";

const CreateEditEnterpriseForm = (props: CreateEditEnterpriseFormProps) => {
  const { isVisible, rowEditData, onClose, onSubmit } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (rowEditData?.id) reset(rowEditData);
    else reset(); // Reset the form without any initial values
  }, [reset, rowEditData]);

  return (
    <CustomDialog title={rowEditData?.id ? "Edit enterprise" : "Add new enterprise"} show={isVisible} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Divider />
        <Stack
          sx={{ m: 3 }}
          spacing={{ xs: 1, sm: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
        >
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
                <TextField {...field} error={!!errors.name} helperText={errors.name && "Please enter a valid name"} />
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Notes</FormLabel>
            <Controller
              name="notes"
              defaultValue=""
              control={control}
              render={({ field }) => <TextField {...field} multiline rows={3} />}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Service Profile</FormLabel>
            <Controller
              name="serviceProfileId"
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
          <Stack direction="row" spacing={2} width="100%">
            <FormControl fullWidth variant="outlined">
              <FormLabel>Address</FormLabel>
              <Controller
                name="address"
                defaultValue=""
                control={control}
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.phone}
                    helperText={errors.phone && "Please enter a valid address"}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Phone</FormLabel>
              <Controller
                name="phone"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]{10}$/
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.phone}
                    helperText={errors.phone && "Please enter a valid phone number"}
                  />
                )}
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={2} width="100%">
            <FormControl fullWidth variant="outlined">
              <FormLabel>Fax</FormLabel>
              <Controller
                name="fax"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]{10}$/
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.fax}
                    helperText={errors.fax && "Please enter a valid fax number"}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <FormLabel>Email</FormLabel>
              <Controller
                name="email"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!!errors.email}
                    helperText={errors.email && "Please enter a valid email address"}
                  />
                )}
              />
            </FormControl>
          </Stack>
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

export default CreateEditEnterpriseForm;
