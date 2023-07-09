import { useEditor, useNode } from '@libs/hooks';
import { UserComponent } from '@libs/interfaces';
import React from 'react';

import cx from 'classnames';
import { MapSettings } from './setting';
import { WithThemeAndDatabase } from '@libs/utils';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { MapProps, defaultProps } from 'display/raw-components/Map/props';
import { StyledDiv } from 'display/raw-components/Map/styled';
import GoogleMapReact from 'google-map-react';

export const craftConfig = {
  displayName: 'Map',
  props: defaultProps,
  related: {
    settings: MapSettings,
  },
  isResizable: true,
};

export const CraftMap: UserComponent<WithThemeAndDatabase<MapProps>> = (props: WithThemeAndDatabase<MapProps>) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    lat,
    lng,
    zoom,
    styledClassNames,
    className,
    googleMapKey,
    ...otherProps
  } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  return (
    <StyledDiv ref={connect} {...otherProps} className={cx(['modal', styledClassNamesValues, enabled && "pointer-events-none"])}>
      <div style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          center={{ lat, lng }}
          zoom={zoom}
        >
        </GoogleMapReact>
      </div>
    </StyledDiv>
  );
};

CraftMap.craft = craftConfig;
