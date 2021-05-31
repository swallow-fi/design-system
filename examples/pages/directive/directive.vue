<template lang="html">
    <section>
      <router-view></router-view>
    </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DirectivePage extends Vue {}
</script>