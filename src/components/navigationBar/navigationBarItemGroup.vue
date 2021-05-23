<template lang="html">
  <span class="n-navigation-bar-item-group">
      <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-navigation-bar-item-group",
})
export default class NNavigationBarItemGroup extends Vue {}
</script>