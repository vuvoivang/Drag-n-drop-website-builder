import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const usePanelStyles = makeStyles((_) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    '&.Mui-expanded': {
      margin: '0 0',
      minHeight: '40px',
      '&:before': {
        opacity: '1',
      },
      '& + .MuiExpansionPanel-root:before ': {
        display: 'block',
      },
      fontWeight: 600,
    },
  },
}));

const useSummaryStyles = makeStyles((_) => ({
  root: {
    'min-height': '36px',
    padding: 0,
  },
  content: {
    margin: '0px',
  },
}));

export const ExpandablePanel = ({ title, children }: any) => {
  const panelClasses = usePanelStyles({});
  const summaryClasses = useSummaryStyles({});

  return (
    <ExpansionPanel classes={panelClasses}>
      <ExpansionPanelSummary classes={summaryClasses}>
        <div className='px-6 w-full'>
          <Grid container direction='row' alignItems='center' spacing={1}>
            <Grid item xs={12}>
              <h5 className='text-md text-secondary text-left font-large text-dark-gray expansion-title'>{title}</h5>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Divider />
        <Grid container spacing={1}>
          {children}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
