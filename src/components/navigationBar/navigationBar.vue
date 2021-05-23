<template lang="html">
  <nav class="n-navigation-bar"
  :class="classes"
  :style="styles">
    <div class="n-navigation-bar__content"
    :style="{
      height: height + 'px'
    }">
      <slot></slot>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Application from "../../mixins/Application";
import Theme from "../../mixins/Theme";

@Component({
  name: "n-navigation-bar",
})
export default class NNavigationBar extends mixins(Application, Theme) {
  @Prop({ default: "" })
  background!: string;

  @Prop({ default: 56 })
  height!: number;

  @Prop({ default: false })
  fixed!: boolean;

  @Prop({ default: false })
  app!: boolean;

  private get classes() {
    return {
      "n-navigation-bar--fixed": this.fixed,
      "n-theme--dark": this.isDarkTheme,
    };
  }

  private get styles() {
    const styles: { [key: string]: string } = {
      "background-color": this.background === "" ? "" : this.background,
      height: this.height + "px",
    };

    if (this.app === true) {
      let paddingLeft =
        this.$nApp.width > this.$nApp.minWidth ? this.$nApp.left : 0;
      let paddingRight =
        this.$nApp.width > this.$nApp.minWidth ? this.$nApp.right : 0;
      styles["padding-left"] = paddingLeft + "px";
      styles["padding-right"] = paddingRight + "px";
    }

    return styles;
  }

  created() {
    if (this.app === true) {
      this.updatePosition({
        top: this.height,
      });
    } else {
      this.updatePosition({
        top: 0,
      });
    }
  }
}
</script>