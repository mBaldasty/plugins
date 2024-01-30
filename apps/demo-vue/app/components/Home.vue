<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Label class="info" :text="message" />
      <ContentView height="200" width="200" backgroundColor="black">
        <!--<HEREMaps height="200" width="200"  backgroundColor="red"/>-->
      </ContentView>
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
    console.log(global.NMAMapView)
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
