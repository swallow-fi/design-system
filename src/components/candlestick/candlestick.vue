<template lang="html">
  <div class="n-candlestick" 
  :style="computedStyle">
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
import { Vue, Component, Prop } from "vue-property-decorator";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-candlestick",
})
export default class NCandlestick extends Vue {
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

  private wickD: string = "";
  private bodyD: string = "";
  private maxLimit: number = 1.3;
  private minLimit: number = 0.7;

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

  private get computedStyle() {
    return {
      position: "relative",
      width: convertSizeValue(this.width),
      height: convertSizeValue(this.height),
      margin: "0 auto",
      border: this.border,
    };
  }

  private getMaxMin(open: number, high: number, low: number) {
    let max = high > open * this.maxLimit ? high : open * this.maxLimit;
    let min = low < open * this.minLimit ? low : open * this.minLimit;

    return {
      max,
      min,
    };
  }

  private getProject(
    space: number,
    { n, min, max }: { n: number; min: number; max: number }
  ): number {
    const nRel = (n - min) / (max - min === 0 ? 1 : max - min);
    return space * nRel;
  }

  private setWickD(
    width: number,
    height: number,
    highProject: number,
    lowProject: number
  ) {
    this.wickD =
      "M " +
      width / 2 +
      "," +
      (height - highProject) +
      "," +
      width / 2 +
      "," +
      (height - lowProject);
  }

  private setBodyD(
    width: number,
    height: number,
    openProject: number,
    closeProject: number,
    isSame: boolean
  ) {
    if (isSame) {
      this.bodyD =
        "M " +
        width / 2 +
        "," +
        (height - openProject) +
        "," +
        width / 2 +
        "," +
        (height - openProject - 1);
      return;
    }

    this.bodyD =
      "M " +
      width / 2 +
      "," +
      (height - openProject) +
      "," +
      width / 2 +
      "," +
      (height - closeProject);
  }

  private setCandlePath() {
    let { min, max } = this.getMaxMin(this.open, this.high, this.low);
    let highProject = this.getProject(this.height, { n: this.high, min, max });
    let lowProject = this.getProject(this.height, { n: this.low, min, max });
    this.setWickD(this.width, this.height, highProject, lowProject);

    let openProject = this.getProject(this.height, { n: this.open, min, max });
    let closeProject = this.getProject(this.height, {
      n: this.close,
      min,
      max,
    });
    this.setBodyD(
      this.width,
      this.height,
      openProject,
      closeProject,
      this.open === this.close
    );
  }

  created() {
    this.setCandlePath();
  }
}
</script>