import { DEFAULT_GG_MAP_KEY } from "../constant";

export type MapProps = Partial<{
  lat: number;
  lng: number;
  zoom: number;
  width: string;
  height: string;
  googleMapKey: string;
  className: string;
  styledClassNames: Record<string, any>;
  margin: any[];
}>;

export const defaultProps: MapProps = {
  lat: 10.8231,
  lng: 106.6297,
  styledClassNames: {},
  zoom: 4,
  googleMapKey: DEFAULT_GG_MAP_KEY,
  width: '250px',
  height: '150px',
  margin: ['8', '0', '8', '0'],
};
