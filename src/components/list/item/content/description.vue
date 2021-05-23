<template lang="html">
  <p class="n-list-item--content__description">
    <slot></slot>
  </p>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--content__description",
})
export default class NListItemContentDescription extends Vue {}
</script>