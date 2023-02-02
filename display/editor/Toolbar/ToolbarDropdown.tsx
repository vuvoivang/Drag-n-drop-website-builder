import { FormControl, Select } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";

const PageFormControl = styled(FormControl)`
  min-width: 180px;
  display: flex;
  flex-direction: row !important;
  align-items: center;
`;
const PageSelect = styled(Select)`
  min-width: 120px;
  color: white !important;
`;
export const ToolbarDropdown = ({ value, onChange, children, disabled, renderValue }: any) => {
  return (
    <PageFormControl className="toolbar-dropdown_container">
      <PageSelect renderValue={renderValue} disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </PageSelect>
    </PageFormControl>
  );
};
