<template lang="html">
  <span class="n-navigation-bar-item">
      <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-navigation-bar-item",
})
export default class NNavigationBarItem extends Vue {}
</script>