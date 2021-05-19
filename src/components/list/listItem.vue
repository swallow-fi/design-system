<template lang="html">
  <li class="n-list-item" 
  :class="classes"
  @click="onClickHandler">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';

@Component({
  name: 'n-list-item'
})
export default class NListItem extends Vue {
  @Prop({ default: false })
  main!: boolean;

  @Prop({ default: false })
  sub!: boolean;

  private get classes() {
    return {
      'n-list-item--main': this.main,
      'n-list-item--sub': this.sub
    };
  }

  private onClickHandler(event: Event) {
    this.$emit('click', event);
  }
};
</script>