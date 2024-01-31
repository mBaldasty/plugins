import * as common from './common';

import { layout } from '@nativescript/core/utils';
import * as types from '@nativescript/core/utils/types';
import { HereCommon, HereMarker } from './common';

global.moduleMerge(common, exports);

export class Here extends HereCommon {
  mapViewWrapper: MapViewWrapper;
  routingEngine: RoutingWrapper;

  constructor() {
    super();
  }

  /*
  public static init() {
    console.log('init')
  }
  */
  static _init() {
    let hereSDKWrapper = HERESDKWrapper.new();
    hereSDKWrapper.initializeHERESDKAccessKeySecret('B49OatIv47m31Kt_AA3dzQ', 'EqRJJRxdkpsxaKFfPIovhch1SRkop1rdgLYdP78MHVz9cmJnIuQreqYHAhqwRkuibcW3FczB_6EbtgxrEVf8Jg');
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
    const nativeView = this.nativeView;
    if (nativeView) {
      const width = layout.getMeasureSpecSize(widthMeasureSpec);
      const height = layout.getMeasureSpecSize(heightMeasureSpec);
      this.setMeasuredDimension(width, height);
    }
  }

  createNativeView(): Object {
    console.log('createNativeView');
    Here._init();
    this.mapViewWrapper = MapViewWrapper.shared;
    this.mapViewWrapper.createMapViewWithFrame(CGRectZero);
    return this.mapViewWrapper.getMapView();
  }

  initNativeView() {
    console.log('initNativeView');
    this.mapViewWrapper.moveCamera();
    this.startRandomRoute();
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

  startRandomRoute() {
    this.routingEngine = RoutingWrapper.new();
    console.log(this.routingEngine.addSampleRoute());
  }
}
