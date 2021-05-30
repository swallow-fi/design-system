<template lang="html">
  <div class="n-divider" :style="computedStyle"></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-divider",
})
export default class NDivider extends Vue {
  @Prop({ default: false })
  dashed!: boolean;

  @Prop({ default: "black" })
  color!: string;

  @Prop({ type: [String, Number], default: 0.5 })
  width!: string | number;

  private get borderStyle() {
    if (this.dashed === true) {
      return "dashed";
    }

    return "solid";
  }

  private get computedStyle() {
    return {
      "border-style": this.borderStyle,
      "border-width": convertSizeValue(this.width),
      width: "100%",
      color: this.color,
    };
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>