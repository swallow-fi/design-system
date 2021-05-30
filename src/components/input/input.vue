<template lang="html">
  <div class="n-input"
  :style="computedStyle">
      <input class="n-input__target" 
      v-model="value" 
      :type="type" 
      :placeholder="placeholder"
      :readonly="readonly" 
      @input="onInput($event)" 
      @keyup="onKeyup($event)" 
      @focus="onFocus" 
      @blur="onBlur"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { convertSizeValue, convertFontSizeValue } from "../../utils/utils";

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

  @Prop({ type: [String, Number], default: 14 })
  size!: number;

  private get computedStyle() {
    return {
      "font-size": convertFontSizeValue(this.size),
      color: this.color,
      width: convertSizeValue(this.width),
    };
  }

  private text = this.value;

  @Watch("value")
  watchValue(value: string) {
    this.text = value;
  }

  @Watch("text")
  watchText(newText: string) {
    this.$emit("input", newText);
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