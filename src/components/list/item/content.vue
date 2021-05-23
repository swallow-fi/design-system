<template lang="html">
  <div class="n-list-item--content">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--content",
})
export default class NListItemContent extends Vue {}
</script>