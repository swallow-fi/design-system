<template lang="html">
<aside>
  <!-- overlay -->
  <n-overlay :show="showOverlay"
  @clickOverlay="close"
  ></n-overlay>
  <!-- drawer -->
  <div class="n-drawer"
  :class="computedClass"
  :style="computedStyle"
  >
    <slot></slot>
  </div>
</aside>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { convertSizeValue } from "../../utils/utils";

import Application from "../../mixins/Application";

@Component({
  name: "n-drawer",
})
export default class NDrawer extends mixins(Application) {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ type: [String, Number], default: 256 })
  width!: number;

  @Prop({ default: "white" })
  background!: string;

  @Prop({ default: false })
  left!: boolean;

  @Prop({ default: false })
  right!: boolean;

  @Prop({ default: 1 })
  sideBorderWidth!: number;

  @Watch("value")
  watchValue(value: boolean) {
    const position =
      this.right === true
        ? {
            right: this.value === true ? this.width : 0,
          }
        : {
            left: this.value === true ? this.width : 0,
          };

    this.updatePosition(position);
  }

  public get showOverlay() {
    return this.value && this.$nApp.width <= this.$nApp.minWidth;
  }

  private get computedClass() {
    return {
      "n-drawer--show": this.value,
      "n-drawer--hide": !this.value,
      "n-drawer--right": this.right,
      "n-drawer--left": this.right === false,
    };
  }

  private get computedStyle() {
    const styles: {
      width: string;
      "background-color": string;
      right?: string;
      left?: string;
    } = {
      width: convertSizeValue(this.width),
      "background-color": this.background,
    };

    if (this.right === true) {
      styles.right =
        this.value === true ? "0px" : -this.width - this.sideBorderWidth + "px";
    } else {
      styles.left =
        this.value === true ? "0px" : -this.width - this.sideBorderWidth + "px";
    }

    return styles;
  }

  private close() {
    this.$emit("input", false);
  }
}
</script>