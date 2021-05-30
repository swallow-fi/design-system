<template lang="html">
  <div class="n-col"
  :class="computedClass">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

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

  private get computedClass() {
    return {
      [`col-${this.col}`]: this.col !== 0,
      [`col-xs-${this.xs}`]: this.xs !== 0,
      [`col-sm-${this.sm}`]: this.sm !== 0,
      [`col-md-${this.md}`]: this.md !== 0,
      [`col-lg-${this.lg}`]: this.lg !== 0,
      [`col-xl-${this.xl}`]: this.xl !== 0,
    };
  }
}
</script>