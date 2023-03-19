import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import _var from '../../styles/common/_var.module.scss';

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: _var.blackColor,
    boxShadow: theme.shadows[1],
    fontSize: '13px',
    fontWeight: 500,
    opacity: 0.87,
  },
}))(Tooltip);

export const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

export function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: _var.backgroundColor,
    color: _var.blackColor,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: `1px solid ${_var.borderColor}`,
    opacity: 0.87,
  },
}))(Tooltip);
