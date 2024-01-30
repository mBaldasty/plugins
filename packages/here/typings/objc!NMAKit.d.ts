declare class NMAARCameraParameters extends NSObject {
  static alloc(): NMAARCameraParameters; // inherited from NSObject

  static new(): NMAARCameraParameters; // inherited from NSObject

  size: CGSize;

  readonly supportedSizes: NSArray<NSValue>;
}

declare class NMAARController extends NSObject {
  static alloc(): NMAARController; // inherited from NSObject

  static new(): NMAARController; // inherited from NSObject

  alternativeLocation: NMAGeoCoordinates;

  readonly cameraParameters: NMAARCameraParameters;

  delegate: NMAARControllerDelegate;

  gestureDelegate: NMAARControllerGestureDelegate;

  readonly isStarted: boolean;

  readonly location: NMAGeoCoordinates;

  objectUpdateGpsDistanceThreshold: number;

  readonly poseReading: NMAARPoseReading;

  projectionType: NMAARProjectionType;

  showFrontPlaneObjectsOnly: boolean;

  addObject(object: NMAARObject): void;

  addPolylineObject(object: NMAARPolylineObject): void;

  defocusObject(): void;

  deselectObject(): void;

  focusObject(object: NMAARObject): void;

  objectAtPointWithPress(point: CGPoint, press: boolean): NMAARObject;

  objectsAtPoint(point: CGPoint): NSArray<NMAARObject>;

  objectsInRect(rect: CGRect): NSArray<NMAARObject>;

  pressObject(object: NMAARObject): void;

  removeObject(object: NMAARObject): void;

  removePolylineObject(object: NMAARPolylineObject): void;

  selectObject(object: NMAARObject): void;

  selectObjectAllowInfoScale(object: NMAARObject, allowInfo: boolean, scale: number): void;

  setFrontPlaneIconSize(size: CGSize): void;

  start(): NSError;

  stopWithAnimation(animation: boolean): NSError;

  unpressObject(object: NMAARObject): void;
}

interface NMAARControllerDelegate extends NSObjectProtocol {
  arControllerDidEnterCameraView?(arController: NMAARController): void;

  arControllerDidExitCameraView?(arController: NMAARController): void;

  arControllerDidUpdatePose?(arController: NMAARController, poseReading: NMAARPoseReading): void;

  arControllerErrorOccurred?(arController: NMAARController, error: NSError): void;
}
declare var NMAARControllerDelegate: {
  prototype: NMAARControllerDelegate;
};

interface NMAARControllerGestureDelegate extends NSObjectProtocol {
  arControllerShouldProcessPanFromPointToPoint?(arController: NMAARController, fromPoint: CGPoint, toPoint: CGPoint): boolean;

  arControllerShouldProcessTapAtPoint?(arController: NMAARController, point: CGPoint): boolean;

  arControllerShouldProcessTouchDownAtPoint?(arController: NMAARController, point: CGPoint): boolean;

  arControllerShouldProcessTouchUpAtPoint?(arController: NMAARController, point: CGPoint): boolean;

  arControllerShouldProcessTouchUpOnObjectsAtPoint?(arController: NMAARController, objects: NSArray<NMAARObject> | NMAARObject[], point: CGPoint): boolean;
}
declare var NMAARControllerGestureDelegate: {
  prototype: NMAARControllerGestureDelegate;
};

declare const enum NMAARError {
  None = 0,

  InvalidOperation = 1,

  InvalidParameters = 2,

  OperationNotAllowed = 3,

  CameraUnavailable = 4,

  SensorsUnavailable = 5,

  Stopped = 6,

  CameraAccessNotAuthorized = 7,
}

declare var NMAARErrorDomain: string;

declare class NMAARIconObject extends NMAARObject {
  static alloc(): NMAARIconObject; // inherited from NSObject

  static iconObjectWithFrontPlaneIconBackPlaneIconMapIconInfoImageCoordinates(frontPlaneIcon: NMAImage, backPlaneIcon: NMAImage, mapIcon: NMAImage, infoImage: NMAImage, coordinates: NMAGeoCoordinates): NMAARIconObject;

  static iconObjectWithIconCoordinates(icon: NMAImage, coordinates: NMAGeoCoordinates): NMAARIconObject;

  static iconObjectWithIconInfoImageCoordinates(icon: NMAImage, infoImage: NMAImage, coordinates: NMAGeoCoordinates): NMAARIconObject;

  static new(): NMAARIconObject; // inherited from NSObject
}

declare class NMAARObject extends NSObject {
  static alloc(): NMAARObject; // inherited from NSObject

  static new(): NMAARObject; // inherited from NSObject

  backPlaneIcon: NMAImage;

  coordinates: NMAGeoCoordinates;

  readonly frame: CGRect;

  frontPlaneIcon: NMAImage;

  infoImage: NMAImage;

  infoImageMaximumHeight: number;

  infoImageMaximumWidth: number;

  readonly infoImageVisible: boolean;

  opacity: number;

  projectionType: NMAARProjectionType;

  readonly uniqueId: number;
}

declare class NMAARPolylineObject extends NSObject {
  static alloc(): NMAARPolylineObject; // inherited from NSObject

  static new(): NMAARPolylineObject; // inherited from NSObject

  lineAttributes: NMALineAttributes;

  polyline: NMAMapPolyline;

  readonly uniqueId: number;

  constructor(o: { polyline: NMAMapPolyline });

  constructor(o: { polyline: NMAMapPolyline; lineAttributes: NMALineAttributes });

  initWithPolyline(polyline: NMAMapPolyline): this;

  initWithPolylineLineAttributes(polyline: NMAMapPolyline, lineAttributes: NMALineAttributes): this;
}

declare class NMAARPoseReading extends NSObject {
  static alloc(): NMAARPoseReading; // inherited from NSObject

  static new(): NMAARPoseReading; // inherited from NSObject

  readonly heading: number;

  readonly location: NMAGeoCoordinates;

  readonly pitch: number;

  readonly roll: number;

  readonly timestamp: number;
}

declare const enum NMAARProjectionType {
  NearFar = 0,

  Direct3D = 1,

  Horizontal = 2,

  Map = 3,

  Global = 4,
}

declare class NMAAdasisV2Engine extends NSObject {
  static alloc(): NMAAdasisV2Engine; // inherited from NSObject

  static new(): NMAAdasisV2Engine; // inherited from NSObject

  delegate: NMAAdasisV2EngineDelegate;

  constructor(o: { configuration: NMAAdasisV2MessageConfiguration });

  initWithConfiguration(configuration: NMAAdasisV2MessageConfiguration): this;

  update(): NSError;
}

interface NMAAdasisV2EngineDelegate extends NSObjectProtocol {
  adasisV2EngineDidReceiveAdasisMessage?(adasisV2Engine: NMAAdasisV2Engine, message: NSData): void;
}
declare var NMAAdasisV2EngineDelegate: {
  prototype: NMAAdasisV2EngineDelegate;
};

declare class NMAAdasisV2MessageConfiguration extends NSObject {
  static alloc(): NMAAdasisV2MessageConfiguration; // inherited from NSObject

  static createWithAllMessagesEnabled(): NMAAdasisV2MessageConfiguration;

  static createWithDefaultMessagesEnabled(): NMAAdasisV2MessageConfiguration;

  static new(): NMAAdasisV2MessageConfiguration; // inherited from NSObject

  latitudeLongitudeEnabled: boolean;

  metaDataEnabled: boolean;

  positionEnabled: boolean;

  pvidEnabled: boolean;

  roadAccessibilityEnabled: boolean;

  segmentEnabled: boolean;

  slopeEnabled: boolean;

  stubEnabled: boolean;
}

declare var NMAAdasisV2MessageLength: number;

declare class NMAAddress extends NSObject {
  static alloc(): NMAAddress; // inherited from NSObject

  static new(): NMAAddress; // inherited from NSObject

  city: string;

  countryCode: string;

  countryName: string;

  county: string;

  district: string;

  floorNumber: string;

  formattedAddress: string;

  houseNumber: string;

  label: string;

  postalCode: string;

  state: string;

  street: string;

  suiteNumberOrName: string;

  additionalData(): NSDictionary<string, string>;
}

declare class NMAAddressFilter extends NSObject {
  static alloc(): NMAAddressFilter; // inherited from NSObject

  static new(): NMAAddressFilter; // inherited from NSObject

  city: string;

  countryCode: string;

  county: string;

  district: string;

  stateCode: string;

  zipCode: string;
}

declare class NMAApplicationContext extends NSObject {
  static alloc(): NMAApplicationContext; // inherited from NSObject

  static disableSdkVersionInCrashStack(): void;

  static enableEnhancedMapMatcher(enabled: boolean): void;

  static enableTrafficInOfflineMode(enable: boolean): boolean;

  static errorStatusInfo(): string;

  static getMapApprovalCodeWithCountry(locale: NSLocale): string;

  static getMapDataProviderCopyrightStatementWithCountry(locale: NSLocale): string;

  static isInitialized(): boolean;

  static isNetworkAccessAllowed(): boolean;

  static isOnline(): boolean;

  static licenseKey(): string;

  static new(): NMAApplicationContext; // inherited from NSObject

  static sdkVersion(): string;

  static setAppIdAppCodeLicenseKey(appId: string, appCode: string, licenseKey: string): NMAApplicationContextError;

  static setAppIdAppCodeLicenseKeyMapVariant(appId: string, appCode: string, licenseKey: string, mapVariant: NMAMapVariant): NMAApplicationContextError;

  static setDiskCacheSize(size: number): boolean;

  static setMapCenter(initialCenter: NMAGeoCoordinates): void;

  static setNetworkAccessAllowed(networkAccessAllowed: boolean): void;
}

declare const enum NMAApplicationContextError {
  None = 0,

  LicenseKeyEmpty = 1,

  LicenseKeyMismatch = 2,

  LicenseInvalidPlatform = 3,

  LicenseExpired = 4,

  MapVariantPermissionDenied = 5,

  MapVariantChangeAttempt = 6,

  MapVariantStorageFailed = 7,

  IncorrectLicenseKey = 8,
}

declare var NMAApplicationContextLicenseKeyExpiredNotification: string;

declare var NMAApplicationContextOnlineStatusDidChangeNotification: string;

declare class NMAAudioFileOutput extends NMAAudioOutput {
  static alloc(): NMAAudioFileOutput; // inherited from NSObject

  static audioOutputWithFiles(files: NSArray<string> | string[]): NMAAudioFileOutput;

  static new(): NMAAudioFileOutput; // inherited from NSObject

  deleteWhenFinished: boolean;

  constructor(o: { files: NSArray<string> | string[] });

  initWithFiles(files: NSArray<string> | string[]): this;
}

declare class NMAAudioManager extends NSObject {
  static alloc(): NMAAudioManager; // inherited from NSObject

  static new(): NMAAudioManager; // inherited from NSObject

  static sharedAudioManager(): NMAAudioManager;

  readonly audioRoute: NMAAudioRoute;

  audioRouteLatencyCompensation: number;

  captureHardwareVolumeKeys: boolean;

  delegate: NMAAudioManagerDelegate;

  managesAudioSession: boolean;

  volume: number;

  clearQueue(): void;

  playOutput(output: NMAAudioOutput): void;

  setAudioRoute(audioRoute: NMAAudioRoute): boolean;

  skipCurrentOutput(): void;

  stopOutputAndClearQueue(): void;
}

interface NMAAudioManagerDelegate extends NSObjectProtocol {
  audioManagerDidPlayOutput?(audioManager: NMAAudioManager): void;

  audioManagerShouldPlayOutput?(audioManager: NMAAudioManager, output: NMAAudioOutput): boolean;

  audioManagerWillPlayOutput?(audioManager: NMAAudioManager): void;
}
declare var NMAAudioManagerDelegate: {
  prototype: NMAAudioManagerDelegate;
};

declare class NMAAudioOutput extends NSObject {
  static alloc(): NMAAudioOutput; // inherited from NSObject

  static new(): NMAAudioOutput; // inherited from NSObject

  eventBlock: (p1: NMAAudioOutputEvent) => void;

  source: NMAAudioOutputSource;

  volume: number;

  play(): void;

  stop(): void;
}

declare const enum NMAAudioOutputEvent {
  Began = 0,

  Skipped = 1,

  Ended = 2,
}

declare const enum NMAAudioOutputSource {
  Unknown = 0,

  User = 1,

  Guidance = 2,
}

declare const enum NMAAudioRoute {
  Default = 0,

  DeviceSpeaker = 1,

  BluetoothHFP = 2,

  BluetoothHFPPreferred = 3,
}

declare var NMAAudioRouteDidChangeNotification: string;

declare class NMAAutoSuggest extends NSObject {
  static alloc(): NMAAutoSuggest; // inherited from NSObject

  static new(): NMAAutoSuggest; // inherited from NSObject

  readonly highlightedTitle: string;

  readonly title: string;

  readonly type: NMAAutoSuggestType;

  readonly url: string;
}

declare class NMAAutoSuggestPlace extends NMAAutoSuggest {
  static alloc(): NMAAutoSuggestPlace; // inherited from NSObject

  static new(): NMAAutoSuggestPlace; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly category: string;

  readonly position: NMAGeoCoordinates;

  readonly vicinityDescription: string;

  placeDetailsRequest(): NMAPlaceRequest;
}

declare class NMAAutoSuggestQuery extends NMAAutoSuggest {
  static alloc(): NMAAutoSuggestQuery; // inherited from NSObject

  static new(): NMAAutoSuggestQuery; // inherited from NSObject

  readonly completion: string;

  autoSuggestionRequest(): NMAAutoSuggestionRequest;
}

declare class NMAAutoSuggestSearch extends NMAAutoSuggest {
  static alloc(): NMAAutoSuggestSearch; // inherited from NSObject

  static new(): NMAAutoSuggestSearch; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly category: string;

  readonly position: NMAGeoCoordinates;

  suggestedSearchRequest(): NMADiscoveryRequest;
}

declare const enum NMAAutoSuggestType {
  Unknown = 0,

  Place = 1,

  Search = 2,

  Query = 3,
}

declare class NMAAutoSuggestionRequest extends NMARequest {
  static alloc(): NMAAutoSuggestionRequest; // inherited from NSObject

  static new(): NMAAutoSuggestionRequest; // inherited from NSObject

  textFormat: NMATextFormat;
}

declare class NMABasicClusterStyle extends NMAClusterStyle {
  static alloc(): NMABasicClusterStyle; // inherited from NSObject

  static new(): NMABasicClusterStyle; // inherited from NSObject

  static style(): NMABasicClusterStyle;

  static styleWithStrokeColorFillColorFontColor(stroke: UIColor, fill: UIColor, font: UIColor): NMABasicClusterStyle;

  fillColor: UIColor;

  fontColor: UIColor;

  strokeColor: UIColor;

  constructor(o: { strokeColor: UIColor; fillColor: UIColor; fontColor: UIColor });

  initWithStrokeColorFillColorFontColor(stroke: UIColor, fill: UIColor, font: UIColor): this;
}

declare class NMACLE2AttributeRequest extends NMACLE2Request {
  static alloc(): NMACLE2AttributeRequest; // inherited from NSObject

  static new(): NMACLE2AttributeRequest; // inherited from NSObject

  constructor(o: { layer: string; query: string });

  constructor(o: { layers: NSArray<string> | string[]; query: string });

  initWithLayerQuery(layerId: string, query: string): this;

  initWithLayersQuery(layerIds: NSArray<string> | string[], query: string): this;
}

declare class NMACLE2BoundingBoxRequest extends NMACLE2Request {
  static alloc(): NMACLE2BoundingBoxRequest; // inherited from NSObject

  static new(): NMACLE2BoundingBoxRequest; // inherited from NSObject

  constructor(o: { layer: string; boundingBox: NMAGeoBoundingBox });

  constructor(o: { layers: NSArray<string> | string[]; boundingBox: NMAGeoBoundingBox });

  initWithLayerBoundingBox(layerId: string, boundingBox: NMAGeoBoundingBox): this;

  initWithLayersBoundingBox(layerIds: NSArray<string> | string[], boundingBox: NMAGeoBoundingBox): this;
}

declare const enum NMACLE2ConnectivityMode {
  Online = 0,

  Offline = 1,

  Automatic = 2,
}

declare class NMACLE2CorridorRequest extends NMACLE2Request {
  static alloc(): NMACLE2CorridorRequest; // inherited from NSObject

  static new(): NMACLE2CorridorRequest; // inherited from NSObject

  constructor(o: { layer: string; corridor: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]; radius: number });

  constructor(o: { layer: string; route: NMARoute; radius: number });

  constructor(o: { layers: NSArray<string> | string[]; corridor: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]; radius: number });

  constructor(o: { layers: NSArray<string> | string[]; route: NMARoute; radius: number });

  initWithLayerCorridorRadius(layerId: string, coordinatesArray: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[], radius: number): this;

  initWithLayerRouteRadius(layerId: string, route: NMARoute, radius: number): this;

  initWithLayersCorridorRadius(layerIds: NSArray<string> | string[], coordinatesArray: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[], radius: number): this;

  initWithLayersRouteRadius(layerIds: NSArray<string> | string[], route: NMARoute, radius: number): this;
}

declare class NMACLE2DataManager extends NSObject {
  static alloc(): NMACLE2DataManager; // inherited from NSObject

  static new(): NMACLE2DataManager; // inherited from NSObject

  static sharedManager(): NMACLE2DataManager;

  deleteLayersTaskFromStorage(layerIds: NSArray<string> | string[], storageType: NMACLE2StorageType): NMACLE2Task<NMACLE2OperationResult>;

  downloadLayerTask(layerId: string): NMACLE2Task<NMACLE2OperationResult>;

  fetchLocalLayersTask(layerIds: NSArray<string> | string[]): NMACLE2Task<NSMutableArray<NMACLE2Geometry>>;

  geometryTaskOnLayerWithGeometriesInStorage(operationType: NMACLE2OperationType, layerId: string, geometriesArray: NSArray<NMACLE2Geometry> | NMACLE2Geometry[], storage: NMACLE2StorageType): NMACLE2Task<NMACLE2OperationResult>;

  listLayersTaskInStorage(storageArea: NMACLE2StorageType): NMACLE2Task<NSDictionary<string, NMACLE2LayerMetadata>>;

  numberOfStoredGeometriesOnError(): number;

  numberOfStoredGeometriesinLayerOnError(layerId: string): number;

  purgeLocalStorageTask(): NMACLE2Task<NMACLE2OperationResult>;

  uploadLayerTaskWithGeometries(layerId: string, geometriesArray: NSArray<NMACLE2Geometry> | NMACLE2Geometry[]): NMACLE2Task<NMACLE2OperationResult>;
}

declare const enum NMACLE2Error {
  None = 0,

  InvalidParameter = 1,

  InProgress = 2,

  Cancelled = 3,

  NetworkCommunication = 4,

  OperationNotAllowed = 5,

  DataManagerFailed = 6,

  ServerFailed = 7,

  PartialSuccess = 8,

  Unknown = 9,
}

declare class NMACLE2Geometry extends NSObject {
  static alloc(): NMACLE2Geometry; // inherited from NSObject

  static new(): NMACLE2Geometry; // inherited from NSObject

  attributes: NSMutableDictionary<string, string>;

  readonly distance: number;

  readonly geometryId: string;

  readonly isLocal: boolean;
}

declare class NMACLE2GeometryMultiPoint extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryMultiPoint; // inherited from NSObject

  static new(): NMACLE2GeometryMultiPoint; // inherited from NSObject

  coordinatesArray: NSMutableArray<NMAGeoCoordinates>;
}

declare class NMACLE2GeometryMultiPolygon extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryMultiPolygon; // inherited from NSObject

  static new(): NMACLE2GeometryMultiPolygon; // inherited from NSObject

  multiPolygonArray: NSMutableArray<NMACLE2GeometryPolygon>;
}

declare class NMACLE2GeometryMultiPolyline extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryMultiPolyline; // inherited from NSObject

  static new(): NMACLE2GeometryMultiPolyline; // inherited from NSObject

  multiPolylineArray: NSMutableArray<NMAGeoPolyline>;
}

declare class NMACLE2GeometryPoint extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryPoint; // inherited from NSObject

  static new(): NMACLE2GeometryPoint; // inherited from NSObject

  coordinates: NMAGeoCoordinates;
}

declare class NMACLE2GeometryPolygon extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryPolygon; // inherited from NSObject

  static new(): NMACLE2GeometryPolygon; // inherited from NSObject

  innerRings: NSMutableArray<NMAGeoPolygon>;

  outerRing: NMAGeoPolygon;
}

declare class NMACLE2GeometryPolyline extends NMACLE2Geometry {
  static alloc(): NMACLE2GeometryPolyline; // inherited from NSObject

  static new(): NMACLE2GeometryPolyline; // inherited from NSObject

  geoPolyline: NMAGeoPolyline;
}

declare const enum NMACLE2GeometryType {
  Full = 0,

  Local = 1,

  None = 2,
}

declare class NMACLE2LayerMetadata extends NSObject {
  static alloc(): NMACLE2LayerMetadata; // inherited from NSObject

  static new(): NMACLE2LayerMetadata; // inherited from NSObject

  readonly layerId: string;

  readonly timestamp: Date;
}

declare class NMACLE2OperationResult extends NSObject {
  static alloc(): NMACLE2OperationResult; // inherited from NSObject

  static new(): NMACLE2OperationResult; // inherited from NSObject

  readonly affectedItemCount: number;

  readonly affectedLayerIds: NSArray<string>;

  readonly operationType: NMACLE2OperationType;
}

declare const enum NMACLE2OperationType {
  Create = 0,

  Update = 1,

  Delete = 2,
}

declare class NMACLE2ProximityRequest extends NMACLE2Request {
  static alloc(): NMACLE2ProximityRequest; // inherited from NSObject

  static new(): NMACLE2ProximityRequest; // inherited from NSObject

  constructor(o: { layer: string; center: NMAGeoCoordinates; radius: number });

  constructor(o: { layers: NSArray<string> | string[]; center: NMAGeoCoordinates; radius: number });

  initWithLayerCenterRadius(layerId: string, coordinates: NMAGeoCoordinates, radius: number): this;

  initWithLayersCenterRadius(layerIds: NSArray<string> | string[], coordinates: NMAGeoCoordinates, radius: number): this;
}

declare class NMACLE2QuadkeyRequest extends NMACLE2Request {
  static alloc(): NMACLE2QuadkeyRequest; // inherited from NSObject

  static new(): NMACLE2QuadkeyRequest; // inherited from NSObject

  constructor(o: { layer: string; quadKey: string });

  constructor(o: { layers: NSArray<string> | string[]; quadKey: string });

  initWithLayerQuadKey(layerId: string, quadKey: string): this;

  initWithLayersQuadKey(layerIds: NSArray<string> | string[], quadKey: string): this;
}

declare class NMACLE2Request extends NSObject {
  static alloc(): NMACLE2Request; // inherited from NSObject

  static new(): NMACLE2Request; // inherited from NSObject

  cachingEnabled: boolean;

  connectivityMode: NMACLE2ConnectivityMode;

  geometryType: NMACLE2GeometryType;

  query: string;

  cancel(): void;

  startWithBlock(block: (p1: NMACLE2Request, p2: NMACLE2Result, p3: NSError) => void): NSError;

  startWithListener(listener: NMACLE2ResultListener): NSError;
}

declare class NMACLE2Result extends NSObject {
  static alloc(): NMACLE2Result; // inherited from NSObject

  static new(): NMACLE2Result; // inherited from NSObject

  readonly connectivityModeUsed: NMACLE2ConnectivityMode;

  readonly geometriesArray: NSArray<NMACLE2Geometry>;
}

interface NMACLE2ResultListener extends NSObjectProtocol {
  requestDidCompleteWithResultError?(request: NMACLE2Request, result: NMACLE2Result, error: NSError): void;
}
declare var NMACLE2ResultListener: {
  prototype: NMACLE2ResultListener;
};

declare const enum NMACLE2StorageType {
  Local = 0,

  Remote = 1,
}

declare class NMACLE2Task<ResultType> extends NSObject {
  static alloc<ResultType>(): NMACLE2Task<ResultType>; // inherited from NSObject

  static new<ResultType>(): NMACLE2Task<ResultType>; // inherited from NSObject

  readonly error: NSError;

  readonly isFinished: boolean;

  readonly isStarted: boolean;

  readonly result: ResultType;

  cancel(): void;

  start(): void;

  startWithBlock(listenerBlock: (p1: ResultType, p2: NSError) => void): void;

  subscribeWithBlock(subscriberBlock: (p1: ResultType, p2: NSError) => void): void;

  unsubscribeBlock(subscriberBlock: (p1: ResultType, p2: NSError) => void): void;

  waitForResult(timeout: number): boolean;
}

declare class NMACategory extends NSObject {
  static alloc(): NMACategory; // inherited from NSObject

  static new(): NMACategory; // inherited from NSObject

  readonly iconUrl: string;

  readonly name: string;

  readonly parentCategory: NMACategory;

  readonly subCategories: NSArray<NMACategory>;

  readonly uniqueId: string;
}

declare class NMACategoryFilter extends NSObject {
  static alloc(): NMACategoryFilter; // inherited from NSObject

  static new(): NMACategoryFilter; // inherited from NSObject

  addCategoryFilterFromType(categoryFilterType: NMACategoryFilterType): void;

  addCategoryFilterFromUniqueId(uniqueId: string): void;

  toString(): string;
}

declare const enum NMACategoryFilterType {
  None = 0,

  Accommodation = 1,

  AdministrativeAreasBuildings = 2,

  EatDrink = 3,

  GoingOut = 4,

  LeisureOutdoor = 5,

  NaturalGeographical = 6,

  Shopping = 7,

  SightsMuseums = 8,

  Transport = 9,

  PetrolStation = 10,

  AtmBankExchange = 11,

  ToiletRestArea = 12,

  HospitalHealthCareFacility = 13,
}

declare class NMACategoryGraphRequest extends NMARequest {
  static alloc(): NMACategoryGraphRequest; // inherited from NSObject

  static new(): NMACategoryGraphRequest; // inherited from NSObject
}

declare class NMAClusterLayer extends NSObject {
  static alloc(): NMAClusterLayer; // inherited from NSObject

  static clusterLayer(): NMAClusterLayer;

  static new(): NMAClusterLayer; // inherited from NSObject

  delegate: NMAClusterLayerDelegate;

  readonly markers: NSArray<any>;

  theme: NMAClusterTheme;

  addMarker(marker: NMAMapMarker): boolean;

  addMarkers(markers: NSArray<NMAMapMarker> | NMAMapMarker[]): boolean;

  removeMarker(marker: NMAMapMarker): boolean;

  removeMarkers(markers: NSArray<NMAMapMarker> | NMAMapMarker[]): boolean;
}

interface NMAClusterLayerDelegate extends NSObjectProtocol {
  clusterLayerDidCreateCluster?(clusterLayer: NMAClusterLayer, cluster: NMAClusterViewObject): void;
}
declare var NMAClusterLayerDelegate: {
  prototype: NMAClusterLayerDelegate;
};

declare class NMAClusterStyle extends NSObject {
  static alloc(): NMAClusterStyle; // inherited from NSObject

  static new(): NMAClusterStyle; // inherited from NSObject
}

declare class NMAClusterTheme extends NSObject {
  static alloc(): NMAClusterTheme; // inherited from NSObject

  static clusterTheme(): NMAClusterTheme;

  static new(): NMAClusterTheme; // inherited from NSObject

  setStyle(style: NMAClusterStyle): boolean;

  setStyleForDensityRange(style: NMAClusterStyle, range: NSRange): boolean;
}

declare class NMAClusterViewObject extends NMAProxyObject {
  static alloc(): NMAClusterViewObject; // inherited from NSObject

  static new(): NMAClusterViewObject; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  icon: NMAImage;

  readonly markers: NSArray<NMAMapMarker>;
}

declare class NMACompositeView extends UIView {
  static alloc(): NMACompositeView; // inherited from NSObject

  static appearance(): NMACompositeView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): NMACompositeView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NMACompositeView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMACompositeView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NMACompositeView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMACompositeView; // inherited from UIAppearance

  static new(): NMACompositeView; // inherited from NSObject

  readonly arController: NMAARController;

  renderAllowed: boolean;
}

declare class NMAContactDetail extends NSObject {
  static alloc(): NMAContactDetail; // inherited from NSObject

  static new(): NMAContactDetail; // inherited from NSObject

  readonly label: string;

  readonly type: string;

  readonly value: string;
}

declare class NMACoreRouter extends NMARouter {
  static alloc(): NMACoreRouter; // inherited from NSObject

  static new(): NMACoreRouter; // inherited from NSObject

  connectivity: NMACoreRouterConnectivity;

  dynamicPenalty: NMADynamicPenalty;

  calculateRouteWithPointsRoutingModeCompletionBlock(points: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[], mode: NMARoutingMode, completion: (p1: NMARouteResult, p2: NMARoutingError) => void): NSProgress;

  calculateRouteWithStopsRoutingModeCompletionBlock(stops: NSArray<any> | any[], mode: NMARoutingMode, completion: (p1: NMARouteResult, p2: NMARoutingError) => void): NSProgress;
}

declare const enum NMACoreRouterConnectivity {
  Default = 0,

  Offline = 1,

  Online = 2,
}

declare class NMACountryInfo extends NSObject {
  static alloc(): NMACountryInfo; // inherited from NSObject

  static getCountryInfoOnCoordinatesWithCompletionConnectivity(coordinates: NMAGeoCoordinates, completionBlock: (p1: NMACountryInfo, p2: NSError) => void, connectivity: NMARequestConnectivity): void;

  static new(): NMACountryInfo; // inherited from NSObject

  static toAlpha3CountryCode(code: string): string;

  readonly code: string;

  readonly measurementSystem: NMAMeasurementSystem;

  constructor(o: { countryCode: string });

  initWithCountryCode(code: string): this;
}

declare class NMACustomConfigurations extends NSObject {
  static alloc(): NMACustomConfigurations; // inherited from NSObject

  static new(): NMACustomConfigurations; // inherited from NSObject

  static setCustomConfiguration(configFiles: NSDictionary<string, NSURL>): NMAMapStyleConfigurationError;
}

declare class NMACustomizableColor extends NMACustomizableVariable {
  static alloc(): NMACustomizableColor; // inherited from NSObject

  static new(): NMACustomizableColor; // inherited from NSObject

  alpha: number;

  blue: number;

  green: number;

  red: number;

  constructor(o: { colorProperty: NMASchemeColorProperty; andZoomLevel: number; andZoomRange: NMAZoomRange });

  color(): UIColor;

  initWithColorPropertyAndZoomLevelAndZoomRange(property: NMASchemeColorProperty, zoomLevel: number, zoomRange: NMAZoomRange): this;

  setColor(color: UIColor): void;
}

declare const enum NMACustomizablePropertyType {
  FloatType = 0,

  IntegerType = 1,

  BooleanType = 2,

  ColorType = 3,
}

declare class NMACustomizableScheme extends NSObject {
  static alloc(): NMACustomizableScheme; // inherited from NSObject

  static new(): NMACustomizableScheme; // inherited from NSObject

  booleanForPropertyForZoomLevel(booleanProperty: NMASchemeBooleanProperty, zoomLevel: number): boolean;

  colorForPropertyForZoomLevel(colorProperty: NMASchemeColorProperty, zoomLevel: number): NMACustomizableColor;

  floatForPropertyForZoomLevel(floatProperty: NMASchemeFloatProperty, zoomLevel: number): number;

  integerForPropertyForZoomLevel(integerProperty: NMASchemeIntegerProperty, zoomLevel: number): number;

  name(): string;

  setBooleanPropertyWithValueForZoomRange(booleanProperty: NMASchemeBooleanProperty, value: boolean, zoomRange: NMAZoomRange): void;

  setColorPropertyForZoomRange(variableColor: NMACustomizableColor, zoomRange: NMAZoomRange): void;

  setFloatPropertyWithValueForZoomRange(floatProperty: NMASchemeFloatProperty, value: number, zoomRange: NMAZoomRange): void;

  setIntegerPropertyWithValueForZoomRange(integerProperty: NMASchemeIntegerProperty, value: number, zoomRange: NMAZoomRange): void;
}

declare class NMACustomizableVariable extends NSObject {
  static allAvailableProperties(): NSDictionary<string, NMACustomizableVariable>;

  static alloc(): NMACustomizableVariable; // inherited from NSObject

  static new(): NMACustomizableVariable; // inherited from NSObject

  readonly propertyIdentifier: number;

  readonly propertyType: NMACustomizablePropertyType;

  variableName: string;
}

declare var NMADeparturePlatformKeyName: string;

declare var NMADepartureTimeKeyName: string;

declare class NMADevicePositionSource extends NSObject implements CLLocationManagerDelegate, NMAPositionDataSource {
  static alloc(): NMADevicePositionSource; // inherited from NSObject

  static new(): NMADevicePositionSource; // inherited from NSObject

  readonly locationManager: CLLocationManager;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  locationManagerDidChangeAuthorization(manager: CLLocationManager): void;

  locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

  locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

  locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidFailRangingBeaconsForConstraintError(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

  locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

  locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

  locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

  locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], region: CLBeaconRegion): void;

  locationManagerDidRangeBeaconsSatisfyingConstraint(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], beaconConstraint: CLBeaconIdentityConstraint): void;

  locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

  locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

  locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

  locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

  locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

  locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

  locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

  locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

  locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  setPositioningMethod(method: NMADevicePositioningMethod): void;

  start(): void;

  stop(): void;
}

declare const enum NMADevicePositioningMethod {
  GPS = 0,

  SignificantChanges = 1,
}

declare class NMADirectionalLight extends NMALight {
  static alloc(): NMADirectionalLight; // inherited from NSObject

  static lightWithDirection(direction: NMAVector3d): NMADirectionalLight;

  static new(): NMADirectionalLight; // inherited from NSObject

  direction: NMAVector3d;

  constructor(o: { direction: NMAVector3d });

  initWithDirection(direction: NMAVector3d): this;
}

declare class NMADiscoveryLink extends NMALink {
  static alloc(): NMADiscoveryLink; // inherited from NSObject

  static new(): NMADiscoveryLink; // inherited from NSObject

  request(): NMADiscoveryRequest;
}

declare class NMADiscoveryPage extends NSObject {
  static alloc(): NMADiscoveryPage; // inherited from NSObject

  static new(): NMADiscoveryPage; // inherited from NSObject

  readonly available: number;

  readonly discoveryResults: NSArray<NMALink>;

  readonly nextPageRequest: NMADiscoveryRequest;

  readonly offsetCount: number;
}

declare class NMADiscoveryRequest extends NMARequest {
  static alloc(): NMADiscoveryRequest; // inherited from NSObject

  static new(): NMADiscoveryRequest; // inherited from NSObject

  textFormat: NMATextFormat;

  addContent(content: string): void;

  setSearchAreaWithCenterRadius(center: NMAGeoCoordinates, radius: number): void;
}

declare const enum NMADrivingDirection {
  Both = 0,

  Forward = 1,

  Backward = 2,
}

declare class NMADynamicPenalty extends NSObject {
  static alloc(): NMADynamicPenalty; // inherited from NSObject

  static new(): NMADynamicPenalty; // inherited from NSObject

  trafficPenaltyMode: NMATrafficPenaltyMode;

  addAllowedRoadElement(element: NMARoadElement): boolean;

  addAllowedRoadElementIdentifier(identifier: NMAPvidRoadElementIdentifier): boolean;

  addBannedArea(area: NMAMapPolygon): boolean;

  addPenaltyForRoadElementIdentifierWithDrivingDirectionSpeed(identifier: NMAPvidRoadElementIdentifier, direction: NMADrivingDirection, newSpeed: number): boolean;

  addPenaltyForRoadElementWithDrivingDirectionSpeed(element: NMARoadElement, direction: NMADrivingDirection, newSpeed: number): boolean;

  removeAllAllowedRoadElements(): void;

  removeAllAreaPenalties(): void;

  removeAllRoadElementPenalties(): void;

  removeAllowedRoadElement(element: NMARoadElement): boolean;

  removeAllowedRoadElementIdentifier(identifier: NMAPvidRoadElementIdentifier): boolean;

  removeBannedArea(area: NMAMapPolygon): boolean;

  removePenaltyForRoadElement(element: NMARoadElement): boolean;

  removePenaltyForRoadElementIdentifier(identifier: NMAPvidRoadElementIdentifier): boolean;
}

declare class NMAEHLink extends NSObject {
  static alloc(): NMAEHLink; // inherited from NSObject

  static new(): NMAEHLink; // inherited from NSObject

  direction: NMAEHLinkDirection;

  endOffsetCentimeters: number;

  id: number;

  startOffsetCentimeters: number;

  isEqualToLink(link: NMAEHLink): boolean;
}

declare const enum NMAEHLinkAllowedDirection {
  Forward = 0,

  Backward = 1,

  Both = 2,

  None = 3,
}

declare const enum NMAEHLinkDirection {
  Forward = 0,

  Backward = 1,
}

declare const enum NMAEHLinkFormOfWay {
  Multidigitized = 0,

  SingleCarriage = 1,

  Sliproad = 2,

  RoundaboutCircle = 3,

  SpecialTrafficFigure = 4,

  PedestrianZone = 5,

  ServiceRoad = 6,
}

declare const enum NMAEHLinkFunctionalRoadClass {
  Class1 = 0,

  Class2 = 1,

  Class3 = 2,

  Class4 = 3,

  Class5 = 4,
}

declare class NMAEHLinkInformation extends NSObject {
  static alloc(): NMAEHLinkInformation; // inherited from NSObject

  static new(): NMAEHLinkInformation; // inherited from NSObject

  formOfWay: NMAEHLinkFormOfWay;

  functionalRoadClass: NMAEHLinkFunctionalRoadClass;

  isBridge: boolean;

  isDividedRoad: boolean;

  isPedestrianOpen: boolean;

  isTunnel: boolean;

  isUrban: boolean;

  lengthMeters: number;

  speedLimitMetersPerSecond: number;

  isCarThroughOpen(direction: NMAEHLinkAllowedDirection): boolean;

  isOpenForCars(direction: NMAEHLinkAllowedDirection): boolean;
}

declare class NMAEHLinkRange extends NSEnumerator<NSObject> {
  static alloc(): NMAEHLinkRange; // inherited from NSObject

  static new(): NMAEHLinkRange; // inherited from NSObject

  readonly size: number;

  nextObject(): NMAEHLink;

  reset(): void;
}

declare class NMAEHMapAccessor extends NSObject {
  static alloc(): NMAEHMapAccessor; // inherited from NSObject

  static new(): NMAEHMapAccessor; // inherited from NSObject

  getConnectedLinks(link: NMAEHLink): NSArray<NMAEHLink>;

  getConnectedLinksError(link: NMAEHLink): NSArray<NMAEHLink>;

  getLinkInformation(link: NMAEHLink): NMAEHLinkInformation;

  getLinkInformationError(link: NMAEHLink): NMAEHLinkInformation;

  getLinkPolyline(link: NMAEHLink): NMAGeoPolyline;

  getLinkPolylineError(link: NMAEHLink): NMAGeoPolyline;

  getMetaData(link: NMAEHLink): NMAEHMetaData;

  getMetaDataError(link: NMAEHLink): NMAEHMetaData;

