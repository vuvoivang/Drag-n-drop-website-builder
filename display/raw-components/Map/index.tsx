import cx from 'classnames';
import React from 'react';
import { MapProps, defaultProps } from './props';
import GoogleMapReact from 'google-map-react';
import { StyledDiv } from './styled';

export const Map = (props: MapProps) => {
  const {
    lat,
    lng,
    zoom,
    styledClassNames,
    className,
    googleMapKey,
    ...otherProps
  } = props;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  return (
    <StyledDiv {...otherProps} className={cx(['modal', className, styledClassNamesValues])}>
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

Map.defaultProps = defaultProps;
