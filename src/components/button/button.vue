<template lang="html">
    <button
      class="n-button"
      @click="onClickHandler"
      :disabled="disabled || loading"
      :type="buttonType"
      :class="[
        type ? 'n-button--' + type : '',
        icon ? 'n-button--icon' : '',
        {
          'is-disabled': disabled,
          'is-loading': loading,
          'is-block': block,
          'is-flat': flat
        }
      ]"
      :style="styles"
    >
    <i class="n-icon-loading" v-if="loading"></i>
    <!-- <i :class="icon" v-if="icon && !loading"></i> -->
    <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

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

  private get computedBackground() {
    return this.color === undefined
      ? this.dark === false
        ? "black"
        : "white"
      : this.color;
  }

  private get computedHeight() {
    const height = this.height;
    if (typeof height === "number") {
      return height + "px";
    }

    return height;
  }

  private get computedWidth() {
    const width = this.width;
    if (typeof width === "number") {
      return width + "px";
    }

    return width;
  }

  private get styles() {
    if (this.buttonType === "outline") {
      return {
        "background-color": "transparent",
        border: `1px solid ${this.background}`,
        color: this.computedColor,
        height: this.computedHeight,
      };
    }

    return {
      "background-color":
        this.background === undefined ? false : this.background,
      color: this.computedColor,
      height: this.computedHeight,
      width: this.computedWidth,
    };
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>