<template lang="html">
  <span class="n-navigation-bar-title">
      <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-navigation-bar-title",
})
export default class NNavigationBarTitle extends Vue {}
</script>