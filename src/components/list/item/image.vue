<template lang="html">
  <div class="n-list-item--image">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-list-item--image'
})
export default class NListItemImage extends Vue {
};
</script>