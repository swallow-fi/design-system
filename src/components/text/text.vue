<template lang="html">
  <span class="n-text" :class="computedClass"
  :style="computedStyle"><slot></slot></span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-text",
})
export default class NText extends mixins(Theme) {
  @Prop({ default: "" })
  color!: string;

  @Prop({ default: 0 })
  size!: number;

  @Prop({ default: "" })
  display!: string;

  @Prop({ default: false })
  h1!: boolean;

  @Prop({ default: false })
  h2!: boolean;

  @Prop({ default: false })
  h3!: boolean;

  @Prop({ default: false })
  h4!: boolean;

  @Prop({ default: false })
  h5!: boolean;

  @Prop({ default: false })
  r1!: boolean;

  @Prop({ default: false })
  r2!: boolean;

  @Prop({ default: false })
  r3!: boolean;

  @Prop({ default: false })
  p!: boolean;

  @Prop({ default: false })
  bold!: boolean;

  private get computedClass() {
    return {
      "n-text--h1": this.h1,
      "n-text--h2": this.h2,
      "n-text--h3": this.h3,
      "n-text--h4": this.h4,
      "n-text--h5": this.h5,
      "n-text--r1": this.r1,
      "n-text--r2": this.r2,
      "n-text--r3": this.r3,
      "n-text--p": this.p,
      "n-theme--dark": this.isDarkTheme,
    };
  }

  private get displayStyle() {
    if (this.display !== "") {
      return this.display;
    }

    if (this.p || this.h1 || this.h2 || this.h3 || this.h4 || this.h5) {
      return "block";
    }

    return "inline";
  }

  private get computedStyle() {
    return {
      color: this.color === "" ? false : this.color,
      display: this.displayStyle === "" ? false : this.displayStyle,
      "font-size": this.size === 0 ? false : this.size + "px",
      "font-weight": this.bold === false ? "normal" : "bold",
    };
  }
}
</script>