import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
export const FormTextField = ({ name, control, rules = {}, ...remainTextInputProps }) => {
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
          onChange={onChange}
          value={value}
          fullWidth
          variant="outlined"
          {...remainTextInputProps}
        />
      )}
    />
  );
};