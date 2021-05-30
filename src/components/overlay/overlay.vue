<template lang="html">
  <div class="n-overlay"
  @click="onClick"
  :style="computedStyle">
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-overlay",
})
export default class NOverlay extends Vue {
  @Prop({ default: false })
  show!: boolean;

  @Prop({ default: "black" })
  background!: string;

  @Prop({ default: 0.3 })
  opacity!: number;

  private get computedStyle() {
    return {
      display: this.show === true ? "block" : "none",
      backgroundColor: this.background,
      opacity: this.opacity,
    };
  }

  private onClick() {
    this.$emit("clickOverlay");
  }
}
</script>