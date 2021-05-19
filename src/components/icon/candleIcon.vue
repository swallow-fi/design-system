<template lang="html">
    <i class="n-icon n-icon--candle" aria-hidden="true">
        <span :style="leftStyles" class="candle--left"></span>
        <span :style="rightStyles" class="candle--right"></span>
    </i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";
import { VNode } from "vue";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-candle-icon",
})
export default class NCandleIcon extends mixins(Theme) {
  @Prop({ default: "" })
  background!: string;

  @Prop({ default: 1 })
  size!: number;

  private get leftStyles() {
    return {
      width: this.size * 12 + "px",
      height: this.size * 33 + "px",
      margin: `20px ${this.size * 2.5}px 0px`,
    };
  }

  private get rightStyles() {
    return {
      width: this.size * 12 + "px",
      height: this.size * 33 + "px",
      margin: `0px ${this.size * 2.5}px 20px`,
    };
  }
}
</script>