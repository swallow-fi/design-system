<template lang="html">
<main class="n-content" :class="classes" :style="styles">
    <slot></slot>
</main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-content",
})
export default class NContent extends mixins(Theme) {
  @Prop({ default: false })
  app!: boolean;

  private get classes() {
    return {
      "n-theme--dark": this.isDarkTheme,
    };
  }

  private get styles() {
    const styles: { [key: string]: string } = {};

    if (this.app === true) {
      let paddingLeft =
        this.$nApp.width > this.$nApp.minWidth ? this.$nApp.left : 0;
      let paddingRight =
        this.$nApp.width > this.$nApp.minWidth ? this.$nApp.right : 0;
      styles["padding-left"] = paddingLeft + "px";
      styles["padding-right"] = paddingRight + "px";
      styles["padding-top"] = this.$nApp.top + "px";
    }

    return styles;
  }
}
</script>