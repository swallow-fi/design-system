<template lang="html">
  <div class="n-progress-bar">
    <div class="progress-bar--semi-circle">
      <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <defs>
    <linearGradient id="gradient" :x1="x1" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(10)">
    <!-- <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(10)"> -->
      <stop offset="0%"   stop-color="white"/>
      <stop offset="100%" :stop-color="color"/>
    </linearGradient>
  </defs>
  <path :d="baseD" 
  fill="none" 
  stroke="#FAFAFA" 
  :stroke-width="stokeWidth / 2" 
  stroke-linecap="round"/> 
  <path :d="progressD" 
  id="progress"
  fill="none" 
  :stroke="color" 
  :stroke-width="stokeWidth" 
  stroke-linecap="round"/> 
      <!-- <path d="M 80 10 A 70 70 0 1 1 23.368810393753677 38.855032339526886 L 37.52660779531526 49.14127425464517 A 52.5 52.5 0 1 0 80 27.5 Z"></path> -->
  <circle :cx="closeXY().x" :cy="closeXY().y" :r="stokeWidth / 4" fill="white" />    
</svg>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Theme from "../../mixins/Theme";
// http://xahlee.info/js/svg_path_ellipse_arc.html
// https://m.blog.naver.com/PostView.nhn?blogId=scyan2011&logNo=221604956473&categoryNo=33&proxyReferer=https:%2F%2Fwww.google.com%2F

@Component({
  name: "n-progress-bar",
})
export default class NProgressBar extends mixins(Theme) {
  @Prop({ default: 20 })
  stokeWidth!: number;

  @Prop({ default: 200 })
  width!: number;

  @Prop({ default: 200 })
  height!: number;

  @Prop({ default: "red" })
  color!: string;

  @Prop({ default: 0 })
  value!: number;

  padding = 20;

  private get baseD() {
    return this.getD(100);
  }

  private get x1() {
    return this.value - 100 + "%";
  }

  private get progressD() {
    return this.getD(this.value);
  }

  private getD(value: number) {
    let startX = this.padding;
    let startY = this.height - this.padding;

    let centerX = this.width / 2;
    let centerY = startY;

    let radius = centerX - startX;

    let closeXY = this.getCloseXY(value, centerX, centerY, radius);

    let d = `M ${startX} ${startY} A ${radius} ${radius}, 0, 0 1, ${closeXY.x} ${closeXY.y}`;
    return d;
  }

  private closeXY() {
    let startX = this.padding;
    let startY = this.height - this.padding;

    let centerX = this.width / 2;
    let centerY = startY;

    let radius = centerX - startX;

    let closeXY = this.getCloseXY(this.value, centerX, centerY, radius);

    return closeXY;
  }

  private getCloseXY(
    value: number,
    centerX: number,
    centerY: number,
    radius: number
  ) {
    let theta = 180 * (value / 100);
    let radian =
      theta > 90 ? ((180 - theta) * Math.PI) / 180 : (theta * Math.PI) / 180;

    let closeX =
      theta > 90
        ? centerX + Math.abs(Math.cos(radian) * radius)
        : centerX - Math.abs(Math.cos(radian) * radius);
    let closeY =
      theta > 90
        ? centerY - Math.abs(Math.sin(radian) * radius)
        : centerY - Math.abs(Math.sin(radian) * radius);

    return {
      x: closeX,
      y: closeY,
    };
  }
}
</script>