<template lang="html">
<div>
  <!-- overlay -->
  <n-overlay :show="showOverlay"
  @clickOverlay="close"
  ></n-overlay>
  <div class="n-dialog__content n-bottom-sheet"
  :style="contentStyles">
    <div class="n-dialog"
    :style="computedStyle">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-bottom-sheet",
})
export default class NBottomSheet extends Vue {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ type: [String, Number], default: "auto" })
  width!: string | number;

  @Prop({ default: false })
  disabled!: boolean;

  private get showOverlay() {
    return this.value;
  }

  private get computedStyle() {
    return {
      width: convertSizeValue(this.width),
    };
  }

  private get contentStyles() {
    return {
      display: this.value === true ? "flex" : "none",
    };
  }

  private close() {
    this.$emit("input", false);
  }
}
</script>