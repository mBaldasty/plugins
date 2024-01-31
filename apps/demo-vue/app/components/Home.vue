<template>
  <Page actionBarHidden="true">

    <GridLayout>
        <HEREMaps backgroundColor="red"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

export default Vue.extend({
  computed: {
    message() {
      return 'Demo {N}-Vue app';
    },
  },
  mounted() {
    console.log('typeof SPTConfiguration:', typeof SPTConfiguration)

    console.log('typeof SDKOptions:', typeof MapViewWrapper)

    /*
    let hereSDKWrapper = HERESDKWrapper.new()
    hereSDKWrapper.initializeHERESDKAccessKeySecret("B49OatIv47m31Kt_AA3dzQ", "EqRJJRxdkpsxaKFfPIovhch1SRkop1rdgLYdP78MHVz9cmJnIuQreqYHAhqwRkuibcW3FczB_6EbtgxrEVf8Jg")
    let mapViewWrapper = MapViewWrapper.new()
    const frame = CGRectMake(0, 0, 300, 300);
    mapViewWrapper.createMapViewWithFrame(frame)
    console.log(mapViewWrapper.getMapView().mapScene)
    */

    // console.log(mapViewWrapper.getMapView())

    // NSCSDKNativeEngine.new().createSDKNativeEngineWithAccessKeyIdAccessKeySecret('t', 't')

  }
});
</script>

<style scoped lang="scss">
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
