<template lang="html">
  <h2 class="n-list-item--content__subtitle">
    <slot></slot>
  </h2>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-list-item--content__subtitle'
})
export default class NListItemContentSubTitle extends Vue {
};
</script>