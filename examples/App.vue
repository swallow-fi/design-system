<template lang="html">
<div id="app">
  <!-- drawer -->
  <main-drawer v-model="showDrawer"></main-drawer>
  <!-- navigation-bar -->
  <n-navigation-bar class="main-navigation-bar" fixed app>
    <n-button @click="toggleDrawer()" icon flat>
      <n-icon :name="'menu'"></n-icon>
    </n-button>    
    <n-navigation-bar-title class="title">NEST</n-navigation-bar-title>
  </n-navigation-bar>
  <!-- content -->
  <n-content app>
    <router-view></router-view>
  </n-content>
</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MainDrawer from "./components/mainDrawer.vue";

import routes from "./router/routes";

@Component({
  components: {
    "main-drawer": MainDrawer,
  },
})
export default class App extends Vue {
  private showDrawer: boolean = false;

  private toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }
}
</script>