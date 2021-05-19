<template lang="html">
  <span class="n-navigation-bar-title">
      <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-navigation-bar-title'
})
export default class NNavigationBarTitle extends Vue {

};
</script>