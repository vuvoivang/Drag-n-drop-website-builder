import { SubscriberAndCallbacksFor } from 'libs/utils/src';
import { createContext } from 'react';

import { LayerMethods } from './actions';

export type LayerStore = SubscriberAndCallbacksFor<typeof LayerMethods>;
export type LayerManagerContext = {
  store: LayerStore;
};

export const LayerManagerContext = createContext<LayerManagerContext>({} as LayerManagerContext);
