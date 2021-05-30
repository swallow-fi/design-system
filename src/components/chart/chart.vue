<template lang="html">
  <div class="n-chart" ref="chart" :style="computedStyle">
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Chart, { ChartOption } from "../../utils/Chart";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-chart",
})
export default class NChart extends Vue {
  @Prop({ type: [String, Number], default: 300 })
  width!: string | number;

  @Prop({ type: [String, Number], default: 300 })
  height!: string | number;

  @Prop()
  options!: ChartOption;

  private computedStyle() {
    return {
      width: convertSizeValue(this.width),
      height: convertSizeValue(this.height),
    };
  }

  mounted() {
    let elem = this.$refs.chart as HTMLDivElement;

    let chart = new Chart(elem);
    chart.render(this.options);
  }
}
</script>