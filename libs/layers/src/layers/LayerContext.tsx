import { NodeId } from 'libs/core/src';
import { EventHandlerConnectors } from 'libs/utils/src';
import React from 'react';

import { LayerHandlers } from '../events/LayerHandlers';

export type LayerContext = {
  id: NodeId;
  depth: number;
  connectors: EventHandlerConnectors<LayerHandlers, React.ReactElement>;
};

export const LayerContext = React.createContext<LayerContext>(
  {} as LayerContext
);
