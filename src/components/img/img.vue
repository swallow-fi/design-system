<template lang="html">
  <img class="n-img" aria-hidden="true"
  :src="path"
  :style="computedStyle"></i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { convertSizeValue } from "../../utils/utils";
import Theme from "../../mixins/Theme";

@Component({
  name: "n-img",
})
export default class NImg extends mixins(Theme) {
  @Prop({ type: [String, Number], default: "auto" })
  height!: number | string;

  @Prop({ default: "" })
  path!: string;

  private get computedStyle() {
    return {
      height: convertSizeValue(this.height),
    };
  }
}
</script>