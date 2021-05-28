<template lang="html">
<!-- drawer -->
<n-drawer v-model="value" ref="drawer">
    <n-list>
        <n-list-group v-for="(navRoute, i) of navRoutes" :key="i" :opened="true">
            <!-- main -->
            <template slot="main">
                <n-list-item @click="goMainRoute(navRoute.main.path)" main>
                    <n-list-item--content>
                        <n-list-item--content__title>{{ navRoute.main.title }}</n-list-item--content__title>
                    </n-list-item--content>
                </n-list-item>
            </template>
            <n-list-item sub v-if="navRoute.children.length > 0" v-for="(navRouteChild, k) of navRoute.children" 
            @click="goRoute(navRouteChild)"
            :key="k">
                <n-list-item--content>
                    <n-list-item--content__subtitle>{{ navRouteChild.name }}</n-list-item--content__subtitle>
                </n-list-item--content>
            </n-list-item>
        </n-list-group>
    </n-list>
</n-drawer>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import { NDrawer } from "../../src/components";

import routes from "../router/routes";

@Component
export default class MainDrawer extends Vue {
  @Prop({ default: false })
  value!: boolean;

  private routes: RouteConfig[] = routes;

  private get navRoutes() {
    const navRoutes = this.routes.map((route: RouteConfig) => {
      const navRoute: {
        main: {
          title: string;
          path: string;
        };
        children?: RouteConfig[];
        links?: {
          title: string;
          target: string;
        }[];
      } = {
        main: {
          title: route.meta.title,
          path: route.path,
        },
        children: [],
        links: [],
      };

      if (route.children) {
        navRoute.children = route.children;
      }
      if (route.meta && route.meta.links) {
        navRoute.links = route.meta.links;
      }

      return navRoute;
    });

    return navRoutes;
  }

  private goMainRoute(path: string) {
    if (path !== "/") {
      return;
    }

    this.$router.push({
      path: path,
    });
  }

  private goRoute(route: RouteConfig) {
    this.$router.push({
      name: route.name,
    });

    if ((this.$refs.drawer as NDrawer).showOverlay === true) {
      this.$emit("input", false);
    }
  }
}
</script>