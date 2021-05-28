<template lang="html">
<div id="app">
  <main-drawer v-model="showDrawer"></main-drawer>
  <main-navigation-bar :showDrawer="showDrawer" @clickMenu="toggleDrawer"></main-navigation-bar>
  <n-content app>
    <router-view></router-view>
  </n-content>
</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MainDrawer from "./components/mainDrawer.vue";
import MainNavigationBar from "./components/mainNavigationBar.vue";

@Component({
  components: {
    "main-navigation-bar": MainNavigationBar,
    "main-drawer": MainDrawer,
  },
})
export default class App extends Vue {
  private showDrawer: boolean = false;

  private toggleDrawer(showDrawer: boolean) {
    this.showDrawer = showDrawer;
  }
}
</script>