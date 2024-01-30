declare class MapView extends UIView {
  static alloc(): MapView; // inherited from NSObject

  static appearance(): MapView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): MapView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MapView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MapView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MapView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MapView; // inherited from UIAppearance

  static layerClass(): typeof NSObject;

  static new(): MapView; // inherited from NSObject
}

declare class SDKInternalInitializer extends NSObject {
  static alloc(): SDKInternalInitializer; // inherited from NSObject

  static new(): SDKInternalInitializer; // inherited from NSObject

  initializeInternalsIfNecessary(): void;
}

declare class SDKMapViewInitializer extends NSObject {
  static alloc(): SDKMapViewInitializer; // inherited from NSObject

  static new(): SDKMapViewInitializer; // inherited from NSObject

  initializeInternalsIfNecessary(): void;
}
