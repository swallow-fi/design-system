<template lang="html">
  <div class="n-divider" :style="{
        'border-style': borderStyle,
        'border-width': width + 'px',
        width: '100%',
        color: color
      }"></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";

@Component({
  name: "n-divider",
})
export default class NDivider extends Vue {
  @Prop({ default: false })
  dashed!: boolean;

  @Prop({ default: "black" })
  color!: string;

  @Prop({ default: 0.5 })
  width!: number;

  private get borderStyle() {
    if (this.dashed === true) {
      return "dashed";
    }

    return "solid";
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>