<template lang="html">
  <div class="n-chart" ref="chart" :style="{width: computedWidth, height: height + 'px'}">
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import echarts from "echarts";
// https://echarts.apache.org/examples/en/

// sparkline
// https://echarts.apache.org/examples/en/editor.html?c=line-aqi
// https://echarts.apache.org/examples/en/editor.html?c=area-simple

// TODO: 정리 필요하다
class Chart {
  protected chart: echarts.ECharts | null;
  protected targetElem: HTMLDivElement;
  protected option: any | null;
  protected tooltip: any;
  protected dataZoom: any;
  protected grid: any;

  constructor(targetElem: HTMLDivElement) {
    this.option = null;
    this.targetElem = targetElem;
    this.chart = echarts.init(targetElem);

    this.targetElem.addEventListener(
      "touchend",
      () => {
        if (this.chart === null) {
          return;
        }

        this.render(this.option);
      },
      false
    );
  }

  public render(option: any): void {
    if (
      this.chart === null ||
      this.targetElem === null ||
      this.targetElem === undefined
    ) {
      console.error("목표 elem이 존재하지 않습니다");
      return;
    }
    this.option = option;
    this.chart.setOption(this.option);
  }

  protected setDataZoom(total: number) {
    const start = 5000 / total;
    this.dataZoom = [
      {
        type: "inside",
        start: start > 100 ? 0 : 100 - start,
        end: 100,
      },
      {
        show: true,
        type: "slider",
        bottom: 10,
        start: start > 100 ? 0 : 100 - start,
        end: 100,
      },
    ];
  }

  public setTooltip(options: { type: string; unit: string }) {
    this.tooltip = {
      trigger: "axis",
      position: (point: any, params: any, dom: any, rect: any, size: any) => {
        let x = point[0] - 55;
        if (point[0] < 60) {
          x += 55;
        } else if (point[0] > size.viewSize[0] - 60) {
          x -= 55;
        }

        return [x, "-20%"];
      },
      axisPointer: {
        type: "line",
        // animation: false,
        label: {
          backgroundColor: "black",
        },
        lineStyle: {
          color: "black",
          width: "1",
        },
        crossStyle: {
          color: "black",
        },
      },
      backgroundColor: "#192A3E",
      formatter: (params: any) => {
        return options.type === "price"
          ? this.setPriceLineTooltipContent(params, options.unit)
          : this.setTooltipContent(params);
      },
      extraCssText:
        "box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); border-radius: 4px;",
    };
  }

  public getTooltip(options: { type: string; unit: string }) {
    return {
      trigger: "axis",
      position: (point: any, params: any, dom: any, rect: any, size: any) => {
        let x = point[0] - 55;
        if (point[0] < 60) {
          x += 55;
        } else if (point[0] > size.viewSize[0] - 60) {
          x -= 55;
        }

        return [x, "-10%"];
      },
      axisPointer: {
        type: "line",
        // animation: false,
        label: {
          backgroundColor: "black",
        },
        lineStyle: {
          color: "black",
          width: "1",
        },
        crossStyle: {
          color: "black",
        },
      },
      backgroundColor: "black",
      formatter: (params: any) => {
        return options.type === "price"
          ? this.setPriceLineTooltipContent(params, options.unit)
          : this.setTooltipContent(params);
      },
      extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
    };
  }

  protected setGrid() {
    this.grid = {
      top: 30,
      bottom: 30,
      containLabel: true,
    };
  }

  protected setPriceLineTooltipContent(params: any, unit: string) {
    const param = params[0];
    const price = param.value;
    const formattedPrice = price;
    return `
                <div style="text-align: center; width: 110px;">
                <div>
                <span style="font-size: 10px; color: white;">${param.axisValue}</span>
                </div>
                <div style="text-align: center;">
                <span style="font-size: 13px; color: white;">${formattedPrice}</span>
                </div>
                </div>`;
  }

  protected setTooltipContent(params: any) {
    const param = params[0];
    if (param.seriesType === "candlestick") {
      return `
                <div><span style="font-size: 11px; color: #333;">${
                  param.axisValue
                }</span></div>
                <div><span style="font-size: 11px; color: #333;">시가(Open): </span>
                <span style="font-size: 11px; font-weight: bold; color: black; text-align: right;">${param.value[2].toFixed(
                  2
                )}</span></div>
                <div><span style="font-size: 11px; color: #333;">종가(Close): </span>
                <span style="font-size: 11px; font-weight: bold; color: black; text-align: right;">${param.value[1].toFixed(
                  2
                )}</span></div>
                <div><span style="font-size: 11px; color: #333;">고가(High): </span>
                <span style="font-size: 11px; font-weight: bold; color: black; text-align: right;">${param.value[4].toFixed(
                  2
                )}</span></div>
                <div><span style="font-size: 11px; color: #333;">저가(low): </span>
                <span style="font-size: 11px; font-weight: bold; color: black; text-align: right;">${param.value[3].toFixed(
                  2
                )}</span></div>`;
    } else if (param.seriesType === "line") {
      const array = params.map((localParam: any) => {
        return `
                    <div style="text-align: center; padding: 0px 24px;">
                    <span style="width: 8px; height: 8px; background: ${
                      localParam.color
                    }; display: inline-block;"></span>
                    <span style="font-size: 11px; color: white;">${
                      localParam.seriesName
                    }: </span>
                    <span style="font-size: 11px; color: white;">${localParam.value[1].toFixed(
                      2
                    )}%</span>
                    </div>`;
      });
      array.unshift(`
                <div style="text-align: center;">
                <span style="font-size: 11px; color: white;">${param.axisValueLabel}</span>
                </div>`);
      return array.join("");
    }

    return "--";
  }

  public dispose(): void {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

  public showLoading(): void {
    if (this.chart) {
      this.chart.showLoading("default", {
        text: "",
        color: "rgba(255, 255, 255, 0)",
        textColor: "#000",
        maskColor: "rgba(255, 255, 255, 0.8)",
        zlevel: 0,
      });
    }
  }

  public hideLoading(): void {
    if (this.chart) {
      this.chart.hideLoading();
    }
  }
}

@Component({
  name: "n-chart",
})
export default class NChart extends Vue {
  @Prop({ default: 300 })
  width!: number;

  @Prop({ default: 300 })
  height!: number;

  @Prop({ default: {} })
  options!: object;

  private get computedWidth(): string {
    if (typeof this.width === "number") {
      return this.width + "px";
    }

    return this.width;
  }

  mounted() {
    let elem = this.$refs.chart as HTMLDivElement;

    let chart = new Chart(elem);
    chart.render(this.options);
  }
}
</script>