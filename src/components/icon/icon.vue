<template lang="html">
  <i class="n-icon" aria-hidden="true"
  :class="computedClass"
  :style="computedStyle">{{ name }}</i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Theme from "../../mixins/Theme";
import { convertFontSizeValue } from "../../utils/utils";

@Component({
  name: "n-icon",
})
export default class NIcon extends mixins(Theme) {
  @Prop({ default: "" })
  color!: string;

  @Prop({ type: [String, Number], default: 24 })
  size!: number;

  @Prop({ default: "" })
  name!: string;

  private get computedStyle() {
    return {
      "font-size": convertFontSizeValue(this.size),
      color: this.color,
    };
  }

  private get computedClass() {
    // TODO: material-icons 제거하면서 수정해야함
    return {
      mdi: true,
      "material-icons theme--light": true,
      "n-theme--dark": this.isDarkTheme,
    };
  }
}
</script>