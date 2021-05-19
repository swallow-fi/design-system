<template lang="html">
<div>
  <!-- overlay -->
  <n-overlay :show="showOverlay"
  @clickOverlay="close"
  ></n-overlay>
  <div class="n-dialog__content n-bottom-sheet"
  :style="contentStyles">
    <div class="n-dialog"
    :style="styles">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";

@Component({
  name: "n-bottom-sheet",
})
export default class NBottomSheet extends Vue {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ type: [String, Number], default: "auto" })
  width!: string | number;

  @Prop({ default: "default" })
  type!: string;

  @Prop({ default: false })
  disabled!: boolean;

  private get showOverlay() {
    return this.value;
  }

  private get styles() {
    const styles: any = {
      width: this.width + "px",
    };

    return styles;
  }

  private close() {
    this.$emit("input", false);
  }

  private get contentStyles() {
    return {
      display: this.value === true ? "flex" : "none",
    };
  }

  created() {}
}
</script>