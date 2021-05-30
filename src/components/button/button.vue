<template lang="html">
    <button
      class="n-button"
      @click="onClickHandler"
      :disabled="disabled || loading"
      :type="buttonType"
      :class="computedClass"
      :style="computedStyle"
    >
    <i class="n-icon-loading" v-if="loading"></i>
    <!-- <i :class="icon" v-if="icon && !loading"></i> -->
    <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-button",
})
export default class NButton extends Vue {
  @Prop({ default: "button" })
  buttonType!: string;

  @Prop({ default: "default" })
  type!: string;

  @Prop({ default: false })
  disabled!: boolean;

  @Prop({ default: false })
  loading!: boolean;

  @Prop({ default: "black" })
  color!: string;

  @Prop({ default: false })
  dark!: boolean;

  @Prop({ default: "#f5f5f5" })
  background!: string;

  @Prop({ default: false })
  icon!: boolean;

  @Prop({ type: [String, Number], default: 40 })
  height!: number | string;

  @Prop({ type: [String, Number], default: "auto" })
  width!: number | string;

  @Prop({ default: false })
  block!: boolean;

  @Prop({ default: false })
  flat!: boolean;

  private get computedColor() {
    return this.color === undefined
      ? this.dark === false
        ? false
        : "white"
      : this.color;
  }

  private get computedClass() {
    return {
      ["n-button--" + this.type]: true,
      "n-button--icon": this.icon,
      "is-disabled": this.disabled,
      "is-loading": this.loading,
      "is-block": this.block,
      "is-flat": this.flat,
    };
  }

  private get computedStyle() {
    if (this.buttonType === "outline") {
      return {
        "background-color": "transparent",
        border: `1px solid ${this.background}`,
        color: this.computedColor,
        height: convertSizeValue(this.height),
      };
    }

    return {
      "background-color":
        this.background === undefined ? false : this.background,
      color: this.computedColor,
      height: convertSizeValue(this.height),
      width: convertSizeValue(this.width),
    };
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>