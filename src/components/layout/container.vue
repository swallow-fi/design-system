<template lang="html">
  <div class="n-container">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-container",
})
export default class NContainer extends Vue {}
</script>