  getPVID(link: NMAEHLink): string;

  getPVIDError(link: NMAEHLink): string;

  getSlopeDataPoints(link: NMAEHLink): NSArray<NMAEHSlopeDataPoint>;

  getSlopeDataPointsError(link: NMAEHLink): NSArray<NMAEHSlopeDataPoint>;
}

declare class NMAEHMetaData extends NSObject {
  static alloc(): NMAEHMetaData; // inherited from NSObject

  static new(): NMAEHMetaData; // inherited from NSObject

  countryCode: number;

  regionCode: number;

  sideOfDriving: NMAEHMetaDataSideOfDriving;

  unitSystem: NMAEHMetaDataUnitSystem;
}

declare const enum NMAEHMetaDataSideOfDriving {
  Right = 0,

  Left = 1,

  Unknown = 2,
}

declare const enum NMAEHMetaDataUnitSystem {
  Metric = 0,

  Imperial = 1,

  Unknown = 2,
}

declare class NMAEHPathTree extends NSObject {
  static alloc(): NMAEHPathTree; // inherited from NSObject

  static new(): NMAEHPathTree; // inherited from NSObject

  readonly children: NMAEHPathTreeRange;

  readonly links: NMAEHLinkRange;

  readonly offsetCentimeters: number;

  readonly parent: NMAEHPathTree;

  readonly probability: number;

  isEqualToPathTree(pathTree: NMAEHPathTree): boolean;
}

declare class NMAEHPathTreeRange extends NSEnumerator<NSObject> {
  static alloc(): NMAEHPathTreeRange; // inherited from NSObject

  static new(): NMAEHPathTreeRange; // inherited from NSObject

  readonly size: number;

  nextObject(): NMAEHPathTree;

  reset(): void;
}

declare class NMAEHPosition extends NSObject {
  static alloc(): NMAEHPosition; // inherited from NSObject

  static new(): NMAEHPosition; // inherited from NSObject

  readonly offsetCentimeters: number;

  readonly pathTree: NMAEHPathTree;

  readonly speedMetersPerSecond: number;

  readonly timestamp: Date;
}

declare class NMAEHSlopeDataPoint extends NSObject {
  static alloc(): NMAEHSlopeDataPoint; // inherited from NSObject

  static new(): NMAEHSlopeDataPoint; // inherited from NSObject

  relativePositionOnLink: number;

  slopePercent: number;
}

declare class NMAElectronicHorizon extends NSObject {
  static alloc(): NMAElectronicHorizon; // inherited from NSObject

  static new(): NMAElectronicHorizon; // inherited from NSObject

  delegate: NMAElectronicHorizonDelegate;

  readonly mapAccessor: NMAEHMapAccessor;

  setLookAheadDistancesInCentimeters(distances: NSArray<number> | number[]): NSError;

  setRoute(route: NMARoute): NSError;

  setTrailingDistanceInCentimeters(distance: number): NSError;

  update(): NSError;
}

interface NMAElectronicHorizonDelegate extends NSObjectProtocol {
  electronicHorizonDidReceiveChildDetachedChild?(electronicHorizon: NMAElectronicHorizon, parent: NMAEHPathTree, child: NMAEHPathTree): void;

  electronicHorizonDidReceiveLinkAddedLink?(electronicHorizon: NMAElectronicHorizon, pathTree: NMAEHPathTree, link: NMAEHLink): void;

  electronicHorizonDidReceiveLinkRemovedLink?(electronicHorizon: NMAElectronicHorizon, pathTree: NMAEHPathTree, link: NMAEHLink): void;

  electronicHorizonDidReceiveNewPosition?(electronicHorizon: NMAElectronicHorizon, position: NMAEHPosition): void;

  electronicHorizonDidReceivePathAdded?(electronicHorizon: NMAElectronicHorizon, pathTree: NMAEHPathTree): void;

  electronicHorizonDidReceivePathRemoved?(electronicHorizon: NMAElectronicHorizon, pathTree: NMAEHPathTree): void;

  electronicHorizonDidReceiveTreeReset?(electronicHorizon: NMAElectronicHorizon): void;
}
declare var NMAElectronicHorizonDelegate: {
  prototype: NMAElectronicHorizonDelegate;
};

declare var NMAExceptionEventAdditional: string;

declare var NMAExceptionEventCancelled: string;

declare var NMAExceptionEventRedirected: string;

declare var NMAExceptionEventReplaced: string;

declare class NMAExtendedAttribute extends NSObject {
  static alloc(): NMAExtendedAttribute; // inherited from NSObject

  static new(): NMAExtendedAttribute; // inherited from NSObject

  readonly label: string;

  readonly text: string;

  readonly uniqueId: string;
}

declare const enum NMAFTCRFunctionalClass {
  FC1 = 0,

  FC2 = 1,

  FC3 = 2,

  FC4 = 3,

  FC5 = 4,

  VC = 5,
}

declare class NMAFTCRLaneInformation extends NSObject {
  static alloc(): NMAFTCRLaneInformation; // inherited from NSObject

  static new(): NMAFTCRLaneInformation; // inherited from NSObject

  readonly directions: NMAFTCRLaneInformationDirection;

  readonly matchedDirection: NMAFTCRLaneInformationDirection;

  readonly recommendationState: NMAFTCRLaneInformationRecommendationState;
}

declare const enum NMAFTCRLaneInformationDirection {
  MaskUndefined = 0,

  MaskStraight = 1,

  MaskSlightlyRight = 2,

  MaskRight = 4,

  MaskSharpRight = 8,

  MaskUTurnLeft = 16,

  MaskSharpLeft = 32,

  MaskLeft = 64,

  MaskSlightlyLeft = 128,

  MaskMergeRight = 256,

  MaskMergeLeft = 512,

  MaskMergeLanes = 1024,

  MaskUTurnRight = 2048,

  MaskSecondRight = 4096,

  MaskSecondLeft = 8192,
}

declare const enum NMAFTCRLaneInformationRecommendationState {
  NotRecommended = 0,

  Recommended = 1,
}

declare class NMAFTCRManeuver extends NSObject {
  static alloc(): NMAFTCRManeuver; // inherited from NSObject

  static new(): NMAFTCRManeuver; // inherited from NSObject

  readonly action: NMAFTCRManeuverAction;

  readonly direction: NMAFTCRManeuverDirection;

  readonly instruction: string;

  readonly lanes: NSArray<NMAFTCRLaneInformation>;

  readonly length: number;

  readonly nextRoadNames: NSArray<string>;

  readonly position: NMAGeoCoordinates;

  readonly roadNames: NSArray<string>;

  readonly travelTime: number;
}

declare const enum NMAFTCRManeuverAction {
  Undefined = 0,

  Depart = 1,

  DepartAirport = 2,

  Arrive = 3,

  ArriveAirport = 4,

  ArriveLeft = 5,

  ArriveRight = 6,

  LeftLoop = 7,

  LeftUTurn = 8,

  SharpLeftTurn = 9,

  LeftTurn = 10,

  SlightLeftTurn = 11,

  ContinueOn = 12,

  SlightRightTurn = 13,

  RightTurn = 14,

  SharpRightTurn = 15,

  RightUTurn = 16,

  RightLoop = 17,

  LeftExit = 18,

  RightExit = 19,

  LeftRamp = 20,

  RightRamp = 21,

  LeftFork = 22,

  MiddleFork = 23,

  RightFork = 24,

  LeftMerge = 25,

  RightMerge = 26,

  NameChange = 27,

  TrafficCircle = 28,

  Ferry = 29,

  Exit = 30,

  Keep = 31,

  LeftRoundaboutExit1 = 32,

  LeftRoundaboutExit2 = 33,

  LeftRoundaboutExit3 = 34,

  LeftRoundaboutExit4 = 35,

  LeftRoundaboutExit5 = 36,

  LeftRoundaboutExit6 = 37,

  LeftRoundaboutExit7 = 38,

  LeftRoundaboutExit8 = 39,

  LeftRoundaboutExit9 = 40,

  LeftRoundaboutExit10 = 41,

  LeftRoundaboutExit11 = 42,

  LeftRoundaboutExit12 = 43,

  RightRoundaboutExit1 = 44,

  RightRoundaboutExit2 = 45,

  RightRoundaboutExit3 = 46,

  RightRoundaboutExit4 = 47,

  RightRoundaboutExit5 = 48,

  RightRoundaboutExit6 = 49,

  RightRoundaboutExit7 = 50,

  RightRoundaboutExit8 = 51,

  RightRoundaboutExit9 = 52,

  RightRoundaboutExit10 = 53,

  RightRoundaboutExit11 = 54,

  RightRoundaboutExit12 = 55,

  Invalid = -1,
}

declare const enum NMAFTCRManeuverDirection {
  Undefined = 0,

  Forward = 1,

  BearRight = 2,

  LightRight = 3,

  Right = 4,

  HardRight = 5,

  UTurnRight = 6,

  BearLeft = 7,

  LightLeft = 8,

  Left = 9,

  HardLeft = 10,

  UTurnLeft = 11,

  Invalid = -1,
}

declare class NMAFTCRNavigationManager extends NSObject {
  static alloc(): NMAFTCRNavigationManager; // inherited from NSObject

  static new(): NMAFTCRNavigationManager; // inherited from NSObject

  static sharedNavigationManager(): NMAFTCRNavigationManager;

  audioDelegate: NMAFTCRNavigationManagerAudioDelegate;

  readonly averageSpeed: number;

  readonly currentManeuver: NMAFTCRManeuver;

  readonly distanceFromStart: number;

  readonly distanceToCurrentManeuver: number;

  readonly distanceToDestination: number;

  readonly distanceToNextManeuver: number;

  map: NMAMapView;

  mapTrackingMode: NMAFTCRTrackingMode;

  mapTrackingTilt: NMAFTCRTrackingTilt;

  maximumDistanceFromPreviousManeuver: number;

  maximumDistanceToUpcomingManeuver: number;

  maximumTimeIntervalFromPreviousManeuver: number;

  maximumTimeIntervalToUpcomingManeuver: number;

  minimumDistanceFromPreviousManeuver: number;

  minimumDistanceToUpcomingManeuver: number;

  minimumTimeIntervalFromPreviousManeuver: number;

  minimumTimeIntervalToUpcomingManeuver: number;

  readonly nextManeuver: NMAFTCRManeuver;

  readonly routePosition: NMAGeoPosition;

  timeBasedDistanceToUpcomingManeuver: number;

  readonly timeToArrival: number;

  voiceEnabled: boolean;

  addListener(listener: NMAFTCRNavigationManagerDelegate): void;

  isVoiceEnabledForManeuverAction(action: NMAFTCRManeuverAction): boolean;

  remainingDistanceToSubleg(subleg: number): number;

  removeListener(listener: NMAFTCRNavigationManagerDelegate): void;

  resetAnnouncementRules(): void;

  setDistanceToTriggerStopoverReached(distance: number): void;

  setVoiceEnabledForManeuverAction(enabled: boolean, action: NMAFTCRManeuverAction): void;

  startWithRoute(route: NMAFTCRRoute): void;

  stop(): void;

  timeToArrivalForSubleg(subleg: number): number;
}

interface NMAFTCRNavigationManagerAudioDelegate extends NSObjectProtocol {
  navigationManagerDidPlayVoiceFeedbackWithText?(navigationManager: NMAFTCRNavigationManager, text: string): void;

  navigationManagerShouldPlayVoiceFeedbackWithText?(navigationManager: NMAFTCRNavigationManager, text: string): boolean;

  navigationManagerWillPlayVoiceFeedbackWithText?(navigationManager: NMAFTCRNavigationManager, text: string): void;
}
declare var NMAFTCRNavigationManagerAudioDelegate: {
  prototype: NMAFTCRNavigationManagerAudioDelegate;
};

interface NMAFTCRNavigationManagerDelegate extends NSObjectProtocol {
  navigationManagerDidReachDestination?(navigationManager: NMAFTCRNavigationManager): void;

  navigationManagerDidReachStopover?(navigationManager: NMAFTCRNavigationManager, stopoverIndex: number): void;

  navigationManagerDidRerouteWithRouteError?(navigationManager: NMAFTCRNavigationManager, reroute: NMAFTCRRoute, error: NSError): void;

  navigationManagerDidUpdateLaneInformation?(navigationManager: NMAFTCRNavigationManager, laneInformationList: NSArray<NMAFTCRLaneInformation> | NMAFTCRLaneInformation[]): void;

  navigationManagerDidUpdateSpeedingStatusForCurrentSpeedSpeedLimit?(navigationManager: NMAFTCRNavigationManager, isSpeeding: boolean, speed: number, speedLimit: number): void;

  navigationManagerHasCurrentManeuverNextManeuver?(navigationManager: NMAFTCRNavigationManager, maneuver: NMAFTCRManeuver, nextManeuver: NMAFTCRManeuver): void;

  navigationManagerWillReroute?(navigationManager: NMAFTCRNavigationManager): void;
}
declare var NMAFTCRNavigationManagerDelegate: {
  prototype: NMAFTCRNavigationManagerDelegate;
};

declare const enum NMAFTCRPrivateStreetUsageMode {
  Default = 0,

  Allowed = 1,

  Forbidden = 2,
}

declare class NMAFTCRRoute extends NSObject {
  static alloc(): NMAFTCRRoute; // inherited from NSObject

  static new(): NMAFTCRRoute; // inherited from NSObject

  readonly baseTime: number;

  readonly boundingBox: NMAGeoBoundingBox;

  readonly geometry: NSArray<NMAGeoCoordinates>;

  readonly length: number;

  readonly maneuvers: NSArray<NMAFTCRManeuver>;

  readonly routeLinks: NSArray<NMAFTCRRouteLink>;

  readonly trafficTime: number;

  readonly travelTime: number;

  readonly warnings: NSArray<NMAFTCRRouteWarning>;

  readonly waypoints: NSArray<NMAFTCRWaypoint>;
}

declare const enum NMAFTCRRouteAvoidance {
  None = 0,

  Default = 1,

  Avoid = 2,

  SoftExclude = 3,

  StrictExclude = 4,
}

declare class NMAFTCRRouteLink extends NSObject {
  static alloc(): NMAFTCRRouteLink; // inherited from NSObject

  static new(): NMAFTCRRouteLink; // inherited from NSObject

  readonly functionalClass: number;

  readonly geometry: NSArray<NMAGeoCoordinates>;

  readonly length: number;

  readonly linkId: string;

  readonly remainDistance: number;

  readonly remainTime: number;
}

declare class NMAFTCRRouteOptions extends NSObject {
  static alloc(): NMAFTCRRouteOptions; // inherited from NSObject

  static new(): NMAFTCRRouteOptions; // inherited from NSObject

  arrivalTime: Date;

  readonly avoidAreas: NSArray<NMAGeoBoundingBox>;

  boatFerriesAvoidance: NMAFTCRRouteAvoidance;

  departureTime: Date;

  leftTurnAvoidance: NMAFTCRTurnAvoidance;

  limitedVehicleWeight: number;

  motorwaysAvoidance: NMAFTCRRouteAvoidance;

  readonly parameters: NSDictionary<string, string>;

  privateStreetUsageMode: NMAFTCRPrivateStreetUsageMode;

  railFerriesAvoidance: NMAFTCRRouteAvoidance;

  rightTurnAvoidance: NMAFTCRTurnAvoidance;

  routingType: NMAFTCRRoutingType;

  tollRoadsAvoidance: NMAFTCRRouteAvoidance;

  transportMode: NMAFTCRTransportMode;

  tunnelsAvoidance: NMAFTCRRouteAvoidance;

  uTurnAtWaypointEnabled: boolean;

  uTurnAvoidance: NMAFTCRTurnAvoidance;

  useTraffic: boolean;

  vehicleHeight: number;

  vehicleLength: number;

  vehicleWidth: number;

  waypointRestrictions: NMAFTCRWaypointRestrictions;

  weightPerAxle: number;

  constructor(o: { routingType: NMAFTCRRoutingType; transportMode: NMAFTCRTransportMode });

  addAvoidArea(area: NMAGeoBoundingBox): void;

  addParameterValue(name: string, value: string): void;

  getSpeedForFunctionalClassSpeedCategory(functionalClass: NMAFTCRFunctionalClass, speedCategory: number): number;

  initWithRoutingTypeTransportMode(routingType: NMAFTCRRoutingType, transportMode: NMAFTCRTransportMode): this;

  removeParameter(name: string): void;

  setSpeedForFunctionalClassSpeedCategory(speed: number, functionalClass: NMAFTCRFunctionalClass, speedCategory: number): void;
}

declare class NMAFTCRRoutePlan extends NSObject {
  static alloc(): NMAFTCRRoutePlan; // inherited from NSObject

  static new(): NMAFTCRRoutePlan; // inherited from NSObject

  options: NMAFTCRRouteOptions;

  overlay: string;

  waypoints: NSArray<NMAWaypoint>;

  constructor(o: { waypoints: NSArray<NMAWaypoint> | NMAWaypoint[] });

  constructor(o: { waypoints: NSArray<NMAWaypoint> | NMAWaypoint[]; options: NMAFTCRRouteOptions });

  initWithWaypoints(waypoints: NSArray<NMAWaypoint> | NMAWaypoint[]): this;

  initWithWaypointsOptions(waypoints: NSArray<NMAWaypoint> | NMAWaypoint[], options: NMAFTCRRouteOptions): this;
}

declare class NMAFTCRRoutePositionSource extends NSObject implements NMAPositionDataSource {
  static alloc(): NMAFTCRRoutePositionSource; // inherited from NSObject

  static new(): NMAFTCRRoutePositionSource; // inherited from NSObject

  updatesInterval: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { route: NMAFTCRRoute; movementSpeed: number });

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  initWithRouteMovementSpeed(route: NMAFTCRRoute, speed: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  start(): void;

  stop(): void;
}

declare var NMAFTCRRouteSublegWhole: number;

declare class NMAFTCRRouteWarning extends NSObject {
  static alloc(): NMAFTCRRouteWarning; // inherited from NSObject

  static new(): NMAFTCRRouteWarning; // inherited from NSObject

  readonly category: NMAFTCRRouteWarningCategory;

  readonly duration: number;

  readonly isoCountryCode: string;

  readonly message: string;

  readonly routeLinkIndex: number;

  readonly truckRestrictionCategoryCode: number;
}

declare const enum NMAFTCRRouteWarningCategory {
  Unknown = 0,

  Other = 1,

  SuspiciousUTurn = 2,

  ForbiddenDrivingDirection = 3,

  ForbiddenAccess = 4,

  LeavingNoThroughTrafficZone = 5,

  IllegalUTurn = 6,

  GateTraversal = 7,

  IllegalTurn = 8,

  TollCostRouteLinkIdNotFoundInMap = 9,

  TollCostFerryLinksOnRoute = 10,

  TollCostVehicleSpecParamMismatch = 11,

  TollCostVehicleNearMatch = 12,

  OptionalWayPoint = 13,

  DriverRestTime = 14,

  IntermediateWaypointNoThroughTraffic = 15,

  WaitingForOpeningAtWayPoint = 16,

  StoppedDueToTimeout = 17,

  WaitingToGetLinkAccess = 18,

  RoadConstructionTraversal = 19,

  ArrivingEarlierThanRequested = 20,

  DriverRestTimeViolated = 21,

  DriverRestTimeTooLate = 22,

  TollPassViolation = 23,

  EnvironmentalZoneViolation = 24,
}

declare class NMAFTCRRouter extends NSObject {
  static alloc(): NMAFTCRRouter; // inherited from NSObject

  static new(): NMAFTCRRouter; // inherited from NSObject

  calculateRouteWithPlanCompletionBlock(plan: NMAFTCRRoutePlan, completion: (p1: NSArray<NMAFTCRRoute>, p2: NSError) => void): number;

  cancel(taskId: number): void;
}

declare const enum NMAFTCRRoutingType {
  Fastest = 0,

  Shortest = 1,
}

declare const enum NMAFTCRTrackingMode {
  None = 0,

  Follow = 1,

  NorthUp = 2,

  FreeRotation = 3,

  HeadingRotation = 4,
}

declare const enum NMAFTCRTrackingTilt {
  Tilt2D = 0,

  Tilt3D = 1,

  TiltCustom = 2,
}

declare const enum NMAFTCRTransportMode {
  Car = 0,

  Truck = 1,

  Pedestrian = 2,

  Scooter = 3,

  Bike = 4,

  Bus = 5,
}

declare class NMAFTCRTurnAvoidance extends NSObject {
  static alloc(): NMAFTCRTurnAvoidance; // inherited from NSObject

  static new(): NMAFTCRTurnAvoidance; // inherited from NSObject

  enabled: boolean;

  minimalTurnAngle: number;

  penalty: number;
}

declare class NMAFTCRWaypoint extends NSObject {
  static alloc(): NMAFTCRWaypoint; // inherited from NSObject

  static new(): NMAFTCRWaypoint; // inherited from NSObject

  readonly linkId: string;

  readonly mappedPosition: NMAGeoCoordinates;

  readonly mappedRoadName: string;

  readonly originalPosition: NMAGeoCoordinates;

  readonly waypointType: NMAFTCRWaypointType;
}

declare class NMAFTCRWaypointRestrictions extends NSObject {
  static alloc(): NMAFTCRWaypointRestrictions; // inherited from NSObject

  static new(): NMAFTCRWaypointRestrictions; // inherited from NSObject

  ignoreAll: boolean;

  ignoreRestrictionsRadius: number;

  penaltyFactor: number;
}

declare const enum NMAFTCRWaypointType {
  Stop = 0,

  Via = 1,
}

declare class NMAFloatMesh extends NSObject {
  static alloc(): NMAFloatMesh; // inherited from NSObject

  static new(): NMAFloatMesh; // inherited from NSObject

  constructor(o: { vertices: interop.Pointer | interop.Reference<number>; vertexCount: number; textureCoordinates: interop.Pointer | interop.Reference<number>; coorCount: number; triangles: interop.Pointer | interop.Reference<number>; triangleCount: number });

  initWithVerticesVertexCountTextureCoordinatesCoorCountTrianglesTriangleCount(vertices: interop.Pointer | interop.Reference<number>, vertexCount: number, textureCoordinates: interop.Pointer | interop.Reference<number>, coorCount: number, triangles: interop.Pointer | interop.Reference<number>, triangleCount: number): this;

  isValid(): boolean;

  setTextureCoordinatesWithCount(textureCoordinates: interop.Pointer | interop.Reference<number>, count: number): void;

  setTrianglesWithCount(triangles: interop.Pointer | interop.Reference<number>, count: number): void;

  setVerticesWithCount(vertices: interop.Pointer | interop.Reference<number>, count: number): void;
}

declare class NMAGeoBoundingBox extends NSObject implements NSCoding {
  static alloc(): NMAGeoBoundingBox; // inherited from NSObject

  static geoBoundingBoxContainingGeoBoundingBoxes(boxes: NSArray<NMAGeoBoundingBox> | NMAGeoBoundingBox[]): NMAGeoBoundingBox;

  static geoBoundingBoxContainingGeoCoordinates(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): NMAGeoBoundingBox;

  static geoBoundingBoxWithCenterWidthHeight(center: NMAGeoCoordinates, width: number, height: number): NMAGeoBoundingBox;

  static geoBoundingBoxWithTopLeftBottomRight(topLeft: NMAGeoCoordinates, bottomRight: NMAGeoCoordinates): NMAGeoBoundingBox;

  static geoBoundingBoxWithTopRightBottomLeft(topRight: NMAGeoCoordinates, bottomLeft: NMAGeoCoordinates): NMAGeoBoundingBox;

  static new(): NMAGeoBoundingBox; // inherited from NSObject

  readonly areaSize: number;

  bottomLeft: NMAGeoCoordinates;

  bottomRight: NMAGeoCoordinates;

  readonly bottomRightBack: NMAGeoCoordinates;

  readonly center: NMAGeoCoordinates;

  readonly crossesInternationalDateLine: boolean;

  readonly height: number;

  topLeft: NMAGeoCoordinates;

  readonly topLeftFront: NMAGeoCoordinates;

  topRight: NMAGeoCoordinates;

  readonly width: number;

  constructor(o: { containingGeoBoundingBoxes: NSArray<NMAGeoBoundingBox> | NMAGeoBoundingBox[] });

  constructor(o: { containingGeoCoordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[] });

  constructor(o: { center: NMAGeoCoordinates; width: number; height: number });

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  constructor(o: { topLeft: NMAGeoCoordinates; bottomRight: NMAGeoCoordinates });

  constructor(o: { topRight: NMAGeoCoordinates; bottomLeft: NMAGeoCoordinates });

  containsGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;

  containsGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;

  encodeWithCoder(coder: NSCoder): void;

  initContainingGeoBoundingBoxes(boxes: NSArray<NMAGeoBoundingBox> | NMAGeoBoundingBox[]): this;

  initContainingGeoCoordinates(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

  initWithCenterWidthHeight(center: NMAGeoCoordinates, width: number, height: number): this;

  initWithCoder(coder: NSCoder): this;

  initWithTopLeftBottomRight(topLeft: NMAGeoCoordinates, bottomRight: NMAGeoCoordinates): this;

  initWithTopRightBottomLeft(topRight: NMAGeoCoordinates, bottomLeft: NMAGeoCoordinates): this;

  intersectionWithGeoBoundingBox(boundingBox: NMAGeoBoundingBox): NMAGeoBoundingBox;

  intersectsGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;

  isEmpty(): boolean;

  isEqualToGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;
}

declare class NMAGeoCoordinates extends NSObject implements NSCoding {
  static alloc(): NMAGeoCoordinates; // inherited from NSObject

  static geoCoordinatesWithLatitudeLongitude(latitude: number, longitude: number): NMAGeoCoordinates;

  static geoCoordinatesWithLatitudeLongitudeAltitude(latitude: number, longitude: number, altitude: number): NMAGeoCoordinates;

  static new(): NMAGeoCoordinates; // inherited from NSObject

  altitude: number;

  latitude: number;

  longitude: number;

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  constructor(o: { latitude: number; longitude: number });

  constructor(o: { latitude: number; longitude: number; altitude: number });

  distanceTo(coordinates: NMAGeoCoordinates): number;

  encodeWithCoder(coder: NSCoder): void;

  headingTo(coordinates: NMAGeoCoordinates): number;

  initWithCoder(coder: NSCoder): this;

  initWithLatitudeLongitude(latitude: number, longitude: number): this;

  initWithLatitudeLongitudeAltitude(latitude: number, longitude: number, altitude: number): this;

  isEqualToGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;
}

declare var NMAGeoCoordinatesInvalidValue: number;

declare var NMAGeoCoordinatesUnknownAltitudeValue: number;

declare class NMAGeoMesh extends NSObject {
  static alloc(): NMAGeoMesh; // inherited from NSObject

  static new(): NMAGeoMesh; // inherited from NSObject

  isValid(): boolean;

  setTextureCoordinatesWithCount(textureCoordinates: interop.Pointer | interop.Reference<number>, count: number): void;

  setTrianglesWithCount(triangles: interop.Pointer | interop.Reference<number>, count: number): void;

  setVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): void;

  setVerticesWithCount(vertices: interop.Pointer | interop.Reference<number>, count: number): void;
}

declare class NMAGeoPolygon extends NSObject {
  static alloc(): NMAGeoPolygon; // inherited from NSObject

  static new(): NMAGeoPolygon; // inherited from NSObject

  constructor(o: { coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[] });

  addPoint(coordinate: NMAGeoCoordinates): void;

  addPoints(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): void;

  allPoints(): NSArray<NMAGeoCoordinates>;

  clear(): void;

  geoBoundingBox(): NMAGeoBoundingBox;

  initWithCoordinates(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

  insertPointAtIndex(coordinate: NMAGeoCoordinates, index: number): void;

  length(): number;

  nearestCoordinateFrom(coordinate: NMAGeoCoordinates): NMAGeoCoordinates;

  nearestIndexFromCoordinate(coordinate: NMAGeoCoordinates): number;

  numberOfPoints(): number;

  pointAtIndex(index: number): NMAGeoCoordinates;

  removePointAtIndex(index: number): void;

  sortedPolygon(): NMAGeoPolygon;
}

declare class NMAGeoPolyline extends NSObject {
  static alloc(): NMAGeoPolyline; // inherited from NSObject

  static new(): NMAGeoPolyline; // inherited from NSObject

  constructor(o: { coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[] });

  addPoint(coordinate: NMAGeoCoordinates): void;

  addPoints(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): void;

  clear(): void;

  geoBoundingBox(): NMAGeoBoundingBox;

  getAllPoints(): NSArray<NMAGeoCoordinates>;

  getLength(): number;

  getNearestCoordinateFrom(coordinate: NMAGeoCoordinates): NMAGeoCoordinates;

  getNearestIndexFromCoordinate(coordinate: NMAGeoCoordinates): number;

  getNumberOfPoints(): number;

  getPointAtIndex(index: number): NMAGeoCoordinates;

  initWithCoordinates(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

  insertPointAtIndex(coordinate: NMAGeoCoordinates, index: number): void;

  removePointAtIndex(index: number): void;
}

declare class NMAGeoPosition extends NSObject {
  static alloc(): NMAGeoPosition; // inherited from NSObject

  static geoPositionWithCLLocation(location: CLLocation): NMAGeoPosition;

  static geoPositionWithCoordinatesSpeedCourseAccuracy(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number): NMAGeoPosition;

  static geoPositionWithCoordinatesSpeedCourseAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number, timestamp: Date): NMAGeoPosition;

  static geoPositionWithCoordinatesSpeedCourseLatitudeAccuracyLongitudeAccuracyAltitudeAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, latitudeAccuracy: number, longitudeAccuracy: number, altitudeAccuracy: number, timestamp: Date): NMAGeoPosition;

  static new(): NMAGeoPosition; // inherited from NSObject

  readonly altitudeAccuracy: number;

  readonly buildingId: string;

  readonly buildingName: string;

  readonly coordinates: NMAGeoCoordinates;

  readonly course: number;

  readonly floorId: number;

  readonly isValid: boolean;

  readonly latitudeAccuracy: number;

  readonly longitudeAccuracy: number;

  readonly source: NMAGeoPositionSource;

  readonly speed: number;

  readonly timestamp: Date;

  constructor(o: { CLLocation: CLLocation });

  constructor(o: { coordinates: NMAGeoCoordinates; speed: number; course: number; accuracy: number });

  constructor(o: { coordinates: NMAGeoCoordinates; speed: number; course: number; accuracy: number; timestamp: Date });

  constructor(o: { coordinates: NMAGeoCoordinates; speed: number; course: number; latitudeAccuracy: number; longitudeAccuracy: number; altitudeAccuracy: number; timestamp: Date });

  initWithCLLocation(location: CLLocation): this;

  initWithCoordinatesSpeedCourseAccuracy(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number): this;

  initWithCoordinatesSpeedCourseAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number, timestamp: Date): this;

  initWithCoordinatesSpeedCourseLatitudeAccuracyLongitudeAccuracyAltitudeAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, latitudeAccuracy: number, longitudeAccuracy: number, altitudeAccuracy: number, timestamp: Date): this;
}

declare const enum NMAGeoPositionSource {
  Unknown = 0,

  SystemLocation = 1,

  Indoor = 2,
}

declare var NMAGeoPositionUnknownValue: number;

interface NMAGeoShiftableDelegate extends NSObjectProtocol {
  shift(position: NMAGeoPosition): NMAGeoPosition;
}
declare var NMAGeoShiftableDelegate: {
  prototype: NMAGeoShiftableDelegate;
};

declare class NMAGeocodeRequest extends NMARequest {
  static alloc(): NMAGeocodeRequest; // inherited from NSObject

  static new(): NMAGeocodeRequest; // inherited from NSObject
}

declare class NMAGeocodeResult extends NSObject {
  static alloc(): NMAGeocodeResult; // inherited from NSObject

  static new(): NMAGeocodeResult; // inherited from NSObject

  readonly location: NMAPlaceLocation;

  readonly matchLevel: string;

  readonly matchQuality: NSDictionary<string, number>;

  readonly relevance: number;
}

declare var NMAGeocodeResultInvalidRelevance: number;

declare class NMAGeocoder extends NSObject {
  static alloc(): NMAGeocoder; // inherited from NSObject

  static new(): NMAGeocoder; // inherited from NSObject

  static sharedGeocoder(): NMAGeocoder;

  createGeocodeRequestWithQuerySearchArea(query: string, searchArea: NMAGeoBoundingBox): NMAGeocodeRequest;

  createGeocodeRequestWithQuerySearchRadiusSearchCenter(query: string, searchRadius: number, searchCenter: NMAGeoCoordinates): NMAGeocodeRequest;

  createReverseGeocodeRequestWithGeoCoordinates(geoCoordinates: NMAGeoCoordinates): NMAReverseGeocodeRequest;

  createReverseGeocodeRequestWithGeoCoordinatesModeBearing(geoCoordinates: NMAGeoCoordinates, geocodeMode: NMAReverseGeocodeMode, bearing: number): NMAReverseGeocodeRequest;
}

declare class NMAHEREPositionSource extends NSObject implements NMAPositionDataSource {
  static alloc(): NMAHEREPositionSource; // inherited from NSObject

  static new(): NMAHEREPositionSource; // inherited from NSObject

  indoorPositioningMode: NMAIndoorPositioningMode;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  start(): void;

  stop(): void;
}

declare const enum NMAHazardousGoodsType {
  Explosive = 1,

  Gas = 2,

  Flammable = 4,

  Combustible = 8,

  Organic = 16,

  Poison = 32,

  RadioActive = 64,

  Corrosive = 128,

  PoisonousInhalation = 256,

  HarmfulToWater = 512,

  Other = 1024,
}

declare class NMAHistoricalTrafficTileLayer extends NMAMapTileLayer implements NMAMapTileLayerDataSource {
  static alloc(): NMAHistoricalTrafficTileLayer; // inherited from NSObject

