<template lang="html">
<a class="n-link" :href="href" :target="_blank">
  <n-text>
    <slot></slot>
  </n-text>
</a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

export enum NLinkTarget {
  "_blank" = "_blank",
  "_self" = "_self",
  "_parent" = "_parent",
  "_top" = "_top",
}

@Component({
  name: "n-link",
})
export default class NLink extends Vue {
  @Prop({ default: "" })
  href!: string;

  @Prop({ default: NLinkTarget._blank })
  target!: NLinkTarget;
}
</script>