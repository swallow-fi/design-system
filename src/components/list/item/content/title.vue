<template lang="html">
  <h1 class="n-list-item--content__title">
    <slot></slot>
  </h1>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--content__title",
})
export default class NListItemContentTitle extends Vue {}
</script>