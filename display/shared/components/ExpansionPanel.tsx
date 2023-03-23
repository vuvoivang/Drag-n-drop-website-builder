import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Divider } from '@material-ui/core';
import React from 'react';

export const ExpandablePanel = ({ title, children }: any) => {
  return (
    <div className='expandable-panel'>
      <ExpansionPanel>
        <ExpansionPanelSummary>
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
    </div>
  );
};
