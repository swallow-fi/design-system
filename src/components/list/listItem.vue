<template lang="html">
  <li class="n-list-item" 
  :class="computedClass"
  @click="onClickHandler">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-list-item",
})
export default class NListItem extends Vue {
  @Prop({ default: false })
  main!: boolean;

  @Prop({ default: false })
  sub!: boolean;

  private get computedClass() {
    return {
      "n-list-item--main": this.main,
      "n-list-item--sub": this.sub,
    };
  }

  private onClickHandler(event: Event) {
    this.$emit("click", event);
  }
}
</script>