<template lang="html">
  <div class="n-row"
  :style="styles">
  <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-row'
})
export default class NRow extends Vue {
  private get classes() {
    return {};
  }

  private get styles() {
    return {}
  }
};
</script>