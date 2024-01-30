import { Observable, Property, View, ContentView } from '@nativescript/core';

export abstract class HereCommon extends ContentView {
  mapStyle: HereMapStyle;
  latitude: number;
  longitude: number;
  disableZoom: boolean;
  disableScroll: boolean;
  zoomLevel: number;

  static mapReadyEvent: string = 'mapReady';

  static mapClickEvent: string = 'mapClick';

  static mapLongClickEvent: string = 'mapLongClick';

  abstract setCenter(lat: number, lon: number, animated: boolean): Promise<any>;

  abstract addMarkers(markers: HereMarker[]): Promise<any>;

  abstract removeMarkers(markers?: number[]): Promise<any>;

  abstract updateMarkers(markers: HereMarker[]): Promise<any>;

  abstract updateMarker(marker: HereMarker): Promise<any>;

  abstract _getMarkersCount(): number;
}

export interface HereMarker {
  id: number;
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  draggable?: boolean;
  selected?: boolean;
  onTap?: Function;
  icon?: string;
}

export enum HereMapStyle {
  NORMAL_DAY = 'normal_day',
  SATELLITE_DAY = 'satellite_day',
  HYBRID_DAY = 'hybrid_day',
  TERRAIN_DAY = 'terrain_day',
}

export const zoomLevelProperty = new Property<HereCommon, number>({
  name: 'zoomLevel',
  defaultValue: 0,
});

zoomLevelProperty.register(HereCommon);

export const mapStyleProperty = new Property<HereCommon, HereMapStyle>({
  name: 'mapStyle',
  defaultValue: HereMapStyle.NORMAL_DAY,
});

mapStyleProperty.register(HereCommon);

export const latitudeProperty = new Property<HereCommon, number>({
  name: 'latitude',
});

latitudeProperty.register(HereCommon);

export const longitudeProperty = new Property<HereCommon, number>({
  name: 'longitude',
});

longitudeProperty.register(HereCommon);

const booleanConverter = (v: any): boolean => {
  return String(v) === 'true';
};

export const disableZoomProperty = new Property<HereCommon, boolean>({
  name: 'disableZoom',
  defaultValue: false,
  valueConverter: (v) => booleanConverter(v),
});

disableZoomProperty.register(HereCommon);

export const disableScrollProperty = new Property<HereCommon, boolean>({
  name: 'disableScroll',
  defaultValue: false,
  valueConverter: (v) => booleanConverter(v),
});

disableScrollProperty.register(HereCommon);
