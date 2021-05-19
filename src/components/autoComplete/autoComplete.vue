<template lang="html">
  <div class="n-auto-complete"
  :style="styles">
    <n-input v-model="text" @blur="onBlur" @focus="onFocus"></n-input>
    <n-popover ref="popover">
        <slot></slot>
    </n-popover>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";
import { VNode } from "vue";

@Component({
  name: "n-auto-complete",
})
export default class NAutoComplete extends Vue {
  @Prop({ default: "black" })
  color!: string;

  @Prop({ default: "text" })
  type!: string;

  @Prop({ default: "" })
  placeholder!: string;

  @Prop({ default: false })
  readonly!: boolean;

  @Prop({ default: "100%" })
  width!: any; // number | string

  @Prop({ default: undefined })
  size!: number;

  @Prop({ default: false })
  h1!: boolean;

  @Prop({ default: false })
  h2!: boolean;

  @Prop({ default: false })
  h3!: boolean;

  @Prop({ default: false })
  h4!: boolean;

  @Prop({ default: false })
  r1!: boolean;

  @Prop({ default: false })
  r2!: boolean;

  @Prop({ default: false })
  r3!: boolean;

  @Prop({ default: false })
  p!: boolean;

  @Prop({ default: false })
  autoComplete!: boolean;

  private popoverId: number = Date.now();
  private popover: any = null;
  private slots: VNode[] = [];
  private text: string = "";

  @Watch("text")
  watchText(newText: string) {
    this.$emit("change-text", newText);
  }

  private get classes() {
    const classes = {
      "n-text--h1": this.h1,
      "n-text--h2": this.h2,
      "n-text--h3": this.h3,
      "n-text--h4": this.h4,
      "n-text--r1": this.r1,
      "n-text--r2": this.r2,
      "n-text--r3": this.r3,
      "n-text--p": this.p,
    };

    return classes;
  }

  private get styles() {
    return {
      "font-size": this.size === undefined ? false : this.size + "px",
      color: this.color,
      width: this.computedWidth,
    };
  }

  private get computedWidth() {
    const width = this.width;
    if (typeof width === "number") {
      return width + "px";
    }

    return width;
  }

  //   private isMatched(item: any) {
  //     return item.indexOf(this.text) > -1;
  //   }

  // https://mygumi.tistory.com/321
  private onFocus() {
    this.$emit("focus");
    const popover = this.$refs.popover as any;
    popover.open();
  }

  private onBlur() {
    this.$emit("blur");
    const popover = this.$refs.popover as any;
    popover.close();
  }

  private updatePopover() {
    // updatePosition
    const popover = this.$refs.popover as any;
    popover.updatePosition({
      top: this.$el.offsetTop + this.$el.offsetHeight,
      left: this.$el.offsetLeft,
    });

    // updateSize
    popover.updateSize({
      width: this.$el.offsetWidth,
      heigth: this.$el.offsetHeight,
    });
  }

  mounted() {
    this.updatePopover();
  }

  created() {
    window.addEventListener("resize", this.updatePopover);
  }

  destroyed() {
    window.removeEventListener("resize", this.updatePopover);
  }
}
</script>