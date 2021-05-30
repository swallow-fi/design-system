<template lang="html">
  <ul class="n-list">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-list",
})
export default class NList extends Vue {}
</script>