<template>
  <Page>
    <ActionBar>
      <Label text="spotify"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedSpotify } from '@demo/shared';
  import { } from '@marblsy/spotify';

  export default Vue.extend({
    computed: {
      message() {
        return "Test spotify";
      }
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
