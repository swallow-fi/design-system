<template lang="html">
<a class="n-link" :href="href" :target="target">
  <n-text>
    <slot></slot>
  </n-text>
</a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Route } from 'vue-router';
import { VNode } from 'vue';

@Component({
  name: 'n-link'
})
export default class NLink extends Vue {
  @Prop({ default: '' })
  link!: string;

  @Prop({ default: '' })
  target!: string;
};
</script>