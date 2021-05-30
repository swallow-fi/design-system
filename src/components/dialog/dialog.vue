<template lang="html">
<div>
  <!-- overlay -->
  <n-overlay :show="showOverlay"
  :background="overlayBackground"
  :opacity="overlayOpacity"
  @clickOverlay="close"
  ></n-overlay>
  <div class="n-dialog__content"
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
  name: "n-dialog",
})
export default class NDialog extends Vue {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ type: [Number, String], default: "auto" })
  width!: string | number;

  @Prop({ default: "default" })
  type!: string;

  @Prop({ default: "black" })
  overlayBackground!: string;

  @Prop({ default: 0.3 })
  overlayOpacity!: number;

  @Prop({ default: true })
  backgroundClose!: boolean;

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
    if (this.backgroundClose === false) {
      return;
    }

    this.$emit("input", false);
  }

  created() {}
}
</script>