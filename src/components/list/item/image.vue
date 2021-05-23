<template lang="html">
  <div class="n-list-item--image">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--image",
})
export default class NListItemImage extends Vue {}
</script>