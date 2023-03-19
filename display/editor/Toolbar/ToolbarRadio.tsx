import { FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import React from 'react';
import _var from '../../styles/common/_var.module.scss';

const useStyles = makeStyles({
  icon: {
    borderRadius: '100%',
    width: 15,
    height: 15,
    background: 'transparent',
    position: 'relative',
    padding: '3px',
    border: `2px solid ${_var.borderColor}`,
    transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
  },
  checkedIcon: {
    background: _var.blueColor,
    borderColor: 'transparent',
    '&:before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      background: _var.whiteColor,
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles({});

  return (
    <Radio
      disableRipple
      color='default'
      checkedIcon={<span className={classnames(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const useLabelStyles = makeStyles({
  label: {
    fontSize: '14px',
  },
  disabled: {
    color: _var.disableColor,
  },
});

export const ToolbarRadio = ({ value, label, disabled }: any) => {
  const classes = useLabelStyles({});
  return (
    <FormControlLabel
      classes={classes}
      value={value}
      control={<StyledRadio />}
      label={label}
      style={{ color: _var.blackColor }}
      disabled={disabled}
    />
  );
};
