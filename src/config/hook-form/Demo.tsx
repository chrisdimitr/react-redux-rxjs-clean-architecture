import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Rating,
  Slider,
  Radio,
  RadioGroup,
  TextField,
  Stack,
  Switch,
  Select,
  MenuItem
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInput {
  textInput: string;
  textArea: string;
  checkBox: boolean;
  radioOptions: string;
  rating: number;
  slider: number;
  rangeSlider: number[];
  toggleSwitch: boolean;
  singleSelect: string;
  multiSelect: string[];
  datagridSelection: any[];
}

function Demo() {
  const [submittedForm, setSubmittedForm] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      textInput: "",
      textArea: "",
      checkBox: false,
      radioOptions: "1",
      rating: 0,
      slider: 5,
      rangeSlider: [5, 10],
      toggleSwitch: false,
      singleSelect: "",
      multiSelect: [],
      datagridSelection: []
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSubmittedForm(JSON.stringify(data));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      checkboxSelection: true
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "value", headerName: "Value", width: 100 }
  ];

  const rows = [
    { id: 1, name: "Option 1", value: 25 },
    { id: 2, name: "Option 2", value: 30 },
    { id: 3, name: "Option 3", value: 35 }
  ];

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {/* TEXTFIELD EXAMPLE */}
          <FormControl fullWidth variant="outlined">
            <FormLabel>Text Input</FormLabel>

            <Controller
              name="textInput"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.textInput}
                  helperText={errors.textInput && "Text Input is required"}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <FormLabel>Text Area</FormLabel>
            <Controller
              name="textArea"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={4}
                  error={!!errors.textArea}
                  helperText={errors.textArea && "Text Area is required"}
                />
              )}
            />
          </FormControl>
          {/* CHECKBOX EXAMPLE */}
          <FormControl fullWidth>
            <FormGroup>
              <Controller
                name="checkBox"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Checkbox" />}
              />
            </FormGroup>
          </FormControl>
          {/* RADIO EXAMPLE */}
          <FormControl fullWidth>
            <FormLabel>Radio</FormLabel>
            <Controller
              name="radioOptions"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel value="1" control={<Radio />} label="Option 1" />
                  <FormControlLabel value="2" control={<Radio />} label="Option 2" />
                  <FormControlLabel value="3" control={<Radio />} label="Option 3" />
                </RadioGroup>
              )}
            />
          </FormControl>
          {/* RATING EXAMPLE */}
          <FormControl fullWidth>
            <FormLabel>Rating</FormLabel>
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <Rating
                  {...field}
                  value={field.value}
                  onChange={(_event, value) => field.onChange(value)}
                  size="large"
                  name="rating"
                />
              )}
            />
            {errors.rating && <span>Rating is required</span>}
          </FormControl>
          {/* SLIDER EXAMPLE */}
          <FormControl>
            <FormLabel>Slider</FormLabel>
            <Controller
              name="slider"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <Slider
                  {...field}
                  value={field.value}
                  onChange={(_event, value) => field.onChange(value)}
                  min={0}
                  max={100}
                  step={1}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Range Slider</FormLabel>
            <Controller
              name="rangeSlider"
              control={control}
              defaultValue={[0, 50]}
              render={({ field }) => (
                <Slider
                  {...field}
                  value={field.value}
                  onChange={(_event, value) => field.onChange(value)}
                  min={0}
                  max={100}
                  step={1}
                  valueLabelDisplay="auto"
                />
              )}
            />
            {errors.rangeSlider && <span>Range Slider values are required</span>}
          </FormControl>
          {/* SWITCH EXAMPLE */}
          <FormControl>
            <FormLabel>Toggle Switch</FormLabel>
            <Controller
              name="toggleSwitch"
              control={control}
              defaultValue={false}
              render={({ field }) => <FormControlLabel control={<Switch {...field} />} label="Toggle" />}
            />
          </FormControl>

          {/* SELECT EXAMPLE */}
          <FormControl>
            <FormLabel>Single Select</FormLabel>
            <Controller
              name="singleSelect"
              control={control}
              defaultValue=""
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
          <FormControl>
            <FormLabel>Multi Select</FormLabel>
            <Controller
              name="multiSelect"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select multiple {...field}>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          {/* DataGrid EXAMPLE */}
          <FormControl>
            <FormLabel>DataGrid Selection</FormLabel>
            <Controller
              name="datagridSelection"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <div style={{ height: 300, width: "100%" }}>
                  <DataGrid
                    columns={columns}
                    rows={rows}
                    checkboxSelection
                    rowSelectionModel={field.value}
                    onRowSelectionModelChange={(newSelection) => {
                      field.onChange(newSelection);
                    }}
                  />
                </div>
              )}
            />
          </FormControl>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <br />
      <div>{submittedForm}</div>
    </Container>
  );
}

export default Demo;