  static new(): NMAHistoricalTrafficTileLayer; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { forWeekDay: number; hour: number; minute: number });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initForWeekDayHourMinute(weekDay: number, hour: number, minute: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  mapTileLayerHasTileAtXYZoomLevel(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): boolean;

  mapTileLayerRequestDataForTileAtXYZoomLevel(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): NSData;

  mapTileLayerRequestDataForTileAtXYZoomLevelTileRequest(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number, tileRequest: NMAMapTileRequest): void;

  mapTileLayerUrlForTileAtXYZoomLevel(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): string;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class NMAImage extends NSObject {
  static alloc(): NMAImage; // inherited from NSObject

  static convertPngAtURLToURLType(srcUrl: NSURL, dstUrl: NSURL, type: NMAPngType): boolean;

  static convertPngFromDataType(data: NSData, type: NMAPngType): NSData;

  static imageWithData(data: NSData): NMAImage;

  static imageWithUIImage(image: UIImage): NMAImage;

  static imageWithURL(url: string): NMAImage;

  static new(): NMAImage; // inherited from NSObject

  readonly size: CGSize;

  readonly valid: boolean;

  constructor(o: { data: NSData });

  constructor(o: { UIImage: UIImage });

  constructor(o: { URL: string });

  UIImageRepresentation(): UIImage;

  initWithData(data: NSData): this;

  initWithUIImage(image: UIImage): this;

  initWithURL(url: string): this;
}

declare class NMAImageClusterStyle extends NMAClusterStyle {
  static alloc(): NMAImageClusterStyle; // inherited from NSObject

  static new(): NMAImageClusterStyle; // inherited from NSObject

  static styleWithImage(image: NMAImage): NMAImageClusterStyle;

  static styleWithUIImage(image: UIImage): NMAImageClusterStyle;

  constructor(o: { image: NMAImage });

  constructor(o: { UIImage: UIImage });

  initWithImage(image: NMAImage): this;

  initWithUIImage(image: UIImage): this;
}

declare const enum NMAIndoorPositioningMode {
  None = 0,

  Automatic = 1,

  Community = 2,

  Private = 3,
}

declare class NMAIsoline extends NSObject {
  static alloc(): NMAIsoline; // inherited from NSObject

  static new(): NMAIsoline; // inherited from NSObject

  readonly componentConnections: NSArray<NMAIsolineComponentConnection>;

  readonly components: NSArray<NMAGeoPolygon>;
}

declare class NMAIsolineComponentConnection extends NSObject {
  static alloc(): NMAIsolineComponentConnection; // inherited from NSObject

  static new(): NMAIsolineComponentConnection; // inherited from NSObject

  from: number;

  readonly shape: NMAGeoPolyline;

  to: number;
}

declare const enum NMAIsolineError {
  None = 0,

  Unknown = 1,

  OutOfMemory = 2,

  InvalidParameters = 3,

  InvalidOperation = 4,

  GraphDisconnected = 5,

  RoutingCancelled = 6,

  InvalidCredentials = 7,

  InsufficientMapData = 8,

  NetworkCommunication = 9,

  UnsupportedMapVersion = 10,
}

declare class NMAIsolineOptions extends NSObject {
  static alloc(): NMAIsolineOptions; // inherited from NSObject

  static new(): NMAIsolineOptions; // inherited from NSObject

  computeSingleComponent: boolean;

  quality: NMAIsolineQuality;

  viewResolution: number;
}

declare const enum NMAIsolineQuality {
  Best = 0,

  Performance = 1,

  Balanced = 2,
}

declare const enum NMAIsolineRangeType {
  Undefined = 0,

  Distance = 1,

  Time = 2,
}

declare class NMAIsolineRouter extends NSObject {
  static alloc(): NMAIsolineRouter; // inherited from NSObject

  static new(): NMAIsolineRouter; // inherited from NSObject

  busy: boolean;

  connectivity: NMAIsolineRouterConnectivity;

  calculateFromRoutingModeIsolineOptionsRangeTypeRangesCompletionBlock(point: NMAGeoCoordinates, mode: NMARoutingMode, options: NMAIsolineOptions, type: NMAIsolineRangeType, ranges: NSArray<any> | any[], completion: (p1: NSArray<NMAIsoline>, p2: NMAIsolineError) => void): boolean;

  calculateFromRoutingModeIsolineOptionsRangeTypeRangesTrafficPenaltyModeCompletionBlock(point: NMAGeoCoordinates, mode: NMARoutingMode, options: NMAIsolineOptions, type: NMAIsolineRangeType, ranges: NSArray<any> | any[], trafficMode: NMATrafficPenaltyMode, completion: (p1: NSArray<NMAIsoline>, p2: NMAIsolineError) => void): boolean;

  calculateToRoutingModeIsolineOptionsRangeTypeRangesCompletionBlock(destination: NMAGeoCoordinates, mode: NMARoutingMode, options: NMAIsolineOptions, type: NMAIsolineRangeType, ranges: NSArray<any> | any[], completion: (p1: NSArray<NMAIsoline>, p2: NMAIsolineError) => void): boolean;

  calculateToRoutingModeIsolineOptionsRangeTypeRangesTrafficPenaltyModeCompletionBlock(destination: NMAGeoCoordinates, mode: NMARoutingMode, options: NMAIsolineOptions, type: NMAIsolineRangeType, ranges: NSArray<any> | any[], trafficMode: NMATrafficPenaltyMode, completion: (p1: NSArray<NMAIsoline>, p2: NMAIsolineError) => void): boolean;

  cancel(): boolean;
}

declare const enum NMAIsolineRouterConnectivity {
  Default = 0,

  Offline = 1,

  Online = 2,
}

declare const enum NMALaneAssistanceMode {
  CurrentView = 0,

  DecisionPointView = 1,

  ManeuverView = 2,
}

declare class NMALaneInformation extends NSObject {
  static alloc(): NMALaneInformation; // inherited from NSObject

  static new(): NMALaneInformation; // inherited from NSObject

  readonly acceleration: boolean;

  readonly auxLane: boolean;

  readonly centerMarking: NMALaneInformationMarkingType;

  readonly centerTurn: boolean;

  readonly crossingRestriction: NMALaneInformationCrossingRestriction;

  readonly deceleration: boolean;

  readonly directions: NMALaneInformationDirection;

  readonly dividerMarking: NMALaneInformationMarkingType;

  readonly driveableShoulder: boolean;

  readonly express: boolean;

  readonly heightRestriction: number;

  readonly hov: boolean;

  readonly matchedDirection: NMALaneInformationDirection;

  readonly passing: boolean;

  readonly recommendationState: NMALaneInformationRecommendationState;

  readonly regular: boolean;

  readonly regulatedAccess: boolean;

  readonly reversible: boolean;

  readonly slow: boolean;

  readonly speedLimit: number;

  readonly syntheticDirection: boolean;

  readonly truckParking: boolean;

  readonly turn: boolean;

  readonly width: number;
}

declare const enum NMALaneInformationCrossingRestriction {
  NoRestriction = 0,

  Left = 1,

  Right = 2,

  Both = 3,
}

declare const enum NMALaneInformationDirection {
  MaskUndefined = 0,

  MaskStraight = 1,

  MaskSlightlyRight = 2,

  MaskRight = 4,

  MaskSharpRight = 8,

  MaskUTurnLeft = 16,

  MaskSharpLeft = 32,

  MaskLeft = 64,

  MaskSlightlyLeft = 128,

  MaskMergeRight = 256,

  MaskMergeLeft = 512,

  MaskMergeLanes = 1024,

  MaskUTurnRight = 2048,

  MaskSecondRight = 4096,

  MaskSecondLeft = 8192,
}

declare const enum NMALaneInformationMarkingType {
  NotAvailable = 0,

  LongDashed = 1,

  DoubleSolidLine = 2,

  SingleSolidLine = 3,

  DoubleInnerSingleOuterDashed = 4,

  DoubleInnerDashedOuterSingle = 5,

  ShortDashed = 6,

  SharedArea = 7,

  DashedBlocks = 8,

  PhysicalDivider = 9,

  DoubleDashed = 10,

  NoDivider = 11,

  CrossingAlert = 12,
}

declare const enum NMALaneInformationRecommendationState {
  NotRecommended = 0,

  Recommended = 1,

  HighlyRecommended = 2,

  NotAvailable = 3,
}

declare const enum NMALayoutPosition {
  TopLeft = 0,

  TopCenter = 1,

  TopRight = 2,

  CenterLeft = 3,

  Center = 4,

  CenterRight = 5,

  BottomLeft = 6,

  BottomCenter = 7,

  BottomRight = 8,
}

declare class NMALight extends NSObject {
  static alloc(): NMALight; // inherited from NSObject

  static new(): NMALight; // inherited from NSObject
}

declare class NMALineAttributes extends NSObject {
  static alloc(): NMALineAttributes; // inherited from NSObject

  static new(): NMALineAttributes; // inherited from NSObject

  capStyle: NMALineCapStyle;

  dashPrimaryLength: number;

  dashSecondaryLength: number;

  dashed: boolean;

  lineColor: UIColor;

  lineWidth: number;

  renderedWithPerspective: boolean;

  constructor(o: { width: number; color: UIColor; capStyle: NMALineCapStyle; perspective: boolean });

  initWithWidthColorCapStylePerspective(widthInPixel: number, color: UIColor, capStyle: NMALineCapStyle, perspective: boolean): this;
}

declare const enum NMALineCapStyle {
  Butt = 0,

  Round = 1,
}

declare class NMALink extends NSObject {
  static alloc(): NMALink; // inherited from NSObject

  static new(): NMALink; // inherited from NSObject

  readonly iconUrl: string;

  readonly name: string;

  readonly uniqueId: string;

  readonly url: string;
}

declare class NMALocationInfo extends NSObject {
  static alloc(): NMALocationInfo; // inherited from NSObject

  static new(): NMALocationInfo; // inherited from NSObject

  hasField(field: NMALocationInfoField): boolean;

  valueForField(field: NMALocationInfoField): string;
}

declare const enum NMALocationInfoField {
  PlaceName = 0,

  PlaceCategory = 1,

  PlacePhoneNumber = 2,

  ReferenceIdentifier = 3,

  ReferenceSource = 4,
}

declare const enum NMALocationTrackingMethod {
  None = 0,

  GPS = 1,

  SignificantChanges = 2,
}

declare class NMALoggedPositionSource extends NSObject implements NMAPositionDataSource {
  static alloc(): NMALoggedPositionSource; // inherited from NSObject

  static new(): NMALoggedPositionSource; // inherited from NSObject

  readonly currentPositionIndex: number;

  readonly finished: boolean;

  logFile: NSURL;

  positionLost: boolean;

  readonly positions: NSArray<NMAGeoPosition>;

  stationary: boolean;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { logFile: NSURL });

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  initWithLogFile(logFile: NSURL): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  reset(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  start(): void;

  stop(): void;
}

declare class NMAManeuver extends NSObject {
  static alloc(): NMAManeuver; // inherited from NSObject

  static new(): NMAManeuver; // inherited from NSObject

  readonly action: NMAManeuverAction;

  readonly angle: number;

  readonly coordinates: NMAGeoCoordinates;

  readonly distanceFromPreviousManeuver: number;

  readonly distanceFromStart: number;

  readonly distanceToNextManeuver: number;

  readonly icon: NMAManeuverIcon;

  readonly maneuverGeometry: NSArray<NMAGeoCoordinates>;

  readonly mapOrientation: number;

  readonly nextRoadIcon: NMAImage;

  readonly nextRoadName: string;

  readonly nextRoadNumber: string;

  readonly roadName: string;

  readonly roadNumber: string;

  readonly routeElements: NSArray<NMARouteElement>;

  readonly signpost: NMASignpost;

  readonly startTime: Date;

  readonly trafficDirection: NMAManeuverTrafficDirection;

  readonly transportMode: NMATransportMode;

  readonly turn: NMAManeuverTurn;

  nextRoadNames(): NSArray<string>;

  roadNames(): NSArray<string>;
}

declare const enum NMAManeuverAction {
  Undefined = 0,

  None = 1,

  End = 2,

  Stopover = 3,

  Junction = 4,

  Roundabout = 5,

  UTurn = 6,

  EnterHighwayFromRight = 7,

  EnterHighwayFromLeft = 8,

  EnterHighway = 9,

  LeaveHighway = 10,

  ChangeHighway = 11,

  ContinueHighway = 12,

  Ferry = 13,

  PassJunction = 14,

  HeadTo = 15,

  PassStation = 16,

  ChangeLine = 17,

  Invalid = -1,
}

declare const enum NMAManeuverIcon {
  Undefined = 0,

  GoStraight = 1,

  UTurnRight = 2,

  UTurnLeft = 3,

  KeepRight = 4,

  LightRight = 5,

  QuiteRight = 6,

  HeavyRight = 7,

  KeepMiddle = 8,

  KeepLeft = 9,

  LightLeft = 10,

  QuiteLeft = 11,

  HeavyLeft = 12,

  EnterHighwayRightLane = 13,

  EnterHighwayLeftLane = 14,

  LeaveHighwayRightLane = 15,

  LeaveHighwayLeftLane = 16,

  HighwayKeepRight = 17,

  HighwayKeepLeft = 18,

  Roundabout1 = 19,

  Roundabout2 = 20,

  Roundabout3 = 21,

  Roundabout4 = 22,

  Roundabout5 = 23,

  Roundabout6 = 24,

  Roundabout7 = 25,

  Roundabout8 = 26,

  Roundabout9 = 27,

  Roundabout10 = 28,

  Roundabout11 = 29,

  Roundabout12 = 30,

  Roundabout1LH = 31,

  Roundabout2LH = 32,

  Roundabout3LH = 33,

  Roundabout4LH = 34,

  Roundabout5LH = 35,

  Roundabout6LH = 36,

  Roundabout7LH = 37,

  Roundabout8LH = 38,

  Roundabout9LH = 39,

  Roundabout10LH = 40,

  Roundabout11LH = 41,

  Roundabout12LH = 42,

  Start = 43,

  End = 44,

  Ferry = 45,

  PassStation = 46,

  HeadTo = 47,

  ChangeLine = 48,
}

declare const enum NMAManeuverTrafficDirection {
  Left = 0,

  Right = 1,
}

declare const enum NMAManeuverTurn {
  Undefined = 0,

  None = 1,

  KeepMiddle = 2,

  KeepRight = 3,

  LightRight = 4,

  QuiteRight = 5,

  HeavyRight = 6,

  KeepLeft = 7,

  LightLeft = 8,

  QuiteLeft = 9,

  HeavyLeft = 10,

  Return = 11,

  Roundabout1 = 12,

  Roundabout2 = 13,

  Roundabout3 = 14,

  Roundabout4 = 15,

  Roundabout5 = 16,

  Roundabout6 = 17,

  Roundabout7 = 18,

  Roundabout8 = 19,

  Roundabout9 = 20,

  Roundabout10 = 21,

  Roundabout11 = 22,

  Roundabout12 = 23,
}

declare const enum NMAMapAnimation {
  Bow = 0,

  Linear = 1,

  None = 2,

  Rocket = 3,
}

declare class NMAMapCircle extends NMAMapObject {
  static alloc(): NMAMapCircle; // inherited from NSObject

  static mapCircleWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapCircle;

  static mapCircleWithGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): NMAMapCircle;

  static new(): NMAMapCircle; // inherited from NSObject

  center: NMAGeoCoordinates;

  customPattern: NMAImage;

  dashPrimaryLength: number;

  dashSecondaryLength: number;

  dashed: boolean;

  depthTestEnabled: boolean;

  fillColor: UIColor;

  lineColor: UIColor;

  lineWidth: number;

  patternStyle: NMAPatternStyle;

  radius: number;

  constructor(o: { geoCoordinates: NMAGeoCoordinates });

  constructor(o: { geoCoordinates: NMAGeoCoordinates; radius: number });

  initWithGeoCoordinates(coordinates: NMAGeoCoordinates): this;

  initWithGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): this;
}

declare class NMAMapContainer extends NMAMapObject {
  static alloc(): NMAMapContainer; // inherited from NSObject

  static new(): NMAMapContainer; // inherited from NSObject

  readonly mapObjects: NSArray<NMAMapObject>;

  addMapObject(aMapObject: NMAMapObject): boolean;

  removeAllMapObjects(): boolean;

  removeMapObject(aMapObject: NMAMapObject): boolean;
}

declare const enum NMAMapDataGroup {
  TruckAttributes = 12,

  ScooterAttributes = 13,

  LowRes3DLandmarks = 17,

  Terrain3D = 18,

  Outdoor = 19,

  SimpleExtrudedBuildings = 20,

  WorldwideExtendedPOI = 21,

  WorldwidePointAddresses = 22,

  LandCover = 24,

  RenderBuildingExt = 25,

  LinkGDBIdPVId = 26,

  PhoneticNames = 49,

  RealisticViews16x9 = 50,

  RealisticViews3x5 = 51,

  RealisticViews4x3 = 52,

  RealisticViews5x3 = 53,

  ADAS = 54,
}

declare class NMAMapDataPrefetcher extends NSObject {
  static alloc(): NMAMapDataPrefetcher; // inherited from NSObject

  static new(): NMAMapDataPrefetcher; // inherited from NSObject

  static sharedMapDataPrefetcher(): NMAMapDataPrefetcher;

  addListener(listener: NMAMapDataPrefetcherListener): void;

  cancel(requestId: number): void;

  cancelAll(): void;

  clearMapDataCache(): void;

  estimateMapDataSizeForBoundingBoxError(boundingBox: NMAGeoBoundingBox, error: interop.Pointer | interop.Reference<NMAPrefetchRequestError>): number;

  estimateMapDataSizeForRouteRadiusError(route: NMARoute, radius: number, error: interop.Pointer | interop.Reference<NMAPrefetchRequestError>): number;

  fetchMapDataForBoundingBoxError(boundingBox: NMAGeoBoundingBox, error: interop.Pointer | interop.Reference<NMAPrefetchRequestError>): number;

  fetchMapDataForRouteRadiusError(route: NMARoute, radius: number, error: interop.Pointer | interop.Reference<NMAPrefetchRequestError>): number;

  removeListener(listener: NMAMapDataPrefetcherListener): void;
}

interface NMAMapDataPrefetcherListener extends NSObjectProtocol {
  prefetcherDidEstimateForRequestIdWithSuccess?(prefetcher: NMAMapDataPrefetcher, dataSizeKB: number, requestId: number, success: boolean): void;

  prefetcherDidPurgeCache?(prefetcher: NMAMapDataPrefetcher, success: boolean): void;

  prefetcherDidUpdateProgressForRequestId?(prefetcher: NMAMapDataPrefetcher, progress: number, requestId: number): void;

  prefetcherDidUpdateStatusForRequestId?(prefetcher: NMAMapDataPrefetcher, status: NMAPrefetchStatus, requestId: number): void;
}
declare var NMAMapDataPrefetcherListener: {
  prototype: NMAMapDataPrefetcherListener;
};

declare const enum NMAMapEvent {
  GeoCenterChanged = 1,

  ZoomLevelChanged = 2,

  OrientationChanged = 4,

  TiltChanged = 8,

  TransformationBegan = 16,

  TransformationEnded = 32,

  GestureBegan = 64,

  GestureEnded = 128,

  AnimationBegan = 256,

  AnimationEnded = 512,

  MarkerDragBegan = 1024,

  MarkerDragged = 2048,

  MarkerDragEnded = 4096,

  All = 65535,
}

declare class NMAMapFTCRRoute extends NMAMapObject {
  static alloc(): NMAMapFTCRRoute; // inherited from NSObject

  static new(): NMAMapFTCRRoute; // inherited from NSObject

  color: UIColor;

  constructor(o: { route: NMAFTCRRoute });

  initWithRoute(route: NMAFTCRRoute): this;
}

declare const enum NMAMapFleetFeatureType {
  EnvironmentalZones = 0,

  CongestionZones = 1,

  TruckRestrictions = 2,

  All = 3,
}

declare class NMAMapGeoModel extends NMAMapModelObject {
  static alloc(): NMAMapGeoModel; // inherited from NSObject

  static new(): NMAMapGeoModel; // inherited from NSObject

  constructor(o: { mesh: NMAGeoMesh });

  initWithMesh(mesh: NMAGeoMesh): this;
}

interface NMAMapGestureDelegate extends NSObjectProtocol {
  mapViewDidReceiveDoubleTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;

  mapViewDidReceiveLongPressAtLocation?(mapView: NMAMapView, location: CGPoint): void;

  mapViewDidReceivePanAtLocation?(mapView: NMAMapView, translation: CGPoint, location: CGPoint): void;

  mapViewDidReceivePinchAtLocation?(mapView: NMAMapView, pinch: number, location: CGPoint): void;

  mapViewDidReceiveRotationAtLocation?(mapView: NMAMapView, rotation: number, location: CGPoint): void;

  mapViewDidReceiveTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;

  mapViewDidReceiveTwoFingerPanAtLocation?(mapView: NMAMapView, translation: CGPoint, location: CGPoint): void;

  mapViewDidReceiveTwoFingerTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;
}
declare var NMAMapGestureDelegate: {
  prototype: NMAMapGestureDelegate;
};

declare const enum NMAMapGestureType {
  DoubleTap = 1,

  LongPress = 2,

  Pan = 4,

  Pinch = 8,

  Rotate = 16,

  Tap = 32,

  TwoFingerPan = 64,

  TwoFingerTap = 128,

  All = 255,
}

declare class NMAMapLabeledMarker extends NMAMapMarker {
  static alloc(): NMAMapLabeledMarker; // inherited from NSObject

  static mapLabeledMarkerWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapLabeledMarker;

  static mapLabeledMarkerWithGeoCoordinatesIcon(coordinates: NMAGeoCoordinates, icon: NMAImage): NMAMapLabeledMarker;

  static mapLabeledMarkerWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): NMAMapLabeledMarker;

  static mapMarkerWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapLabeledMarker; // inherited from NMAMapMarker

  static mapMarkerWithGeoCoordinatesIcon(coordinates: NMAGeoCoordinates, icon: NMAImage): NMAMapLabeledMarker; // inherited from NMAMapMarker

  static mapMarkerWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): NMAMapLabeledMarker; // inherited from NMAMapMarker

  static new(): NMAMapLabeledMarker; // inherited from NSObject

  setTextForLanguage(text: string, language: string): boolean;

  textForLanguage(language: string): string;
}

declare const enum NMAMapLayerCategory {
  Land = 0,

  Water = 1,

  LabelOcean = 2,

  LabelSea = 3,

  LabelWaterOther = 4,

  Beach = 5,

  Woodland = 6,

  Desert = 7,

  Glacier = 8,

  LabelBeach = 9,

  LabelWoodland = 10,

  LabelDesert = 11,

  LabelGlacier = 12,

  AirportArea = 13,

  AmusementPark = 14,

  AnimalPark = 15,

  Builtup = 16,

  Cemetery = 17,

  GolfCourse = 18,

  HarborArea = 19,

  HospitalCampus = 20,

  IndustrialComplex = 21,

  MilitaryBase = 22,

  NationalPark = 23,

  NativeReservation = 24,

  OutlineMilitaryBase = 25,

  OutlineNationalPark = 26,

  OutlineNativeReservation = 27,

  CityPark = 28,

  PedestrianArea = 29,

  Railyard = 30,

  ShoppingComplex = 31,

  SportsComplex = 32,

  UniversityCampus = 33,

  LabelAirportArea = 34,

  LabelAmusementPark = 35,

  LabelAnimalPark = 36,

  LabelCemetery = 37,

  LabelGolfCourse = 38,

  LabelHarborArea = 39,

  LabelHospitalCampus = 40,

  LabelIndustrialComplex = 41,

  LabelMilitaryBase = 42,

  LabelNationalPark = 43,

  LabelNativeReservation = 44,

  LabelCityPark = 45,

  LabelPedestrianArea = 46,

  LabelRailyard = 47,

  LabelShoppingComplex = 48,

  LabelSportsComplex = 49,

  LabelUniversityCampus = 50,

  StreetCategory0 = 51,

  StreetCategory1 = 52,

  StreetCategory2 = 53,

  StreetCategory3 = 54,

  StreetCategory4 = 55,

  StreetCategoryPedestrian = 56,

  StreetCategoryWalkway = 57,

  LabelStreetCategory0 = 58,

  LabelStreetCategory1 = 59,

  LabelStreetCategory2 = 60,

  LabelStreetCategory3 = 61,

  LabelStreetCategory4 = 62,

  LabelStreetCategoryPedestrian = 63,

  LabelStreetCategoryWalkway = 64,

  RoadsignIcon = 65,

  ExitSign = 66,

  BorderCountry = 67,

  BorderState = 68,

  BorderRegional = 69,

  BorderBuiltup = 70,

  BorderLineOfControl = 71,

  NeighborhoodArea = 72,

  LabelContinent = 74,

  LabelMajorCountry = 75,

  LabelMinorCountry = 76,

  LabelState = 77,

  LabelStateAbbreviation = 78,

  LabelCityCapital = 79,

  LabelCityStateCapital = 80,

  LabelCityOther = 81,

  LabelNeighborhoodArea = 82,

  PublicTransitLine = 83,

  LabelPublicTransitLine = 84,

  IconPublicTransitStation = 85,

  LabelPublicTransitStation = 86,

  Relief = 87,

  Background = 88,

  LabelMountain = 89,

  IconMountain = 90,

  LabelIsland = 91,

  Building = 92,

  LabelBuilding = 93,

  PointAddress = 94,

  PedestrianFeature = 95,

  Railroad = 96,

  Ferry = 97,

  LabelFerry = 98,

  PoiIcon = 99,

  PoiLabel = 100,

  Count = 101,

  None = 102,
}

declare const enum NMAMapLayerType {
  Foreground = 0,

  PointOfInterest = 1,

  TransitStop = 2,

  Road = 3,

  Area = 4,

  Background = 5,

  Replacement = 6,
}

declare class NMAMapLoader extends NSObject {
  static alloc(): NMAMapLoader; // inherited from NSObject

  static new(): NMAMapLoader; // inherited from NSObject

  static sharedMapLoader(): NMAMapLoader;

  readonly active: boolean;

  delegate: NMAMapLoaderDelegate;

  readonly rootPackage: NMAMapPackage;

  cancelCurrentOperation(): boolean;

  checkForMapDataUpdate(): boolean;

  deselectDataGroup(dataGroup: NMAMapDataGroup): void;

  getMapDataUpdateSize(): boolean;

  getMapPackageAtGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;

  getMapPackages(): boolean;

  installMapPackages(mapPackages: NSArray<NMAMapPackage> | NMAMapPackage[]): boolean;

  isDataGroupSelected(dataGroup: NMAMapDataGroup): boolean;

  performMapDataUpdate(): boolean;

  selectDataGroup(dataGroup: NMAMapDataGroup): void;

  uninstallMapPackages(theMapPackages: NSArray<NMAMapPackage> | NMAMapPackage[]): boolean;
}

interface NMAMapLoaderDelegate extends NSObjectProtocol {
  mapLoaderDidFindConnection?(mapLoader: NMAMapLoader): void;

  mapLoaderDidFindUpdateFromVersionToVersionWithResult?(mapLoader: NMAMapLoader, updateIsAvailable: boolean, currentMapVersion: string, newestMapVersion: string, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidGetMapPackageAtGeoCoordinatesWithResult?(mapLoader: NMAMapLoader, package: NMAMapPackage, coordinates: NMAGeoCoordinates, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidGetNetworkUpdateSizeDiskSizeWithResult?(mapLoader: NMAMapLoader, networkSize: number, diskSize: number, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidGetPackagesWithResult?(mapLoader: NMAMapLoader, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidInstallPackagesWithResult?(mapLoader: NMAMapLoader, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidLoseConnection?(mapLoader: NMAMapLoader): void;

  mapLoaderDidUninstallPackagesWithResult?(mapLoader: NMAMapLoader, mapLoaderResult: NMAMapLoaderResult): void;

  mapLoaderDidUpdateProgress?(mapLoader: NMAMapLoader, progress: number): void;

  mapLoaderDidUpdateWithResult?(mapLoader: NMAMapLoader, mapLoaderResult: NMAMapLoaderResult): void;
}
declare var NMAMapLoaderDelegate: {
  prototype: NMAMapLoaderDelegate;
};

declare const enum NMAMapLoaderResult {
  Success = 0,

  InvalidParameters = 1,

  OperationCancelled = 2,

  InitializationFailed = 3,

  ConnectionFailed = 4,

  SearchFailed = 5,

  InsufficientStorage = 6,
}

declare class NMAMapLocalModel extends NMAMapModelObject {
  static alloc(): NMAMapLocalModel; // inherited from NSObject

  static new(): NMAMapLocalModel; // inherited from NSObject

  autoscaled: boolean;

  coordinates: NMAGeoCoordinates;

  pitch: number;

  roll: number;

  scale: number;

  yaw: number;

  constructor(o: { mesh: NMAFloatMesh });

  initWithMesh(mesh: NMAFloatMesh): this;
}

declare class NMAMapMarker extends NMAMapObject {
  static alloc(): NMAMapMarker; // inherited from NSObject

  static mapMarkerWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapMarker;

  static mapMarkerWithGeoCoordinatesIcon(coordinates: NMAGeoCoordinates, icon: NMAImage): NMAMapMarker;

  static mapMarkerWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): NMAMapMarker;

  static new(): NMAMapMarker; // inherited from NSObject

  anchorOffset: CGPoint;

  coordinates: NMAGeoCoordinates;

  draggable: boolean;

  draggingOffsetEnabled: boolean;

  icon: NMAImage;

  constructor(o: { geoCoordinates: NMAGeoCoordinates });

  constructor(o: { geoCoordinates: NMAGeoCoordinates; icon: NMAImage });

  constructor(o: { geoCoordinates: NMAGeoCoordinates; image: UIImage });

  initWithGeoCoordinates(coordinates: NMAGeoCoordinates): this;

  initWithGeoCoordinatesIcon(coordinates: NMAGeoCoordinates, icon: NMAImage): this;

  initWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): this;

  resetIconSize(): void;

  setAnchorOffsetUsingLayoutPosition(position: NMALayoutPosition): CGPoint;

  setSizeForZoomLevel(size: CGSize, zoomLevel: number): void;

  setSizeForZoomRange(size: CGSize, zoomRange: NSRange): void;
}

declare const enum NMAMapMatchMode {
  Car = 0,

  Pedestrian = 1,

  Truck = 2,

  Scooter = 3,

  Bus = 4,
}

declare class NMAMapModelObject extends NMAMapObject {
  static alloc(): NMAMapModelObject; // inherited from NSObject

  static new(): NMAMapModelObject; // inherited from NSObject

  readonly lights: NSArray<NMALight>;

  material: NMAMaterial;

  readonly maximumNumberOfLights: number;

  addLight(light: NMALight): boolean;

  removeAllLights(): void;

  setTexture(texture: NMAImage): void;
}

declare class NMAMapObject extends NMAUserObject {
  static alloc(): NMAMapObject; // inherited from NSObject

  static new(): NMAMapObject; // inherited from NSObject

  mapLayerType: NMAMapLayerType;

  readonly parent: NMAMapContainer;

  tag: NSObject;

  readonly type: NMAMapObjectType;

  visible: boolean;

  zIndex: number;

  isVisibleAtZoomLevel(zoomLevel: number): boolean;

  setVisibilityAtZoomLevel(visible: boolean, zoomLevel: number): void;

  setVisibilityFromZoomLevelToZoomLevel(visible: boolean, fromZoomLevel: number, toZoomLevel: number): void;

  uniqueId(): number;
}

declare var NMAMapObjectMaximumZIndex: number;

declare var NMAMapObjectMinimumZIndex: number;

declare const enum NMAMapObjectType {
  Point = 0,

  Marker = 1,

  LabeledMarker = 2,

  Polygon = 3,

  Polyline = 4,

  Route = 5,

  SafetySpot = 6,

  Container = 7,

  Circle = 8,

  Reserved = 9,

  Unknown = 10,
}

declare class NMAMapOverlay extends UIView implements NMAMapViewDelegate {
  static alloc(): NMAMapOverlay; // inherited from NSObject

  static appearance(): NMAMapOverlay; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): NMAMapOverlay; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NMAMapOverlay; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMAMapOverlay; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NMAMapOverlay; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMAMapOverlay; // inherited from UIAppearance

  static mapOverlayWithSubview(subview: UIView): NMAMapOverlay;

  static mapOverlayWithSubviewGeoCoordinates(subview: UIView, coordinates: NMAGeoCoordinates): NMAMapOverlay;

  static new(): NMAMapOverlay; // inherited from NSObject

  anchorOffset: CGPoint;

  coordinates: NMAGeoCoordinates;

  displayedAsMarker: boolean;

  zMarkerIndex: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { subview: UIView });

  constructor(o: { subview: UIView; geoCoordinates: NMAGeoCoordinates });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithSubview(subview: UIView): this;

  initWithSubviewGeoCoordinates(subview: UIView, coordinates: NMAGeoCoordinates): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  mapViewDidBeginAnimation(mapView: NMAMapView): void;

  mapViewDidBeginMovement(mapView: NMAMapView): void;

  mapViewDidDraw(mapView: NMAMapView): void;

  mapViewDidEndAnimation(mapView: NMAMapView): void;

  mapViewDidEndMovement(mapView: NMAMapView): void;

  mapViewDidRenderBitmapWithWidthHeightBytesPerPixel(mapView: NMAMapView, bitmap: interop.Pointer | interop.Reference<any>, width: number, height: number, bytesPerPixel: number): void;

  mapViewDidSelectObjects(mapView: NMAMapView, objects: NSArray<NMAViewObject> | NMAViewObject[]): void;

  mapViewDidTapOnCluster(mapView: NMAMapView, cluster: NMAClusterViewObject): void;

  mapViewDidTapOnMapMarkers(mapView: NMAMapView, mapMarkers: NSArray<NMAMapMarker> | NMAMapMarker[]): void;

  mapViewDidTapOnSafetySpot(mapView: NMAMapView, info: NMASafetySpot): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  refresh(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setAnchorOffsetUsingLayoutPosition(position: NMALayoutPosition): CGPoint;
}

declare class NMAMapPackage extends NSObject {
  static alloc(): NMAMapPackage; // inherited from NSObject

  static new(): NMAMapPackage; // inherited from NSObject

  readonly children: NSArray<NMAMapPackage>;

  readonly englishTitle: string;

  readonly installationStatus: NMAMapPackageInstallation;

  readonly packageId: number;

  readonly parent: NMAMapPackage;

  readonly sizeOnDisk: number;

  readonly title: string;
}

declare const enum NMAMapPackageInstallation {
  None = 0,

  Implicit = 1,

  Explicit = 2,

  PartiallyInstalled = 3,
}

declare const enum NMAMapPedestrianFeatureType {
  Crosswalk = 0,

  Stairs = 1,

  Escalator = 2,

  Elevator = 3,

  Tunnel = 4,

  Bridge = 5,

  All = 6,
}

declare const enum NMAMapPoiCategory {
  AirLineAccess = 0,

  AmusementPark = 1,

  CarDealer = 2,

  Casino = 3,

  Cinema = 4,

  Company = 5,

  ConcertHall = 6,

  Congress = 7,

  Courthouse = 8,

  CulturalCentre = 9,

  ExhibitionCentre = 10,

  GolfCourse = 11,

  GovernmentOffice = 12,

  HolidayPark = 13,

  Museum = 14,

  Opera = 15,

  ParkingGarage = 16,

  PetrolStation = 17,

  PlaceOfWorship = 18,

  PostOffice = 19,

  RentACarFacility = 20,

  RestArea = 21,

  Restaurant = 22,

  Shop = 23,

  ShoppingCentre = 24,

  Stadium = 25,

  Theatre = 26,

  TouristAttraction = 27,

  TouristInformationCentre = 28,

  University = 29,

  Zoo = 30,

  Library = 31,

  Camping = 32,

  BarDisco = 33,

  Embassy = 34,

  FerryTerminal = 35,

  FrontierCrossing = 36,

  Hospital = 37,

  Hotel = 38,

  ParkingArea = 39,

  Police = 40,

  RailwayStation = 41,

  MetroStation = 42,

  Airport = 43,

  MountainPass = 44,

  MountainPeak = 45,

  Carrepair = 46,

  CashDispenser = 47,

  ParkRecreation = 48,

  Pharmacy = 49,

  Beach = 50,

  BusStation = 57,

  Education = 106,

  ResidentialArea = 117,

  EVChargingStation = 196,

  NightClub = 203,

  PublicToilet = 204,

  Laundry = 207,

  TaxiStand = 216,

  RailwayAccess = 217,

  BarsCafes = 218,

  Parking = 219,

  SportOutdoor = 220,

  MetroAccess = 221,

  AutMetroAccess = 222,

  AutMetroStop = 223,

  BelMetroAccess = 224,

  BelMetroStop = 225,

  CzeMetroAccess = 226,

  CzeMetroStop = 227,

  DenMetroAccess = 228,

  DenMetroStop = 229,

  FinMetroAccess = 230,

  FinMetroStop = 231,

  FraMetroAccess = 232,

  FraMetroStop = 233,

  FraRerAccess = 234,

  FraRerStop = 235,

  DeuMetroAccess = 236,

  DeuMetroStop = 237,

  DeuSbahnAccess = 238,

  DeuSbahnStop = 239,

  ItaMetroAccess = 240,

  ItaMetroStop = 241,

  NorMetroAccess = 242,

  NorMetroStop = 243,

  PrtMetroAccess = 244,

  PrtMetroStop = 245,

  EspBarcelonaMetroAccess = 246,

  EspBarcelonaMetroStop = 247,

  EspCercaniasMetroAccess = 248,

  EspCercaniasMetroStop = 249,

  EspMadridMetroAccess = 250,

  EspMadridMetroStop = 251,

  SweMetroAccess = 252,

  SweMetroStop = 253,

  GbrGlasgowMetroAccess = 254,

  GbrGlasgowMetroStop = 255,

  GbrLondonMetroAccess = 256,

  GbrLondonMetroStop = 257,

  All = 258,
}

declare class NMAMapPolygon extends NMAMapObject {
  static alloc(): NMAMapPolygon; // inherited from NSObject

  static mapPolygonWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): NMAMapPolygon;

  static new(): NMAMapPolygon; // inherited from NSObject

  customPattern: NMAImage;

  dashPrimaryLength: number;

  dashSecondaryLength: number;

  dashed: boolean;

  depthTestEnabled: boolean;

  fillColor: UIColor;

  readonly geoPolygon: NMAGeoPolygon;

  lineColor: UIColor;

  lineWidth: number;

  patternStyle: NMAPatternStyle;

  readonly vertices: NSArray<NMAGeoCoordinates>;

  constructor(o: { polygon: NMAGeoPolygon });

  constructor(o: { vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[] });

  addVertexAtIndex(vertex: NMAGeoCoordinates, index: number): void;

  appendVertex(vertex: NMAGeoCoordinates): void;

  clearVertices(): void;

  containsGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;

  initWithPolygon(geoPolygon: NMAGeoPolygon): this;

  initWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

  isValid(): boolean;

  removeLastVertex(): void;

  removeVertexAtIndex(index: number): void;
}

declare class NMAMapPolyline extends NMAMapObject {
  static alloc(): NMAMapPolyline; // inherited from NSObject

  static mapPolylineWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): NMAMapPolyline;

  static new(): NMAMapPolyline; // inherited from NSObject

  customPattern: NMAImage;

  dashPrimaryLength: number;

  dashSecondaryLength: number;

  dashed: boolean;

  depthTestEnabled: boolean;

  readonly geoPolyline: NMAGeoPolyline;

  lineColor: UIColor;

  lineWidth: number;

  outlineColor: UIColor;

  outlineWidth: number;

  patternStyle: NMAPatternStyle;

  perspective: boolean;

  shadowColor: UIColor;

  shadowEnabled: boolean;

  shadowOffsetX: number;

  shadowOffsetY: number;

  shadowShearFactor: number;

  shadowSizeIncrement: number;

  shadowWidth: number;

  readonly vertices: NSArray<NMAGeoCoordinates>;

  constructor(o: { polyline: NMAGeoPolyline });

  constructor(o: { vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[] });

  addVertexAtIndex(vertex: NMAGeoCoordinates, index: number): void;

  appendVertex(vertex: NMAGeoCoordinates): void;

  clearVertices(): void;

  enableShadowShearFactor(width: number, shearFactor: number): void;

  indexOfNearestVertexToGeoCoordinates(coordinates: NMAGeoCoordinates): number;

  initWithPolyline(geoPolyline: NMAGeoPolyline): this;

  initWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

  nearestVertexToGeoCoordinates(coordinates: NMAGeoCoordinates): NMAGeoCoordinates;

  removeLastVertex(): void;

  removeVertexAtIndex(index: number): void;
}

declare class NMAMapRoute extends NMAMapObject {
  static alloc(): NMAMapRoute; // inherited from NSObject

  static mapRouteWithRoute(route: NMARoute): NMAMapRoute;

  static new(): NMAMapRoute; // inherited from NSObject

  color: UIColor;

  maneuverNumberColor: UIColor;

  maneuverNumberDisplayed: boolean;

  outlineColor: UIColor;

  renderType: NMAMapRouteRenderType;

  route: NMARoute;

  textColor: UIColor;

  textOutlineColor: UIColor;

  trafficEnabled: boolean;

  traveledColor: UIColor;

  upcomingColor: UIColor;

  constructor(o: { route: NMARoute });

  initWithRoute(route: NMARoute): this;
}

declare const enum NMAMapRouteRenderType {
  Primary = 1,

  Secondary = 2,

  UserDefined = 3,
}

declare var NMAMapSchemeCarNavigationDay: string;

declare var NMAMapSchemeCarNavigationDayGrey: string;

declare var NMAMapSchemeCarNavigationDayWithTraffic: string;

declare var NMAMapSchemeCarNavigationNight: string;

declare var NMAMapSchemeCarNavigationNightGrey: string;

declare var NMAMapSchemeCarNavigationNightWithTraffic: string;

declare var NMAMapSchemeHybridCarNavigationDay: string;

declare var NMAMapSchemeHybridCarNavigationDayWithTraffic: string;

declare var NMAMapSchemeHybridCarNavigationNight: string;

declare var NMAMapSchemeHybridCarNavigationNightWithTraffic: string;

declare var NMAMapSchemeHybridDay: string;

declare var NMAMapSchemeHybridDayTransit: string;

declare var NMAMapSchemeHybridDayWithTraffic: string;

declare var NMAMapSchemeHybridGreyDay: string;

declare var NMAMapSchemeHybridGreyNight: string;

declare var NMAMapSchemeHybridNight: string;

declare var NMAMapSchemeHybridNightTransit: string;

declare var NMAMapSchemeHybridNightWithTraffic: string;

declare var NMAMapSchemeHybridPedestrianDay: string;

declare var NMAMapSchemeHybridPedestrianNight: string;

declare var NMAMapSchemeHybridReducedDay: string;

declare var NMAMapSchemeHybridReducedNight: string;

declare var NMAMapSchemeHybridTruckDay: string;

declare var NMAMapSchemeHybridTruckNavigationDay: string;

declare var NMAMapSchemeHybridTruckNavigationNight: string;

declare var NMAMapSchemeHybridTruckNight: string;

declare var NMAMapSchemeManeuverDay: string;

declare var NMAMapSchemeNormalDay: string;

declare var NMAMapSchemeNormalDayTransit: string;

declare var NMAMapSchemeNormalDayWithTraffic: string;

declare var NMAMapSchemeNormalNight: string;

declare var NMAMapSchemeNormalNightTransit: string;

declare var NMAMapSchemeNormalNightWithTraffic: string;

declare var NMAMapSchemePedestrianDay: string;

declare var NMAMapSchemePedestrianNight: string;

declare var NMAMapSchemeReducedDay: string;

declare var NMAMapSchemeReducedNight: string;

declare var NMAMapSchemeSatelliteDay: string;

declare var NMAMapSchemeSatelliteNight: string;

declare var NMAMapSchemeTerrainDay: string;

declare var NMAMapSchemeTruckDay: string;

declare var NMAMapSchemeTruckNavigationDay: string;

declare var NMAMapSchemeTruckNavigationNight: string;

declare var NMAMapSchemeTruckNight: string;

declare const enum NMAMapStyleConfigurationError {
  None = 0,

  HERESDKAlreadyInitialized = 1,

  ConfigurationFile = 2,

  ResourceFile = 3,

  TrafficConfigurationFile = 4,

  CustomPreferenceConfigurationFile = 5,

  ConfigurationResourceFiles = 6,

  KeyIsNotSupported = 7,
}

declare class NMAMapTileLayer extends NSObject {
  static alloc(): NMAMapTileLayer; // inherited from NSObject

  static new(): NMAMapTileLayer; // inherited from NSObject

  boundingBox: NMAGeoBoundingBox;

  readonly cacheEnabled: boolean;

