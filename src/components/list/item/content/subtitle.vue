<template lang="html">
  <h2 class="n-list-item--content__subtitle">
    <slot></slot>
  </h2>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--content__subtitle",
})
export default class NListItemContentSubTitle extends Vue {}
</script>