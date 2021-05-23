<template lang="html">
  <div class="n-input"
  :style="styles">
      <input class="n-input__target" :type="type" :placeholder="placeholder"
      v-model="text"
      :readonly="readonly" v-on:input="onInput($event)" v-on:keyup="onKeyup($event)" @focus="onFocus" @blur="onBlur"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "n-input",
})
export default class NInput extends Vue {
  @Prop({ default: "" })
  value!: string;

  @Prop({ default: "black" })
  color!: string;

  @Prop({ default: "text" })
  type!: string;

  @Prop({ default: "" })
  placeholder!: string;

  @Prop({ default: false })
  readonly!: boolean;

  @Prop({ type: [String, Number], default: "100%" })
  width!: number | string;

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

  private text = this.value;

  @Watch("value")
  watchValue(value: string) {
    this.text = value;
  }

  @Watch("text")
  watchText(newText: string) {
    this.$emit("input", newText);
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

  private onFocus() {
    this.$emit("focus");
  }

  private onBlur() {
    this.$emit("blur");
  }

  private onInput(event: any) {
    this.$emit("input", event.target.value);
  }

  private onKeyup(event: any) {
    if (event.key === "Enter") {
      this.$emit("enterKeyup");
    }
  }
}
</script>