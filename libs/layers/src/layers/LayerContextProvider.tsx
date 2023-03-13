import { useEditor } from '@libs/core';
import { wrapConnectorHooks } from '@libs/utils';
import React, { useMemo, useContext, useRef, useEffect, useState } from 'react';

import { LayerContext } from './LayerContext';
import { LayerNode } from './LayerNode';

import { useLayerEventHandler } from '../events/LayerEventContext';
import { LayerManagerContext } from '../manager';

export const LayerContextProvider: React.FC<Omit<
  LayerContext,
  'connectors'
>> = ({ id, depth }) => {

  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  // cause child useLayoutEffect
  useEffect(() => {
    setShowChild(true);
  }, []);

  const handlers = useLayerEventHandler();

  const { store } = useContext(LayerManagerContext);
  const storeRef = useRef(store);
  storeRef.current = store;

  const connectorsUsage = useMemo(() => handlers.createConnectorsUsage(), [
    handlers,
  ]);

  const connectors = useMemo(
    () => wrapConnectorHooks(connectorsUsage.connectors),
    [connectorsUsage]
  );

  useEffect(() => {
    return () => {
      connectorsUsage.cleanup();
    };
  }, [connectorsUsage]);

  const { exists } = useEditor((state) => ({
    exists: !!state.nodes[id],
  }));

  if (!exists) {
    return null;
  }

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  return (
    <LayerContext.Provider value={{ id, depth, connectors }}>
      <LayerNode />
    </LayerContext.Provider>
  );
};
