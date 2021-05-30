<template lang="html">
  <transition name="fade">
      <div class="n-popover" v-show="show"
      :style="computedStyle">
        <slot></slot>
      </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-popover",
})
export default class NPopover extends Vue {
  private show: boolean = false;

  // options
  // position
  private top: number = 0;
  private left: number = 0;
  // size
  private width: number = 300;
  private height: number = 300;

  private color: string = "black";
  private background: string = "white";
  public onClose: Function = () => {};

  public updatePosition(position: { top?: number; left?: number }) {
    const top = position.top;
    const left = position.left;
    if (top !== undefined) this.top = top;
    if (left !== undefined) this.left = left;
  }

  public updateSize(size: { width?: number; height?: number }) {
    const width = size.width;
    const height = size.height;
    if (width !== undefined) this.width = width;
    if (height !== undefined) this.height = height;
  }

  private get computedTop() {
    return this.top + "px";
  }

  private get computedLeft() {
    return this.left + "px";
  }

  private get computedWidth() {
    return this.width + "px";
  }

  private get computedHeight() {
    return this.height + "px";
  }

  private get computedStyle() {
    return {
      position: "absolute",
      top: this.computedTop,
      left: this.computedLeft,
      width: this.computedWidth,
      background: this.background,
    };
  }

  public open() {
    this.show = true;
  }

  public close() {
    this.show = false;
  }
}
</script>