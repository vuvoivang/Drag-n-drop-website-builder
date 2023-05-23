import { useEditor } from '@libs/hooks';
import { getValuesFromReferencedPropsObject } from './../utils/helper';
import { cloneDeep } from 'lodash';
import { WithThemeAndDatabase } from '@libs/utils';

export const useGetValuesFromReferencedProps = <T>(props: WithThemeAndDatabase<T>) => {
  const { theme, database } = useEditor((_, query) => ({
    theme: query.getTheme(),
    database: query.getMappingDatabase(),
  }));
  // @ts-ignore
  const { children, ...remainProps } = props;
  const newProps = cloneDeep(remainProps);
  getValuesFromReferencedPropsObject(newProps, database, theme);

  return newProps as T;
};
