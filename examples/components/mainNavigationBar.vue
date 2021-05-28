<template lang="html">
  <n-navigation-bar class="main-navigation-bar" fixed app>
    <n-button @click="clickMenu()" icon flat>
      <n-icon :name="'menu'"></n-icon>
    </n-button>    
    <n-navigation-bar-title class="title">{{ title }}</n-navigation-bar-title>
  </n-navigation-bar>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import constant from "../util/constant";

@Component
export default class MainNavigationBar extends Vue {
  @Prop()
  showDrawer!: boolean;

  private get title() {
    return constant.system.title;
  }

  private clickMenu() {
    this.$emit("clickMenu", !this.showDrawer);
  }
}
</script>