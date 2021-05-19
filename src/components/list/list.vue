<template lang="html">
  <ul class="n-list">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-list'
})
export default class NList extends Vue {
};
</script>