import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
export const FormTextField = ({ name, control, rules = {}, onChange: customOnChange = (_) => { }, ...remainTextInputProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={(value) => {
            customOnChange(value);
            onChange(value);
          }}
          value={value}
          fullWidth
          variant="outlined"
          {...remainTextInputProps}
        />
      )}
    />
  );
};