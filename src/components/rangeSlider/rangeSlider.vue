<template lang="html">
  <div class="n-range-slider">
    <div class="n-range-slider__tracks-container">
      <div class="track--background"></div>
      <div class="track--fill" :style="getTrackFillStyles()"></div>
    </div>
    <div class="n-range-slider__ticks-container">
      <!-- <span ref="ticks" v-for="(tick, index) in ticks" class="n-range-slider__tick" :style="getTickStyles(index)">{{ tick.value }}</span> -->
      <span ref="ticks" v-for="(tick, index) in ticks" class="n-range-slider__tick" :style="getTickStyles(index)"></span>
    </div>
    <div class="n-range-slider__thumbs-container">
      <span v-show="type === 'b' || type === 'gte' || type === 'e'" ref="startThumb" class="thumb--start" :style="getStartThumbStyles()"></span>
      <span v-show="type === 'b' || type === 'lte'" ref="endThumb" class="thumb--end" :style="getEndThumbStyles()"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";

@Component({
  name: "n-range-slider",
})
export default class NRangeSlider extends Vue {
  @Prop({ default: null })
  tickLabelFormatter!: Function | null;

  @Prop({ default: "b" })
  type!: string;

  @Prop({ default: 30 })
  max!: number;

  @Prop({ default: -30 })
  min!: number;

  @Prop({ default: 10 })
  tickSize!: number;

  @Prop({ default: -30 })
  start!: number;

  @Prop({ default: 30 })
  end!: number;

  private color: string = "red";
  private rangeColor: string = "green";

  private get ticks() {
    let ticks = [];

    ticks.push({
      value: this.min,
    });

    for (let i = this.min + this.tickSize; i < this.max; i += this.tickSize) {
      ticks.push({
        value: i,
      });
    }

    ticks.push({
      value: this.max,
    });

    return ticks;
  }

  private getTickStyles(index: number) {
    return {
      left: `calc(${(100 / (this.ticks.length - 1)) * index}%)`,
    };
  }

  private get startTickIndex() {
    let start = this.start;

    for (let i = 0; i < this.ticks.length; i++) {
      let tick = this.ticks[i];
      if (start >= tick.value && start < tick.value + this.tickSize / 2) {
        return i;
      } else if (
        start >= tick.value + this.tickSize / 2 &&
        start < tick.value + this.tickSize
      ) {
        return i + 1;
      }
    }

    return 0;
  }

  private get endTickIndex() {
    let end = this.end;

    for (let i = 0; i < this.ticks.length; i++) {
      let tick = this.ticks[i];
      if (end >= tick.value && end < tick.value + this.tickSize / 2) {
        return i;
      } else if (
        end >= tick.value + this.tickSize / 2 &&
        end < tick.value + this.tickSize
      ) {
        return i + 1;
      }
    }

    return this.ticks.length - 1;
  }

  private getTrackFillStyles() {
    return {
      left: `calc(${(100 / (this.ticks.length - 1)) * this.startTickIndex}%)`,
      right: `calc(${
        100 - (100 / (this.ticks.length - 1)) * this.endTickIndex
      }%)`,
    };
  }

  private getStartThumbStyles() {
    let start = this.startTickIndex;
    let left = `calc(${
      (100 / (this.ticks.length - 1)) * this.startTickIndex
    }%)`;
    return {
      left,
    };
  }

  private getEndThumbStyles() {
    let end = this.endTickIndex;
    let left = `calc(${(100 / (this.ticks.length - 1)) * this.endTickIndex}%)`;
    return {
      left,
    };
  }

  private leftOffset = 0;
  private total = 0;
  private isStartHolding = false;
  private isEndHolding = false;

  private setupEvent() {
    let x = 0;
    let y = 0;
    let tickEls = this.$refs.ticks as HTMLDivElement[];

    this.leftOffset = tickEls[0].getBoundingClientRect().left;

    this.total =
      tickEls[this.ticks.length - 1].getBoundingClientRect().left -
      this.leftOffset;

    let startThumbEl = this.$refs.startThumb as HTMLSpanElement;
    let endThumbEl = this.$refs.endThumb as HTMLSpanElement;

    // https://mygumi.tistory.com/332

    this.mousedownStart = this.mousedownStart.bind(this);
    this.mousedownEnd = this.mousedownEnd.bind(this);
    this.eventMove = this.eventMove.bind(this);
    this.eventEnd = this.eventEnd.bind(this);

    startThumbEl.addEventListener("mousedown", this.mousedownStart);
    endThumbEl.addEventListener("mousedown", this.mousedownEnd);

    startThumbEl.addEventListener("touchstart", this.mousedownStart);
    endThumbEl.addEventListener("touchstart", this.mousedownEnd);

    document.addEventListener("mousemove", this.eventMove);
    document.addEventListener("touchmove", this.eventMove);

    document.addEventListener("mouseup", this.eventEnd);
    document.addEventListener("touchend", this.eventEnd);
    document.addEventListener("touchcancel", this.eventEnd);
  }

  private mousedownStart(event: any) {
    this.isStartHolding = true;
  }
  private mousedownEnd(event: any) {
    this.isEndHolding = true;
  }

  private eventMove(event: any) {
    if (this.isStartHolding === false && this.isEndHolding === false) {
      return;
    }

    let clientX = event.clientX;
    if (clientX === undefined && event.changedTouches) {
      for (let i = 0; i < event.changedTouches.length; i++) {
        clientX = event.changedTouches[i].pageX;
      }
    }

    if (clientX < this.leftOffset || clientX > this.leftOffset + this.total) {
      return;
    }

    let x = clientX - this.leftOffset;

    let value = (x * (this.max - this.min)) / this.total + this.ticks[0].value;

    if (this.isStartHolding === true) {
      if (value > this.end) {
        return;
      }

      this.start = value;
    } else if (this.isEndHolding === true) {
      if (value < this.start) {
        return;
      }

      this.end = value;
    }

    if (this.isStartHolding || this.isEndHolding) {
      this.changed();
    }
  }

  @Watch("type")
  watchType(value: string) {
    if (value === "b") {
      this.$emit("changed", {
        start: this.min,
        end: this.max,
      });
    } else if (value === "gte") {
      this.$emit("changed", {
        start: this.min,
        end: this.max,
      });
    } else if (value === "lte") {
      this.$emit("changed", {
        start: this.min,
        end: this.max,
      });
    }
  }

  private eventEnd(event: any) {
    if (this.isStartHolding || this.isEndHolding) {
      this.changed();
    }
    this.isStartHolding = false;
    this.isEndHolding = false;
  }

  private changed() {
    this.$emit("changed", {
      start: this.ticks[this.startTickIndex].value,
      end: this.ticks[this.endTickIndex].value,
    });
  }

  private calcLeft(x: number) {}

  mounted() {
    this.setupEvent();
  }

  beforeDestroy() {
    let startThumbEl = this.$refs.startThumb as HTMLSpanElement;
    let endThumbEl = this.$refs.endThumb as HTMLSpanElement;

    startThumbEl.removeEventListener("mousedown", this.mousedownStart);
    endThumbEl.removeEventListener("mousedown", this.mousedownEnd);

    startThumbEl.removeEventListener("touchstart", this.mousedownStart);
    endThumbEl.removeEventListener("touchstart", this.mousedownEnd);

    document.removeEventListener("mousemove", this.eventMove);
    document.removeEventListener("touchmove", this.eventMove);

    document.removeEventListener("mouseup", this.eventEnd);
    document.removeEventListener("touchend", this.eventEnd);
    document.removeEventListener("touchcancel", this.eventEnd);
  }
}
</script>