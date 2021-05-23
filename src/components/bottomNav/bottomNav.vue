<template lang="html">
  <div class="n-bottom-nav" :style="{height: height + 'px', background: background, position: position, 'bottom': bottom, 'justify-content': justifyContent}">
    <n-button v-for="(item, $index) in items" @click="onClick($index)" :key="$index" :height="'100%'"
    :class="{selected: currentIndex === $index}"
    >
      <n-img class="icon" v-if="item.icon" :width="20" :height="20" :src="currentIndex === $index ? item.selectedIcon : item.icon"/>
      <span class="icon" v-if="item.iconClass" :class="item.iconClass"/>
      <div class="text">{{ item.text }}</div>
    </n-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Theme from "../../mixins/Theme";

@Component({
  name: "n-bottom-nav",
})
export default class NBottomNav extends mixins(Theme) {
  @Prop({ default: false })
  fixed!: boolean;

  @Prop({ default: "white" })
  background!: string;

  @Prop({ default: 60 })
  height!: number;

  @Prop({ default: "center" })
  justifyContent!: string;

  @Prop({ default: [] })
  items!: {
    icon: string;
    iconClass: string;
    text: string;
    route?: string;
    onClick?: Function;
  }[];

  private currentIndex = 0;

  @Watch("$route.name")
  watchRouteName(value: string) {
    this.setCurrentIndex(value);
  }

  private get position() {
    return this.fixed ? "fixed" : "absolute";
  }

  private get bottom() {
    return "0px";
  }

  private setCurrentIndex(route: string) {
    for (let index = 0; index < this.items.length; index++) {
      let item = this.items[index];
      if (item.route === route) {
        this.currentIndex = index;
        break;
      }
    }
  }

  private onClick(index: number) {
    let item = this.items[index];

    if (item.onClick !== undefined) {
      item.onClick();
      return;
    }

    if (item.route !== undefined) {
      this.$router.push({
        name: item.route,
      });
    }
  }

  created() {
    this.setCurrentIndex(this.$route.name || "");
  }
}
</script>