  readonly cacheIdentifier: string;

  cacheSizeLimit: number;

  cacheTimeToLive: number;

  dataSource: NMAMapTileLayerDataSource;

  fadingEnabled: boolean;

  fallbackEnabled: boolean;

  readonly locked: boolean;

  mapLayerType: NMAMapLayerType;

  pixelFormat: NMAPixelFormat;

  tileSize: number;

  transparent: boolean;

  zIndex: number;

  clearCache(): void;

  hideAtZoomLevel(zoomLevel: number): void;

  hideFromZoomLevelToZoomLevel(fromLevel: number, toLevel: number): void;

  isShownAtZoomLevel(zoomLevel: number): boolean;

  setCacheEnabledWithIdentifier(cacheEnabled: boolean, cacheIdentifier: string): void;

  showAtZoomLevel(zoomLevel: number): void;

  showFromZoomLevelToZoomLevel(fromLevel: number, toLevel: number): void;
}

interface NMAMapTileLayerDataSource extends NSObjectProtocol {
  mapTileLayerHasTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): boolean;

  mapTileLayerRequestDataForTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): NSData;

  mapTileLayerRequestDataForTileAtXYZoomLevelTileRequest?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number, tileRequest: NMAMapTileRequest): void;

  mapTileLayerUrlForTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): string;
}
declare var NMAMapTileLayerDataSource: {
  prototype: NMAMapTileLayerDataSource;
};

declare class NMAMapTileRequest extends NSObject {
  static alloc(): NMAMapTileRequest; // inherited from NSObject

  static new(): NMAMapTileRequest; // inherited from NSObject

  readonly bytesLength: number;

  readonly bytesPtr: interop.Pointer | interop.Reference<any>;

  status: NMAMapTileRequestStatus;

  getBytesFromData(tileData: NSData): boolean;
}

declare const enum NMAMapTileRequestStatus {
  Unitialized = 0,

  Pending = 1,

  Failed = 2,

  Complete = 3,
}

declare const enum NMAMapTrackingOrientation {
  Dynamic = 0,

  NorthUp = 1,
}

declare const enum NMAMapTrackingTilt {
  Tilt2D = 0,

  Tilt3D = 1,

  TiltCustom = 2,
}

declare const enum NMAMapTransitDisplayMode {
  Nothing = 0,

  StopAndAccess = 1,

  Everything = 2,
}

declare class NMAMapTransitLayer extends NSObject {
  static alloc(): NMAMapTransitLayer; // inherited from NSObject

  static new(): NMAMapTransitLayer; // inherited from NSObject

  clearTransitHighlights(): void;

  highlightTransitAccessesFromUniqueIds(uniqueIds: NSArray<string> | string[]): void;

  highlightTransitLineSegmentsFromUniqueIds(uniqueIds: NSArray<string> | string[]): void;

  highlightTransitLinesFromUniqueIds(uniqueIds: NSArray<string> | string[]): void;

  highlightTransitStopsFromUniqueIds(uniqueIds: NSArray<string> | string[]): void;
}

declare const enum NMAMapVariant {
  Global = 0,

  Korea = 1,
}

declare class NMAMapView extends UIView {
  static alloc(): NMAMapView; // inherited from NSObject

  static appearance(): NMAMapView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): NMAMapView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NMAMapView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMAMapView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NMAMapView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NMAMapView; // inherited from UIAppearance

  static new(): NMAMapView; // inherited from NSObject

  static shouldBeginRenderingAutomatically(enabled: boolean): void;

  static snapshotWithGeoCoordinatesZoomLevelOrientationSizeBlock(coordinates: NMAGeoCoordinates, zoom: number, orientation: number, size: CGSize, resultBlock: (p1: UIImage) => void): void;

  readonly availableMapSchemes: NSArray<string>;

  readonly boundingBox: NMAGeoBoundingBox;

  clipRect: CGRect;

  readonly clippedTilt: number;

  readonly copyright: string;

  copyrightLogoHorizontalMargin: number;

  copyrightLogoPosition: NMALayoutPosition;

  copyrightLogoVerticalMargin: number;

  readonly defaultGestureHandler: NMAMapGestureDelegate;

  delegate: NMAMapViewDelegate;

  readonly displayLanguage: string;

  extendedZoomLevelsEnabled: boolean;

  extrudedBuildingsVisible: boolean;

  geoCenter: NMAGeoCoordinates;

  gestureDelegate: NMAMapGestureDelegate;

  landmarksVisible: boolean;

  longPressDuration: number;

  mapCenterFixedOnRotateZoom: boolean;

  mapInteractionEnabled: boolean;

  mapScheme: string;

  readonly mapTransitLayer: NMAMapTransitLayer;

  maximumRefreshRate: number;

  maximumRefreshRateLimitEnabled: boolean;

  maximumTiltProfile: (p1: number) => number;

  readonly maximumZoomLevel: number;

  readonly minimumZoomLevel: number;

  orientation: number;

  padding: UIEdgeInsets;

  pauseOnWillResignActive: boolean;

  readonly positionIndicator: NMAPositionIndicator;

  projectionType: NMAProjectionType;

  renderAllowed: boolean;

  safetySpotsVisible: boolean;

  readonly secondaryDisplayLanguage: string;

  softwareRenderToBitmap: boolean;

  tilt: number;

  trafficDisplayFilter: NMATrafficSeverity;

  trafficVisible: boolean;

  transformCenter: CGPoint;

  transitDisplayMode: NMAMapTransitDisplayMode;

  twoFingerPanTiltingEnabled: boolean;

  upwardPanIncreasesTilt: boolean;

  readonly venue3dMapLayer: NMAVenue3dMapLayer;

  zoomLevel: number;

  addClusterLayer(clusterLayer: NMAClusterLayer): boolean;

  addMapObject(object: NMAMapObject): boolean;

  addMapObjectToLayer(object: NMAMapObject, layer: NMAMapLayerType): boolean;

  addMapObjects(objects: NSArray<NMAMapObject> | NMAMapObject[]): boolean;

  addMapObjectsToLayer(objects: NSArray<NMAMapObject> | NMAMapObject[], layer: NMAMapLayerType): boolean;

  addMapOverlay(overlay: NMAMapOverlay): boolean;

  addMapTileLayer(tileLayer: NMAMapTileLayer): void;

  allMapObjects(): NSArray<NMAMapObject>;

  applyTruckRestrictionIconsVisibilityWithFilter(filter: NMARoutingMode): void;

  createCustomizableSchemeWithNameBasedOnScheme(schemeName: string, baseSchemeName: string): NMACustomizableScheme;

  disableKineticForGestures(gestures: NMAMapGestureType): void;

  disableMapGestures(gestures: NMAMapGestureType): void;

  enableKineticForGestures(gestures: NMAMapGestureType): void;

  enableMapGestures(gestures: NMAMapGestureType): void;

  geoCoordinatesFromPoint(point: CGPoint): NMAGeoCoordinates;

  geoCoordinatesFromPointWithAltitude(point: CGPoint, altitude: number): NMAGeoCoordinates;

  getCustomizableSchemeWithName(schemeName: string): NMACustomizableScheme;

  hideFleetFeature(fleetFeature: NMAMapFleetFeatureType): void;

  hidePedestrianFeature(pedestrianFeature: NMAMapPedestrianFeatureType): void;

  hideTrafficLayers(layers: NMATrafficLayer): void;

  isFleetFeatureShown(fleetFeature: NMAMapFleetFeatureType): boolean;

  isKineticForGestureEnabled(gesture: NMAMapGestureType): boolean;

  isMapGestureEnabled(gesture: NMAMapGestureType): boolean;

  isMapLayerCategoryVisible(layerCategory: NMAMapLayerCategory): boolean;

  isPedestrianFeatureShown(pedestrianFeature: NMAMapPedestrianFeatureType): boolean;

  isPoiCategoryVisible(poiCategory: NMAMapPoiCategory): boolean;

  isTrafficLayerVisible(layer: NMATrafficLayer): boolean;

  mapTileLayers(): NSArray<NMAMapTileLayer>;

  maximumTiltAtZoomLevel(zoomLevel: number): number;

  metersPerPointAtZoomLevel(zoomLevel: number): number;

  minimumTiltAtZoomLevel(zoomLevel: number): number;

  objectsAtPoint(point: CGPoint): NSArray<NMAViewObject>;

  poiCategories(): NSArray<string>;

  pointDistanceFromGeoCoordinatesToGeoCoordinates(startCoordinates: NMAGeoCoordinates, endCoordinates: NMAGeoCoordinates): number;

  pointFromGeoCoordinates(coordinates: NMAGeoCoordinates): CGPoint;

  removeAllMapObjects(): boolean;

  removeClusterLayer(clusterLayer: NMAClusterLayer): boolean;

  removeCustomizableSchemeWithName(schemeName: string): boolean;

  removeEventBlockWithIdentifier(identifier: number): boolean;

  removeMapObject(object: NMAMapObject): boolean;

  removeMapObjects(objects: NSArray<NMAMapObject> | NMAMapObject[]): boolean;

  removeMapOverlay(overlay: NMAMapOverlay): boolean;

  removeMapTileLayer(tileLayer: NMAMapTileLayer): void;

  respondToEventsWithBlock(events: NMAMapEvent, block: (p1: NMAMapEvent, p2: NMAMapView, p3: any) => boolean): number;

  roadElementAtCoordinates(coordinates: NMAGeoCoordinates): NMARoadElement;

  roadElementAtCoordinatesLang(coordinates: NMAGeoCoordinates, marcLangCode: string): NMARoadElement;

  roadElementsInArea(geoArea: NMAGeoBoundingBox): NSArray<NMARoadElement>;

  roadElementsInAreaLang(geoArea: NMAGeoBoundingBox, marcLangCode: string): NSArray<NMARoadElement>;

  setBoundingBoxInsideRectWithAnimation(boundingBox: NMAGeoBoundingBox, screenRect: CGRect, animationType: NMAMapAnimation): void;

  setBoundingBoxWithAnimation(boundingBox: NMAGeoBoundingBox, animationType: NMAMapAnimation): void;

  setGeoCenterWithAnimation(geoCenter: NMAGeoCoordinates, animationType: NMAMapAnimation): void;

  setGeoCenterZoomLevelOrientationTiltWithAnimation(geoCenter: NMAGeoCoordinates, zoomLevel: number, orientation: number, tilt: number, animationType: NMAMapAnimation): void;

  setGeoCenterZoomLevelWithAnimation(geoCenter: NMAGeoCoordinates, zoomLevel: number, animationType: NMAMapAnimation): void;

  setGeoCoordinatesToPointWithAnimation(coordinates: NMAGeoCoordinates, point: CGPoint, animation: NMAMapAnimation): void;

  setGeoCoordinatesToPointWithAnimationZoomLevelOrientationTilt(coordinates: NMAGeoCoordinates, point: CGPoint, animation: NMAMapAnimation, zoomLevel: number, orientation: number, tilt: number): void;

  setOrientationWithAnimation(orientation: number, animationType: NMAMapAnimation): void;

  setTiltWithAnimation(tilt: number, animationType: NMAMapAnimation): void;

  setVisibilityForMapLayerCategories(visible: boolean, layerCategories: NSArray<number> | number[]): void;

  setVisibilityForPoiCategory(visible: boolean, poiCategory: NMAMapPoiCategory): boolean;

  setZoomLevelWithAnimation(zoomLevel: number, animationType: NMAMapAnimation): void;

  showFleetFeature(fleetFeature: NMAMapFleetFeatureType): void;

  showPedestrianFeature(pedestrianFeature: NMAMapPedestrianFeatureType): void;

  showTrafficLayers(layers: NMATrafficLayer): void;

  snapshotWithBlock(resultBlock: (p1: UIImage) => void): void;

  supportedDisplayLanguages(): NSArray<string>;

  useDefaultDisplayLanguage(): boolean;

  useDisplayLanguageFromLocale(locale: NSLocale): boolean;

  useSecondaryDisplayLanguageFromLocale(locale: NSLocale): boolean;

  visibleMapLayerCategories(): NSArray<number>;

  visibleObjectsAtPoint(point: CGPoint): NSArray<NMAViewObject>;
}

declare var NMAMapViewConfigurationFileKey: string;

declare var NMAMapViewCustomPreferenceConfigurationFileKey: string;

interface NMAMapViewDelegate extends NSObjectProtocol {
  mapViewDidBeginAnimation?(mapView: NMAMapView): void;

  mapViewDidBeginMovement?(mapView: NMAMapView): void;

  mapViewDidDraw?(mapView: NMAMapView): void;

  mapViewDidEndAnimation?(mapView: NMAMapView): void;

  mapViewDidEndMovement?(mapView: NMAMapView): void;

  mapViewDidRenderBitmapWithWidthHeightBytesPerPixel?(mapView: NMAMapView, bitmap: interop.Pointer | interop.Reference<any>, width: number, height: number, bytesPerPixel: number): void;

  mapViewDidSelectObjects?(mapView: NMAMapView, objects: NSArray<NMAViewObject> | NMAViewObject[]): void;

  mapViewDidTapOnCluster?(mapView: NMAMapView, cluster: NMAClusterViewObject): void;

  mapViewDidTapOnMapMarkers?(mapView: NMAMapView, mapMarkers: NSArray<NMAMapMarker> | NMAMapMarker[]): void;

  mapViewDidTapOnSafetySpot?(mapView: NMAMapView, info: NMASafetySpot): void;
}
declare var NMAMapViewDelegate: {
  prototype: NMAMapViewDelegate;
};

declare var NMAMapViewMaximumTilt: number;

declare var NMAMapViewMaximumZoomLevel: number;

declare var NMAMapViewMinimumZoomLevel: number;

declare var NMAMapViewPreserveValue: number;

declare var NMAMapViewResourceFileKey: string;

declare var NMAMapViewTrafficConfigurationFileKey: string;

declare class NMAMaterial extends NSObject {
  static alloc(): NMAMaterial; // inherited from NSObject

  static new(): NMAMaterial; // inherited from NSObject
}

declare const enum NMAMeasurementSystem {
  Metric = 0,

  Imperial = 1,

  ImperialUS = 2,
}

declare class NMAMedia extends NSObject {
  static alloc(): NMAMedia; // inherited from NSObject

  static new(): NMAMedia; // inherited from NSObject

  readonly attributionText: string;

  readonly supplierLink: NMALink;

  readonly type: NMAMediaType;

  readonly viaLink: NMALink;
}

declare class NMAMediaCollectionPage extends NSObject {
  static alloc(): NMAMediaCollectionPage; // inherited from NSObject

  static new(): NMAMediaCollectionPage; // inherited from NSObject

  readonly available: number;

  readonly mediaContents: NSArray<NMAMedia>;

  readonly nextPageRequest: NMAMediaCollectionPageRequest;

  readonly offsetCount: number;

  readonly type: NMAMediaType;
}

declare class NMAMediaCollectionPageRequest extends NMARequest {
  static alloc(): NMAMediaCollectionPageRequest; // inherited from NSObject

  static new(): NMAMediaCollectionPageRequest; // inherited from NSObject
}

declare class NMAMediaEditorial extends NMAMedia {
  static alloc(): NMAMediaEditorial; // inherited from NSObject

  static new(): NMAMediaEditorial; // inherited from NSObject

  readonly languageCode: string;
}

declare class NMAMediaImage extends NMAMedia {
  static alloc(): NMAMediaImage; // inherited from NSObject

  static new(): NMAMediaImage; // inherited from NSObject

  readonly imageSource: string;

  readonly uniqueId: string;

  readonly user: NMALink;

  URLForImageWithWidthHeight(width: number, height: number): string;
}

declare class NMAMediaRating extends NMAMedia {
  static alloc(): NMAMediaRating; // inherited from NSObject

  static new(): NMAMediaRating; // inherited from NSObject

  readonly average: number;

  readonly count: number;
}

declare class NMAMediaReview extends NMAMedia {
  static alloc(): NMAMediaReview; // inherited from NSObject

  static new(): NMAMediaReview; // inherited from NSObject

  readonly contributionDate: Date;

  readonly contributor: NMALink;

  readonly languageCode: string;

  readonly rating: number;

  readonly title: string;
}

declare const enum NMAMediaType {
  Unknown = 0,

  Editorial = 1,

  Image = 2,

  Review = 3,

  Rating = 4,
}

declare const enum NMANaturalGuidanceOption {
  None = 0,

  TrafficLight = 1,

  Landmark = 4,
}

declare const enum NMANavigationAudioEvent {
  SafetySpot = 32,
}

declare const enum NMANavigationError {
  None = 0,

  GuidanceNotReady = 1,

  NotReady = 2,

  PositioningFailed = 3,

  OutOfMemory = 4,

  InvalidParameters = 5,

  InvalidOperation = 6,

  NotFound = 7,

  Aborted = 8,

  OperationNotAllowed = 9,

  InvalidCredentials = 10,

  PedestrianNavigationNotAvailable = 11,

  Unknown = 12,
}

declare class NMANavigationManager extends NSObject {
  static alloc(): NMANavigationManager; // inherited from NSObject

  static new(): NMANavigationManager; // inherited from NSObject

  static sharedNavigationManager(): NMANavigationManager;

  readonly averageSpeed: number;

  backgroundMapTrackingMaximumRefreshRate: number;

  backgroundNavigationEnabled: boolean;

  backgroundNavigationStartEnabled: boolean;

  beepsEnabled: boolean;

  readonly countryCode: string;

  readonly currentManeuver: NMAManeuver;

  readonly currentRouteLeg: number;

  delegate: NMANavigationManagerDelegate;

  readonly distanceFromStart: number;

  readonly distanceToCurrentManeuver: number;

  readonly distanceToDestination: number;

  readonly distanceToNextManeuver: number;

  enabledAudioEvents: NMANavigationAudioEvent;

  readonly highSpeedOffset: number;

  laneAssistanceMode: NMALaneAssistanceMode;

  readonly lowSpeedOffset: number;

  map: NMAMapView;

  mapTrackingAutoZoomEnabled: boolean;

  mapTrackingEnabled: boolean;

  mapTrackingOrientation: NMAMapTrackingOrientation;

  mapTrackingTilt: NMAMapTrackingTilt;

  readonly naturalGuidanceMode: NMANaturalGuidanceOption;

  readonly navigationMode: NMANavigationMode;

  readonly navigationState: NMANavigationState;

  readonly nextManeuver: NMAManeuver;

  paused: boolean;

  realisticViewAspectRatios: NMARealisticViewAspectRatio;

  realisticViewMode: NMARealisticViewMode;

  readonly routeRequestInterval: number;

  readonly routingZoneWarner: NMARoutingZoneWarner;

  readonly safetySpotWarner: NMASafetySpotWarner;

  readonly schoolZoneWarner: NMASchoolZoneWarner;

  readonly speedBoundary: number;

  speedWarningAudioFeedbackEnabled: boolean;

  speedWarningEnabled: boolean;

  readonly timeToArrival: number;

  readonly trafficAvoidanceMode: NMATrafficAvoidanceMode;

  readonly trafficWarner: NMATrafficWarner;

  readonly truckRestrictionWarner: NMATruckRestrictionWarner;

  ttsOutputFormat: NMATTSOutputFormat;

  vibrationEnabled: boolean;

  voiceEnabled: boolean;

  voicePackage: NMAVoicePackage;

  voicePackageMeasurementSystem: NMAMeasurementSystem;

  cancelVoiceFeedback(): void;

  isVoiceEnabledForManeuverAction(action: NMAManeuverAction): boolean;

  maximumDistanceFromPreviousManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  maximumDistanceToUpcomingManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  maximumTimeFromPreviousManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  maximumTimeToUpcomingManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  minimumDistanceFromPreviousManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  minimumDistanceToUpcomingManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  minimumTimeFromPreviousManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  minimumTimeToUpcomingManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  playVoiceCommand(): void;

  remainingDistanceToRouteElementPositionOnElement(routeElementIndex: number, positionOnElement: NMAGeoCoordinates): number;

  remainingDistanceToSubleg(subleg: number): number;

  resetAnnouncementRules(): void;

  setAlternativeRoutesNumberUpdateTime(routesNumber: number, updateTime: number): boolean;

  setDistanceAndStopTimeToTriggerStopoverReachedStopTime(distance: number, time: number): NMANavigationError;

  setDistanceToTriggerStopoverReached(distance: number): NMANavigationError;

  setDistanceWithUTurnToTriggerStopoverReached(distance: number): NMANavigationError;

  setLowSpeedOffsetHighSpeedOffsetSpeedBoundary(lowSpeedOffset: number, highSpeedOffset: number, speedBoundary: number): NSError;

