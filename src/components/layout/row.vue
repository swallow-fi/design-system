<template lang="html">
  <div class="n-row">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-row",
})
export default class NRow extends Vue {}
</script>