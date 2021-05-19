<template lang="html">
  <i class="n-icon" aria-hidden="true"
  :class="classes"
  :style="{
    'font-size': size + 'px',
    color: color
    }">{{ name }}</i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";
import { VNode } from "vue";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-icon",
})
export default class NIcon extends mixins(Theme) {
  @Prop({ default: "" })
  color!: string;

  @Prop({ default: 24 })
  size!: number;

  @Prop({ default: "" })
  name!: string;

  private get classes() {
    // const iconClass = "mdi-" + this.name;
    const iconClass = "material-icons theme--light";
    return {
      mdi: true,
      [iconClass]: true,
      "n-theme--dark": this.isDarkTheme,
    };
  }
}
</script>