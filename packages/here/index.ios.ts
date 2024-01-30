import * as common from './common';

import { layout } from '@nativescript/core/utils';
import * as types from '@nativescript/core/utils/types';
import { HereCommon, HereMarker } from './common';

global.moduleMerge(common, exports);

export class Here extends HereCommon {
  constructor() {
    super();
  }

  /*
  public static init() {
    console.log('init')
  }
  */
  static _init() {
    console.log('init');
    console.log(Object.keys(SDKInternalInitializer.new()));
  }

  createNativeView(): Object {
    console.log('createNativeView');
    Here._init();
    return {};
  }

  initNativeView() {
    console.log('initNativeView');
    super.initNativeView();
  }

  _getMarkersCount(): number {
    return 0;
  }

  addMarkers(markers: HereMarker[]): Promise<any> {
    return Promise.resolve(undefined);
  }

  removeMarkers(markers?: number[]): Promise<any> {
    return Promise.resolve(undefined);
  }

  setCenter(lat: number, lon: number, animated: boolean): Promise<any> {
    return Promise.resolve(undefined);
  }

  updateMarker(marker: HereMarker): Promise<any> {
    return Promise.resolve(undefined);
  }

  updateMarkers(markers: HereMarker[]): Promise<any> {
    return Promise.resolve(undefined);
  }
}
