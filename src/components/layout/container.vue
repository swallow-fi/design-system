<template lang="html">
  <div class="n-container"
  :style="styles">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-container",
})
export default class NContainer extends Vue {
  private get styles() {
    return {};
  }
}
</script>