import { useNode } from 'libs/core/src';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ToolbarItemProps } from './ToolbarItem';
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
export type ToolbarSectionProps = {
  section: string;
  title?: string;
  props?: string[];
  summary?: (props: any) => React.ReactNode;
  items?: Array<ToolbarItemProps | string>; // if define, just contains defined items (with overwrite values from default)
}
export const ToolbarSection = ({ title, props, summary, children }: any) => {
  const panelClasses = usePanelStyles({});
  const summaryClasses = useSummaryStyles({});
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <ExpansionPanel classes={panelClasses}>
      <ExpansionPanelSummary classes={summaryClasses}>
        <div className="px-6 w-full">
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item xs={4}>
              <h5 className="text-md text-white text-left font-medium text-dark-gray">
                {title}
              </h5>
            </Grid>
            {summary && props ? (
              <Grid item xs={8}>
                <h5 className="text-white text-sm text-right text-dark-blue">
                  {summary(
                    props.reduce((acc: any, key: any) => {
                      acc[key] = nodeProps[key];
                      return acc;
                    }, {})
                  )}
                </h5>
              </Grid>
            ) : null}
          </Grid>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: '0px 24px 20px' }}>
        <Divider />
        <Grid container spacing={1}>
          {children}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
