<template lang="html">
  <div class="n-carousel">
    <flicking ref="fliking"
      :options="{ gap: gap, moveType: moveType, circular: circular, 
      duration: duration, defaultIndex: defaultIndex, 
      overflow: overflow, infinite: infinite, 
      isEqualSize: isEqualSize,
      panelEffect: panelEffectFunc, anchor: 0, hanger: hanger }"
      :tag="'div'"
      :viewportTag="'div'"
      :cameraTag="'div'"
      @hold-start="holdStart"
      @hold-end="holdEnd"
      @move-end="moveEnd"
      @select="select"
      :plugins="plugins"
    ><slot></slot>
    </flicking>
    <div class="control--left control" v-show="hideControl === false" @click="onLeftControl">
      <
    </div>
    <div class="control--right control" v-show="hideControl === false" @click="onRightControl">
      >
    </div>
    <ul class="delimiter-container"v-show="hideDelimiters === false">
      <li v-for="(d, index) in panelCount" :key="index" :class="{active: index === panelIndex, delimiter: true}">•</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { AutoPlay } from "@egjs/flicking-plugins";
// https://naver.github.io/egjs-flicking/release/latest/doc/index.html
// https://github.com/naver/egjs-flicking-plugins/blob/master/src/AutoPlay.ts

import Theme from "../../mixins/Theme";

@Component({
  name: "n-carousel",
})
export default class NCarousel extends mixins(Theme) {
  @Prop({ type: [String, Number], default: "auto" })
  width!: string | number;

  @Prop({ default: false })
  autoPlay!: boolean;

  @Prop({ default: false })
  circular!: boolean;

  @Prop({ default: 0 })
  hanger!: number;

  @Prop({ default: 300 })
  duration!: number;

  @Prop({ default: false })
  infinite!: boolean;

  @Prop({ default: 5000 })
  interval!: number;

  @Prop({ default: false })
  hideDelimiters!: boolean;

  @Prop({ default: false })
  hideControl!: boolean;

  @Prop({ default: 0 })
  defaultIndex!: number;

  @Prop({ default: "snap" })
  moveType!: string;

  @Prop({ default: false })
  overflow!: boolean;

  @Prop({ default: "default" })
  panelEffect!: string;

  @Prop({ default: 0 })
  gap!: number;

  @Prop({ default: true })
  isEqualSize!: boolean;

  private get panelEffectFunc() {
    if (this.panelEffect === "default") {
      return (x: any) => {
        return x;
      };
    }

    return (x: any) => 1 - Math.pow(1 - x, 3);
  }

  fliking: any | null;
  panelCount: number = 0;
  panelIndex: number = 0;
  plugins: any[] = [];

  moveEnd(e: any) {
    this.panelIndex = e.index;
    if (this.fliking === null) {
      return;
    }

    // if (this.autoPlay === true) {
    //   setTimeout(() => {
    //     this.fliking.next();
    //   }, this.interval);
    // }
    this.$emit("moveEnd", this.panelIndex);
  }

  onLeftControl() {
    this.fliking.prev();
  }

  onRightControl() {
    this.fliking.next();
  }

  private isHolding = false;

  holdStart(d: any) {
    this.isHolding = true;
  }

  holdEnd(d: any) {
    this.isHolding = true;
    this.$emit("holdEnd", this.isHolding);
  }

  moveTo(index: number) {
    this.fliking.moveTo(index, 0);
  }

  select(d: any) {
    this.isHolding = false;
    this.$emit("holdEnd", this.isHolding);
  }

  mounted() {
    this.fliking = this.$refs.fliking;
    this.panelCount = this.fliking.getPanelCount();
    this.panelIndex = this.fliking.getIndex();

    // if (this.autoPlay === true) {
    //   setTimeout(() => {
    //     this.fliking.next();
    //   }, this.interval);
    // }
  }

  created() {
    if (this.autoPlay === true) {
      // this.fliking.addPlugins(
      //   new AutoPlay({
      //     duration: this.duration,
      //     direction: "NEXT",
      //   })
      // );
      this.plugins = [
        new AutoPlay({
          duration: this.interval,
          direction: "NEXT",
          stopOnHover: true,
        }),
      ];
    }
  }
}
</script>