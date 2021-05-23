<template lang="html">
  <img class="n-img" aria-hidden="true" @click="onClickHandler"
  :src="path"
  :class="classes"
  :style="styles"></i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-img",
})
export default class NImg extends mixins(Theme) {
  @Prop({ type: [String, Number], default: "auto" })
  height!: number | string;

  @Prop({ default: "" })
  path!: string;

  private get classes() {
    return {
      height: this.height,
      "n-theme--dark": this.isDarkTheme,
    };
  }

  private get styles() {
    const styles: any = {
      height:
        typeof this.height === "string" ? this.height : this.height + "px",
    };

    return styles;
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>