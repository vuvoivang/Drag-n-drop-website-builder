import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
// import { FormControl, Select } from '@material-ui/core';

import React from 'react';

export const ToolbarDropdown = ({ value, onChange, children, disabled, renderValue }: any) => {
  return (
    <FormControl className="toolbar-dropdown_container">
      <Select className="toolbar-dropdown_select global-select" defaultValue="Select" renderValue={renderValue} disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </Select>
    </FormControl>
  );
};
