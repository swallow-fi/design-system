<template lang="html">
  <div class="n-sparkline" style="position: relative" :style="{width: width+'px', height: height+'px', margin:'0 auto'}">
    <svg width="100%" :heigth="height" style="display:inline;" overflow="visible">
    <!-- fill gradient -->
    <svg v-if="hasFillGradient === true":height="height" width="100%" :viewBox="`0 0 ${width} ${height}`" overflow="visible">
      <defs>
        <linearGradient id="fill-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%" v-html="gradientStops">
        </linearGradient>
      </defs>
      <path
      clip-path="none"
      stroke="none"
      :d="pd"
      :stroke-width="0" 
      fill="url(#fill-gradient)"></path>
    </svg>
    <!-- stroke -->
    <svg :height="height" width="100%" :viewBox="`0 0 ${width} ${height}`" overflow="visible">
      <path
      :stroke="strokeColor"
      :d="d"
      :stroke-width="strokeWidth" fill="none"></path>
    </svg>
    <!-- line -->
    <svg v-if="hasLine" :height="height" width="100%" :viewBox="`0 0 ${width} ${height}`" overflow="visible">
      <path
      :stroke="lineColor"
      :d="ld"
      :stroke-width="lineWidth"
      stroke-dasharray="6 4"
      fill="none"></path>
    </svg>
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
  name: "n-sparkline",
})
export default class NSparkline extends Vue {
  // https://amoradi.github.io/scintilla/
  // https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial/Paths

  @Prop({ default: 2 })
  strokeWidth!: number;

  @Prop({ default: "black" })
  strokeColor!: string;

  @Prop({ default: () => [] })
  fillGradient!: any[];

  @Prop({ default: 100 })
  width!: number;

  @Prop({ default: 100 })
  height!: number;

  @Prop({ default: null })
  yRange!: Range;

  @Prop({ default: [] })
  data!: number[];

  // line
  @Prop({ default: [] })
  lineData!: any[];

  @Prop({ default: "gray" })
  lineColor!: string;

  @Prop({ default: "dash" })
  lineStyle!: string;

  @Prop({ default: 1 })
  lineWidth!: number;

  private pd: string = "";
  private d: string = "";
  private gradientStops: string | null = null;
  private ld: string = "";

  private get hasFillGradient() {
    return this.fillGradient.length > 0;
  }

  private get hasLine() {
    return this.lineData.length > 0;
  }

  private makePoints(yPixels: number[]): any[] {
    return yPixels.map((y, i) => [i, y]);
  }

  private sanitizeYData(yData: any[], yRange: Range): number[] {
    let isInRange = (n: number) => true;

    if (
      Array.isArray(yRange) &&
      yRange.length === 2 &&
      yRange.every(this.isNumber)
    ) {
      const [min, max] = yRange;
      isInRange = (n: number) => n >= min && n <= max;
    }

    return yData.filter(this.isNumber).filter(isInRange);
  }

  private isNumber(v: any): boolean {
    return typeof v === "number" && !isNaN(v) && isFinite(v);
  }

  // height에 맞게 데이터를 바꿈, 공간, 실제값, 최소, 최대
  private project(
    space: number,
    { n, min, max }: { n: number; min: number; max: number }
  ): number {
    const nRel = (n - min) / (max - min === 0 ? 1 : max - min);
    return space * nRel;
  }

  private extrema(points: Point[]) {
    const x = points.map(([x]) => x);
    const y = points.map(([x, y]) => y);

    return {
      x: { min: Math.min(...x), max: Math.max(...x) },
      y: { min: Math.min(...y), max: Math.max(...y) },
    };
  }

  private makeD(
    points: Point[],
    viewBox: ViewBox,
    yRange?: { min: number; max: number },
    polygonal?: boolean
  ): string {
    const extrema_ = this.extrema(points);
    const projected = points.map(([x, y]) => {
      return [
        this.project(viewBox.width, {
          n: x,
          min: extrema_.x.min,
          max: extrema_.x.max,
        }),
        this.project(viewBox.height, {
          n: y,
          min: yRange ? yRange.min : extrema_.y.min,
          max: yRange ? yRange.max : extrema_.y.max,
        }),
      ];
    });

    let d = "";

    projected.forEach(([x, y], i) => {
      if (i === 0) {
        d += `M ${x},${viewBox.height - y}`;
      } else {
        d += ` L ${x},${viewBox.height - y}`;
      }
    });

    if (polygonal) {
      d += ` L ${projected[projected.length - 1][0]},${viewBox.height}`;
      d += ` L ${0},${viewBox.height} Z`;
    }

    return d;
  }

  private getGradientStops(gradient: any[]) {
    let gradientStops = gradient.map((c: any, i: number) => {
      const colorCount = (gradient || []).length;
      const step = 100 / colorCount;
      const start = step / 2;

      return `<stop 
      key="${i}" 
      offset="${start + i * step}%" 
      stop-color="rgba(${c.join(",")})"/>`;
    });

    return gradientStops.join("");
  }

  // TODO: 정리 필요하다
  private setData() {
    const viewBox = { width: this.width, height: this.height };

    // ydata 정제
    const yData = this.sanitizeYData(this.data, this.yRange);
    // min, max 값 구하기 yRange값이 있는 경우 그대로 쓴다.
    let [min, max] = this.yRange
      ? this.yRange
      : [Math.min(...yData), Math.max(...yData)];
    // yPixels 값으로 변환시킴
    const yPixels = yData.map((y) => {
      return this.project(this.height, { n: y, min, max });
    });
    // x,y 좌표로 만든다
    const points = this.makePoints(yPixels);
    this.d = this.makeD(
      points,
      viewBox,
      this.yRange
        ? {
            min: this.project(this.height, { n: min, min, max }),
            max: this.project(this.height, { n: max, min, max }),
          }
        : undefined,
      false
    );

    if (this.hasFillGradient === true) {
      this.pd = this.makeD(
        points,
        viewBox,
        this.yRange
          ? {
              min: this.project(this.height, { n: min, min, max }),
              max: this.project(this.height, { n: max, min, max }),
            }
          : undefined,
        true
      );
    }

    if (this.hasLine === true) {
      // ydata 정제
      const yLineData = this.sanitizeYData(this.lineData, this.yRange);
      // yPixels 값으로 변환시킴
      const yLinePixels = yLineData.map((y) => {
        return this.project(this.height, { n: y, min, max });
      });
      // x,y 좌표로 만든다
      const linePoints = this.makePoints(yLinePixels);
      this.ld = `M 0,${viewBox.height - linePoints[0][1]} L ${this.width},${
        viewBox.height - linePoints[1][1]
      }`;
    }

    if (
      Array.isArray(this.fillGradient) &&
      this.fillGradient.every(
        (c: any) => Array.isArray(c) && c.every((c_: any) => this.isNumber(c_))
      )
    ) {
      this.gradientStops = this.getGradientStops(this.fillGradient);
    } else if (
      Array.isArray(this.fillGradient) &&
      this.fillGradient.every((c: any) => this.isNumber(c))
    ) {
      // --- 1 color ---
      this.gradientStops = `<stop offset="100%" stopColor={rgba(${this.fillGradient.join(
        ","
      )})} />`;
    }
  }

  created() {
    this.setData();
  }
}
</script>