<template lang="html">
    <div class="n-tabs" :class="computedClass">
        <div class="tabs" :style="computedStyle">
            <span @click="selectTab(index)"class="tab" v-for="(item, index) in items" :key="index" :style="getTabStyle(index)">
                <span>{{ getTitle(index) }}</span>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { convertSizeValue } from "../../utils/utils";
import Theme from "../../mixins/Theme";

@Component({
  name: "n-tabs",
})
export default class NTabs extends mixins(Theme) {
  @Prop({ default: "name" })
  value!: string;

  @Prop({ default: true })
  showUnderline!: boolean;

  @Prop({ default: "#999CA6" })
  unselectColor!: string;

  @Prop({ default: "#000000" })
  selectColor!: string;

  @Prop()
  fontSize!: string;

  @Prop()
  items!: any[];

  @Prop({ type: [String, Number], default: 30 })
  height!: number | string;

  @Prop({ default: false })
  grow!: boolean;

  private selectIndex: number = -1;
  private borderLineWidth = 3;

  @Watch("selectIndex")
  watchSelectIndex(newIndex: number, oldIndex: number) {
    this.$emit("change", newIndex);
  }

  private get computedClass() {
    return {
      "show-under-line": this.showUnderline,
      "n-theme--dark": this.isDarkTheme,
      "n-tabs--grow": this.grow,
    };
  }

  private get computedStyle() {
    return {
      height: this.height + "px",
    };
  }

  private getTitle(index: number) {
    return this.items[index][this.value];
  }

  private getTabStyle(index: number) {
    return {
      lineHeight:
        typeof this.height === "string" ? this.height : this.height + "px",
      height:
        typeof this.height === "string" ? this.height : this.height - 3 + "px",
      color: index === this.selectIndex ? this.selectColor : this.unselectColor,
      borderColor:
        index === this.selectIndex ? this.selectColor : this.unselectColor,
      borderBottom:
        index === this.selectIndex && this.showUnderline === true
          ? `${this.borderLineWidth}px solid`
          : "",
    };
  }

  public selectTab(index: number) {
    if (this.selectIndex === index) {
      this.$emit("change", index);
    } else {
      this.selectIndex = index;
    }
  }
}
</script>