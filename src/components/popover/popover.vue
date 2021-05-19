<template lang="html">
  <transition name="fade">
      <div class="n-popover" v-show="show"
      :style="styles">
        <slot></slot>
      </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";
import { VNode } from "vue";

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

  private updatePosition(position: { top?: number; left?: number }) {
    const top = position.top;
    const left = position.left;
    if (top !== undefined) this.top = top;
    if (left !== undefined) this.left = left;
  }

  private updateSize(size: { width?: number; height?: number }) {
    const width = size.width;
    const height = size.height;
    if (width !== undefined) this.width = width;
    if (height !== undefined) this.height = height;
  }

  private get classes() {
    return {};
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

  private get styles() {
    return {
      position: "absolute",
      top: this.computedTop,
      left: this.computedLeft,
      width: this.computedWidth,
      //   'font-size': (this.size === undefined) ? false : this.size + 'px',
      //   color: this.color
    };
  }

  private open() {
    this.show = true;
  }

  private close() {
    this.show = false;
  }
}
</script>