<template lang="html">
  <div class="n-candlestick" 
  style="position: relative" 
  :style="{width: width+'px', height: height+'px', margin:'0 auto', border: border}">
    <svg width="100%" :height="height" overflow="visible">
      <!-- wick (high to low) -->
      <path
      :stroke="color"
      :d="wickD"
      :stroke-width="wickWidth"
      fill="none"></path>
      <!-- body (open to close) -->
      <path
      :stroke="color"
      :d="bodyD"
      :stroke-width="bodyWidth"
      fill="none"></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { VNode } from "vue";

type Range = [number, number] | null;
type ViewBox = {
  width: number;
  height: number;
};
type Point = [number, number];

@Component({
  name: "n-candlestick",
})
export default class NCandlestick extends Vue {
  // https://codepen.io/yerb/pen/qBEOGBJ

  @Prop({ default: 50 })
  width!: number;

  @Prop({ default: 100 })
  height!: number;

  @Prop({ default: "" })
  borderColor!: string;

  @Prop({ default: "red" })
  upColor!: string;

  @Prop({ default: "blue" })
  downColor!: string;

  @Prop({ default: "black" })
  middleColor!: string;

  private get border() {
    if (this.borderColor === "") {
      return "none";
    }

    return "1px solid " + this.borderColor;
  }

  private get color() {
    if (this.open > this.close) {
      return this.downColor;
    } else if (this.open < this.close) {
      return this.upColor;
    }

    return this.middleColor;
  }

  @Prop({ default: 1 })
  wickWidth!: number;

  @Prop({ default: 10 })
  bodyWidth!: number;

  @Prop({ default: 0 })
  open!: number;

  @Prop({ default: 0 })
  high!: number;

  @Prop({ default: 0 })
  low!: number;

  @Prop({ default: 0 })
  close!: number;

  @Prop({ default: -1 })
  prev!: number;

  wickD: string = "";
  bodyD: string = "";

  private getMaxMin(height: number, open: number, high: number, low: number) {
    let max = high > open * 1.3 ? high : open * 1.3;
    let min = low < open * 0.7 ? low : open * 0.7;

    return {
      max,
      min,
    };
  }

  private project(
    space: number,
    { n, min, max }: { n: number; min: number; max: number }
  ): number {
    const nRel = (n - min) / (max - min === 0 ? 1 : max - min);
    return space * nRel;
  }

  private makeWickD(height: number, high: number, low: number) {}

  created() {
    let { min, max } = this.getMaxMin(
      this.height,
      this.open,
      this.high,
      this.low
    );
    let highPixel = this.project(this.height, { n: this.high, min, max });
    let lowPixel = this.project(this.height, { n: this.low, min, max });
    this.wickD =
      "M " +
      this.width / 2 +
      "," +
      (this.height - highPixel) +
      "," +
      this.width / 2 +
      "," +
      (this.height - lowPixel);

    let openPixel = this.project(this.height, { n: this.open, min, max });
    let closePixel = this.project(this.height, { n: this.close, min, max });
    if (this.open === this.close) {
      this.bodyD =
        "M " +
        this.width / 2 +
        "," +
        (this.height - openPixel) +
        "," +
        this.width / 2 +
        "," +
        (this.height - openPixel - 1);
    } else {
      this.bodyD =
        "M " +
        this.width / 2 +
        "," +
        (this.height - openPixel) +
        "," +
        this.width / 2 +
        "," +
        (this.height - closePixel);
    }
  }
}
</script>