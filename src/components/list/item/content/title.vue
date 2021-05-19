<template lang="html">
  <h1 class="n-list-item--content__title">
    <slot></slot>
  </h1>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-list-item--content__title'
})
export default class NListItemContentTitle extends Vue {
};
</script>