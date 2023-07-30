import { QueryCallbacksFor, Delete, PatchListenerAction } from '@libs/utils';

import { Placement } from './events';
import { Nodes, NodeEventTypes, NodeId } from './nodes';

import { QueryMethods } from '../editor/query';
import { EditorStore, ActionMethodsWithConfig } from '../editor/store';
import { useInternalEditorReturnType } from '../editor/useInternalEditor';
import { CoreEventHandlers } from '../events';

export type Options = {
  onRender: React.ComponentType<{ render: React.ReactElement }>;
  onNodesChange: (query: QueryCallbacksFor<typeof QueryMethods>) => void;
  resolver: Resolver;
  enabled: boolean; // block editor??
  isShownAllIndicator: boolean;
  indicator: Partial<{
    success: string;
    error: string;
    transition: string;
    thickness: number;
  }>;
  handlers: (store: EditorStore) => CoreEventHandlers;
  normalizeNodes: (
    state: EditorState,
    previousState: EditorState,
    actionPerformed: Delete<PatchListenerAction<EditorState, typeof ActionMethodsWithConfig>, 'patches'>,
    query: QueryCallbacksFor<typeof QueryMethods>
  ) => void;
  children?: React.ReactNode;
};

export type Resolver = Record<string, string | React.ElementType>;

export interface Indicator {
  placement: Placement;
  error: string | null;
}

export type EditorEvents = Record<NodeEventTypes, Set<NodeId>>;

export type EditorState = {
  nodes: Nodes;
  events: EditorEvents;
  options: Options;
  handlers: CoreEventHandlers;
  indicator: Indicator;
  pageOptions: PageOptions;
  database: Database;
  theme: Theme;
  componentOptions: ComponentOptions;
};

export type ConnectedEditor<S = null> = useInternalEditorReturnType<S>;

export interface PageOptions {
  pages: PageData[];
  currentPage: string;
}
export type PageData = {
  path: string;
  name: string;
};

export interface Database {
  database: {
    collections: any[];
    documents: any[];
  };
  mappingDatabase: Record<number, any>;
}
type ThemeItemId = number;
type ReferencedPropKey = string;
export type Theme = Record<ThemeItemId, {
  value: any;
  type: string;
  key: string;
  refNodes: Record<NodeId, ReferencedPropKey[]>;
}>;

export interface ComponentOptions {
  components: ComponentData[];
  currentComponent: string;
}
export type ComponentData = {
  name: string;
  instanceIds: NodeId[];
};