  setMaximumDistanceFromPreviousManeuverForVoicePromptTypeRoadType(maximumDistance: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMaximumDistanceToUpcomingManeuverForVoicePromptTypeRoadType(maximumDistance: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMaximumTimeIntervalFromPreviousManeuverForVoicePromptTypeRoadType(maximumTime: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMaximumTimeIntervalToUpcomingManeuverForVoicePromptTypeRoadType(maximumTime: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMinimumDistanceFromPreviousManeuverForVoicePromptTypeRoadType(minimumDistance: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMinimumDistanceToUpcomingManeuverForVoicePromptTypeRoadType(minimumDistance: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMinimumTimeIntervalFromPreviousManeuverForVoicePromptTypeRoadType(minimumTime: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setMinimumTimeIntervalToUpcomingManeuverForVoicePromptTypeRoadType(minimumTime: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setNaturalGuidanceMode(mode: NMANaturalGuidanceOption): NMANavigationError;

  setRoute(route: NMARoute): NMANavigationError;

  setRouteRequestInterval(interval: number): NMANavigationError;

  setTimeBasedDistanceToUpcomingManeuverForVoicePromptTypeRoadType(distance: number, voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): void;

  setTrafficAvoidanceMode(mode: NMATrafficAvoidanceMode): NMANavigationError;

  setVoiceEnabledForAllManeuverActions(enabled: boolean): boolean;

  setVoiceEnabledForManeuverAction(enabled: boolean, action: NMAManeuverAction): boolean;

  startTrackingWithTransportMode(transportMode: NMATransportMode): NSError;

  startTurnByTurnNavigationWithRoute(route: NMARoute): NSError;

  stop(): void;

  timeBasedDistanceToUpcomingManeuverForVoicePromptTypeRoadType(voicePromptType: NMANavigationVoicePromptType, roadType: NMANavigationRoadType): number;

  timeToArrivalForSublegMode(subleg: number, mode: NMATrafficPenaltyMode): number;

  timeToArrivalWithTrafficWholeRoute(mode: NMATrafficPenaltyMode, wholeRoute: boolean): number;
}

interface NMANavigationManagerDelegate extends NSObjectProtocol {
  navigationManagerDidChangeRoutingState?(navigationManager: NMANavigationManager, state: NMATrafficEnabledRoutingState): void;

  navigationManagerDidFindAlternateRouteWithResult?(navigationManager: NMANavigationManager, routeResult: NMARouteResult): void;

  navigationManagerDidFindAlternateRoutes?(navigationManager: NMANavigationManager, routeResult: NMARouteResult): void;

  navigationManagerDidFindPosition?(navigationManager: NMANavigationManager): void;

  navigationManagerDidInvalidateRealisticViews?(navigationManager: NMANavigationManager): void;

  navigationManagerDidLosePosition?(navigationManager: NMANavigationManager): void;

  navigationManagerDidPlayVoiceFeedbackWithText?(navigationManager: NMANavigationManager, text: string): void;

  navigationManagerDidReachDestination?(navigationManager: NMANavigationManager): void;

  navigationManagerDidReachStopover?(navigationManager: NMANavigationManager, stopover: NMAWaypoint): void;

  navigationManagerDidRerouteWithError?(navigationManager: NMANavigationManager, error: NMARoutingError): void;

  navigationManagerDidResumeDueToMapDataAvailability?(navigationManager: NMANavigationManager): void;

  navigationManagerDidSuspendDueToInsufficientMapData?(navigationManager: NMANavigationManager): void;

  navigationManagerDidUpdateCountryNextCountry?(navigationManager: NMANavigationManager, previousCountry: string, nextCountry: string): void;

  navigationManagerDidUpdateLaneInformationRoadElement?(navigationManager: NMANavigationManager, laneInformations: NSArray<NMALaneInformation> | NMALaneInformation[], roadElement: NMARoadElement): void;

  navigationManagerDidUpdateRealisticViewsForCurrentManeuver?(navigationManager: NMANavigationManager, realisticViews: NSDictionary<number, NSDictionary<string, NMAImage>>): void;

  navigationManagerDidUpdateRealisticViewsForNextManeuver?(navigationManager: NMANavigationManager, realisticViews: NSDictionary<number, NSDictionary<string, NMAImage>>): void;

  navigationManagerDidUpdateRouteWithResult?(navigationManager: NMANavigationManager, routeResult: NMARouteResult): void;

  navigationManagerDidUpdateSpeedingStatusForCurrentSpeedSpeedLimit?(navigationManager: NMANavigationManager, isSpeeding: boolean, speed: number, speedLimit: number): void;

  navigationManagerHasCurrentManeuverNextManeuver?(navigationManager: NMANavigationManager, currentManeuver: NMAManeuver, nextManeuver: NMAManeuver): void;

  navigationManagerShouldPlayVoiceFeedbackWithText?(navigationManager: NMANavigationManager, text: string): boolean;

  navigationManagerWillPlayVoiceFeedbackWithText?(navigationManager: NMANavigationManager, text: string): void;

  navigationManagerWillReroute?(navigationManager: NMANavigationManager): void;
}
declare var NMANavigationManagerDelegate: {
  prototype: NMANavigationManagerDelegate;
};

declare var NMANavigationManagerErrorDomain: string;

declare var NMANavigationManagerInvalidValue: number;

declare var NMANavigationManagerJunctionViewKey: string;

declare var NMANavigationManagerSignpostKey: string;

declare var NMANavigationManagerStateChangedNotification: string;

declare const enum NMANavigationMode {
  None = 0,

  TurnByTurn = 1,

  Tracking = 2,
}

declare class NMANavigationPosition extends NSObject {
  static alloc(): NMANavigationPosition; // inherited from NSObject

  static new(): NMANavigationPosition; // inherited from NSObject

  readonly accessType: string;

  readonly position: NMAGeoCoordinates;
}

declare const enum NMANavigationRoadType {
  NonHighway = 0,

  Highway = 1,
}

declare const enum NMANavigationState {
  Idle = 0,

  Running = 1,

  Paused = 2,
}

declare const enum NMANavigationVoicePromptType {
  Announcement = 0,

  Reminder1 = 1,

  Reminder2 = 2,

  Command = 3,
}

declare const enum NMAPatternStyle {
  None = 0,

  Dash = 1,

  CustomBlend = 2,

  CustomFill = 3,
}

declare class NMAPhongMaterial extends NMAMaterial {
  static alloc(): NMAPhongMaterial; // inherited from NSObject

  static materialWithDiffuseColorAmbientColor(diffuseColor: UIColor, ambientColor: UIColor): NMAPhongMaterial;

  static new(): NMAPhongMaterial; // inherited from NSObject

  ambientColor: UIColor;

  diffuseColor: UIColor;

  constructor(o: { diffuseColor: UIColor; ambientColor: UIColor });

  initWithDiffuseColorAmbientColor(diffuseColor: UIColor, ambientColor: UIColor): this;
}

declare const enum NMAPixelFormat {
  Unknown = 0,

  RGBA = 1,

  BGRA = 2,

  RGB = 3,

  R5G6B5 = 4,
}

declare class NMAPlace extends NSObject {
  static alloc(): NMAPlace; // inherited from NSObject

  static new(): NMAPlace; // inherited from NSObject

  readonly alternativeNames: NSDictionary<string, string>;

  readonly attributionText: string;

  readonly categories: NSArray<NMACategory>;

  readonly contacts: NSArray<NMAContactDetail>;

  readonly editorials: NMAMediaCollectionPage;

  readonly extendedAttributes: NSArray<NMAExtendedAttribute>;

  readonly iconUrl: string;

  readonly images: NMAMediaCollectionPage;

  readonly location: NMAPlaceLocation;

  readonly name: string;

  readonly ratings: NMAMediaCollectionPage;

  readonly related: NSDictionary<string, NMALink>;

  readonly reportingLink: NMALink;

  readonly reviews: NMAMediaCollectionPage;

  readonly supplier: NMALink;

  readonly uniqueId: string;

  readonly userRatings: NMARatings;

  readonly viewUrl: string;

  referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceLink extends NMALink {
  static alloc(): NMAPlaceLink; // inherited from NSObject

  static new(): NMAPlaceLink; // inherited from NSObject

  readonly averageRating: number;

  readonly boundingBox: NMAGeoBoundingBox;

  readonly category: NMACategory;

  readonly distance: number;

  readonly isSponsored: boolean;

  readonly position: NMAGeoCoordinates;

  readonly vicinityDescription: string;

  detailsRequest(): NMAPlaceRequest;

  referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceLocation extends NSObject {
  static alloc(): NMAPlaceLocation; // inherited from NSObject

  static new(): NMAPlaceLocation; // inherited from NSObject

  readonly accessPoints: NSArray<NMANavigationPosition>;

  address: NMAAddress;

  boundingBox: NMAGeoBoundingBox;

  label: string;

  position: NMAGeoCoordinates;

  readonly timeZone: NSTimeZone;

  referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceRequest extends NMARequest {
  static alloc(): NMAPlaceRequest; // inherited from NSObject

  static new(): NMAPlaceRequest; // inherited from NSObject

  textFormat: NMATextFormat;

  addContent(content: string): void;

  addImageSizeWithWidthHeight(width: number, height: number): void;
}

declare class NMAPlaceTransitDeparture extends NSObject {
  static alloc(): NMAPlaceTransitDeparture; // inherited from NSObject

  static new(): NMAPlaceTransitDeparture; // inherited from NSObject

  readonly direction: string;

  readonly exception: string;

  readonly extendedAttributes: NSArray<NMAExtendedAttribute>;

  readonly line: string;

  readonly realTimeInfo: NSDictionary<string, string>;

  readonly scheduledTimeInfo: NSDictionary<string, string>;

  readonly transitOperator: string;
}

declare class NMAPlaceTransitDeparturesAttribute extends NMAExtendedAttribute {
  static alloc(): NMAPlaceTransitDeparturesAttribute; // inherited from NSObject

  static new(): NMAPlaceTransitDeparturesAttribute; // inherited from NSObject

  readonly schedule: NMAPlaceTransitSchedulePage;
}

declare class NMAPlaceTransitDestination extends NSObject {
  static alloc(): NMAPlaceTransitDestination; // inherited from NSObject

  static new(): NMAPlaceTransitDestination; // inherited from NSObject

  readonly destination: string;

  readonly line: string;
}

declare class NMAPlaceTransitLine extends NSObject {
  static alloc(): NMAPlaceTransitLine; // inherited from NSObject

  static new(): NMAPlaceTransitLine; // inherited from NSObject

  readonly category: NMAPlaceTransitLineCategory;

  readonly name: string;

  readonly operatorName: string;

  readonly style: NMAPlaceTransitLineStyle;
}

declare class NMAPlaceTransitLineCategory extends NSObject {
  static alloc(): NMAPlaceTransitLineCategory; // inherited from NSObject

  static new(): NMAPlaceTransitLineCategory; // inherited from NSObject

  readonly iconUrl: string;

  readonly localName: string;

  readonly title: string;

  readonly uniqueId: string;
}

declare class NMAPlaceTransitLineStyle extends NSObject {
  static alloc(): NMAPlaceTransitLineStyle; // inherited from NSObject

  static new(): NMAPlaceTransitLineStyle; // inherited from NSObject

  readonly color: string;

  readonly iconShape: string;

  readonly outlineColor: string;

  readonly textColor: string;
}

declare class NMAPlaceTransitLinesAttribute extends NMAExtendedAttribute {
  static alloc(): NMAPlaceTransitLinesAttribute; // inherited from NSObject

  static new(): NMAPlaceTransitLinesAttribute; // inherited from NSObject

  readonly destinations: NSArray<NMAPlaceTransitDestination>;

  readonly lines: NSDictionary<string, NMAPlaceTransitLine>;
}

declare class NMAPlaceTransitOperator extends NSObject {
  static alloc(): NMAPlaceTransitOperator; // inherited from NSObject

  static new(): NMAPlaceTransitOperator; // inherited from NSObject

  readonly links: NSDictionary<string, NMAPlaceTransitOperatorLink>;

  readonly supplier: NMAPlaceTransitOperatorSupplier;

  readonly title: string;

  readonly uniqueId: string;
}

declare class NMAPlaceTransitOperatorLink extends NSObject {
  static alloc(): NMAPlaceTransitOperatorLink; // inherited from NSObject

  static new(): NMAPlaceTransitOperatorLink; // inherited from NSObject

  readonly text: string;

  readonly url: NMALink;
}

declare class NMAPlaceTransitOperatorSupplier extends NSObject {
  static alloc(): NMAPlaceTransitOperatorSupplier; // inherited from NSObject

  static new(): NMAPlaceTransitOperatorSupplier; // inherited from NSObject

  readonly title: string;
}

declare class NMAPlaceTransitSchedulePage extends NSObject {
  static alloc(): NMAPlaceTransitSchedulePage; // inherited from NSObject

  static new(): NMAPlaceTransitSchedulePage; // inherited from NSObject

  readonly available: number;

  readonly departures: NSArray<NMAPlaceTransitDeparture>;

  readonly lines: NSDictionary<string, NMAPlaceTransitLine>;

  readonly nextPageRequest: NMAPlaceTransitSchedulePageRequest;

  readonly offsetCount: number;

  readonly operators: NSDictionary<string, NMAPlaceTransitOperator>;
}

declare class NMAPlaceTransitSchedulePageRequest extends NMARequest {
  static alloc(): NMAPlaceTransitSchedulePageRequest; // inherited from NSObject

  static new(): NMAPlaceTransitSchedulePageRequest; // inherited from NSObject
}

declare class NMAPlaces extends NSObject {
  static alloc(): NMAPlaces; // inherited from NSObject

  static new(): NMAPlaces; // inherited from NSObject

  static sharedPlaces(): NMAPlaces;

  createAroundRequestWithLocationSearchAreaFilters(location: NMAGeoCoordinates, searchArea: NMAGeoBoundingBox, filters: NMACategoryFilter): NMADiscoveryRequest;

  createAutoSuggestionRequestWithLocationPartialTerm(location: NMAGeoCoordinates, partialTerm: string): NMAAutoSuggestionRequest;

  createAutoSuggestionRequestWithLocationPartialTermResultType(location: NMAGeoCoordinates, partialTerm: string, resultType: NMAPlacesAutoSuggestionResultType): NMAAutoSuggestionRequest;

  createAutoSuggestionRequestWithLocationPartialTermResultTypeFilter(location: NMAGeoCoordinates, partialTerm: string, resultType: NMAPlacesAutoSuggestionResultType, filter: NMAAddressFilter): NMAAutoSuggestionRequest;

  createExploreRequestWithLocationSearchAreaFilters(location: NMAGeoCoordinates, searchArea: NMAGeoBoundingBox, filters: NMACategoryFilter): NMADiscoveryRequest;

  createHereRequestWithLocationFilters(location: NMAGeoCoordinates, filters: NMACategoryFilter): NMADiscoveryRequest;

  createLookupRequestWithReferenceIdentifierInSource(referenceIdentifier: string, source: string): NMAPlaceRequest;

  createSearchRequestWithLocationQuery(location: NMAGeoCoordinates, query: string): NMADiscoveryRequest;

  createSearchRequestWithLocationQueryFilter(location: NMAGeoCoordinates, query: string, filter: NMAAddressFilter): NMADiscoveryRequest;

  refreshTopLevelCategoriesWithCompletion(completionBlock: (p1: NSArray<NMACategory>, p2: NSError) => void): void;

  topLevelCategories(): NSArray<NMACategory>;
}

declare const enum NMAPlacesAutoSuggestionResultType {
  Address = 1,

  Place = 2,

  Category = 4,

  Chain = 8,

  Query = 16,
}

declare var NMAPlacesContentWikipedia: string;

declare var NMAPlacesSourcePVID: string;

declare var NMAPlacesSourceSharing: string;

declare const enum NMAPlatformDataConditionType {
  Undefined = 0,

  TollStructure = 1,

  ConstructionStatusClosed = 3,

  Gates = 4,

  DirectionOfTravel = 5,

  RestrictedDrivingManoeuvre = 7,

  AccessRestriction = 8,

  SpecialExplication = 9,

  SpecialSpeedSituation = 10,

  VariableSpeedSign = 11,

  UsageFeeRequired = 12,

  LaneTraversal = 13,

  ThroughRoute = 14,

  TrafficSignal = 16,

  TrafficSign = 17,

  RailwayCrossing = 18,

  NoOvertaking = 19,

  JunctionView = 20,

  ProtectedOvertaking = 21,

  EvacuationRoute = 22,

  TransportAccessRestriction = 23,

  TransportSpclSpdSituation = 25,

  TransportRdm = 26,

  TransportPreferredRoute = 27,

  CalculatedRestrictedDrivingManoeuvre = 30,

  ParkingInformation = 31,

  EnvironmentalZone = 34,

  Blackspot = 38,

  PermittedDrivingManoeuvre = 39,

  VariableSpeedLimit = 40,

  ShortConstructionWarning = 41,
}

declare class NMAPlatformDataItem extends NSObject implements NSCopying {
  static alloc(): NMAPlatformDataItem; // inherited from NSObject

  static new(): NMAPlatformDataItem; // inherited from NSObject

  readonly averageHeightCm: number;

  readonly conditionType: NMAPlatformDataConditionType;

  readonly coordinates: NSArray<NMAGeoCoordinates>;

  readonly count: number;

  readonly linkId: string;

  readonly linkIds: NSArray<string>;

  readonly linkLengthMeter: number;

  readonly vehicleTypes: NMAPlatformDataVehicleType;

  allKeys(): NSArray<string>;

  allValues(): NSArray<string>;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  enumerateKeysAndObjectsUsingBlock(block: (p1: string, p2: string, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

  extract(): NSDictionary<string, string>;

  objectForKeyedSubscript(key: string): string;
}

declare class NMAPlatformDataItemCollection extends NSObject implements NSFastEnumeration {
  static alloc(): NMAPlatformDataItemCollection; // inherited from NSObject

  static new(): NMAPlatformDataItemCollection; // inherited from NSObject

  readonly count: number;
  [index: number]: NMAPlatformDataItem;
  [Symbol.iterator](): Iterator<any>;

  extract(): NSArray<NSDictionary<string, string>>;

  objectAtIndexedSubscript(index: number): NMAPlatformDataItem;

  objectEnumerator(): NSEnumerator<any>;
}

declare class NMAPlatformDataRequest extends NSObject {
  static alloc(): NMAPlatformDataRequest; // inherited from NSObject

  static new(): NMAPlatformDataRequest; // inherited from NSObject

  constructor(o: { layers: NSSet<string>; geoBoundingBox: NMAGeoBoundingBox });

  constructor(o: { layers: NSSet<string>; linkIds: NSSet<number> });

  constructor(o: { staticLayer: string });

  initWithLayersGeoBoundingBox(layers: NSSet<string>, geoBoundingBox: NMAGeoBoundingBox): this;

  initWithLayersLinkIds(layers: NSSet<string>, linkIds: NSSet<number>): this;

  initWithStaticLayer(layer: string): this;

  startWithBlock(block: (p1: NMAPlatformDataRequest, p2: NMAPlatformDataResult, p3: NSError) => void): void;

  startWithListener(requestListener: NMAPlatformDataRequestListener): void;
}

declare const enum NMAPlatformDataRequestError {
  InvalidParameters = 0,

  NoPermission = 1,

  ConnectionError = 2,

  ServerError = 3,
}

interface NMAPlatformDataRequestListener extends NSObjectProtocol {
  requestDidCompleteWithResultError(request: NMAPlatformDataRequest, result: NMAPlatformDataResult, error: NSError): void;
}
declare var NMAPlatformDataRequestListener: {
  prototype: NMAPlatformDataRequestListener;
};

declare class NMAPlatformDataResult extends NSObject {
  static alloc(): NMAPlatformDataResult; // inherited from NSObject

  static new(): NMAPlatformDataResult; // inherited from NSObject

  readonly count: number;

  allKeys(): NSArray<string>;

  allValues(): NSArray<NMAPlatformDataItemCollection>;

  enumerateKeysAndObjectsUsingBlock(block: (p1: string, p2: NMAPlatformDataItemCollection, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

  extract(): NSDictionary<string, NSArray<NSDictionary<string, string>>>;

  objectForKeyedSubscript(key: string): NMAPlatformDataItemCollection;
}

declare const enum NMAPlatformDataVehicleType {
  Undefined = 0,

  Automobiles = 1,

  Buses = 2,

  Taxis = 4,

  CarPools = 8,

  Pedestrians = 16,

  Trucks = 32,

  Deliveries = 64,

  EmergencyVehicles = 128,

  ThroughTraffic = 256,

  Motorcycles = 512,

  RoadTrains = 1024,

  All = 2047,
}

declare const enum NMAPngType {
  Type8 = 0,

  Type24 = 1,

  TypeBW = 2,
}

declare class NMAPoiObject extends NMAProxyObject {
  static alloc(): NMAPoiObject; // inherited from NSObject

  static new(): NMAPoiObject; // inherited from NSObject

  locationInfo: NMALocationInfo;
}

interface NMAPositionDataSource extends NSObjectProtocol {
  backgroundUpdatesEnabled?(): boolean;

  currentPosition(): NMAGeoPosition;

  navigationStartedWithTransportMode?(transportMode: NMATransportMode): void;

  navigationStopped?(): void;

  setBackgroundUpdatesEnabled?(enabled: boolean): void;

  start?(): void;

  stop?(): void;
}
declare var NMAPositionDataSource: {
  prototype: NMAPositionDataSource;
};

interface NMAPositionDataSourceAutomotive extends NMAPositionDataSource {
  courseStandardDeviation?(): number;

  elevationStandardDeviation?(): number;

  horizontalLargeStandardDeviation?(): number;

  horizontalSmallStandardDeviation?(): number;

  speedStandardDeviation?(): number;
}
declare var NMAPositionDataSourceAutomotive: {
  prototype: NMAPositionDataSourceAutomotive;
};

declare class NMAPositionIndicator extends NSObject {
  static alloc(): NMAPositionIndicator; // inherited from NSObject

  static new(): NMAPositionIndicator; // inherited from NSObject

  accuracyIndicatorColor: UIColor;

  accuracyIndicatorVisible: boolean;

  displayObject: NMAMapObject;

  hue: number;

  orientationOffset: number;

  tracksCourse: boolean;

  type: NMAPositionIndicatorType;

  visible: boolean;

  setDisplayObjectToLayer(displayObject: NMAMapObject, layer: NMAMapLayerType): void;
}

declare const enum NMAPositionIndicatorType {
  Raw = 0,

  MapMatched = 1,

  Current = 2,
}

declare const enum NMAPositionLogType {
  None = 0,

  DataSource = 1,

  Current = 2,

  Raw = 4,

  Matched = 8,

  All = 255,
}

declare class NMAPositioningManager extends NSObject {
  static alloc(): NMAPositioningManager; // inherited from NSObject

  static new(): NMAPositioningManager; // inherited from NSObject

  static sharedPositioningManager(): NMAPositioningManager;

  readonly active: boolean;

  readonly currentPosition: NMAGeoPosition;

  dataSource: NMAPositionDataSource;

  geoShiftableDelegate: NMAGeoShiftableDelegate;

  logType: NMAPositionLogType;

  mapMatchMode: NMAMapMatchMode;

  readonly mapMatchedPosition: NMAGeoPosition;

  mapMatchingEnabled: boolean;

  probeCollectionEnabled: boolean;

  readonly rawPosition: NMAGeoPosition;

  currentRoadElement(): NMARoadElement;

  dataSourceDidUpdatePosition(dataSource: NMAPositionDataSource): void;

  startPositioning(): boolean;

  stopPositioning(): void;
}

declare var NMAPositioningManagerDidLosePositionNotification: string;

declare var NMAPositioningManagerDidUpdatePositionNotification: string;

declare const enum NMAPrefetchRequestError {
  None = 0,

  Unknown = 1,

  Busy = 2,

  InvalidParameters = 3,

  OperationNotAllowed = 4,

  RouteAreaTooBig = 5,
}

declare const enum NMAPrefetchStatus {
  InProgress = 0,

  Success = 1,

  Failure = 2,

  Cancelled = 3,
}

declare const enum NMAProjectionType {
  Mercator = 0,

  Globe = 1,
}

declare class NMAProxyObject extends NMAViewObject {
  static alloc(): NMAProxyObject; // inherited from NSObject

  static new(): NMAProxyObject; // inherited from NSObject
}

declare class NMAPvidRoadElementIdentifier extends NSObject {
  static alloc(): NMAPvidRoadElementIdentifier; // inherited from NSObject

  static new(): NMAPvidRoadElementIdentifier; // inherited from NSObject

  readonly pvid: number;

  readonly searchCenter: NMAGeoCoordinates;

  constructor(o: { forOnlineRoutingWithPvid: number });

  constructor(o: { pvid: number; searchCenter: NMAGeoCoordinates });

  initForOnlineRoutingWithPvid(pvid: number): this;

  initWithPvidSearchCenter(pvid: number, center: NMAGeoCoordinates): this;
}

declare class NMARMERouteMatcher extends NSObject {
  static alloc(): NMARMERouteMatcher; // inherited from NSObject

  static new(): NMARMERouteMatcher; // inherited from NSObject

  cancel(taskId: number): void;

  matchRouteFromGPXFileAtPathCompletionBlock(pathToGPXFile: NSURL, completion: (p1: NSArray<NMAGeoCoordinates>, p2: NSError) => void): number;

  matchRouteFromGPXFileAtPathWithParametersCompletionBlock(pathToGPXFile: NSURL, parameters: NSDictionary<string, string>, completion: (p1: NSArray<NMAGeoCoordinates>, p2: NSError) => void): number;

  matchRouteFromTracesCompletionBlock(traceCoordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[], completion: (p1: NSArray<NMAGeoCoordinates>, p2: NSError) => void): number;

  matchRouteFromTracesWithParametersCompletionBlock(traceCoordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[], parameters: NSDictionary<string, string>, completion: (p1: NSArray<NMAGeoCoordinates>, p2: NSError) => void): number;
}

declare class NMARatings extends NSObject {
  static alloc(): NMARatings; // inherited from NSObject

  static new(): NMARatings; // inherited from NSObject

  readonly average: number;

  readonly count: number;
}

declare var NMARealisticView16x9Key: any;

declare var NMARealisticView3x5Key: any;

declare var NMARealisticView4x3Key: any;

declare var NMARealisticView5x3Key: any;

declare const enum NMARealisticViewAspectRatio {
  View16x9 = 1,

  View3x5 = 2,

  View5x3 = 4,

  View4x3 = 8,
}

declare const enum NMARealisticViewMode {
  Off = 0,

  Day = 1,

  Night = 2,
}

declare class NMARequest extends NSObject implements NSCoding {
  static alloc(): NMARequest; // inherited from NSObject

  static new(): NMARequest; // inherited from NSObject

  collectionSize: number;

  connectivity: NMARequestConnectivity;

  languagePreference: string;

  readonly sources: NSArray<string>;

  userTag: string;

  viewport: NMAGeoBoundingBox;

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  addCustomHeaderValue(name: string, value: string): void;

  addSource(source: string): void;

  cancel(): boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  startWithBlock(completionBlock: (p1: NMARequest, p2: any, p3: NSError) => void): NSError;

  startWithListener(aSearchEventListener: NMAResultListener): NSError;
}

declare const enum NMARequestConnectivity {
  Default = 0,

  Offline = 1,

  Online = 2,
}

declare const enum NMARequestError {
  None = 0,

  Unknown = 1,

  AddressMissing = 2,

  LocationContextInvalid = 3,

  LocationContextMissing = 4,

  CountryCodeMissing = 5,

  SearchTextMissing = 6,

  InvalidParameter = 7,

  NetworkCommunication = 8,

  NetworkServer = 9,

  NetworkEmptyInput = 10,

  InvalidCredentials = 11,

  Http = 12,

  NetworkUnknown = 13,

  NotSupported = 14,

  NotReady = 15,

  NotFound = 16,

  AlreadyExists = 17,

  OutOfMemory = 18,

  OperationFailed = 19,

  Aborted = 20,

  FinderIndexFailure = 21,

  MovedPermanently = 22,

  NotModified = 23,

  BadRequest = 24,

  ResourceGone = 25,

  Parse = 26,

  Timeout = 27,

  OperationNotAllowed = 28,
}

interface NMAResultListener extends NSObjectProtocol {
  requestDidCompleteWithDataError(request: NMARequest, data: any, error: NSError): void;
}
declare var NMAResultListener: {
  prototype: NMAResultListener;
};

declare const enum NMAReverseGeocodeMode {
  RetrieveAddresses = 0,

  RetrieveAreas = 1,

  RetrieveLandmarks = 2,

  RetrieveAll = 3,

  TrackPosition = 4,
}

declare class NMAReverseGeocodeRequest extends NMARequest {
  static alloc(): NMAReverseGeocodeRequest; // inherited from NSObject

  static new(): NMAReverseGeocodeRequest; // inherited from NSObject
}

declare class NMAReverseGeocodeResult extends NSObject {
  static alloc(): NMAReverseGeocodeResult; // inherited from NSObject

  static new(): NMAReverseGeocodeResult; // inherited from NSObject

  readonly distance: number;

  readonly location: NMAPlaceLocation;
}

declare var NMAReverseGeocodeResultInvalidDistance: number;

declare class NMARoadElement extends NSObject {
  static alloc(): NMARoadElement; // inherited from NSObject

  static new(): NMARoadElement; // inherited from NSObject

  readonly abbreviatedName: string;

  readonly attributes: number;

  readonly averageSpeed: number;

  readonly isTruckTransportVerified: boolean;

  readonly numberOfLanes: number;

  readonly permanentDirectedLinkId: number;

  readonly permanentLinkId: number;

  readonly pluralType: NMARoadElementPluralType;

  readonly roadName: string;

  readonly speedLimit: number;

  readonly type: NMARoadElementType;

  readonly uniqueId: string;

  trafficSignsOrError(): NSArray<NMATrafficSign>;
}

declare const enum NMARoadElementAttribute {
  Undefined = 0,

  DirectionNoCars = 0,

  DirectionForward = 1,

  DirectionBackward = 2,

  DirectionBoth = 3,

  DirtRoad = 256,

  UsageFeeRequired = 512,

  Carpool = 1024,

  Urban = 2048,

  Tollroad = 4096,

  NoThroughTraffic = 8192,

  Tunnel = 16384,

  Sliproad = 262144,

  Highway = 524288,

  UnderConstruction = 1048576,

  HasLaneDir = 2097152,

  HasLaneExit = 4194304,

  Ferry = 8388608,

  RailFerry = 16777216,

  DirectionNoTruck = 33554432,

  DirectionTruckForward = 67108864,

  DirectionTruckBackward = 134217728,

  DirectionTruckBoth = 201326592,

  SchoolZone = 268435456,
}

declare const enum NMARoadElementPluralType {
  None = 0,

  Maneuver = 1,

  Connector = 2,

  Indeterminate = 3,
}

declare const enum NMARoadElementType {
  Undefined = 0,

  Motorway = 1,

  MultiCarriageway = 2,

  SingleCarriageway = 3,

  Roundabout = 4,

  Sliproad = 5,

  PedestrianZone = 6,

  PedestrianWalkway = 7,

  ServiceAccess = 8,

  PedestrianOnly = 9,
}

declare const enum NMARoadSide {
  Undefined = 0,

  UnknownLeft = 1,

  UnknownRight = 2,

  Left = 3,

  Right = 4,
}

declare class NMARoute extends NSObject {
  static alloc(): NMARoute; // inherited from NSObject

  static new(): NMARoute; // inherited from NSObject

  static routeFromSerializedRouteWithCompletion(data: NSData, completionBlock: (p1: NMARoute, p2: NSError) => void): void;

  readonly boundingBox: NMAGeoBoundingBox;

  readonly destination: NMAWaypoint;

  readonly geometry: NSArray<NMAGeoCoordinates>;

  readonly geometryWithElevationData: NSArray<NMAGeoCoordinates>;

  readonly length: number;

  readonly maneuvers: NSArray<NMAManeuver>;

  readonly permanentDirectedLinkIds: NSArray<number>;

  readonly permanentLinkIds: NSArray<number>;

  readonly routeElements: NSArray<NMARouteElement>;

  readonly routingMode: NMARoutingMode;

  readonly routingZones: NSArray<NMARoutingZone>;

  readonly sourceAttribution: NMATransitRouteSourceAttribution;

  readonly start: NMAWaypoint;

  readonly sublegCount: number;

  userTag: string;

  readonly waypoints: NSArray<NMAWaypoint>;

  consumptionWithParametersDynamicPenalty(consumptionParameters: NMARouteConsumptionParameters, dynamicPenalty: NMADynamicPenalty): NMARouteConsumption;

  distanceFromRouteElementFromPositionToRouteElementToPosition(fromRouteElement: number, fromPosition: NMAGeoCoordinates, toRouteElement: number, toPosition: NMAGeoCoordinates): number;

  instructionsForLanguageUnitSystem(language: string, unitSystem: NMARouteInstructionsUnitSystem): NSArray<string>;

  lastReachablePositionWithConsumptionCurrentCapacity(routeConsumption: NMARouteConsumption, capacity: number): NMAGeoCoordinates;

  lengthForSubleg(subleg: number): number;

  routeElementsFromDurationError(duration: number): NSArray<NMARouteElement>;

  routeElementsFromLengthError(length: number): NSArray<NMARouteElement>;

  routeElementsFromManeuverError(maneuver: NMAManeuver): NSArray<NMARouteElement>;

  routeElementsFromStartDistanceLengthError(startDistance: number, length: number): NSArray<NMARouteElement>;

  routeElementsFromStartTimeDurationError(startTime: number, duration: number): NSArray<NMARouteElement>;

  serializedRouteWithCompletionBlock(completionBlock: (p1: NSData, p2: NSError) => void): void;

  ttaExcludingTrafficForSubleg(subleg: number): NMARouteTta;

  ttaIncludingTrafficForSubleg(subleg: number): NMARouteTta;

  ttaUsingDownloadedTrafficForSubleg(subleg: number): NMARouteTta;
}

declare class NMARouteConsumption extends NSObject {
  static alloc(): NMARouteConsumption; // inherited from NSObject

  static new(): NMARouteConsumption; // inherited from NSObject

  firstAvailableConsumptionIndex(): number;

  getConsumptionWithIndex(index: number): number;
}

declare class NMARouteConsumptionParameters extends NSObject {
  static alloc(): NMARouteConsumptionParameters; // inherited from NSObject

  static new(): NMARouteConsumptionParameters; // inherited from NSObject

  accelerationMultiplier: number;

  ascentMultiplier: number;

  auxiliaryConsumption: number;

  consumptionSpeed: NSDictionary<number, number>;

  decelartionMultiplier: number;

  descentMutiplier: number;

  highSpeedConsumptionEnabled: boolean;

  highSpeedConsumptionThresholdKmh: number;

  trafficScales: NSDictionary<number, number>;

  trafficSpeed: NSDictionary<number, number>;

  turnTimeMultiplier: number;
}

declare const enum NMARouteDisplayType {
  Primary = 0,

  Secondary = 1,

  UserDefined = 2,
}

declare const enum NMARouteDurationDetail {
  Accurate = 0,

  BlockedRoad = 1,

  CarPool = 2,

  RestrictedTurn = 4,
}

declare class NMARouteElement extends NSObject {
  static alloc(): NMARouteElement; // inherited from NSObject

  static new(): NMARouteElement; // inherited from NSObject

  readonly geometry: NSArray<NMAGeoCoordinates>;

  readonly roadElement: NMARoadElement;

  readonly transitRouteElement: NMATransitRouteElement;

  readonly travelDirection: NMATravelDirection;

  readonly type: NMARouteElementType;
}

declare const enum NMARouteElementType {
  Transit = 0,

  Road = 1,

  Invalid = 2,
}

declare const enum NMARouteError {
  InvalidParameter = 1,

  NotSupported = 2,

  Unknown = 3,
}

declare const enum NMARouteInstructionsUnitSystem {
  Metric = 0,

  Imperial = 1,
}

declare class NMARoutePositionSource extends NSObject implements NMAPositionDataSource {
  static alloc(): NMARoutePositionSource; // inherited from NSObject

  static new(): NMARoutePositionSource; // inherited from NSObject

  accuracy: number;

  movementSpeed: number;

  positionLost: boolean;

  route: NMARoute;

  stationary: boolean;

  updateInterval: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { route: NMARoute });

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  initWithRoute(route: NMARoute): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  reset(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  start(): void;

  stop(): void;
}

declare class NMARouteResult extends NSObject {
  static alloc(): NMARouteResult; // inherited from NSObject

  static new(): NMARouteResult; // inherited from NSObject

  readonly routes: NSArray<NMARoute>;

  readonly violatedOptions: NSArray<number>;
}

declare const enum NMARouteSerializationError {
  InvalidParameter = 0,

  MapVersionMismatch = 1,

  DataCorrupted = 2,

  TransportModeNotSupported = 3,

  Unknown = 4,
}

declare var NMARouteSublegWhole: number;

declare class NMARouteTta extends NSObject {
  static alloc(): NMARouteTta; // inherited from NSObject

  static new(): NMARouteTta; // inherited from NSObject

  readonly blocked: boolean;

  readonly details: NMARouteDurationDetail;

  readonly duration: number;
}

declare class NMARouter extends NSObject {
  static alloc(): NMARouter; // inherited from NSObject

  static new(): NMARouter; // inherited from NSObject

  readonly isBusy: boolean;

  cancel(): void;
}

declare const enum NMARoutingError {
  None = 0,

  Unknown = 1,

  OutOfMemory = 2,

  InvalidParameters = 3,

  InvalidOperation = 4,

  GraphDisconnected = 5,

  GraphDisconnectedCheckOptions = 6,

  NoStartPoint = 7,

  NoEndPoint = 8,

  NoEndPointCheckOptions = 9,

  CannotDoPedestrian = 10,

  RoutingCancelled = 11,

  ViolatesOptions = 12,

  RouteCorrupted = 13,

  InvalidCredentials = 14,

  InsufficientMapData = 15,

  NetworkCommunication = 16,

  UnsupportedMapVersion = 17,
}

declare class NMARoutingMode extends NSObject {
  static alloc(): NMARoutingMode; // inherited from NSObject

  static new(): NMARoutingMode; // inherited from NSObject

  avoidDifficultTurns: boolean;

  departureTime: Date;

  deviationDistanceToPedestrianReroute: number;

  excludeRoutingZones: NSArray<string>;

  excludedCountries: NSArray<string>;

  hazardousGoods: NMAHazardousGoodsType;

  languagePreference: string;

  licensePlateLastCharacter: string;

  limitedVehicleWeight: number;

  maximumChanges: number;

  resultLimit: number;

  routingOptions: NMARoutingOption;

  routingType: NMARoutingType;

  speedProfile: NMASpeedProfile;

  startDirection: number;

  trailersCount: number;

  transitRoutingOptions: NMATransitRoutingOption;

  transportMode: NMATransportMode;

  truckAxleCount: number;

  truckRestrictionsMode: NMATruckRestrictionsMode;

  truckType: NMATruckType;

  tunnelCategory: NMATunnelCategory;

  vehicleHeight: number;

  vehicleLength: number;

  vehicleWidth: number;

  waypointMatchingRadius: number;

  weightPerAxle: number;

  constructor(o: { routingType: NMARoutingType; transportMode: NMATransportMode; routingOptions: NMARoutingOption });

  getTruckWeightPerAxleGroup(group: NMATruckAxleGroup): number;

  initWithRoutingTypeTransportModeRoutingOptions(routingType: NMARoutingType, transportMode: NMATransportMode, routingOptions: NMARoutingOption): this;

  setTruckWeightPerAxleGroup(weight: number, group: NMATruckAxleGroup): void;
}

declare var NMARoutingModeStartDirectionAny: number;

declare const enum NMARoutingOption {
  AvoidBoatFerry = 1,

  AvoidDirtRoad = 2,

  AvoidHighway = 4,

  AvoidPark = 8,

  AvoidTollRoad = 16,

  AvoidTunnel = 32,

  AvoidCarShuttleTrain = 64,

  AvoidCarpool = 128,

  PreferBoatFerry = 256,
}

declare const enum NMARoutingType {
  Shortest = 0,

  Fastest = 1,

  Balanced = 3,
}

declare const enum NMARoutingViolatedOption {
  OptionNone = 0,

  OptionBlockedRoad = 4096,

  OptionTurnRestriction = 8192,

  OptionStartDirection = 16384,

  PermanentTruckRestriction = 32768,

  OptionZoneRestriction = 65536,
}

declare class NMARoutingZone extends NSObject {
  static alloc(): NMARoutingZone; // inherited from NSObject

  static new(): NMARoutingZone; // inherited from NSObject

  readonly identifier: string;

  readonly name: string;

  readonly restrictions: NSArray<NMARoutingZoneRestriction>;

  readonly type: NMARoutingZoneType;
}

declare class NMARoutingZoneNotification extends NSObject {
  static alloc(): NMARoutingZoneNotification; // inherited from NSObject

  static new(): NMARoutingZoneNotification; // inherited from NSObject

  readonly isOnRoute: boolean;

  readonly routingZonesInfos: NSArray<NMARoutingZonesInfo>;
}

declare class NMARoutingZoneRestriction extends NSObject {
  static alloc(): NMARoutingZoneRestriction; // inherited from NSObject

  static new(): NMARoutingZoneRestriction; // inherited from NSObject

  readonly licensePlateLastDigits: string;

  readonly timeBegin: Date;

  readonly timeEnd: Date;

  readonly transportTypes: NSSet<number>;
}

declare const enum NMARoutingZoneType {
  Vignette = 0,

  CongestionPricing = 1,

  AdministrativeClass = 2,

  Environmental = 3,
}

declare class NMARoutingZoneWarner extends NSObject {
  static alloc(): NMARoutingZoneWarner; // inherited from NSObject

  static new(): NMARoutingZoneWarner; // inherited from NSObject

  static routingZonesForRoadElement(roadElement: NMARoadElement): NSArray<NMARoutingZone>;

  static routingZonesForRoadElementRoutingMode(roadElement: NMARoadElement, routingMode: NMARoutingMode): NSArray<NMARoutingZone>;

  delegate: NMARoutingZoneWarnerDelegate;

  start(): void;

  stop(): void;
}

interface NMARoutingZoneWarnerDelegate extends NSObjectProtocol {
  routingZoneWarnerDidDetectRoutingZone?(routingZoneWarner: NMARoutingZoneWarner, notification: NMARoutingZoneNotification): void;

  routingZoneWarnerDidUpdateRoutingZone?(routingZoneWarner: NMARoutingZoneWarner, routingZones: NSArray<NMARoutingZone> | NMARoutingZone[]): void;
}
declare var NMARoutingZoneWarnerDelegate: {
  prototype: NMARoutingZoneWarnerDelegate;
};

declare class NMARoutingZonesInfo extends NSObject {
  static alloc(): NMARoutingZonesInfo; // inherited from NSObject

  static new(): NMARoutingZonesInfo; // inherited from NSObject

  readonly distance: number;

  readonly roadElement: NMARoadElement;

  readonly routingZones: NSArray<NMARoutingZone>;
}

declare class NMASafetySpot extends NSObject {
  static alloc(): NMASafetySpot; // inherited from NSObject

  static new(): NMASafetySpot; // inherited from NSObject

  readonly heading1: number;

  readonly heading2: number;

  readonly location: NMAGeoCoordinates;

  readonly speedLimit1: number;

  readonly speedLimit2: number;

  readonly type: NMASafetySpotType;
}

declare class NMASafetySpotNotification extends NSObject {
  static alloc(): NMASafetySpotNotification; // inherited from NSObject

  static new(): NMASafetySpotNotification; // inherited from NSObject

  readonly safetySpotNotificationInfo: NSArray<NMASafetySpotNotificationInfo>;
}

declare class NMASafetySpotNotificationInfo extends NSObject {
  static alloc(): NMASafetySpotNotificationInfo; // inherited from NSObject

  static new(): NMASafetySpotNotificationInfo; // inherited from NSObject

  readonly distance: number;

  readonly safetySpot: NMASafetySpot;
}

declare const enum NMASafetySpotType {
  Undefined = 0,

  SpeedCamera = 1,

  RedLightCamera = 2,

  SpeedRedLightCamera = 3,
}

declare class NMASafetySpotWarner extends NSObject {
  static alloc(): NMASafetySpotWarner; // inherited from NSObject

  static new(): NMASafetySpotWarner; // inherited from NSObject

  delegate: NMASafetySpotWarnerDelegate;

  isSafetySpotNotificationInfoAhead(safetySpotNotificationInfo: NMASafetySpotNotificationInfo): boolean;

  start(): void;

  stop(): void;
}

interface NMASafetySpotWarnerDelegate extends NSObjectProtocol {
  safetySpotWarnerDidDetectSafetySpot?(safetySpotWarner: NMASafetySpotWarner, safetySpotNotification: NMASafetySpotNotification): void;
}
declare var NMASafetySpotWarnerDelegate: {
  prototype: NMASafetySpotWarnerDelegate;
};

declare const enum NMASchemeBooleanProperty {
  GuidanceArrowExtendArrowBeyondRouteEnd = 0,

  TruckIconIconScaleEnabled = 1,

  BooleanPropertyCount = 2,
}

declare const enum NMASchemeColorProperty {
  AirportAreaColor = 0,

  AirportAreaInfoFontStyleColor = 1,

  AirportAreaInfoFontStyleOutlineColor = 2,

  AllotmentColor = 3,

  AllotmentInfoFontStyleColor = 4,

  AllotmentInfoFontStyleOutlineColor = 5,

  AmbientLightColor = 6,

  AmusementParkColor = 7,

  AmusementParkInfoFontStyleColor = 8,

  AmusementParkInfoFontStyleOutlineColor = 9,

  AnimalParkColor = 10,

  AnimalParkInfoFontStyleColor = 11,

  AnimalParkInfoFontStyleOutlineColor = 12,

  AvoidBlockedRouteDashColor = 13,

  AvoidBlockedRouteGapColor = 14,

  AvoidBlockedRouteOutlineColor = 15,

  BayHarbourColor = 16,

  BayHarbourDisplayClass1Color = 17,

  BayHarbourDisplayClass1FontStyleColor = 18,

  BayHarbourDisplayClass1FontStyleOutlineColor = 19,

  BayHarbourDisplayClass2Color = 20,

  BayHarbourDisplayClass2FontStyleColor = 21,

  BayHarbourDisplayClass2FontStyleOutlineColor = 22,

  BayHarbourDisplayClass3Color = 23,

  BayHarbourDisplayClass3FontStyleColor = 24,

  BayHarbourDisplayClass3FontStyleOutlineColor = 25,

  BayHarbourDisplayClass4Color = 26,

  BayHarbourDisplayClass4FontStyleColor = 27,

  BayHarbourDisplayClass4FontStyleOutlineColor = 28,

  BayHarbourDisplayClass5Color = 29,

  BayHarbourDisplayClass5FontStyleColor = 30,

  BayHarbourDisplayClass5FontStyleOutlineColor = 31,

  BayHarbourDisplayClass6Color = 32,

  BayHarbourDisplayClass6FontStyleColor = 33,

  BayHarbourDisplayClass6FontStyleOutlineColor = 34,

  BayHarbourDisplayClass7Color = 35,

  BayHarbourDisplayClass7FontStyleColor = 36,

  BayHarbourDisplayClass7FontStyleOutlineColor = 37,

  BayHarbourDisplayClass8Color = 38,

  BayHarbourDisplayClass8FontStyleColor = 39,

  BayHarbourDisplayClass8FontStyleOutlineColor = 40,

  BayHarbourFontStyleColor = 41,

  BayHarbourFontStyleOutlineColor = 42,

  BeachColor = 43,

  BeachInfoFontStyleColor = 44,

  BeachInfoFontStyleOutlineColor = 45,

  BillboardAdjacentColor = 46,

  BillboardAdjacentFontStyleColor = 47,

  BillboardAdjacentFontStyleOutlineColor = 48,

  BillboardAdjacentOutlineColor = 49,

  BillboardOffRouteColor = 50,

  BillboardOffRouteFontStyleColor = 51,

  BillboardOffRouteFontStyleOutlineColor = 52,

  BillboardOffRouteOutlineColor = 53,

  BuildingColor = 54,

  Building1Color = 55,

  Building1OutlineColor = 56,

  BuildingAddressFontStyleColor = 57,

  BuildingAddressFontStyleOutlineColor = 58,

  BuildingInfoFontStyleColor = 59,

  BuildingInfoFontStyleOutlineColor = 60,

  BuildingOutlineColor = 61,

  BuiltupAreaColor = 62,

  BuiltupBorderBackgroundColor = 63,

  BuiltupBorderColor = 64,

  CanalWaterChannelColor = 65,

  CanalWaterChannelDisplayClass1Color = 66,

  CanalWaterChannelDisplayClass1FontStyleColor = 67,

  CanalWaterChannelDisplayClass1FontStyleOutlineColor = 68,

  CanalWaterChannelDisplayClass2Color = 69,

  CanalWaterChannelDisplayClass2FontStyleColor = 70,

  CanalWaterChannelDisplayClass2FontStyleOutlineColor = 71,

  CanalWaterChannelDisplayClass3Color = 72,

  CanalWaterChannelDisplayClass3FontStyleColor = 73,

  CanalWaterChannelDisplayClass3FontStyleOutlineColor = 74,

  CanalWaterChannelDisplayClass4Color = 75,

  CanalWaterChannelDisplayClass4FontStyleColor = 76,

  CanalWaterChannelDisplayClass4FontStyleOutlineColor = 77,

  CanalWaterChannelDisplayClass5Color = 78,

  CanalWaterChannelDisplayClass5FontStyleColor = 79,

  CanalWaterChannelDisplayClass5FontStyleOutlineColor = 80,

  CanalWaterChannelDisplayClass6Color = 81,

  CanalWaterChannelDisplayClass6FontStyleColor = 82,

  CanalWaterChannelDisplayClass6FontStyleOutlineColor = 83,

  CanalWaterChannelDisplayClass7Color = 84,

  CanalWaterChannelDisplayClass7FontStyleColor = 85,

  CanalWaterChannelDisplayClass7FontStyleOutlineColor = 86,

  CanalWaterChannelDisplayClass8Color = 87,

  CanalWaterChannelDisplayClass8FontStyleColor = 88,

  CanalWaterChannelDisplayClass8FontStyleOutlineColor = 89,

  CanalWaterChannelFontStyleColor = 90,

  CanalWaterChannelFontStyleOutlineColor = 91,

  CemeteryColor = 92,

  CemeteryInfoFontStyleColor = 93,

  CemeteryInfoFontStyleOutlineColor = 94,

  CityCenterClass1FontStyleColor = 95,

  CityCenterClass1FontStyleOutlineColor = 96,

  CityCenterClass2FontStyleColor = 97,

  CityCenterClass2FontStyleOutlineColor = 98,

  CityCenterClass3FontStyleColor = 99,

  CityCenterClass3FontStyleOutlineColor = 100,

  CityCenterClass4FontStyleColor = 101,

  CityCenterClass4FontStyleOutlineColor = 102,

  CityCenterClass5FontStyleColor = 103,

  CityCenterClass5FontStyleOutlineColor = 104,

  CityCenterDistrictFontStyleColor = 105,

  CityCenterDistrictFontStyleOutlineColor = 106,

  CityCenterHamletFontStyleColor = 107,

  CityCenterHamletFontStyleOutlineColor = 108,

  CongestionZoneColor = 109,

  CongestionZoneBorderColor = 110,

  CongestionZoneInfoFontStyleColor = 111,

  CongestionZoneInfoFontStyleOutlineColor = 112,

  ContinentLabelFontStyleColor = 113,

  ContinentLabelFontStyleOutlineColor = 114,

  CountryBoundaryBackgroundColor = 115,

  CountryBoundaryColor = 116,

  CountryBoundaryDisputedBackgroundColor = 117,

  CountryBoundaryDisputedColor = 118,

  CountrySideLabelFontStyleColor = 119,

  CountrySideLabelFontStyleOutlineColor = 120,

  DirectionalLight1Color = 121,

  DirectionalLight2Color = 122,

  DirectionalLight3Color = 123,

  ElevationMapColor0 = 124,

  ElevationMapColor1 = 125,

  ElevationMapColor2 = 126,

  ElevationMapColor3 = 127,

  ElevationMapColor4 = 128,

  ElevationMapColor5 = 129,

  ElevationMapColor6 = 130,

  ElevationMapColor7 = 131,

  ElevationMapShaderShadowColor = 132,

  ElevationMapShaderSpecularColor = 133,

  EnvironmentalZoneColor = 134,

  EnvironmentalZoneBorderColor = 135,

  EnvironmentalZoneInfoFontStyleColor = 136,

  EnvironmentalZoneInfoFontStyleOutlineColor = 137,

  ExitInfoStreetCategory0Color = 138,

  ExitInfoStreetCategory0FontStyleColor = 139,

  ExitInfoStreetCategory0FontStyleOutlineColor = 140,

  ExitInfoStreetCategory0OutlineColor = 141,

  ExitInfoStreetCategory0TollColor = 142,

  ExitInfoStreetCategory0TollFontStyleColor = 143,

  ExitInfoStreetCategory0TollFontStyleOutlineColor = 144,

  ExitInfoStreetCategory0TollOutlineColor = 145,

  ExitInfoStreetCategory1Color = 146,

  ExitInfoStreetCategory1FontStyleColor = 147,

  ExitInfoStreetCategory1FontStyleOutlineColor = 148,

  ExitInfoStreetCategory1OutlineColor = 149,

  ExitInfoStreetCategory1TollColor = 150,

  ExitInfoStreetCategory1TollFontStyleColor = 151,

  ExitInfoStreetCategory1TollFontStyleOutlineColor = 152,

  ExitInfoStreetCategory1TollOutlineColor = 153,

  ExitInfoStreetCategory2Color = 154,

  ExitInfoStreetCategory2FontStyleColor = 155,

  ExitInfoStreetCategory2FontStyleOutlineColor = 156,

  ExitInfoStreetCategory2OutlineColor = 157,

  ExitInfoStreetCategory2TollColor = 158,

  ExitInfoStreetCategory2TollFontStyleColor = 159,

  ExitInfoStreetCategory2TollFontStyleOutlineColor = 160,

  ExitInfoStreetCategory2TollOutlineColor = 161,

  ExitInfoSimplifiedStreetCategory0Color = 162,

  ExitInfoSimplifiedStreetCategory0OutlineColor = 163,

  ExitInfoSimplifiedStreetCategory0TollColor = 164,

  ExitInfoSimplifiedStreetCategory0TollOutlineColor = 165,

  ExitInfoSimplifiedStreetCategory1Color = 166,

  ExitInfoSimplifiedStreetCategory1OutlineColor = 167,

  ExitInfoSimplifiedStreetCategory1TollColor = 168,

  ExitInfoSimplifiedStreetCategory1TollOutlineColor = 169,

  ExitInfoSimplifiedStreetCategory2Color = 170,

  ExitInfoSimplifiedStreetCategory2OutlineColor = 171,

  ExitInfoSimplifiedStreetCategory2TollColor = 172,

  ExitInfoSimplifiedStreetCategory2TollOutlineColor = 173,

  ExtrudedBuildingsColor = 174,

  ExtrudedBuildingsColorHighlight0 = 175,

  ExtrudedBuildingsColorHighlight1 = 176,

  ExtrudedBuildingsColorHighlight2 = 177,

  ExtrudedBuildingsColorHighlight3 = 178,

  ExtrudedBuildingsColorHighlight4 = 179,

  ExtrudedBuildingsColorHighlight5 = 180,

  ExtrudedBuildingsColorNamed = 181,

  ExtrudedBuildingsColorSelected = 182,

  FerryFontStyleColor = 183,

  FerryFontStyleOutlineColor = 184,

  FerryTunnelColor = 185,

  FogDarkColor = 186,

  FogDistanceColor = 187,

  FogLightColor = 188,

  GolfCourseColor = 189,

  GolfCourseInfoFontStyleColor = 190,

  GolfCourseInfoFontStyleOutlineColor = 191,

  HarborAreaColor = 192,

  HarborAreaInfoFontStyleColor = 193,

  HarborAreaInfoFontStyleOutlineColor = 194,

  HospitalCampusColor = 195,

  HospitalCampusInfoFontStyleColor = 196,

  HospitalCampusInfoFontStyleOutlineColor = 197,

  IndustrialComplexColor = 198,

  IndustrialComplexInfoFontStyleColor = 199,

  IndustrialComplexInfoFontStyleOutlineColor = 200,

  IntermittentRiverColor = 201,

  IntermittentRiverDisplayClass1Color = 202,

  IntermittentRiverDisplayClass1FontStyleColor = 203,

  IntermittentRiverDisplayClass1FontStyleOutlineColor = 204,

  IntermittentRiverDisplayClass2Color = 205,

  IntermittentRiverDisplayClass2FontStyleColor = 206,

  IntermittentRiverDisplayClass2FontStyleOutlineColor = 207,

  IntermittentRiverDisplayClass3Color = 208,

  IntermittentRiverDisplayClass3FontStyleColor = 209,

  IntermittentRiverDisplayClass3FontStyleOutlineColor = 210,

  IntermittentRiverDisplayClass4Color = 211,

  IntermittentRiverDisplayClass4FontStyleColor = 212,

  IntermittentRiverDisplayClass4FontStyleOutlineColor = 213,

  IntermittentRiverDisplayClass5Color = 214,

  IntermittentRiverDisplayClass5FontStyleColor = 215,

  IntermittentRiverDisplayClass5FontStyleOutlineColor = 216,

  IntermittentRiverDisplayClass6Color = 217,

  IntermittentRiverDisplayClass6FontStyleColor = 218,

  IntermittentRiverDisplayClass6FontStyleOutlineColor = 219,

  IntermittentRiverDisplayClass7Color = 220,

  IntermittentRiverDisplayClass7FontStyleColor = 221,

  IntermittentRiverDisplayClass7FontStyleOutlineColor = 222,

  IntermittentRiverDisplayClass8Color = 223,

  IntermittentRiverDisplayClass8FontStyleColor = 224,

  IntermittentRiverDisplayClass8FontStyleOutlineColor = 225,

  IntermittentRiverFontStyleColor = 226,

  IntermittentRiverFontStyleOutlineColor = 227,

  IslandInfoFontStyleColor = 228,

  IslandInfoFontStyleOutlineColor = 229,

  LakeColor = 230,

  LakeDisplayClass1Color = 231,

  LakeDisplayClass1FontStyleColor = 232,

  LakeDisplayClass1FontStyleOutlineColor = 233,

  LakeDisplayClass2Color = 234,

  LakeDisplayClass2FontStyleColor = 235,

  LakeDisplayClass2FontStyleOutlineColor = 236,

  LakeDisplayClass3Color = 237,

  LakeDisplayClass3FontStyleColor = 238,

  LakeDisplayClass3FontStyleOutlineColor = 239,

  LakeDisplayClass4Color = 240,

  LakeDisplayClass4FontStyleColor = 241,

  LakeDisplayClass4FontStyleOutlineColor = 242,

  LakeDisplayClass5Color = 243,

  LakeDisplayClass5FontStyleColor = 244,

  LakeDisplayClass5FontStyleOutlineColor = 245,

  LakeDisplayClass6Color = 246,

  LakeDisplayClass6FontStyleColor = 247,

  LakeDisplayClass6FontStyleOutlineColor = 248,

  LakeDisplayClass7Color = 249,

  LakeDisplayClass7FontStyleColor = 250,

  LakeDisplayClass7FontStyleOutlineColor = 251,

  LakeDisplayClass8Color = 252,

  LakeDisplayClass8FontStyleColor = 253,

  LakeDisplayClass8FontStyleOutlineColor = 254,

  LakeFontStyleColor = 255,

  LakeFontStyleOutlineColor = 256,

  LandColor = 257,

  LandCoverDesertColor = 258,

  LandCoverDesertFontStyleColor = 259,

  LandCoverDesertFontStyleOutlineColor = 260,

  LandCoverGlacierColor = 261,

  LandCoverGlacierFontStyleColor = 262,

  LandCoverGlacierFontStyleOutlineColor = 263,

  LineOfControlBackgroundColor = 264,

  LineOfControlColor = 265,

  MajorCountryLabelFontStyleColor = 266,

  MajorCountryLabelFontStyleOutlineColor = 267,

  MarkingDividerCenterColor = 268,

  MarkingLaneDashedColor = 269,

  MarkingLaneSolidColor = 270,

  MilitaryBaseColor = 271,

  MilitaryBaseInfoFontStyleColor = 272,

  MilitaryBaseInfoFontStyleOutlineColor = 273,

  MinorCountryLabelFontStyleColor = 274,

  MinorCountryLabelFontStyleOutlineColor = 275,

  MotorwayJunctionSimplifiedIconColor = 276,

  MotorwayJunctionSimplifiedIconOutlineColor = 277,

  MountainPeakHeightFontStyleColor = 278,

  MountainPeakHeightFontStyleOutlineColor = 279,

  MountainPeakInfoFontStyleColor = 280,

  MountainPeakInfoFontStyleOutlineColor = 281,

  MountainRangeInfoDisplayClass1FontStyleColor = 282,

  MountainRangeInfoDisplayClass1FontStyleOutlineColor = 283,

  MountainRangeInfoDisplayClass2FontStyleColor = 284,

  MountainRangeInfoDisplayClass2FontStyleOutlineColor = 285,

  MountainRangeInfoDisplayClass3FontStyleColor = 286,

  MountainRangeInfoDisplayClass3FontStyleOutlineColor = 287,

  MountainRangeInfoFontStyleColor = 288,

  MountainRangeInfoFontStyleOutlineColor = 289,

  NationalForestColor = 290,

  NationalForestInfoFontStyleColor = 291,

  NationalForestInfoFontStyleOutlineColor = 292,

  NationalGrasslandColor = 293,

  NationalGrasslandInfoFontStyleColor = 294,

  NationalGrasslandInfoFontStyleOutlineColor = 295,

  NationalHistoricParkColor = 296,

  NationalHistoricParkInfoFontStyleColor = 297,

  NationalHistoricParkInfoFontStyleOutlineColor = 298,

  NationalMilitaryParkColor = 299,

  NationalParkColor = 300,

  NationalParkInfoFontStyleColor = 301,

  NationalParkInfoFontStyleOutlineColor = 302,

  NationalRecreationAreaColor = 303,

  NationalRecreationAreaInfoFontStyleColor = 304,

  NationalRecreationAreaInfoFontStyleOutlineColor = 305,

  NationalReserveColor = 306,

  NationalStateParkColor = 307,

  NationalStateParkInfoFontStyleColor = 308,

  NationalStateParkInfoFontStyleOutlineColor = 309,

  NationalWildlifeRefugeColor = 310,

  NativeReservationColor = 311,

  NativeReservationInfoFontStyleColor = 312,

  NativeReservationInfoFontStyleOutlineColor = 313,

  NeighborhoodColor0 = 314,

  NeighborhoodColor1 = 315,

  NeighborhoodColor2 = 316,

  NeighborhoodColor3 = 317,

  NeighborhoodColor4 = 318,

  NeighborhoodColor5 = 319,

  NeighborhoodInfoFontStyle0Color = 320,

  NeighborhoodInfoFontStyle0OutlineColor = 321,

  NeighborhoodInfoFontStyle1Color = 322,

  NeighborhoodInfoFontStyle1OutlineColor = 323,

  NeighborhoodInfoFontStyle2Color = 324,

  NeighborhoodInfoFontStyle2OutlineColor = 325,

  NeighborhoodInfoFontStyle3Color = 326,

  NeighborhoodInfoFontStyle3OutlineColor = 327,

  NeighborhoodInfoFontStyle4Color = 328,

  NeighborhoodInfoFontStyle4OutlineColor = 329,

  NeighborhoodInfoFontStyle5Color = 330,

  NeighborhoodInfoFontStyle5OutlineColor = 331,

  OceanColor = 332,

  OceanDisplayClass1Color = 333,

  OceanDisplayClass1FontStyleColor = 334,

  OceanDisplayClass1FontStyleOutlineColor = 335,

  OceanDisplayClass2Color = 336,

  OceanDisplayClass2FontStyleColor = 337,

  OceanDisplayClass2FontStyleOutlineColor = 338,

  OceanDisplayClass3Color = 339,

  OceanDisplayClass3FontStyleColor = 340,

  OceanDisplayClass3FontStyleOutlineColor = 341,

  OceanDisplayClass4Color = 342,

  OceanDisplayClass4FontStyleColor = 343,

  OceanDisplayClass4FontStyleOutlineColor = 344,

  OceanDisplayClass5Color = 345,

  OceanDisplayClass5FontStyleColor = 346,

  OceanDisplayClass5FontStyleOutlineColor = 347,

  OceanDisplayClass6Color = 348,

  OceanDisplayClass6FontStyleColor = 349,

  OceanDisplayClass6FontStyleOutlineColor = 350,

  OceanDisplayClass7Color = 351,

  OceanDisplayClass7FontStyleColor = 352,

  OceanDisplayClass7FontStyleOutlineColor = 353,

  OceanDisplayClass8Color = 354,

  OceanDisplayClass8FontStyleColor = 355,

  OceanDisplayClass8FontStyleOutlineColor = 356,

  OceanFontStyleColor = 357,

  OceanFontStyleOutlineColor = 358,

  PanoramaCoverageColor = 359,

  PanoramaCoverageOutlineColor = 360,

  PanoramaHighlightPrimaryColor = 361,

  PanoramaHighlightSecondaryColor = 362,

  PanoramaRasterCoverageColor = 363,

  PanoramaRasterCoverageOutlineColor = 364,

  PanoramaRouteColor = 365,

  PanoramaRouteSecondaryColor = 366,

  PanoramaRouteArrowColor = 367,

  PanoramaRouteArrowHighlightColor = 368,

  PanoramaStreetColor = 369,

  PanoramaStreetFontStyleColor = 370,

  PanoramaStreetFontStyleOutlineColor = 371,

  ParkColor = 372,

  ParkInfoFontStyleColor = 373,

  ParkInfoFontStyleOutlineColor = 374,

  PedestrianAreaColor = 375,

  PedestrianAreaInfoFontStyleColor = 376,

  PedestrianAreaInfoFontStyleOutlineColor = 377,

  PointOfInterest24hourFontStyleColor = 378,

  PointOfInterest24hourFontStyleOutlineColor = 379,

  PointOfInterestFontStyleColor = 380,

  PointOfInterestFontStyleOutlineColor = 381,

  PointOfInterestFuelTypeFontStyleColor = 382,

  PointOfInterestFuelTypeFontStyleOutlineColor = 383,

  RailFontStyleColor = 384,

  RailFontStyleOutlineColor = 385,

  RailwayStreetPolylineAttributeArrowColor = 386,

  RailwayStreetPolylineAttributeArrowTollColor = 387,

  RailwayStreetPolylineAttributeArrowUnpavedColor = 388,

  RailwayStreetPolylineAttributeBridgeColor = 389,

  RailwayStreetPolylineAttributeTollCenterlineColor = 390,

  RailwayStreetPolylineAttributeTollColor = 391,

  RailwayStreetPolylineAttributeTollOutlineColor = 392,

  RailwayStreetPolylineAttributeTollThinColor = 393,

  RailwayStreetPolylineAttributeTollTunnelColor = 394,

  RailwayStreetPolylineAttributeUnpavedColor = 395,

  RailwayStreetPolylineAttributeUnpavedOutlineColor = 396,

  RailwayStreetPolylineAttributeUnpavedThinColor = 397,

  RailyardColor = 398,

  RailyardInfoFontStyleColor = 399,

  RailyardInfoFontStyleOutlineColor = 400,

  RemainingRangeEVGradientColorInner = 401,

  RemainingRangeEVGradientColorOuter = 402,

  RemainingRangeEVLineColor = 403,

  RemainingRangeEVOutlineColor = 404,

  RiverColor = 405,

  RiverDisplayClass1Color = 406,

  RiverDisplayClass1FontStyleColor = 407,

  RiverDisplayClass1FontStyleOutlineColor = 408,

  RiverDisplayClass2Color = 409,

  RiverDisplayClass2FontStyleColor = 410,

  RiverDisplayClass2FontStyleOutlineColor = 411,

  RiverDisplayClass3Color = 412,

  RiverDisplayClass3FontStyleColor = 413,

  RiverDisplayClass3FontStyleOutlineColor = 414,

  RiverDisplayClass4Color = 415,

  RiverDisplayClass4FontStyleColor = 416,

  RiverDisplayClass4FontStyleOutlineColor = 417,

  RiverDisplayClass5Color = 418,

  RiverDisplayClass5FontStyleColor = 419,

  RiverDisplayClass5FontStyleOutlineColor = 420,

  RiverDisplayClass6Color = 421,

  RiverDisplayClass6FontStyleColor = 422,

  RiverDisplayClass6FontStyleOutlineColor = 423,

  RiverDisplayClass7Color = 424,

  RiverDisplayClass7FontStyleColor = 425,

  RiverDisplayClass7FontStyleOutlineColor = 426,

  RiverDisplayClass8Color = 427,

  RiverDisplayClass8FontStyleColor = 428,

  RiverDisplayClass8FontStyleOutlineColor = 429,

  RiverFontStyleColor = 430,

  RiverFontStyleOutlineColor = 431,

  RoadSignFontStyleColor = 432,

  RoadSignFontStyleOutlineColor = 433,

  RouteStyle1BillboardFontStyleColor = 434,

  RouteStyle1BillboardFontStyleOutlineColor = 435,

  RunwayColor = 436,

  SSAOColor = 437,

  SeaFontStyleColor = 438,

  SeaFontStyleOutlineColor = 439,

  ShoppingComplexColor = 440,

  ShoppingComplexInfoFontStyleColor = 441,

  ShoppingComplexInfoFontStyleOutlineColor = 442,

  SkyColorBottom = 443,

  SkyColorIntermediate = 444,

  SkyColorTop = 445,

  SportsComplexColor = 446,

  SportsComplexInfoFontStyleColor = 447,

  SportsComplexInfoFontStyleOutlineColor = 448,

  StateAbbreviationLabelFontStyleColor = 449,

  StateAbbreviationLabelFontStyleOutlineColor = 450,

  StateBoundaryBackgroundColor = 451,

  StateBoundaryColor = 452,

  StateBoundaryDisputedBackgroundColor = 453,

  StateBoundaryDisputedColor = 454,

  StateLabelFontStyleColor = 455,

  StateLabelFontStyleOutlineColor = 456,

  StreetCategory0CenterLineColor = 457,

  StreetCategory0CenterLineTunnelColor = 458,

  StreetCategory0Color = 459,

  StreetCategory0FontStyleColor = 460,

  StreetCategory0FontStyleOutlineColor = 461,

  StreetCategory0OutlineColor = 462,

  StreetCategory0StreetPolylineAttributeArrowColor = 463,

  StreetCategory0StreetPolylineAttributeArrowTollColor = 464,

  StreetCategory0StreetPolylineAttributeArrowUnpavedColor = 465,

  StreetCategory0StreetPolylineAttributeBridgeColor = 466,

  StreetCategory0StreetPolylineAttributeTollCenterlineColor = 467,

  StreetCategory0StreetPolylineAttributeTollColor = 468,

  StreetCategory0StreetPolylineAttributeTollOutlineColor = 469,

  StreetCategory0StreetPolylineAttributeTollThinColor = 470,

  StreetCategory0StreetPolylineAttributeTollTunnelColor = 471,

  StreetCategory0StreetPolylineAttributeUnpavedColor = 472,

  StreetCategory0StreetPolylineAttributeUnpavedOutlineColor = 473,

  StreetCategory0StreetPolylineAttributeUnpavedThinColor = 474,

  StreetCategory0ThinColor = 475,

  StreetCategory0TunnelColor = 476,

  StreetCategory1Color = 477,

  StreetCategory1FontStyleColor = 478,

  StreetCategory1FontStyleOutlineColor = 479,

  StreetCategory1OutlineColor = 480,

  StreetCategory1RoadSignFontStyleColor = 481,

  StreetCategory1RoadSignFontStyleOutlineColor = 482,

  StreetCategory1StreetPolylineAttributeArrowColor = 483,

  StreetCategory1StreetPolylineAttributeArrowTollColor = 484,

  StreetCategory1StreetPolylineAttributeArrowUnpavedColor = 485,

  StreetCategory1StreetPolylineAttributeBridgeColor = 486,

  StreetCategory1StreetPolylineAttributeTollCenterlineColor = 487,

  StreetCategory1StreetPolylineAttributeTollColor = 488,

  StreetCategory1StreetPolylineAttributeTollOutlineColor = 489,

  StreetCategory1StreetPolylineAttributeTollThinColor = 490,

  StreetCategory1StreetPolylineAttributeTollTunnelColor = 491,

  StreetCategory1StreetPolylineAttributeUnpavedColor = 492,

  StreetCategory1StreetPolylineAttributeUnpavedOutlineColor = 493,

  StreetCategory1StreetPolylineAttributeUnpavedThinColor = 494,

  StreetCategory1ThinColor = 495,

  StreetCategory1TunnelColor = 496,

  StreetCategory2Color = 497,

  StreetCategory2FontStyleColor = 498,

  StreetCategory2FontStyleOutlineColor = 499,

  StreetCategory2OutlineColor = 500,

  StreetCategory2RoadSignFontStyleColor = 501,

  StreetCategory2RoadSignFontStyleOutlineColor = 502,

  StreetCategory2StreetPolylineAttributeArrowColor = 503,

  StreetCategory2StreetPolylineAttributeArrowTollColor = 504,

  StreetCategory2StreetPolylineAttributeArrowUnpavedColor = 505,

  StreetCategory2StreetPolylineAttributeBridgeColor = 506,

  StreetCategory2StreetPolylineAttributeTollCenterlineColor = 507,

  StreetCategory2StreetPolylineAttributeTollColor = 508,

  StreetCategory2StreetPolylineAttributeTollOutlineColor = 509,

  StreetCategory2StreetPolylineAttributeTollThinColor = 510,

  StreetCategory2StreetPolylineAttributeTollTunnelColor = 511,

  StreetCategory2StreetPolylineAttributeUnpavedColor = 512,

  StreetCategory2StreetPolylineAttributeUnpavedOutlineColor = 513,

  StreetCategory2StreetPolylineAttributeUnpavedThinColor = 514,

  StreetCategory2ThinColor = 515,

  StreetCategory2TunnelColor = 516,

  StreetCategory3Color = 517,

  StreetCategory3FontStyleColor = 518,

  StreetCategory3FontStyleOutlineColor = 519,

  StreetCategory3OutlineColor = 520,

  StreetCategory3RoadSignFontStyleColor = 521,

  StreetCategory3RoadSignFontStyleOutlineColor = 522,

  StreetCategory3StreetPolylineAttributeArrowColor = 523,

  StreetCategory3StreetPolylineAttributeArrowTollColor = 524,

  StreetCategory3StreetPolylineAttributeArrowUnpavedColor = 525,

  StreetCategory3StreetPolylineAttributeBridgeColor = 526,

  StreetCategory3StreetPolylineAttributeTollCenterlineColor = 527,

  StreetCategory3StreetPolylineAttributeTollColor = 528,

  StreetCategory3StreetPolylineAttributeTollOutlineColor = 529,

  StreetCategory3StreetPolylineAttributeTollThinColor = 530,

  StreetCategory3StreetPolylineAttributeTollTunnelColor = 531,

  StreetCategory3StreetPolylineAttributeUnpavedColor = 532,

  StreetCategory3StreetPolylineAttributeUnpavedOutlineColor = 533,

  StreetCategory3StreetPolylineAttributeUnpavedThinColor = 534,

  StreetCategory3ThinColor = 535,

  StreetCategory3TunnelColor = 536,

  StreetCategory4Color = 537,

  StreetCategory4FontStyleColor = 538,

  StreetCategory4FontStyleOutlineColor = 539,

  StreetCategory4OutlineColor = 540,

  StreetCategory4RoadSignFontStyleColor = 541,

  StreetCategory4RoadSignFontStyleOutlineColor = 542,

  StreetCategory4StreetPolylineAttributeArrowColor = 543,

  StreetCategory4StreetPolylineAttributeArrowTollColor = 544,

  StreetCategory4StreetPolylineAttributeArrowUnpavedColor = 545,

  StreetCategory4StreetPolylineAttributeBridgeColor = 546,

  StreetCategory4StreetPolylineAttributeTollCenterlineColor = 547,

  StreetCategory4StreetPolylineAttributeTollColor = 548,

  StreetCategory4StreetPolylineAttributeTollOutlineColor = 549,

  StreetCategory4StreetPolylineAttributeTollThinColor = 550,

  StreetCategory4StreetPolylineAttributeTollTunnelColor = 551,

  StreetCategory4StreetPolylineAttributeUnpavedColor = 552,

  StreetCategory4StreetPolylineAttributeUnpavedOutlineColor = 553,

  StreetCategory4StreetPolylineAttributeUnpavedThinColor = 554,

  StreetCategory4ThinColor = 555,

  StreetCategory4TunnelColor = 556,

  StreetPedestrianColor = 557,

  StreetPedestrianFontStyleColor = 558,

  StreetPedestrianFontStyleOutlineColor = 559,

  StreetPedestrianOutlineColor = 560,

  StreetPedestrianStreetPolylineAttributeArrowColor = 561,

  StreetPedestrianStreetPolylineAttributeArrowTollColor = 562,

  StreetPedestrianStreetPolylineAttributeArrowUnpavedColor = 563,

  StreetPedestrianStreetPolylineAttributeBridgeColor = 564,

  StreetPedestrianStreetPolylineAttributeTollCenterlineColor = 565,

  StreetPedestrianStreetPolylineAttributeTollColor = 566,

  StreetPedestrianStreetPolylineAttributeTollOutlineColor = 567,

  StreetPedestrianStreetPolylineAttributeTollThinColor = 568,

  StreetPedestrianStreetPolylineAttributeTollTunnelColor = 569,

  StreetPedestrianStreetPolylineAttributeUnpavedColor = 570,

  StreetPedestrianStreetPolylineAttributeUnpavedOutlineColor = 571,

  StreetPedestrianStreetPolylineAttributeUnpavedThinColor = 572,

  StreetPedestrianThinColor = 573,

  StreetPedestrianTunnelColor = 574,

  StreetWalkwayColor = 575,

  StreetWalkwayFontStyleColor = 576,

  StreetWalkwayFontStyleOutlineColor = 577,

  StreetWalkwayOutlineColor = 578,

  StreetWalkwayStreetPolylineAttributeArrowColor = 579,

  StreetWalkwayStreetPolylineAttributeArrowTollColor = 580,

  StreetWalkwayStreetPolylineAttributeArrowUnpavedColor = 581,

  StreetWalkwayStreetPolylineAttributeBridgeColor = 582,

  StreetWalkwayStreetPolylineAttributeTollCenterlineColor = 583,

  StreetWalkwayStreetPolylineAttributeTollColor = 584,

  StreetWalkwayStreetPolylineAttributeTollOutlineColor = 585,

  StreetWalkwayStreetPolylineAttributeTollThinColor = 586,

  StreetWalkwayStreetPolylineAttributeTollTunnelColor = 587,

  StreetWalkwayStreetPolylineAttributeUnpavedColor = 588,

  StreetWalkwayStreetPolylineAttributeUnpavedOutlineColor = 589,

  StreetWalkwayStreetPolylineAttributeUnpavedThinColor = 590,

  StreetWalkwayThinColor = 591,

  StreetWalkwayTunnelColor = 592,

  TMC_INCIDENTBLOCKINGColor = 593,

  TMC_INCIDENTBLOCKINGSelectedColor = 594,

  TMC_INCIDENTHIGHColor = 595,

  TMC_INCIDENTHIGHSelectedColor = 596,

  TMC_INCIDENTNORMALColor = 597,

  TMC_INCIDENTNORMALSelectedColor = 598,

  TMC_INCIDENTVERY_HIGHColor = 599,

  TMC_INCIDENTVERY_HIGHSelectedColor = 600,

  TransitAerialDefaultColor = 601,

  TransitBackgroundColor = 602,

  TransitBlendColor = 603,

  TransitBusExpressDefaultColor = 604,

  TransitBusIntercityDefaultColor = 605,

  TransitBusPublicDefaultColor = 606,

  TransitBusTouristicDefaultColor = 607,

  TransitHighlightedBackgroundColor = 608,

  TransitHighlightedFontOutlineColor = 609,

  TransitInclinedDefaultColor = 610,

  TransitMonorailDefaultColor = 611,

  TransitRailCityMetroDefaultColor = 612,

  TransitRailLightDefaultColor = 613,

  TransitRailRegionalDefaultColor = 614,

  TransitStopFontStyleColor = 615,

  TransitStopFontStyleOutlineColor = 616,

  TransitTrainHighSpeedDefaultColor = 617,

  TransitTrainIntercityDefaultColor = 618,

  TransitTrainRegionalDefaultColor = 619,

  TransitWaterBackgroundColor = 620,

  TransitWaterDefaultColor = 621,

  TransitWaterHighlightedBackgroundColor = 622,

  TransitWaterHighlightedFontOutlineColor = 623,

  TruckIconFontStyleColor = 624,

  TruckIconFontStyleOutlineColor = 625,

  TruckLineColor = 626,

  UniversityCampusColor = 627,

  UniversityCampusInfoFontStyleColor = 628,

  UniversityCampusInfoFontStyleOutlineColor = 629,

  WaterColor0m = 630,

  WaterColor3000m = 631,

  WoodlandColor = 632,

  WoodlandInfoFontStyleColor = 633,

  WoodlandInfoFontStyleOutlineColor = 634,

  WorldMountainsColor1500m = 635,

  WorldMountainsColor3000m = 636,

  ColorPropertyCount = 637,
}

declare const enum NMASchemeFloatProperty {
  AirportAreaInfoFontStyleOutlineWidth = 0,

  AirportAreaInfoFontStyleSize = 1,

  AllotmentInfoFontStyleOutlineWidth = 2,

  AllotmentInfoFontStyleSize = 3,

  AmusementParkInfoFontStyleOutlineWidth = 4,

  AmusementParkInfoFontStyleSize = 5,

  AnimalParkInfoFontStyleOutlineWidth = 6,

  AnimalParkInfoFontStyleSize = 7,

  AvoidBlockedRouteOutlineWidth = 8,

  AvoidBlockedRouteWidth = 9,

  BayHarbourDisplayClass1FontStyleOutlineWidth = 10,

  BayHarbourDisplayClass1FontStyleSize = 11,

  BayHarbourDisplayClass2FontStyleOutlineWidth = 12,

  BayHarbourDisplayClass2FontStyleSize = 13,

  BayHarbourDisplayClass3FontStyleOutlineWidth = 14,

  BayHarbourDisplayClass3FontStyleSize = 15,

  BayHarbourDisplayClass4FontStyleOutlineWidth = 16,

  BayHarbourDisplayClass4FontStyleSize = 17,

  BayHarbourDisplayClass5FontStyleOutlineWidth = 18,

  BayHarbourDisplayClass5FontStyleSize = 19,

  BayHarbourDisplayClass6FontStyleOutlineWidth = 20,

  BayHarbourDisplayClass6FontStyleSize = 21,

  BayHarbourDisplayClass7FontStyleOutlineWidth = 22,

  BayHarbourDisplayClass7FontStyleSize = 23,

  BayHarbourDisplayClass8FontStyleOutlineWidth = 24,

  BayHarbourDisplayClass8FontStyleSize = 25,

  BayHarbourFontStyleOutlineWidth = 26,

  BayHarbourFontStyleSize = 27,

  BeachInfoFontStyleOutlineWidth = 28,

  BeachInfoFontStyleSize = 29,

  BillboardAdjacentFontStyleOutlineWidth = 30,

  BillboardAdjacentFontStyleSize = 31,

  BillboardAdjacentOutlineWidth = 32,

  BillboardAdjacentPointerHeight = 33,

  BillboardOffRouteFontStyleOutlineWidth = 34,

  BillboardOffRouteFontStyleSize = 35,

  BillboardOffRouteOutlineWidth = 36,

  BillboardOffRoutePointerHeight = 37,

  BuildingAddressFontStyleOutlineWidth = 38,

  BuildingAddressFontStyleSize = 39,

  BuildingInfoFontStyleOutlineWidth = 40,

  BuildingInfoFontStyleSize = 41,

  BuiltupBorderBackgroundWidth = 42,

  BuiltupBorderWidth = 43,

  CanalWaterChannelDisplayClass1FontStyleOutlineWidth = 44,

  CanalWaterChannelDisplayClass1FontStyleSize = 45,

  CanalWaterChannelDisplayClass1Width = 46,

  CanalWaterChannelDisplayClass2FontStyleOutlineWidth = 47,

  CanalWaterChannelDisplayClass2FontStyleSize = 48,

  CanalWaterChannelDisplayClass2Width = 49,

  CanalWaterChannelDisplayClass3FontStyleOutlineWidth = 50,

  CanalWaterChannelDisplayClass3FontStyleSize = 51,

  CanalWaterChannelDisplayClass3Width = 52,

  CanalWaterChannelDisplayClass4FontStyleOutlineWidth = 53,

  CanalWaterChannelDisplayClass4FontStyleSize = 54,

  CanalWaterChannelDisplayClass4Width = 55,

  CanalWaterChannelDisplayClass5FontStyleOutlineWidth = 56,

  CanalWaterChannelDisplayClass5FontStyleSize = 57,

  CanalWaterChannelDisplayClass5Width = 58,

  CanalWaterChannelDisplayClass6FontStyleOutlineWidth = 59,

  CanalWaterChannelDisplayClass6FontStyleSize = 60,

  CanalWaterChannelDisplayClass6Width = 61,

  CanalWaterChannelDisplayClass7FontStyleOutlineWidth = 62,

  CanalWaterChannelDisplayClass7FontStyleSize = 63,

  CanalWaterChannelDisplayClass7Width = 64,

  CanalWaterChannelDisplayClass8FontStyleOutlineWidth = 65,

  CanalWaterChannelDisplayClass8FontStyleSize = 66,

  CanalWaterChannelDisplayClass8Width = 67,

  CanalWaterChannelFontStyleOutlineWidth = 68,

  CanalWaterChannelFontStyleSize = 69,

  CanalWaterChannelWidth = 70,

  CemeteryInfoFontStyleOutlineWidth = 71,

  CemeteryInfoFontStyleSize = 72,

  CityCenterClass1FontStyleOutlineWidth = 73,

  CityCenterClass1FontStyleSize = 74,

  CityCenterClass2FontStyleOutlineWidth = 75,

  CityCenterClass2FontStyleSize = 76,

  CityCenterClass3FontStyleOutlineWidth = 77,

  CityCenterClass3FontStyleSize = 78,

  CityCenterClass4FontStyleOutlineWidth = 79,

  CityCenterClass4FontStyleSize = 80,

  CityCenterClass5FontStyleOutlineWidth = 81,

  CityCenterClass5FontStyleSize = 82,

  CityCenterDistrictFontStyleOutlineWidth = 83,

  CityCenterDistrictFontStyleSize = 84,

  CityCenterHamletFontStyleOutlineWidth = 85,

  CityCenterHamletFontStyleSize = 86,

  CongestionZoneInfoFontStyleOutlineWidth = 87,

  CongestionZoneInfoFontStyleSize = 88,

  ContinentLabelFontStyleOutlineWidth = 89,

  ContinentLabelFontStyleSize = 90,

  CountryBoundaryBackgroundWidth = 91,

  CountryBoundaryWidth = 92,

  CountryBoundaryDisputedBackgroundWidth = 93,

  CountryBoundaryDisputedWidth = 94,

  CountrySideLabelFontStyleOutlineWidth = 95,

  CountrySideLabelFontStyleSize = 96,

  EnvironmentalZoneInfoFontStyleOutlineWidth = 97,

  EnvironmentalZoneInfoFontStyleSize = 98,

  ExitInfoStreetCategory0FontStyleOutlineWidth = 99,

  ExitInfoStreetCategory0FontStyleSize = 100,

  ExitInfoStreetCategory0OutlineWidth = 101,

  ExitInfoStreetCategory0TollFontStyleOutlineWidth = 102,

  ExitInfoStreetCategory0TollFontStyleSize = 103,

  ExitInfoStreetCategory0TollOutlineWidth = 104,

  ExitInfoStreetCategory1FontStyleOutlineWidth = 105,

  ExitInfoStreetCategory1FontStyleSize = 106,

  ExitInfoStreetCategory1OutlineWidth = 107,

  ExitInfoStreetCategory1TollFontStyleOutlineWidth = 108,

  ExitInfoStreetCategory1TollFontStyleSize = 109,

  ExitInfoStreetCategory1TollOutlineWidth = 110,

  ExitInfoStreetCategory2FontStyleOutlineWidth = 111,

  ExitInfoStreetCategory2FontStyleSize = 112,

  ExitInfoStreetCategory2OutlineWidth = 113,

  ExitInfoStreetCategory2TollFontStyleOutlineWidth = 114,

  ExitInfoStreetCategory2TollFontStyleSize = 115,

  ExitInfoStreetCategory2TollOutlineWidth = 116,

  ExitInfoSimplifiedStreetCategory0OutlineWidth = 117,

  ExitInfoSimplifiedStreetCategory0TollOutlineWidth = 118,

  ExitInfoSimplifiedStreetCategory1OutlineWidth = 119,

  ExitInfoSimplifiedStreetCategory1TollOutlineWidth = 120,

  ExitInfoSimplifiedStreetCategory2OutlineWidth = 121,

  ExitInfoSimplifiedStreetCategory2TollOutlineWidth = 122,

  ExtrudedBuildingsDefaultHeight = 123,

  ExtrudedBuildingsGradientStopHeight = 124,

  FarPlaneHorizonHeightPercent = 125,

  FarPlaneHorizonHeightTiltRange = 126,

  FarPlaneHorizonHeightTiltStart = 127,

  FerryFontStyleOutlineWidth = 128,

  FerryFontStyleSize = 129,

  GolfCourseInfoFontStyleOutlineWidth = 130,

  GolfCourseInfoFontStyleSize = 131,

  HarborAreaInfoFontStyleOutlineWidth = 132,

  HarborAreaInfoFontStyleSize = 133,

  HospitalCampusInfoFontStyleOutlineWidth = 134,

  HospitalCampusInfoFontStyleSize = 135,

  IndustrialComplexInfoFontStyleOutlineWidth = 136,

  IndustrialComplexInfoFontStyleSize = 137,

  IntermittentRiverDisplayClass1FontStyleOutlineWidth = 138,

  IntermittentRiverDisplayClass1FontStyleSize = 139,

  IntermittentRiverDisplayClass1Width = 140,

  IntermittentRiverDisplayClass2FontStyleOutlineWidth = 141,

  IntermittentRiverDisplayClass2FontStyleSize = 142,

  IntermittentRiverDisplayClass2Width = 143,

  IntermittentRiverDisplayClass3FontStyleOutlineWidth = 144,

  IntermittentRiverDisplayClass3FontStyleSize = 145,

  IntermittentRiverDisplayClass3Width = 146,

  IntermittentRiverDisplayClass4FontStyleOutlineWidth = 147,

  IntermittentRiverDisplayClass4FontStyleSize = 148,

  IntermittentRiverDisplayClass4Width = 149,

  IntermittentRiverDisplayClass5FontStyleOutlineWidth = 150,

  IntermittentRiverDisplayClass5FontStyleSize = 151,

  IntermittentRiverDisplayClass5Width = 152,

  IntermittentRiverDisplayClass6FontStyleOutlineWidth = 153,

  IntermittentRiverDisplayClass6FontStyleSize = 154,

  IntermittentRiverDisplayClass6Width = 155,

  IntermittentRiverDisplayClass7FontStyleOutlineWidth = 156,

  IntermittentRiverDisplayClass7FontStyleSize = 157,

  IntermittentRiverDisplayClass7Width = 158,

  IntermittentRiverDisplayClass8FontStyleOutlineWidth = 159,

  IntermittentRiverDisplayClass8FontStyleSize = 160,

  IntermittentRiverDisplayClass8Width = 161,

  IntermittentRiverFontStyleOutlineWidth = 162,

  IntermittentRiverFontStyleSize = 163,

  IntermittentRiverWidth = 164,

  IslandInfoFontStyleOutlineWidth = 165,

  IslandInfoFontStyleSize = 166,

  LakeDisplayClass1FontStyleOutlineWidth = 167,

  LakeDisplayClass1FontStyleSize = 168,

  LakeDisplayClass2FontStyleOutlineWidth = 169,

  LakeDisplayClass2FontStyleSize = 170,

  LakeDisplayClass3FontStyleOutlineWidth = 171,

  LakeDisplayClass3FontStyleSize = 172,

  LakeDisplayClass4FontStyleOutlineWidth = 173,

  LakeDisplayClass4FontStyleSize = 174,

  LakeDisplayClass5FontStyleOutlineWidth = 175,

  LakeDisplayClass5FontStyleSize = 176,

  LakeDisplayClass6FontStyleOutlineWidth = 177,

  LakeDisplayClass6FontStyleSize = 178,

  LakeDisplayClass7FontStyleOutlineWidth = 179,

  LakeDisplayClass7FontStyleSize = 180,

  LakeDisplayClass8FontStyleOutlineWidth = 181,

  LakeDisplayClass8FontStyleSize = 182,

  LakeFontStyleOutlineWidth = 183,

  LakeFontStyleSize = 184,

  LandCoverDesertFontStyleOutlineWidth = 185,

  LandCoverDesertFontStyleSize = 186,

  LandCoverGlacierFontStyleOutlineWidth = 187,

  LandCoverGlacierFontStyleSize = 188,

  LaneWidthM = 189,

  LineOfControlBackgroundWidth = 190,

  LineOfControlWidth = 191,

  MajorCountryLabelFontStyleOutlineWidth = 192,

  MajorCountryLabelFontStyleSize = 193,

  MarkingLaneWidth = 194,

  MilitaryBaseInfoFontStyleOutlineWidth = 195,

  MilitaryBaseInfoFontStyleSize = 196,

  MinorCountryLabelFontStyleOutlineWidth = 197,

  MinorCountryLabelFontStyleSize = 198,

  MotorwayJunctionSimplifiedIconOutlineWidth = 199,

  MountainPeakHeightFontStyleOutlineWidth = 200,

  MountainPeakHeightFontStyleSize = 201,

  MountainPeakInfoFontStyleOutlineWidth = 202,

  MountainPeakInfoFontStyleSize = 203,

  MountainRangeInfoDisplayClass1FontStyleOutlineWidth = 204,

  MountainRangeInfoDisplayClass1FontStyleSize = 205,

  MountainRangeInfoDisplayClass2FontStyleOutlineWidth = 206,

  MountainRangeInfoDisplayClass2FontStyleSize = 207,

  MountainRangeInfoDisplayClass3FontStyleOutlineWidth = 208,

  MountainRangeInfoDisplayClass3FontStyleSize = 209,

  MountainRangeInfoFontStyleOutlineWidth = 210,

  MountainRangeInfoFontStyleSize = 211,

  NationalForestInfoFontStyleOutlineWidth = 212,

  NationalForestInfoFontStyleSize = 213,

  NationalGrasslandInfoFontStyleOutlineWidth = 214,

  NationalGrasslandInfoFontStyleSize = 215,

  NationalHistoricParkInfoFontStyleOutlineWidth = 216,

  NationalHistoricParkInfoFontStyleSize = 217,

  NationalParkInfoFontStyleOutlineWidth = 218,

  NationalParkInfoFontStyleSize = 219,

  NationalRecreationAreaInfoFontStyleOutlineWidth = 220,

  NationalRecreationAreaInfoFontStyleSize = 221,

  NationalStateParkInfoFontStyleOutlineWidth = 222,

  NationalStateParkInfoFontStyleSize = 223,

  NativeReservationInfoFontStyleOutlineWidth = 224,

  NativeReservationInfoFontStyleSize = 225,

  NeighborhoodInfoFontStyle0OutlineWidth = 226,

  NeighborhoodInfoFontStyle0Size = 227,

  NeighborhoodInfoFontStyle1OutlineWidth = 228,

  NeighborhoodInfoFontStyle1Size = 229,

  NeighborhoodInfoFontStyle2OutlineWidth = 230,

  NeighborhoodInfoFontStyle2Size = 231,

  NeighborhoodInfoFontStyle3OutlineWidth = 232,

  NeighborhoodInfoFontStyle3Size = 233,

  NeighborhoodInfoFontStyle4OutlineWidth = 234,

  NeighborhoodInfoFontStyle4Size = 235,

  NeighborhoodInfoFontStyle5OutlineWidth = 236,

  NeighborhoodInfoFontStyle5Size = 237,

  OceanDisplayClass1FontStyleOutlineWidth = 238,

  OceanDisplayClass1FontStyleSize = 239,

  OceanDisplayClass2FontStyleOutlineWidth = 240,

  OceanDisplayClass2FontStyleSize = 241,

  OceanDisplayClass3FontStyleOutlineWidth = 242,

  OceanDisplayClass3FontStyleSize = 243,

  OceanDisplayClass4FontStyleOutlineWidth = 244,

  OceanDisplayClass4FontStyleSize = 245,

  OceanDisplayClass5FontStyleOutlineWidth = 246,

  OceanDisplayClass5FontStyleSize = 247,

  OceanDisplayClass6FontStyleOutlineWidth = 248,

  OceanDisplayClass6FontStyleSize = 249,

  OceanDisplayClass7FontStyleOutlineWidth = 250,

  OceanDisplayClass7FontStyleSize = 251,

  OceanDisplayClass8FontStyleOutlineWidth = 252,

  OceanDisplayClass8FontStyleSize = 253,

  OceanFontStyleOutlineWidth = 254,

  OceanFontStyleSize = 255,

  PanoramaRasterCoverageBlendWidthFactor = 256,

  PanoramaRasterCoverageOutlineWidthFactor = 257,

  PanoramaRouteArrowWidthM = 258,

  PanoramaStreetFontStyleOutlineWidth = 259,

  PanoramaStreetFontStyleSize = 260,

  PanoramaStreetWidthM = 261,

  ParkInfoFontStyleOutlineWidth = 262,

  ParkInfoFontStyleSize = 263,

  PedestrianAreaInfoFontStyleOutlineWidth = 264,

  PedestrianAreaInfoFontStyleSize = 265,

  PointOfInterest24hourFontStyleOutlineWidth = 266,

  PointOfInterest24hourFontStyleSize = 267,

  PointOfInterestFontStyleOutlineWidth = 268,

  PointOfInterestFontStyleSize = 269,

  PointOfInterestFuelTypeFontStyleOutlineWidth = 270,

  PointOfInterestFuelTypeFontStyleSize = 271,

  RailFontStyleOutlineWidth = 272,

  RailFontStyleSize = 273,

  RailyardInfoFontStyleOutlineWidth = 274,

  RailyardInfoFontStyleSize = 275,

  RemainingRangeEVLineWidth = 276,

  RemainingRangeEVOutlineWidth = 277,

  RiverDisplayClass1FontStyleOutlineWidth = 278,

  RiverDisplayClass1FontStyleSize = 279,

  RiverDisplayClass1Width = 280,

  RiverDisplayClass2FontStyleOutlineWidth = 281,

  RiverDisplayClass2FontStyleSize = 282,

  RiverDisplayClass2Width = 283,

  RiverDisplayClass3FontStyleOutlineWidth = 284,

  RiverDisplayClass3FontStyleSize = 285,

  RiverDisplayClass3Width = 286,

  RiverDisplayClass4FontStyleOutlineWidth = 287,

  RiverDisplayClass4FontStyleSize = 288,

  RiverDisplayClass4Width = 289,

  RiverDisplayClass5FontStyleOutlineWidth = 290,

  RiverDisplayClass5FontStyleSize = 291,

  RiverDisplayClass5Width = 292,

  RiverDisplayClass6FontStyleOutlineWidth = 293,

  RiverDisplayClass6FontStyleSize = 294,

  RiverDisplayClass6Width = 295,

  RiverDisplayClass7FontStyleOutlineWidth = 296,

  RiverDisplayClass7FontStyleSize = 297,

  RiverDisplayClass7Width = 298,

  RiverDisplayClass8FontStyleOutlineWidth = 299,

  RiverDisplayClass8FontStyleSize = 300,

  RiverDisplayClass8Width = 301,

  RiverFontStyleOutlineWidth = 302,

  RiverFontStyleSize = 303,

  RiverWidth = 304,

  RoadSignFontStyleOutlineWidth = 305,

  RoadSignFontStyleSize = 306,

  RouteStyle1BillboardFontStyleOutlineWidth = 307,

  RouteStyle1BillboardFontStyleSize = 308,

  RouteStyle1Width = 309,

  RouteStyle10Width = 310,

  RouteStyle11Width = 311,

  RouteStyle12Width = 312,

  RouteStyle13Width = 313,

  RouteStyle14Width = 314,

  RouteStyle15Width = 315,

  RouteStyle16Width = 316,

  RouteStyle17Width = 317,

  RouteStyle18Width = 318,

  RouteStyle19Width = 319,

  RouteStyle2Width = 320,

  RouteStyle20Width = 321,

  RouteStyle21Width = 322,

  RouteStyle22Width = 323,

  RouteStyle23Width = 324,

  RouteStyle24Width = 325,

  RouteStyle3Width = 326,

  RouteStyle4Width = 327,

  RouteStyle5Width = 328,

  RouteStyle6Width = 329,

  RouteStyle7Width = 330,

  RouteStyle8Width = 331,

  RouteStyle9Width = 332,

  SeaFontStyleOutlineWidth = 333,

  SeaFontStyleSize = 334,

  ShoppingComplexInfoFontStyleOutlineWidth = 335,

  ShoppingComplexInfoFontStyleSize = 336,

  SportsComplexInfoFontStyleOutlineWidth = 337,

  SportsComplexInfoFontStyleSize = 338,

  StateAbbreviationLabelFontStyleOutlineWidth = 339,

  StateAbbreviationLabelFontStyleSize = 340,

  StateBoundaryBackgroundWidth = 341,

  StateBoundaryWidth = 342,

  StateBoundaryDisputedBackgroundWidth = 343,

  StateBoundaryDisputedWidth = 344,

  StateLabelFontStyleOutlineWidth = 345,

  StateLabelFontStyleSize = 346,

  StreetCategory0CenterLineWidth = 347,

  StreetCategory0FontStyleOutlineWidth = 348,

  StreetCategory0FontStyleSize = 349,

  StreetCategory0OutlineWidth = 350,

  StreetCategory0Width = 351,

  StreetCategory1FontStyleOutlineWidth = 352,

  StreetCategory1FontStyleSize = 353,

  StreetCategory1OutlineWidth = 354,

  StreetCategory1RoadSignFontStyleOutlineWidth = 355,

  StreetCategory1RoadSignFontStyleSize = 356,

  StreetCategory1Width = 357,

  StreetCategory2FontStyleOutlineWidth = 358,

  StreetCategory2FontStyleSize = 359,

  StreetCategory2OutlineWidth = 360,

  StreetCategory2RoadSignFontStyleOutlineWidth = 361,

  StreetCategory2RoadSignFontStyleSize = 362,

  StreetCategory2Width = 363,

  StreetCategory3FontStyleOutlineWidth = 364,

  StreetCategory3FontStyleSize = 365,

  StreetCategory3OutlineWidth = 366,

  StreetCategory3RoadSignFontStyleOutlineWidth = 367,

  StreetCategory3RoadSignFontStyleSize = 368,

  StreetCategory3Width = 369,

  StreetCategory4FontStyleOutlineWidth = 370,

  StreetCategory4FontStyleSize = 371,

  StreetCategory4OutlineWidth = 372,

  StreetCategory4RoadSignFontStyleOutlineWidth = 373,

  StreetCategory4RoadSignFontStyleSize = 374,

  StreetCategory4Width = 375,

  StreetPedestrianFontStyleOutlineWidth = 376,

  StreetPedestrianFontStyleSize = 377,

  StreetPedestrianOutlineWidth = 378,

  StreetPedestrianWidth = 379,

  StreetWalkwayFontStyleOutlineWidth = 380,

  StreetWalkwayFontStyleSize = 381,

  StreetWalkwayOutlineWidth = 382,

  StreetWalkwayWidth = 383,

  TransitStopFontStyleOutlineWidth = 384,

  TransitStopFontStyleSize = 385,

  TruckIconFontStyleOutlineWidth = 386,

  TruckIconFontStyleSize = 387,

  UniversityCampusInfoFontStyleOutlineWidth = 388,

  UniversityCampusInfoFontStyleSize = 389,

  WoodlandInfoFontStyleOutlineWidth = 390,

  WoodlandInfoFontStyleSize = 391,

  ZoneBorderWidth = 392,

  FloatPropertyCount = 393,
}

declare const enum NMASchemeIntegerProperty {
  AreaIconSize = 0,

  BuiltupAreaMinPixelHeight = 1,

  BuiltupAreaMinPixelWidth = 2,

  ElevationMapHeight0 = 3,

  ElevationMapHeight1 = 4,

  ElevationMapHeight2 = 5,

  ElevationMapHeight3 = 6,

  ElevationMapHeight4 = 7,

  ElevationMapHeight5 = 8,

  ElevationMapHeight6 = 9,

  ElevationMapHeight7 = 10,

  ElevationMapNumHeights = 11,

  ElevationMapRangedScale0MaxHeight = 12,

  ElevationMapRangedScale1MaxHeight = 13,

  ElevationMapRangedScale2MaxHeight = 14,

  ElevationMapRangedScale3MaxHeight = 15,

  FogHeight = 16,

  MountainPeakIconSize = 17,

  PanoramaCoverageOutlineWidth = 18,

  PanoramaCoverageWidth = 19,

  PedestrianPointIconSize = 20,

  PointOfInterest24hourIconSize = 21,

  PointOfInterestFuelTypeIconSize = 22,

  PointOfInterestGeneralIconSize = 23,

  TrafficStyleNoRouteStrt0Width = 24,

  TrafficStyleNoRouteStrt1Width = 25,

  TrafficStyleNoRouteStrt2Width = 26,

  TrafficStyleNoRouteStrt3Width = 27,

  TrafficStyleNoRouteStrt4Width = 28,

  TrafficStyleOffRouteStrt0Width = 29,

  TrafficStyleOffRouteStrt1Width = 30,

  TrafficStyleOffRouteStrt2Width = 31,

  TrafficStyleOffRouteStrt3Width = 32,

  TrafficStyleOffRouteStrt4Width = 33,

  TrafficStyleOnRouteStrt0Width = 34,

  TrafficStyleOnRouteStrt1Width = 35,

  TrafficStyleOnRouteStrt2Width = 36,

  TrafficStyleOnRouteStrt3Width = 37,

  TrafficStyleOnRouteStrt4Width = 38,

  TrafficStylePreviousRouteStrt0Width = 39,

  TrafficStylePreviousRouteStrt1Width = 40,

  TrafficStylePreviousRouteStrt2Width = 41,

  TrafficStylePreviousRouteStrt3Width = 42,

  TrafficStylePreviousRouteStrt4Width = 43,

  TransitAerialWidth = 44,

  TransitBusExpressWidth = 45,

  TransitBusIntercityWidth = 46,

  TransitBusPublicWidth = 47,

  TransitBusTouristicWidth = 48,

  TransitInclinedWidth = 49,

  TransitMonorailWidth = 50,

  TransitOutlineWidth = 51,

  TransitRailCityMetroWidth = 52,

  TransitRailLightWidth = 53,

  TransitRailRegionalWidth = 54,

  TransitTrainHighSpeedWidth = 55,

  TransitTrainIntercityWidth = 56,

  TransitTrainRegionalWidth = 57,

  TransitWaterWidth = 58,

  TransitAccessAirlineIconSize = 59,

  TransitAccessIconSize = 60,

  TruckIconIconSize = 61,

  TruckLineCategory0Width = 62,

  TruckLineCategory1Width = 63,

  TruckLineCategory2Width = 64,

  TruckLineCategory3Width = 65,

  TruckLineCategory4Width = 66,

  IntegerPropertyCount = 67,
}

declare class NMASchoolZoneInfo extends NSObject {
  static alloc(): NMASchoolZoneInfo; // inherited from NSObject

  static new(): NMASchoolZoneInfo; // inherited from NSObject

  readonly speedLimit: number;

  readonly timeBegin: Date;

  readonly timeEnd: Date;
}

declare class NMASchoolZoneNotification extends NSObject {
  static alloc(): NMASchoolZoneNotification; // inherited from NSObject

  static new(): NMASchoolZoneNotification; // inherited from NSObject

  readonly distance: number;

  readonly isOnRoute: boolean;

  readonly roadElement: NMARoadElement;

  readonly schoolZoneInfo: NMASchoolZoneInfo;
}

declare class NMASchoolZoneWarner extends NSObject {
  static alloc(): NMASchoolZoneWarner; // inherited from NSObject

  static new(): NMASchoolZoneWarner; // inherited from NSObject

  static schoolZoneInfoForRoadElement(roadElement: NMARoadElement): NMASchoolZoneInfo;

  static schoolZoneInfoForRoadElementTime(roadElement: NMARoadElement, time: Date): NMASchoolZoneInfo;

  delegate: NMASchoolZoneWarnerDelegate;

  start(): void;

  stop(): void;
}

interface NMASchoolZoneWarnerDelegate extends NSObjectProtocol {
  schoolZoneWarnerDidDetectSchoolZone?(schoolZoneWarner: NMASchoolZoneWarner, schoolZoneNotification: NMASchoolZoneNotification): void;

  schoolZoneWarnerDidUpdateSchoolZone?(schoolZoneWarner: NMASchoolZoneWarner, schoolZoneInfo: NMASchoolZoneInfo): void;
}
declare var NMASchoolZoneWarnerDelegate: {
  prototype: NMASchoolZoneWarnerDelegate;
};

declare const enum NMASignCategory {
  Unknown = 0,

  RegulatorySign = 1,

  InformativeSign = 2,

  WarningSign = 3,
}

declare const enum NMASignDirection {
  Unknown = 0,

  Positive = 1,

  Negative = 2,

  Both = 3,
}

declare const enum NMASignLocation {
  Unknown = 0,

  Right = 1,

  Left = 2,

  Overhead = 3,
}

declare const enum NMASignSubcategory {
  Unknown = 0,

  PrioritySign = 1,
}

declare const enum NMASignTransportType {
  Unknown = 0,

  Truck = 1,

  HeavyTruck = 2,

  Bus = 3,

  AutoTrailer = 4,

  Motorhome = 5,

  Motorcycle = 6,
}

declare const enum NMASignWeatherAffects {
  Unknown = 0,

  Rain = 1,

  Snow = 2,

  Fog = 3,
}

declare class NMASignpost extends NSObject {
  static alloc(): NMASignpost; // inherited from NSObject

  static new(): NMASignpost; // inherited from NSObject

  readonly backgroundColor: UIColor;

  readonly exitDirections: NSArray<NMASignpostLocalizedLabel>;

  readonly exitIcon: NMAImage;

  readonly exitNumber: string;

  readonly exitText: string;

  readonly foregroundColor: UIColor;
}

declare class NMASignpostLocalizedLabel extends NSObject {
  static alloc(): NMASignpostLocalizedLabel; // inherited from NSObject

  static new(): NMASignpostLocalizedLabel; // inherited from NSObject

  readonly language: string;

  readonly routeDirection: string;

  readonly routeName: string;

  readonly text: string;
}

declare const enum NMASpeedProfile {
  Default = 0,

  Fast = 1,
}

declare class NMATTSAudioOutput extends NMAAudioOutput {
  static alloc(): NMATTSAudioOutput; // inherited from NSObject

  static audioOutputWithText(text: string): NMATTSAudioOutput;

  static new(): NMATTSAudioOutput; // inherited from NSObject

  pitchMultiplier: number;

  speechRate: number;

  text: string;

  voice: AVSpeechSynthesisVoice;

  constructor(o: { text: string });

  initWithText(text: string): this;
}

declare const enum NMATTSOutputFormat {
  Raw = 0,

  Nuance = 1,
}

declare const enum NMATextFormat {
  HTML = 0,

  Plain = 1,
}

declare const enum NMATollCostEmissionType {
  None = 0,

  EuroI = 1,

  EuroII = 2,

  EuroIII = 3,

  EuroIV = 4,

  EuroV = 5,

  EuroVI = 6,

  EuroEEV = 7,

  ElectricVehicles = 8,
}

declare const enum NMATollCostHybridType {
  None = 0,

  PartlyRunningOnElectricity = 1,
}

declare class NMATollCostOptions extends NSObject {
  static alloc(): NMATollCostOptions; // inherited from NSObject

  static new(): NMATollCostOptions; // inherited from NSObject

  currency: string;

  departure: Date;

  readonly vehicleProfile: NMATollCostVehicleProfile;

  constructor(o: { vehicleProfile: NMATollCostVehicleProfile });

  initWithVehicleProfile(vehicleProfile: NMATollCostVehicleProfile): this;
}

declare class NMATollCostRequest extends NSObject {
  static alloc(): NMATollCostRequest; // inherited from NSObject

  static new(): NMATollCostRequest; // inherited from NSObject

  constructor(o: { route: NMARoute });

  constructor(o: { route: NMARoute; andOptions: NMATollCostOptions });

  cancel(): void;

  initWithRoute(route: NMARoute): this;

  initWithRouteAndOptions(route: NMARoute, options: NMATollCostOptions): this;

  startWithBlock(block: (p1: NMATollCostRequest, p2: NMATollCostResult, p3: NSError) => void): void;

  startWithListener(requestListener: NMATollCostRequestListener): void;
}

declare const enum NMATollCostRequestError {
  NoPermission = 1,

  AlreadyRunning = 2,

  Cancelled = 3,

  InvalidParameters = 4,

  ConnectionError = 5,

  ServerError = 6,

  UnknownError = 7,
}

interface NMATollCostRequestListener extends NSObjectProtocol {
  requestDidCompleteWithResultError(request: NMATollCostRequest, result: NMATollCostResult, error: NSError): void;
}
declare var NMATollCostRequestListener: {
  prototype: NMATollCostRequestListener;
};

declare class NMATollCostResult extends NSObject {
  static alloc(): NMATollCostResult; // inherited from NSObject

  static new(): NMATollCostResult; // inherited from NSObject

  readonly countryTollMap: NSDictionary<string, NSDecimalNumber>;

  readonly tollCost: NSDecimalNumber;

  readonly tollSystemMap: NSDictionary<string, NSDecimalNumber>;
}

declare const enum NMATollCostShippedHazardousGoods {
  None = 0,

  Explosives = 1,

  AnyHazardousMaterial = 2,
}

declare const enum NMATollCostTrailerType {
  None = 0,

  Caravan = 1,

  Trailer = 2,
}

declare const enum NMATollCostTrailersCount {
  VehicleWithoutTrailer = 0,

  VehicleWithOneTrailer = 1,

  VehicleWithTwoTrailers = 2,

  VehicleWithThreeOrMoreTrailers = 3,
}

declare class NMATollCostVehicleProfile extends NSObject {
  static alloc(): NMATollCostVehicleProfile; // inherited from NSObject

  static new(): NMATollCostVehicleProfile; // inherited from NSObject

  commercial: boolean;

  disabledEquipped: boolean;

  emissionType: NMATollCostEmissionType;

  height: number;

  heightAbove1stAxle: number;

  hybridType: NMATollCostHybridType;

  limitedWeight: number;

  passengersCount: number;

  shippedHazardousGoods: NMATollCostShippedHazardousGoods;

  tiresCount: number;

  trailerHeight: number;

  trailerNumberAxles: number;

  trailerType: NMATollCostTrailerType;

  trailersCount: NMATollCostTrailersCount;

  vehicleNumberAxles: number;

  vehicleType: NMATollCostVehicleType;

  vehicleWeight: number;
}

declare const enum NMATollCostVehicleType {
  Motorcycle = 1,

  Auto = 2,

  Truck = 3,

  MotorHome = 4,

  Minibus = 5,

  Bus = 6,

  MotorcycleSidecar = 7,

  Tricyle = 8,

  DeliveryTruck = 9,

  Snowmobile = 10,

  PickUp = 11,

  Tractor = 12,

  Taxi = 13,

  HcmEme = 14,
}

declare const enum NMATrafficAvoidanceMode {
  Dynamic = 0,

  Manual = 1,

  Disabled = 2,
}

declare const enum NMATrafficEnabledRoutingState {
  Off = 0,

  On = 1,

  NotAvailable = 2,
}

declare class NMATrafficEvent extends NSObject {
  static alloc(): NMATrafficEvent; // inherited from NSObject

  static new(): NMATrafficEvent; // inherited from NSObject

  readonly activationDate: Date;

  readonly affectedArea: NMAGeoBoundingBox;

  readonly affectedRoadElements: NSArray<NMARoadElement>;

  readonly affectedStreets: string;

  readonly detailedDescription: string;

  readonly endingStreets: string;

  readonly firstAffectedStreet: string;

  readonly iconOffRoute: NMAImage;

  readonly iconOnRoute: NMAImage;

  readonly isFlow: boolean;

  readonly isHazardWarning: boolean;

  readonly isIncident: boolean;

  readonly isReroutable: boolean;

  readonly isVisible: boolean;

  readonly length: number;

  readonly penalty: number;

  readonly severity: NMATrafficEventSeverity;

  readonly shortText: string;

  readonly speedLimit: number;

  readonly startingStreets: string;

  readonly trafficSpeed: number;

  readonly updateDate: Date;

  readonly valid: boolean;

  distanceToGeoCoordinates(coordinates: NMAGeoCoordinates): number;

  getAffectedStreetsWithCompletion(completion: () => void): void;

  getEndingStreetsWithCompletion(completion: () => void): void;

  getFirstAffectedStreetWithCompletion(completion: () => void): void;

  getStartingStreetsWithCompletion(completion: () => void): void;

  isOnRoute(route: NMARoute): boolean;
}

declare const enum NMATrafficEventSeverity {
  Undefined = 0,

  Normal = 1,

  High = 2,

  VeryHigh = 3,

  Blocking = 4,
}

declare const enum NMATrafficLayer {
  Flow = 1,

  Incidents = 2,

  OnRoute = 4,

  All = 255,
}

declare class NMATrafficManager extends NSObject {
  static alloc(): NMATrafficManager; // inherited from NSObject

  static new(): NMATrafficManager; // inherited from NSObject

  static setRefreshInterval(refreshInterval: number): boolean;

  static sharedTrafficManager(): NMATrafficManager;

  addObserver(observer: NMATrafficManagerObserver): void;

  areHazardWarningsEnabled(): boolean;

  cancelRequest(requestId: number): void;

  disableHazardWarnings(): boolean;

  disableTrafficAutoUpdate(): boolean;

  enableHazardWarningsWithToken(token: string): boolean;

  getDownloadedHazardWarningsWithCompletion(completionBlock: (p1: NSArray<NMATrafficEvent>, p2: NMATrafficRequestError) => void): void;

  getTrafficEventsOnRouteElementsWithCompletion(routeElements: NSArray<NMARouteElement> | NMARouteElement[], completionBlock: (p1: NSArray<NMATrafficEvent>, p2: NMATrafficRequestError) => void): void;

  getTrafficEventsOnRouteWithCompletion(route: NMARoute, completionBlock: (p1: NSArray<NMATrafficEvent>, p2: NMATrafficRequestError) => void): void;

  isTrafficAutoUpdateEnabled(): boolean;

  removeObserver(observer: NMATrafficManagerObserver): void;

  requestTrafficAtGeoCoordinates(coordinates: NMAGeoCoordinates): number;

  requestTrafficAtGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): number;

  requestTrafficOnRoute(route: NMARoute): number;

  requestTrafficOnRouteRadius(route: NMARoute, radius: number): number;
}

interface NMATrafficManagerObserver extends NSObjectProtocol {
  trafficDataDidFinish(): void;
}
declare var NMATrafficManagerObserver: {
  prototype: NMATrafficManagerObserver;
};

declare class NMATrafficNotification extends NSObject {
  static alloc(): NMATrafficNotification; // inherited from NSObject

  static new(): NMATrafficNotification; // inherited from NSObject

  readonly trafficNotificationInfo: NSArray<NMATrafficNotificationInfo>;
}

declare class NMATrafficNotificationInfo extends NSObject {
  static alloc(): NMATrafficNotificationInfo; // inherited from NSObject

  static new(): NMATrafficNotificationInfo; // inherited from NSObject

  readonly affectedArea: NMAGeoBoundingBox;

  readonly affectedLength: number;

  readonly distance: number;

  readonly severity: NMATrafficSeverity;

  readonly travelTime: number;

  readonly travelTimeWithTraffic: number;

  readonly type: NMATrafficNotificationType;
}

declare const enum NMATrafficNotificationType {
  Undefined = 0,

  OnRoute = 1,

  OnHighway = 2,

  NearStart = 3,

  NearStopover = 4,

  NearDestination = 5,
}

declare class NMATrafficObject extends NMAProxyObject {
  static alloc(): NMATrafficObject; // inherited from NSObject

  static new(): NMATrafficObject; // inherited from NSObject

  readonly trafficEvent: NMATrafficEvent;
}

declare const enum NMATrafficPenaltyMode {
  Disabled = 0,

  Optimal = 1,

  AvoidLongTermClosures = 2,
}

declare const enum NMATrafficRequestError {
  None = 0,

  InvalidParameters = 1,

  InvalidOperation = 2,

  Unknown = 3,
}

declare const enum NMATrafficSeverity {
  Undefined = 0,

  Normal = 1,

  High = 2,

  VeryHigh = 3,

  Blocking = 4,
}

declare class NMATrafficSign extends NSObject {
  static alloc(): NMATrafficSign; // inherited from NSObject

  static new(): NMATrafficSign; // inherited from NSObject

  readonly applicableForTransportTypes: NSSet<number>;

  readonly category: NMASignCategory;

  readonly coordinate: NMAGeoCoordinates;

  readonly direction: NMASignDirection;

  readonly duration: string;

  readonly location: NMASignLocation;

  readonly prewarning: string;

  readonly signValue: string;

  readonly subcategory: NMASignSubcategory;

  readonly subtype: number;

  readonly type: number;

  readonly validityTime: string;

  readonly weatherAffects: NMASignWeatherAffects;
}

declare class NMATrafficWarner extends NSObject {
  static alloc(): NMATrafficWarner; // inherited from NSObject

  static new(): NMATrafficWarner; // inherited from NSObject

  delegate: NMATrafficWarnerDelegate;

  clear(): void;

  isTrafficNotificationAhead(trafficNotification: NMATrafficNotification): boolean;

  isTrafficNotificationOnRoute(trafficNotification: NMATrafficNotification, route: NMARoute): boolean;

  start(): void;

  stop(): void;

  trafficNotificationOnCurrentRoute(): NMATrafficNotification;

  trafficNotificationOnRoute(route: NMARoute): NMATrafficNotification;
}

interface NMATrafficWarnerDelegate extends NSObjectProtocol {
  trafficWarnerDidDetectTraffic?(trafficWarner: NMATrafficWarner, trafficNotification: NMATrafficNotification): void;
}
declare var NMATrafficWarnerDelegate: {
  prototype: NMATrafficWarnerDelegate;
};

declare class NMATransitAccess extends NSObject {
  static alloc(): NMATransitAccess; // inherited from NSObject

  static new(): NMATransitAccess; // inherited from NSObject

  readonly location: NMAGeoCoordinates;

  readonly name: string;

  readonly stopId: string;

  readonly uniqueId: string;

  hasTransitType(type: NMATransitType): boolean;
}

declare var NMATransitDeparturesExtendedAttributeId: string;

declare class NMATransitLine extends NSObject {
  static alloc(): NMATransitLine; // inherited from NSObject

  static new(): NMATransitLine; // inherited from NSObject

  readonly color: UIColor;

  readonly informalName: string;

  readonly officialName: string;

  readonly shortName: string;

  readonly systemId: string;

  readonly transitType: NMATransitType;

  readonly uniqueId: string;
}

declare const enum NMATransitLineStyle {
  Solid = 0,

  Dotted = 1,

  Dashed = 2,

  Undefined = 3,
}

declare var NMATransitLinesExtendedAttributeId: string;

declare class NMATransitManager extends NSObject {
  static alloc(): NMATransitManager; // inherited from NSObject

  static new(): NMATransitManager; // inherited from NSObject

  static sharedTransitManager(): NMATransitManager;

  delegate: NMATransitManagerDelegate;

  requestAccessInfoForId(uniqueId: string): void;

  requestInfoForObject(object: NMATransitObject): void;

  requestLineInfoForId(uniqueId: string): void;

  requestStopInfoForId(uniqueId: string): void;

  requestSystemInfoForId(uniqueId: string): void;
}

interface NMATransitManagerDelegate extends NSObjectProtocol {
  transitManagerDidCompleteWithError?(transitManager: NMATransitManager, error: NSError): void;

  transitManagerDidGetAccessInfoForId?(transitManager: NMATransitManager, access: NMATransitAccess, uniqueId: string): void;

  transitManagerDidGetLineInfoForId?(transitManager: NMATransitManager, line: NMATransitLine, uniqueId: string): void;

  transitManagerDidGetStopInfoForId?(transitManager: NMATransitManager, stop: NMATransitStop, uniqueId: string): void;

  transitManagerDidGetSystemInfoForId?(transitManager: NMATransitManager, system: NMATransitSystem, uniqueId: string): void;
}
declare var NMATransitManagerDelegate: {
  prototype: NMATransitManagerDelegate;
};

declare const enum NMATransitManagerError {
  None = 0,

  Busy = 1,

  InvalidParameters = 2,

  NotFound = 3,

  Unknown = 4,
}

declare class NMATransitManeuver extends NMAManeuver {
  static alloc(): NMATransitManeuver; // inherited from NSObject

  static new(): NMATransitManeuver; // inherited from NSObject

  readonly arrivalStopName: string;

  readonly departureStopName: string;

  readonly lineName: string;

  readonly lineStyle: NMATransitLineStyle;

  readonly primaryLineColor: UIColor;

  readonly secondaryLineColor: UIColor;

  readonly systemOfficialName: string;

  readonly systemShortName: string;

  readonly terminusStopName: string;

  readonly transitTravelTime: number;

  readonly transitType: NMATransitType;

  readonly transitTypeName: string;
}

declare class NMATransitObject extends NMAProxyObject {
  static alloc(): NMATransitObject; // inherited from NSObject

  static new(): NMATransitObject; // inherited from NSObject

  readonly type: NMATransitObjectType;

  readonly uniqueId: string;
}

declare const enum NMATransitObjectType {
  Access = 0,

  Line = 1,

  Stop = 2,
}

declare class NMATransitRouteElement extends NSObject {
  static alloc(): NMATransitRouteElement; // inherited from NSObject

  static new(): NMATransitRouteElement; // inherited from NSObject

  readonly arrivalStop: NMATransitRouteStop;

  readonly departureStop: NMATransitRouteStop;

  readonly duration: number;
}

declare class NMATransitRouteSourceAttribution extends NSObject {
  static alloc(): NMATransitRouteSourceAttribution; // inherited from NSObject

  static new(): NMATransitRouteSourceAttribution; // inherited from NSObject

  readonly attribution: string;

  readonly suppliers: NSArray<NMATransitRouteSupplier>;
}

declare class NMATransitRouteStop extends NSObject {
  static alloc(): NMATransitRouteStop; // inherited from NSObject

  static new(): NMATransitRouteStop; // inherited from NSObject

  readonly coordinates: NMAGeoCoordinates;

  readonly identifier: string;

  readonly name: string;
}

declare class NMATransitRouteSupplier extends NSObject {
  static alloc(): NMATransitRouteSupplier; // inherited from NSObject

  static new(): NMATransitRouteSupplier; // inherited from NSObject

  readonly notes: NSArray<NMATransitRouteSupplierNote>;

  readonly title: string;

  readonly url: string;
}

declare class NMATransitRouteSupplierNote extends NSObject {
  static alloc(): NMATransitRouteSupplierNote; // inherited from NSObject

  static new(): NMATransitRouteSupplierNote; // inherited from NSObject

  readonly text: string;

  readonly type: string;

  readonly url: string;

  readonly urlText: string;
}

declare const enum NMATransitRoutingOption {
  AvoidPublicBus = 1,

  AvoidTouristicBus = 2,

  AvoidIntercityBus = 4,

  AvoidExpressBus = 8,

  AvoidMetroRail = 16,

  AvoidLightRail = 32,

  AvoidRegionalRail = 64,

  AvoidRegionalTrain = 128,

  AvoidIntercityTrain = 256,

  AvoidHighSpeedTrain = 512,

  AvoidMonoRail = 1024,

  AvoidAerial = 2048,

  AvoidInclined = 4096,

  AvoidWater = 8192,
}

declare class NMATransitStop extends NSObject {
  static alloc(): NMATransitStop; // inherited from NSObject

  static new(): NMATransitStop; // inherited from NSObject

  readonly informalName: string;

  readonly lineIds: NSArray<string>;

  readonly location: NMAGeoCoordinates;

  readonly officialName: string;

  readonly systemIds: NSArray<string>;

  readonly uniqueId: string;

  hasTransitType(type: NMATransitType): boolean;
}

declare class NMATransitSystem extends NSObject {
  static alloc(): NMATransitSystem; // inherited from NSObject

  static new(): NMATransitSystem; // inherited from NSObject

  readonly companyInformalName: string;

  readonly companyOfficialName: string;

  readonly companyRoutePlannerWebsite: string;

  readonly companyScheduleWebsite: string;

  readonly companyShortName: string;

  readonly companyTelephoneNumber: string;

  readonly companyWebsite: string;

  readonly informalName: string;

  readonly officialName: string;

  readonly shortName: string;

  readonly uniqueId: string;

  readonly website: string;
}

declare const enum NMATransitType {
  PublicBus = 0,

  TouristicBus = 1,

  IntercityBus = 2,

  ExpressBus = 3,

  MetroRail = 4,

  LightRail = 5,

  RegionalRail = 6,

  RegionalTrain = 7,

  IntercityTrain = 8,

  HighSpeedTrain = 9,

  Monorail = 10,

  Aerial = 11,

  Inclined = 12,

  Water = 13,

  Airline = 14,

  Unknown = 15,
}

declare const enum NMATransportMode {
  Car = 0,

  Pedestrian = 1,

  PublicTransport = 2,

  Truck = 5,

  Bike = 7,

  Scooter = 8,

  Bus = 9,
}

declare const enum NMATravelDirection {
  Forward = 0,

  Backward = 1,
}

declare const enum NMATruckAxleGroup {
  Single = 0,

  Tandem = 1,

  Triple = 2,

  Quad = 3,

  Quint = 4,
}

declare class NMATruckRestriction extends NSObject {
  static alloc(): NMATruckRestriction; // inherited from NSObject

  static new(): NMATruckRestriction; // inherited from NSObject

  readonly axleRestriction: NMATruckRestrictionAxle;

  readonly truckHazMatType: NMATruckRestrictionHazMat;

  readonly truckRestrictionType: NMATruckRestrictionType;

  readonly truckTrailerType: NMATruckRestrictionTrailerType;

  readonly truckWeatherType: NMATruckRestrictionWeatherType;

  readonly value: number;

  hasAxleRestriction(): boolean;

  hasHazMatRestriction(): boolean;

  hasTrailerType(): boolean;

  hasValue(): boolean;

  hasWeatherRestriction(): boolean;
}

declare const enum NMATruckRestrictionAxle {
  None = 0,

  TwoOrMore = 1,

  ThreeOrMore = 2,

  FourOrMore = 3,

  FiveOrMore = 4,

  SixOrMore = 5,

  Single = 6,

  Tandem = 7,

  Triple = 8,

  Quad = 9,

  Quint = 10,

  Two = 11,

  Three = 12,

  Four = 13,

  Five = 14,

  Six = 15,

  Seven = 16,

  Unknown = 17,
}

declare const enum NMATruckRestrictionHazMat {
  None = 0,

  Explosives = 1,

  Gas = 2,

  Flammable = 3,

  FlammableSolidCombustible = 4,

  Organic = 5,

  Poison = 6,

  Radioactive = 7,

  Corrosive = 8,

  Other = 9,

  Any = 10,

  Pih = 11,

  HarmfulForWater = 12,

  ExplosiveFlammable = 13,

  TunnelCategoryB = 14,

  TunnelCategoryC = 15,

  TunnelCategoryD = 16,

  TunnelCategoryE = 17,

  Unknown = 18,
}

declare class NMATruckRestrictionNotification extends NSObject {
  static alloc(): NMATruckRestrictionNotification; // inherited from NSObject

  static new(): NMATruckRestrictionNotification; // inherited from NSObject

  readonly isOnRoute: boolean;

  readonly truckRestrictionsInfos: NSArray<NMATruckRestrictionsInfo>;
}

declare const enum NMATruckRestrictionTrailerType {
  None = 0,

  TruckWithOneOrMoreTrailers = 5,

  TruckWithTwoOrMoreTrailers = 6,

  TruckWithThreeOrMoreTrailers = 7,

  SemiOrTractorWithOneOrMoreTrailers = 8,

  TruckWithNoTrailer = 9,

  TruckWithOneTrailer = 10,

  TruckWithTwoTrailers = 11,

  TruckWithThreeTrailers = 12,

  TruckWithFourTrailers = 13,

  StraightTruckWithOneOrMoreTrailers = 14,

  StraightTruckWithTwoOrMoreTrailers = 15,

  StraightTruckWithThreeOrMoreTrailers = 16,

  StraightTruckWithOrWithoutTrailers = 17,

  StraightTruckWithNoTrailer = 18,

  StraightTruckWithOneTrailer = 19,

  StraightTruckWithTwoTrailers = 20,

  StraightTruckWithThreeTrailers = 21,

  StraightTruckWithFourTrailers = 22,

  SemiTruckWithOneOrMoreTrailers = 23,

  SemiTruckWithTwoOrMoreTrailers = 24,

  SemiTruckWithThreeOrMoreTrailers = 25,

  SemiTruckWithOrWithoutTrailers = 26,

  SemiTruckWithNoTrailer = 27,

  SemiTruckWithOneTrailer = 28,

  SemiTruckWithTwoTrailers = 29,

  SemiTruckWithThreeTrailers = 30,

  SemiTruckWithFourTrailers = 31,

  Unknown = 32,
}

declare const enum NMATruckRestrictionType {
  TruckRestriction = 0,

  WeightRestriction = 1,

  HeightRestriction = 2,

  LengthRestriction = 3,

  WidthRestriction = 4,

  WeightPerAxelRestriction = 5,

  KpraLengthRestriction = 6,

  PreferredRoute = 7,

  HazMatPermitRequired = 8,

  SpeedLimit = 9,

  Toll = 10,

  Unknown = 11,
}

declare class NMATruckRestrictionWarner extends NSObject {
  static alloc(): NMATruckRestrictionWarner; // inherited from NSObject

  static new(): NMATruckRestrictionWarner; // inherited from NSObject

  static truckRestrictionsForRoadElement(roadElement: NMARoadElement): NSArray<NMATruckRestriction>;

  static truckRestrictionsForRoadElementRoutingMode(roadElement: NMARoadElement, mode: NMARoutingMode): NSArray<NMATruckRestriction>;

  delegate: NMATruckRestrictionWarnerDelegate;

  start(): void;

  stop(): void;
}

interface NMATruckRestrictionWarnerDelegate extends NSObjectProtocol {
  truckRestrictionWarnerDidDetectTruckRestriction?(truckWarner: NMATruckRestrictionWarner, truckNotification: NMATruckRestrictionNotification): void;

  truckRestrictionWarnerDidUpdateTruckRestriction?(truckWarner: NMATruckRestrictionWarner, truckRestrictions: NSArray<NMATruckRestriction> | NMATruckRestriction[]): void;
}
declare var NMATruckRestrictionWarnerDelegate: {
  prototype: NMATruckRestrictionWarnerDelegate;
};

declare const enum NMATruckRestrictionWeatherType {
  None = 0,

  Rain = 1,

  Snow = 2,

  Fog = 3,

  Unknown = 4,
}

declare class NMATruckRestrictionsInfo extends NSObject {
  static alloc(): NMATruckRestrictionsInfo; // inherited from NSObject

  static new(): NMATruckRestrictionsInfo; // inherited from NSObject

  readonly distance: number;

  readonly roadElement: NMARoadElement;

  readonly truckRestrictions: NSArray<NMATruckRestriction>;
}

declare const enum NMATruckRestrictionsMode {
  NoViolations = 0,

  PenalizeViolations = 1,
}

declare const enum NMATruckType {
  None = 0,

  Truck = 1,

  TractorTruck = 2,
}

declare const enum NMATunnelCategory {
  None = 0,

  B = 1,

  C = 2,

  D = 3,

  E = 4,
}

declare var NMAUnknownWaypointCourse: number;

declare class NMAUserObject extends NMAViewObject {
  static alloc(): NMAUserObject; // inherited from NSObject

  static new(): NMAUserObject; // inherited from NSObject
}

interface NMAVector3d {
  x: number;
  y: number;
  z: number;
}
declare var NMAVector3d: interop.StructType<NMAVector3d>;

declare class NMAVenue3dAccount extends NSObject {
  static alloc(): NMAVenue3dAccount; // inherited from NSObject

  static new(): NMAVenue3dAccount; // inherited from NSObject

  readonly uniqueId: string;
}

declare class NMAVenue3dArea extends NMAVenue3dSpatialObject {
  static alloc(): NMAVenue3dArea; // inherited from NSObject

  static new(): NMAVenue3dArea; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly geoCenter: NMAGeoCoordinates;

  readonly name: string;

  readonly polygon: NMAGeoPolygon;
}

interface NMAVenue3dAuthenticationListener extends NSObjectProtocol {
  didAuthenticateVenueServiceWithResultAndErrorMessage(venueService: NMAVenue3dService, result: boolean, errorMessage: string): void;
}
declare var NMAVenue3dAuthenticationListener: {
  prototype: NMAVenue3dAuthenticationListener;
};

declare class NMAVenue3dBaseLocation extends NSObject {
  static alloc(): NMAVenue3dBaseLocation; // inherited from NSObject

  static new(): NMAVenue3dBaseLocation; // inherited from NSObject

  getArea(): NMAVenue3dArea;

  getGeoCoordinate(): NMAGeoCoordinates;

  getType(): NMAVenue3dBaseLocationType;

  isValid(): boolean;

  setParkingLocation(location: NMAVenue3dBaseLocation): void;
}

declare const enum NMAVenue3dBaseLocationType {
  Space = 0,

  Outdoor = 1,

  Level = 2,

  Other = 3,
}

declare class NMAVenue3dCombinedNavigation extends NSObject {
  static alloc(): NMAVenue3dCombinedNavigation; // inherited from NSObject

  static new(): NMAVenue3dCombinedNavigation; // inherited from NSObject

  readonly currentNavigationType: NMAVenue3dCombinedNavigationType;

  readonly distanceFromStart: number;

  readonly distanceToDestination: number;

  readonly navigationState: NMAVenue3dCombinedNavigationState;

  paused: boolean;

  readonly venueMapLayer: NMAVenue3dMapLayer;

  addListener(listener: NMAVenue3dCombinedNavigationListener): void;

  removeListener(listener: NMAVenue3dCombinedNavigationListener): void;

  simulateForCombinedRouteSpeedDistortionEnabledUpdateInterval(combinedRoute: NMAVenue3dCombinedRoute, speed: number, distortionEnabled: boolean, updateInterval: number): boolean;

  startForCombinedRoute(combinedRoute: NMAVenue3dCombinedRoute): boolean;

  stop(): void;
}

interface NMAVenue3dCombinedNavigationListener extends NSObjectProtocol {
  navigationManagerDidReachDestination?(navigationManager: NMAVenue3dCombinedNavigation): void;

  navigationManagerDidUpdateCombinedRoute?(navigationManager: NMAVenue3dCombinedNavigation, combinedRoute: NMAVenue3dCombinedRoute): void;

  navigationManagerWillStartIndoorSectionInCombinedRoute?(navigationManager: NMAVenue3dCombinedNavigation, indoorSection: NMAVenue3dVenueRouteSection, combinedRoute: NMAVenue3dCombinedRoute): void;

  navigationManagerWillStartLinkingSectionInCombinedRoute?(navigationManager: NMAVenue3dCombinedNavigation, linkingSection: NMAVenue3dLinkRouteSection, combinedRoute: NMAVenue3dCombinedRoute): void;

  navigationManagerWillStartOutdoorSectionInCombinedRoute?(navigationManager: NMAVenue3dCombinedNavigation, outdoorSection: NMAVenue3dOutdoorRouteSection, combinedRoute: NMAVenue3dCombinedRoute): void;
}
declare var NMAVenue3dCombinedNavigationListener: {
  prototype: NMAVenue3dCombinedNavigationListener;
};

declare var NMAVenue3dCombinedNavigationManagerInvalidValue: number;

declare const enum NMAVenue3dCombinedNavigationState {
  Idle = 0,

  Running = 1,

  Simulating = 2,

  Paused = 3,
}

declare const enum NMAVenue3dCombinedNavigationType {
  None = 0,

  Indoor = 1,

  Link = 2,

  Outdoor = 3,
}

declare class NMAVenue3dCombinedRoute extends NSObject {
  static alloc(): NMAVenue3dCombinedRoute; // inherited from NSObject

  static calculateRouteFromToWithParamsCompletionBlock(startLocation: NMAVenue3dBaseLocation, endLocation: NMAVenue3dBaseLocation, options: NMAVenue3dRouteOptions, completion: (p1: NMAVenue3dCombinedRoute) => void): void;

  static calculateRouteWithPointsWithParamsCompletionBlock(points: NSArray<NMAVenue3dBaseLocation> | NMAVenue3dBaseLocation[], options: NMAVenue3dRouteOptions, completion: (p1: NMAVenue3dCombinedRoute) => void): void;

  static new(): NMAVenue3dCombinedRoute; // inherited from NSObject

  readonly routeSections: NSArray<NMAVenue3dRouteSection>;

  conformsConnectorOptions(): boolean;

  conformsModeOptions(): boolean;

  getCoreMapError(): NMARoutingError;

  getEnd(): NMAVenue3dBaseLocation;

  getError(): NMAVenue3dRoutingError;

  getLength(): number;

  getStart(): NMAVenue3dBaseLocation;

  getWaypoints(): NSArray<NMAVenue3dBaseLocation>;
}

declare class NMAVenue3dContent extends NSObject {
  static alloc(): NMAVenue3dContent; // inherited from NSObject

  static new(): NMAVenue3dContent; // inherited from NSObject

  readonly address: NMAAddress;

  readonly categoryId: string;

  readonly customAttributes: NSDictionary<string, NSObject>;

  readonly email: string;

  readonly name: string;

  readonly parentCategoryId: string;

  readonly phoneNumber: string;

  readonly placeCategoryId: string;

  readonly searchTags: NSArray<string>;

  readonly uniqueId: string;

  readonly uniqueVenueId: string;

  readonly website: string;
}

declare class NMAVenue3dController extends NSObject {
  static alloc(): NMAVenue3dController; // inherited from NSObject

  static new(): NMAVenue3dController; // inherited from NSObject

  readonly groundLevel: NMAVenue3dLevel;

  level: NMAVenue3dLevel;

  space: NMAVenue3dSpace;

  styleSettings: NMAVenue3dStyleSettings;

  readonly venue: NMAVenue3dVenue;

  deselectSpace(): void;

  getLocationAtXYWithSpacePrefered(x: number, y: number, preferSpace: boolean): NMAVenue3dBaseLocation;

  getStyleSettingsForSpace(space: NMAVenue3dSpace): NMAVenue3dStyleSettings;

  setStyleSettingsForSpace(settings: NMAVenue3dStyleSettings, space: NMAVenue3dSpace): void;
}

declare const enum NMAVenue3dDeselectEvent {
  DeselectEventMapMoved = 0,

  DeselectEventMapZoomedOut = 1,

  DeselectEventMapTappedOutside = 2,

  DeselectEventLayerDisabled = 3,

  DeselectEventSelectedOther = 4,

  DeselectEventManual = 5,
}

declare class NMAVenue3dLevel extends NSObject {
  static alloc(): NMAVenue3dLevel; // inherited from NSObject

  static new(): NMAVenue3dLevel; // inherited from NSObject

  readonly floorNumber: number;

  readonly floorSynonym: string;

  readonly geoCenter: NMAGeoCoordinates;

  readonly outerAreas: NSArray<NMAVenue3dOuterArea>;

  readonly spaces: NSArray<NMAVenue3dSpace>;

  readonly spacesAndFacilities: NSArray<NMAVenue3dSpace>;

  areaAtPosition(position: NMAGeoCoordinates): NMAVenue3dArea;

  nearbySpacesAroundPositionWithinRadius(position: NMAGeoCoordinates, radius: number): NSArray<NMAVenue3dSpace>;

  spacesWithCategory(categoryName: string): NSArray<NMAVenue3dSpace>;
}

declare class NMAVenue3dLevelLocation extends NMAVenue3dBaseLocation {
  static alloc(): NMAVenue3dLevelLocation; // inherited from NSObject

  static levelLocationInVenueOnLevelAtGeoCoordinate(venue: NMAVenue3dVenue, level: NMAVenue3dLevel, geoCoordinates: NMAGeoCoordinates): NMAVenue3dLevelLocation;

  static levelLocationOnLevelWithGeoCoordinateInVenue(level: NMAVenue3dLevel, geoCoordinates: NMAGeoCoordinates, controler: NMAVenue3dController): NMAVenue3dLevelLocation;

  static new(): NMAVenue3dLevelLocation; // inherited from NSObject

  constructor(o: { inVenue: NMAVenue3dVenue; onLevel: NMAVenue3dLevel; atGeoCoordinate: NMAGeoCoordinates });

  constructor(o: { onLevel: NMAVenue3dLevel; withGeoCoordinate: NMAGeoCoordinates; inVenue: NMAVenue3dController });

  initInVenueOnLevelAtGeoCoordinate(venue: NMAVenue3dVenue, level: NMAVenue3dLevel, geoCoordinates: NMAGeoCoordinates): this;

  initOnLevelWithGeoCoordinateInVenue(level: NMAVenue3dLevel, geoCoordinates: NMAGeoCoordinates, venue: NMAVenue3dController): this;
}

declare class NMAVenue3dLinkRouteSection extends NMAVenue3dRouteSection {
  static alloc(): NMAVenue3dLinkRouteSection; // inherited from NSObject

  static new(): NMAVenue3dLinkRouteSection; // inherited from NSObject

  readonly from: NMAGeoCoordinates;

  readonly to: NMAGeoCoordinates;
}

declare class NMAVenue3dMapLayer extends NSObject {
  static alloc(): NMAVenue3dMapLayer; // inherited from NSObject

  static new(): NMAVenue3dMapLayer; // inherited from NSObject

  animatesFloorChange: boolean;

  animatesVenueSelection: boolean;

  readonly combinedNavigation: NMAVenue3dCombinedNavigation;

  delegate: NMAVenue3dMapLayerDelegate;

  hideIconOnSelectedSpace: boolean;

  margins: UIEdgeInsets;

  openMode: boolean;

  readonly positionIndicator: NMAPositionIndicator;

  shouldCheckVenuesInViewport: boolean;

  readonly venueController: NMAVenue3dController;

  readonly venueNavigationManager: NMAVenue3dNavigationManager;

  readonly venueRoutingController: NMAVenue3dRoutingController;

  venueUpdatesEnabled: boolean;

  visible: boolean;

  addListener(listener: NMAVenue3dMapLayerDelegate): void;

  cancelVenueSelection(): boolean;

  controllerForVenue(venue: NMAVenue3dVenue): NMAVenue3dController;

  deselectVenue(): void;

  isVenueVisible(venueId: string): boolean;

  removeListener(listener: NMAVenue3dMapLayerDelegate): void;

  selectVenue(venue: NMAVenue3dVenue): void;

  selectVenueWithVenueId(venueId: string): NMAVenue3dVenueInfo;

  selectVenueWithVenueIdSpaceId(venueId: string, spaceId: string): NMAVenue3dVenueInfo;

  start(): void;
}

interface NMAVenue3dMapLayerDelegate extends NSObjectProtocol {
  venueMapLayerDidChangeFromLevelToLevelInVenue?(venueMapLayer: NMAVenue3dMapLayer, oldLevel: NMAVenue3dLevel, newLevel: NMAVenue3dLevel, venue: NMAVenue3dVenue): void;

  venueMapLayerDidCreateVenueController?(venueMapLayer: NMAVenue3dMapLayer, venueController: NMAVenue3dController): void;

  venueMapLayerDidDeselectSpaceInVenue?(venueMapLayer: NMAVenue3dMapLayer, space: NMAVenue3dSpace, venue: NMAVenue3dVenue): void;

  venueMapLayerDidDeselectVenueWithEvent?(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue, event: NMAVenue3dDeselectEvent): void;

  venueMapLayerDidHideVenue?(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue): void;

  venueMapLayerDidSelectSpaceInVenue?(venueMapLayer: NMAVenue3dMapLayer, space: NMAVenue3dSpace, venue: NMAVenue3dVenue): void;

  venueMapLayerDidSelectVenue?(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue): void;

  venueMapLayerDidShowVenue?(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue): void;

  venueMapLayerDidStart?(venueMapLayer: NMAVenue3dMapLayer): void;

  venueMapLayerDidTapVenueAtPoint?(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue, point: CGPoint): void;
}
declare var NMAVenue3dMapLayerDelegate: {
  prototype: NMAVenue3dMapLayerDelegate;
};

interface NMAVenue3dNavigationListener extends NSObjectProtocol {
  navigationManagerDidFindPosition?(navigationManager: NMAVenue3dNavigationManager): void;

  navigationManagerDidLosePosition?(navigationManager: NMAVenue3dNavigationManager): void;

  navigationManagerDidReachDestination?(navigationManager: NMAVenue3dNavigationManager): void;

  navigationManagerDidReroute?(navigationManager: NMAVenue3dNavigationManager): void;

  navigationManagerDidUpdateRouteSectionInCombinedRoute?(navigationManager: NMAVenue3dNavigationManager, routeSection: NMAVenue3dVenueRouteSection, combinedRoute: NMAVenue3dCombinedRoute): void;

  navigationManagerHasCurrentManeuverNextManeuver?(navigationManager: NMAVenue3dNavigationManager, maneuver: NMAVenue3dRouteManeuver, nextManeuver: NMAVenue3dRouteManeuver): void;

  navigationManagerWillReroute?(navigationManager: NMAVenue3dNavigationManager): void;
}
declare var NMAVenue3dNavigationListener: {
  prototype: NMAVenue3dNavigationListener;
};

declare class NMAVenue3dNavigationManager extends NSObject {
  static alloc(): NMAVenue3dNavigationManager; // inherited from NSObject

  static new(): NMAVenue3dNavigationManager; // inherited from NSObject

  readonly averageSpeed: number;

  backgroundNavigationEnabled: boolean;

  backgroundNavigationStartEnabled: boolean;

  beepsEnabled: boolean;

  readonly currentManeuver: NMAVenue3dRouteManeuver;

  readonly distanceFromStart: number;

  readonly distanceToCurrentManeuver: number;

  readonly distanceToDestination: number;

  readonly distanceToNextManeuver: number;

  maneuverZoomDistance: number;

  maneuverZoomEnabled: boolean;

  maneuverZoomLevel: number;

  mapTrackingEnabled: boolean;

  mapTrackingMode: NMAVenue3dTrackingMode;

  mapTrackingTilt: NMAVenue3dTrackingTilt;

  readonly navigationState: NMAVenue3dNavigationState;

  readonly nextManeuver: NMAVenue3dRouteManeuver;

  paused: boolean;

  reroutingTimeout: number;

  readonly timeToArrival: number;

  readonly venue: NMAVenue3dVenue;

  readonly venueMapLayer: NMAVenue3dMapLayer;

  vibrationEnabled: boolean;

  addListener(listener: NMAVenue3dNavigationListener): void;

  removeListener(listener: NMAVenue3dNavigationListener): void;

  startForLinkSectionInCombinedRoute(linkSection: NMAVenue3dLinkRouteSection, combinedRoute: NMAVenue3dCombinedRoute): boolean;

  startForRouteSectionInCombinedRoute(routeSection: NMAVenue3dVenueRouteSection, combinedRoute: NMAVenue3dCombinedRoute): boolean;

  stop(): void;
}

declare var NMAVenue3dNavigationManagerInvalidTimeInterval: number;

declare var NMAVenue3dNavigationManagerInvalidValue: number;

declare const enum NMAVenue3dNavigationState {
  Idle = 0,

  Running = 1,

  Paused = 2,
}

declare class NMAVenue3dOutdoorLocation extends NMAVenue3dBaseLocation {
  static alloc(): NMAVenue3dOutdoorLocation; // inherited from NSObject

  static new(): NMAVenue3dOutdoorLocation; // inherited from NSObject

  static outdoorLocationWithGeoCoordinates(geoCoordinates: NMAGeoCoordinates): NMAVenue3dOutdoorLocation;

  constructor(o: { geoCoordinates: NMAGeoCoordinates });

  initWithGeoCoordinates(geoCoordinates: NMAGeoCoordinates): this;
}

declare class NMAVenue3dOutdoorRouteSection extends NMAVenue3dRouteSection {
  static alloc(): NMAVenue3dOutdoorRouteSection; // inherited from NSObject

  static new(): NMAVenue3dOutdoorRouteSection; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly route: NMARoute;
}

declare class NMAVenue3dOuterArea extends NMAVenue3dArea {
  static alloc(): NMAVenue3dOuterArea; // inherited from NSObject

  static new(): NMAVenue3dOuterArea; // inherited from NSObject

  readonly spaces: NSArray<NMAVenue3dSpace>;

  nearbySpacesAroundPositionWithinRadius(position: NMAGeoCoordinates, radius: number): NSArray<NMAVenue3dSpace>;

  spaceAtPosition(position: NMAGeoCoordinates): NMAVenue3dSpace;
}

declare const enum NMAVenue3dRouteActionType {
  None = 0,

  Enter = 1,

  Exit = 2,
}

declare const enum NMAVenue3dRouteConnectorType {
  Elevator = 0,

  Escalator = 1,

  Stairs = 2,

  Skywalk = 3,

  Shuttle = 4,

  MovingSidewalk = 5,

  Ramp = 6,

  OtherCategory = 7,

  NotConnector = 8,
}

declare const enum NMAVenue3dRouteLevelChangeType {
  None = 0,

  Up = 1,

  Down = 2,
}

declare class NMAVenue3dRouteManeuver extends NSObject {
  static addCategoryToNaturalGuidanceBlacklist(categoryId: string): void;

  static alloc(): NMAVenue3dRouteManeuver; // inherited from NSObject

  static naturalGuidanceBlacklist(): NSSet<string>;

  static naturalGuidanceRadius(): number;

  static new(): NMAVenue3dRouteManeuver; // inherited from NSObject

  static removeCategoryFromNaturalGuidanceBlacklist(categoryId: string): void;

  static setNaturalGuidanceRadius(radius: number): void;

  readonly angle: number;

  readonly boundingBox: NMAGeoBoundingBox;

  readonly distanceFromPreviousManeuver: number;

  readonly distanceFromStart: number;

  readonly distanceToNextManeuver: number;

  readonly floorIndex: number;

  readonly geoCoordinates: NMAGeoCoordinates;

  readonly geometry: NSArray<NMAGeoCoordinates>;

  readonly levelChangeType: NMAVenue3dRouteLevelChangeType;

  readonly mapOrientation: number;

  readonly naturalGuidancePOI: string;

  routeActionType: NMAVenue3dRouteActionType;

  routeConnectorType: NMAVenue3dRouteConnectorType;

  space: NMAVenue3dSpace;

  readonly targetManeuver: NMAVenue3dRouteManeuver;

  readonly turn: NMAManeuverTurn;

  mapObject(): NMAMapObject;

  setMapObject(mapObject: NMAMapObject): boolean;
}

declare class NMAVenue3dRouteOptions extends NSObject {
  static alloc(): NMAVenue3dRouteOptions; // inherited from NSObject

  static new(): NMAVenue3dRouteOptions; // inherited from NSObject

  static optionsWithRoutingMode(routingMode: NMARoutingMode): NMAVenue3dRouteOptions;

  autoParking: boolean;

  avoidElevators: boolean;

  avoidEscalators: boolean;

  avoidRamps: boolean;

  avoidStairs: boolean;

  connectorColor: UIColor;

  flagsVisible: boolean;

  iconsVisible: boolean;

  indoorRouteLineWidth: number;

  outdoorRouteLineWidth: number;

  preferCorridors: boolean;

  preferGroundEntrances: boolean;

  constructor(o: { routingMode: NMARoutingMode });

  initWithRoutingMode(routingMode: NMARoutingMode): this;

  isRouteVisibleFor(sectionType: NMAVenue3dRouteSectionType): boolean;

  routeColorFor(sectionType: NMAVenue3dRouteSectionType): UIColor;

  setRouteColorForTypeAs(sectionType: NMAVenue3dRouteSectionType, color: UIColor): void;

  setRouteVisibilityForAs(sectionType: NMAVenue3dRouteSectionType, visibility: boolean): void;
}

declare class NMAVenue3dRouteSection extends NSObject {
  static alloc(): NMAVenue3dRouteSection; // inherited from NSObject

  static new(): NMAVenue3dRouteSection; // inherited from NSObject
}

declare const enum NMAVenue3dRouteSectionType {
  Venue = 0,

  Outdoor = 1,

  Link = 2,
}

declare class NMAVenue3dRouteStyleOptions extends NSObject {
  static alloc(): NMAVenue3dRouteStyleOptions; // inherited from NSObject

  static new(): NMAVenue3dRouteStyleOptions; // inherited from NSObject

  connectorsDefaultIconSize: CGSize;

  endRouteDefaultIconSize: CGSize;

  endRouteMapObject: NMAMapObject;

  enterCarDefaultIconSize: CGSize;

  enterCarMapObject: NMAMapObject;

  leaveCarDefaultIconSize: CGSize;

  leaveCarMapObject: NMAMapObject;

  startRouteDefaultIconSize: CGSize;

  startRouteMapObject: NMAMapObject;

  waypointsDefaultIconSize: CGSize;

  mapObjectForWaypoint(waypointIndex: number): NMAMapObject;

  setMapObjectForWaypoint(mapObject: NMAMapObject, waypointIndex: number): boolean;
}

declare class NMAVenue3dRoutingController extends NSObject {
  static alloc(): NMAVenue3dRoutingController; // inherited from NSObject

  static new(): NMAVenue3dRoutingController; // inherited from NSObject

  addObserver(observer: NMAVenue3dRoutingControllerObserver): void;

  calculateRouteFromToWithParams(startLocation: NMAVenue3dBaseLocation, endLocation: NMAVenue3dBaseLocation, options: NMAVenue3dRouteOptions): void;

  calculateRouteWithPointsWithParams(points: NSArray<NMAVenue3dBaseLocation> | NMAVenue3dBaseLocation[], options: NMAVenue3dRouteOptions): void;

  hideRoute(): void;

  removeObserver(observer: NMAVenue3dRoutingControllerObserver): void;

  showRoute(combinedRoute: NMAVenue3dCombinedRoute): void;

  showRouteWithStyleOptions(combinedRoute: NMAVenue3dCombinedRoute, styleOptions: NMAVenue3dRouteStyleOptions): void;
}

interface NMAVenue3dRoutingControllerObserver extends NSObjectProtocol {
  didCalculateRoute(combinedRoute: NMAVenue3dCombinedRoute): void;
}
declare var NMAVenue3dRoutingControllerObserver: {
  prototype: NMAVenue3dRoutingControllerObserver;
};

declare const enum NMAVenue3dRoutingError {
  NoError = 0,

  Arguments = 1,

  Internal = 2,

  CoreMap = 3,

  Unknown = 4,
}

declare class NMAVenue3dService extends NSObject {
  static alloc(): NMAVenue3dService; // inherited from NSObject

  static new(): NMAVenue3dService; // inherited from NSObject

  static sharedVenueService(): NMAVenue3dService;

  static stopAndClearCacheWithCallback(listener: NMAVenue3dServiceClearCacheListener): void;

  readonly activeVenueAccount: NMAVenue3dAccount;

  combinedContent: boolean;

  devEnv: boolean;

  readonly initializationStatus: NMAVenue3dServiceInitializationStatus;

  privateContent: boolean;

  testEnv: boolean;

  readonly venueAccounts: NSArray<NMAVenue3dAccount>;

  constructor(o: { additionalVenueService: void });

  addListener(listener: NMAVenue3dServiceListener): void;

  authenticateWithCallback(listener: NMAVenue3dAuthenticationListener): void;

  getVenueWithInfo(venueInfo: NMAVenue3dVenueInfo): void;

  getVenuesWithInfoArray(venueInfoArray: NSArray<NMAVenue3dVenueInfo> | NMAVenue3dVenueInfo[]): void;

  initAdditionalVenueService(): this;

  removeListener(listener: NMAVenue3dServiceListener): void;

  setActiveVenueAccount(account: NMAVenue3dAccount): boolean;

  setHereAccountToken(token: string): void;

  start(): void;

  stopWithCallback(stopListener: NMAVenue3dServiceStopListener): void;

  venueAtGeoCoordinates(coordinates: NMAGeoCoordinates): NMAVenue3dVenueInfo;

  venueAtGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): NMAVenue3dVenueInfo;

  venueWithId(venueId: string): NMAVenue3dVenueInfo;

  venuesAtGeoCoordinates(coordinates: NMAGeoCoordinates): NSArray<NMAVenue3dVenueInfo>;

  venuesAtGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): NSArray<NMAVenue3dVenueInfo>;

  venuesInGeoBoundingBox(boundingBox: NMAGeoBoundingBox): NSArray<NMAVenue3dVenueInfo>;
}

interface NMAVenue3dServiceClearCacheListener extends NSObjectProtocol {
  didClearCache(): void;
}
declare var NMAVenue3dServiceClearCacheListener: {
  prototype: NMAVenue3dServiceClearCacheListener;
};

declare const enum NMAVenue3dServiceInitializationStatus {
  OnlineSuccess = 0,

  OfflineSuccess = 1,

  AuthenticationFailed = 2,

  StyleInitializationFailed = 3,

  IconInitializationFailed = 4,

  IndexInitializationFailed = 5,

  OnlineFailed = 6,

  NotStarted = 7,

  InProgress = 8,

  Locked = 9,
}

interface NMAVenue3dServiceListener extends NSObjectProtocol {
  venueServiceDidGetVenueWithVenueInfoWithStatus?(venueService: NMAVenue3dService, venue: NMAVenue3dVenue, venueInfo: NMAVenue3dVenueInfo, status: NMAVenue3dServiceVenueLoadStatus): void;

  venueServiceDidInitializeWithResult?(venueService: NMAVenue3dService, result: NMAVenue3dServiceInitializationStatus): void;

  venueServiceDidLoadVenues?(venueService: NMAVenue3dService): void;
}
declare var NMAVenue3dServiceListener: {
  prototype: NMAVenue3dServiceListener;
};

interface NMAVenue3dServiceStopListener extends NSObjectProtocol {
  didStopVenueService(venueService: NMAVenue3dService): void;
}
declare var NMAVenue3dServiceStopListener: {
  prototype: NMAVenue3dServiceStopListener;
};

declare const enum NMAVenue3dServiceVenueLoadStatus {
  OnlineSuccess = 0,

  OfflineSuccess = 1,

  Failed = 2,
}

declare class NMAVenue3dSimulatedPositionSource extends NSObject implements NMAPositionDataSource {
  static alloc(): NMAVenue3dSimulatedPositionSource; // inherited from NSObject

  static new(): NMAVenue3dSimulatedPositionSource; // inherited from NSObject

  static positionSourceWithLinkSectionSpeedDistortionEnabled(linkSection: NMAVenue3dLinkRouteSection, speed: number, distortionEnabled: boolean): NMAVenue3dSimulatedPositionSource;

  static positionSourceWithRouteSectionSpeedDistortionEnabled(routeSection: NMAVenue3dVenueRouteSection, speed: number, distortionEnabled: boolean): NMAVenue3dSimulatedPositionSource;

  readonly navigationState: NMAVenue3dSimulationState;

  paused: boolean;

  updatesInterval: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { linkSection: NMAVenue3dLinkRouteSection; speed: number; distortionEnabled: boolean });

  constructor(o: { routeSection: NMAVenue3dVenueRouteSection; speed: number; distortionEnabled: boolean });

  backgroundUpdatesEnabled(): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentPosition(): NMAGeoPosition;

  initWithLinkSectionSpeedDistortionEnabled(linkSection: NMAVenue3dLinkRouteSection, speed: number, distortionEnabled: boolean): this;

  initWithRouteSectionSpeedDistortionEnabled(routeSection: NMAVenue3dVenueRouteSection, speed: number, distortionEnabled: boolean): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  navigationStartedWithTransportMode(transportMode: NMATransportMode): void;

  navigationStopped(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setBackgroundUpdatesEnabled(enabled: boolean): void;

  start(): void;

  stop(): void;
}

declare const enum NMAVenue3dSimulationState {
  Idle = 0,

  Running = 1,

  Paused = 2,
}

declare class NMAVenue3dSpace extends NMAVenue3dArea {
  static alloc(): NMAVenue3dSpace; // inherited from NSObject

  static new(): NMAVenue3dSpace; // inherited from NSObject

  readonly content: NMAVenue3dContent;

  readonly floorNumber: number;

  readonly floorSynonym: string;

  readonly icon: UIImage;

  readonly iconUri: string;

  readonly type: NMAVenue3dSpaceType;

  readonly venueName: string;
}

declare class NMAVenue3dSpaceLocation extends NMAVenue3dBaseLocation {
  static alloc(): NMAVenue3dSpaceLocation; // inherited from NSObject

  static new(): NMAVenue3dSpaceLocation; // inherited from NSObject

  static spaceLocationInVenueAtSpace(venue: NMAVenue3dVenue, space: NMAVenue3dSpace): NMAVenue3dSpaceLocation;

  static spaceLocationWithSpaceInVenue(space: NMAVenue3dSpace, venue: NMAVenue3dController): NMAVenue3dSpaceLocation;

  constructor(o: { inVenue: NMAVenue3dVenue; atSpace: NMAVenue3dSpace });

  constructor(o: { space: NMAVenue3dSpace; inVenue: NMAVenue3dController });

  initInVenueAtSpace(venue: NMAVenue3dVenue, space: NMAVenue3dSpace): this;

  initWithSpaceInVenue(space: NMAVenue3dSpace, venue: NMAVenue3dController): this;
}

declare const enum NMAVenue3dSpaceType {
  General = 0,

  Facility = 1,
}

declare class NMAVenue3dSpatialObject extends NSObject {
  static alloc(): NMAVenue3dSpatialObject; // inherited from NSObject

  static new(): NMAVenue3dSpatialObject; // inherited from NSObject

  readonly uniqueId: string;
}

declare class NMAVenue3dStyleSettings extends NSObject {
  static alloc(): NMAVenue3dStyleSettings; // inherited from NSObject

  static new(): NMAVenue3dStyleSettings; // inherited from NSObject

  fillColor: UIColor;

  labelFillColor: UIColor;

  labelImage: NMAImage;

  labelName: string;

  labelOutlineColor: UIColor;

  outlineColor: UIColor;

  selectedFillColor: UIColor;

  selectedOutlineColor: UIColor;
}

declare const enum NMAVenue3dTrackingMode {
  Follow = 0,

  NorthUp = 1,

  FreeRotation = 2,
}

declare const enum NMAVenue3dTrackingTilt {
  Tilt2D = 0,

  Tilt3D = 1,

  TiltCustom = 2,
}

declare class NMAVenue3dVenue extends NMAVenue3dSpatialObject {
  static alloc(): NMAVenue3dVenue; // inherited from NSObject

  static new(): NMAVenue3dVenue; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly content: NMAVenue3dContent;

  readonly floorNumber: number;

  readonly geoCenter: NMAGeoCoordinates;

  readonly groundFloorNumber: number;

  readonly levels: NSArray<NMAVenue3dLevel>;

  readonly spaces: NSArray<NMAVenue3dSpace>;

  nearbySpacesAroundSpaceWithinRadius(space: NMAVenue3dSpace, radius: number): NSArray<NMAVenue3dSpace>;

  spaceWithId(spaceId: string): NMAVenue3dSpace;
}

declare class NMAVenue3dVenueInfo extends NMAVenue3dSpatialObject {
  static alloc(): NMAVenue3dVenueInfo; // inherited from NSObject

  static new(): NMAVenue3dVenueInfo; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly isAlternativeSource: boolean;

  readonly name: string;
}

declare class NMAVenue3dVenueRouteSection extends NMAVenue3dRouteSection {
  static alloc(): NMAVenue3dVenueRouteSection; // inherited from NSObject

  static new(): NMAVenue3dVenueRouteSection; // inherited from NSObject

  readonly boundingBox: NMAGeoBoundingBox;

  readonly routeManeuvers: NSArray<NMAVenue3dRouteManeuver>;

  readonly venue: NMAVenue3dVenue;
}

interface NMAVenue3dVenueZoomDelegate extends NSObjectProtocol {
  venueMapLayerDidUpdateVenueZoomInVenueWithValue(venueMapLayer: NMAVenue3dMapLayer, venue: NMAVenue3dVenue, active: boolean): void;
}
declare var NMAVenue3dVenueZoomDelegate: {
  prototype: NMAVenue3dVenueZoomDelegate;
};

declare class NMAViewObject extends NSObject {
  static alloc(): NMAViewObject; // inherited from NSObject

  static new(): NMAViewObject; // inherited from NSObject

  isInArray(objects: NSArray<NMAViewObject> | NMAViewObject[]): boolean;

  location(): NMAGeoCoordinates;
}

declare class NMAVoiceCatalog extends NSObject {
  static alloc(): NMAVoiceCatalog; // inherited from NSObject

  static new(): NMAVoiceCatalog; // inherited from NSObject

  static sharedVoiceCatalog(): NMAVoiceCatalog;

  readonly busy: boolean;

  delegate: NMAVoiceCatalogDelegate;

  readonly installedVoicePackages: NSArray<NMAVoicePackage>;

  readonly lastUpdate: Date;

  readonly voicePackages: NSArray<NMAVoicePackage>;

  cancel(): void;

  installVoicePackage(package: NMAVoicePackage): boolean;

  uninstallVoicePackage(package: NMAVoicePackage): boolean;

  updateVoiceCatalog(): boolean;

  voicePackageWithId(packageId: number): NMAVoicePackage;
}

interface NMAVoiceCatalogDelegate extends NSObjectProtocol {
  voiceCatalogDidInstallPackageWithError?(voiceCatalog: NMAVoiceCatalog, package: NMAVoicePackage, error: NSError): void;

  voiceCatalogDidUncompressProgressForPackage?(voiceCatalog: NMAVoiceCatalog, progress: number, package: NMAVoicePackage): void;

  voiceCatalogDidUpdateProgressForPackage?(voiceCatalog: NMAVoiceCatalog, progress: number, package: NMAVoicePackage): void;

  voiceCatalogDidUpdateWithError?(voiceCatalog: NMAVoiceCatalog, error: NSError): void;
}
declare var NMAVoiceCatalogDelegate: {
  prototype: NMAVoiceCatalogDelegate;
};

declare const enum NMAVoiceCatalogError {
  None = 0,

  Unknown = 1,

  NotFound = 2,

  InvalidOperation = 3,

  InvalidParameters = 4,

  FileOpen = 5,

  DownloadNotReady = 6,

  VoiceLoadingFailed = 7,

  MissingMandatoryFields = 8,

  OutOfMemory = 9,

  Cancelled = 10,
}

declare var NMAVoiceCatalogErrorDomain: string;

declare const enum NMAVoiceGender {
  Female = 0,

  Male = 1,

  Both = 2,

  Unknown = 3,
}

declare class NMAVoicePackage extends NSObject {
  static alloc(): NMAVoicePackage; // inherited from NSObject

  static new(): NMAVoicePackage; // inherited from NSObject

  readonly customAttributes: NSDictionary<string, string>;

  readonly downloadSize: number;

  readonly gender: NMAVoiceGender;

  readonly installationSize: number;

  readonly installed: boolean;

  readonly language: string;

  readonly languageCode: string;

  readonly localizedGender: string;

  readonly localizedLanguage: string;

  readonly localizedQuality: string;

  readonly localizedType: string;

  readonly marcCode: string;

  readonly name: string;

  readonly packageId: number;

  readonly quality: string;

  readonly removable: boolean;

  readonly tts: boolean;

  readonly ttsLanguageAvailable: boolean;

  readonly updateAvailable: boolean;

  readonly version: string;
}

declare class NMAWaypoint extends NSObject {
  static alloc(): NMAWaypoint; // inherited from NSObject

  static new(): NMAWaypoint; // inherited from NSObject

  course: number;

  fuzzyMatchingRadius: number;

  readonly identifier: string;

  junctionSnappingRadius: number;

  readonly mappedPosition: NMAGeoCoordinates;

  navigablePosition: NMAGeoCoordinates;

  originalPosition: NMAGeoCoordinates;

  readonly roadInfo: NMAWaypointRoadInfo;

  selectiveMatchingRadius: number;

  waitingTime: number;

  readonly waypointDirection: NMAWaypointDirection;

  waypointType: NMAWaypointType;

  constructor(o: { geoCoordinates: NMAGeoCoordinates });

  constructor(o: { geoCoordinates: NMAGeoCoordinates; identifier: string; waypointDirection: NMAWaypointDirection; waypointType: NMAWaypointType });

  constructor(o: { geoCoordinates: NMAGeoCoordinates; waypointType: NMAWaypointType });

  initWithGeoCoordinates(position: NMAGeoCoordinates): this;

  initWithGeoCoordinatesIdentifierWaypointDirectionWaypointType(position: NMAGeoCoordinates, uniqueId: string, direction: NMAWaypointDirection, type: NMAWaypointType): this;

  initWithGeoCoordinatesWaypointType(position: NMAGeoCoordinates, type: NMAWaypointType): this;

  setIdentifierWaypointDirection(identifier: string, direction: NMAWaypointDirection): void;

  setStreetNameHint(hint: string): void;
}

declare const enum NMAWaypointDirection {
  Any = 0,

  Positive = 1,

  Negative = 2,
}

declare class NMAWaypointRoadInfo extends NSObject {
  static alloc(): NMAWaypointRoadInfo; // inherited from NSObject

  static new(): NMAWaypointRoadInfo; // inherited from NSObject

  readonly matchedCoordinates: NMAGeoCoordinates;

  readonly roadSide: NMARoadSide;
}

declare const enum NMAWaypointType {
  StopWaypoint = 0,

  ViaWaypoint = 1,
}

declare class NMAZoomRange extends NSObject {
  static alloc(): NMAZoomRange; // inherited from NSObject

  static new(): NMAZoomRange; // inherited from NSObject

  max: number;

  min: number;

  constructor(o: { minZoomLevel: number; maxZoomLevel: number });

  initWithMinZoomLevelMaxZoomLevel(minimum: number, maximum: number): this;
}

declare var NMA_PLACES_ERROR_DOMAIN: string;

declare var kNMAAdasisV2EngineErrorDomain: string;

declare var kNMACLE2ErrorDomain: string;

declare var kNMAEHMapAccessorErrorDomain: string;

declare var kNMAElectronicHorizonErrorDomain: string;

declare var kNMAPlatformDataRequestErrorDomain: string;

declare var kNMATollCostRequestErrorDomain: string;
