<template lang="html">
  <div class="n-list-item--action">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item--action",
})
export default class NListItemAction extends Vue {}
</script>