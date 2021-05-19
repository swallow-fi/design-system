<template lang="html">
  <span class="n-navigation-bar-item">
      <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-navigation-bar-item'
})
export default class NNavigationBarItem extends Vue {

};
</script>