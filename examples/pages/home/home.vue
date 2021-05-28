<template lang="html">
    <section class="n-page home-page">
      <n-text h1 id="mafia-game">{{ title }}</n-text>
      <n-text p>
        개인 프로젝트용 vue 컴포넌트 모음
      </n-text>
      <n-text p>
        메뉴에서 컴포넌트 확인하세요
      </n-text>
    </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constant from "../../util/constant";

@Component
export default class HomePage extends Vue {
  private get title() {
    return `${constant.system.title} Design System`;
  }
}
</script>