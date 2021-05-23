<template lang="html">
    <div class="n-tabs" :class="classes">
        <div class="tabs" :style="tabsStyles">
            <span @click="selectTab(index)"class="tab" v-for="(item, index) in items" :key="index" :style="tabStyles(index)">
                <span>{{ getTitle(index) }}</span>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";

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

  @Watch("selectIndex")
  watchSelectIndex(newIndex: number, oldIndex: number) {
    this.$emit("change", newIndex);
  }

  private getTitle(index: number) {
    return this.items[index][this.value];
  }

  private get classes() {
    const classes = {
      "show-under-line": this.showUnderline,
      "n-theme--dark": this.isDarkTheme,
      "n-tabs--grow": this.grow,
    };

    return classes;
  }

  private get tabsStyles() {
    const styles: any = {
      height:
        typeof this.height === "string" ? this.height : this.height + "px",
    };

    return styles;
  }

  private tabStyles(index: number) {
    const styles: any = {
      lineHeight:
        typeof this.height === "string" ? this.height : this.height + "px",
      height:
        typeof this.height === "string" ? this.height : this.height - 3 + "px",
      color: index === this.selectIndex ? this.selectColor : this.unselectColor,
      borderColor:
        index === this.selectIndex ? this.selectColor : this.unselectColor,
      borderBottom:
        index === this.selectIndex && this.showUnderline === true
          ? "3px solid"
          : "",
    };

    return styles;
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