<template lang="html">
  <div class="n-col"
  :class="classes"
  :style="styles">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";

@Component({
  name: "n-col",
})
export default class NCol extends Vue {
  @Prop({ default: 0 })
  col!: number;

  @Prop({ default: 0 })
  xs!: number;

  @Prop({ default: 0 })
  sm!: number;

  @Prop({ default: 0 })
  md!: number;

  @Prop({ default: 0 })
  lg!: number;

  @Prop({ default: 0 })
  xl!: number;

  private get classes() {
    let classes: { [key: string]: boolean } = {};
    if (this.col !== 0) {
      classes[`col-${this.col}`] = true;
    }

    if (this.xs !== 0) {
      classes[`col-xs-${this.xs}`] = true;
    }

    if (this.sm !== 0) {
      classes[`col-sm-${this.sm}`] = true;
    }

    if (this.md !== 0) {
      classes[`col-md-${this.md}`] = true;
    }

    if (this.lg !== 0) {
      classes[`col-lg-${this.lg}`] = true;
    }

    if (this.xl !== 0) {
      classes[`col-xl-${this.xl}`] = true;
    }

    return classes;
  }

  private get styles() {
    return {};
  }
}
</script>