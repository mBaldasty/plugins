<template>
  <Page>
    <ActionBar>
      <Label text="here"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedHere } from '@demo/shared';
  import { } from '@marblsy/here';

  export default Vue.extend({
    computed: {
      message() {
        return "Test here";
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
