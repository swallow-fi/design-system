<template lang="html">
  <span class="n-chip" :style="computedStyle" @click="onClickHandler">
    <span class="n-chip__content">
      <n-icon v-show="iconName !== ''" :name="iconName"></n-icon>
      <slot></slot>
    </span>
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { convertSizeValue } from "../../utils/utils";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-chip",
})
export default class NChip extends mixins(Theme) {
  @Prop({ default: "black" })
  background!: string;

  @Prop({ default: "white" })
  color!: string;

  @Prop({ default: 14 })
  size!: number;

  @Prop({ default: "" })
  iconName!: string;

  private get computedStyle() {
    return {
      "background-color": this.background,
      "font-size": convertSizeValue(this.size),
      color: this.color,
    };
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>