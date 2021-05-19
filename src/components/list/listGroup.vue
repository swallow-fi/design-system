<template lang="html">
  <ul class="n-list-group">
    <div class="n-list-group__main" @click="toggleMain">
    <slot name="main"></slot>
    </div>
    <div class="n-list-group__sub" v-show="showSub">
    <slot></slot>
    </div>
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";

@Component({
  name: "n-list-group",
})
export default class NListGroup extends Vue {
  @Prop({ default: false })
  opened!: boolean;

  @Prop({ default: false })
  canToggle!: boolean;

  private showSub: boolean = false;

  private toggleMain() {
    if (this.canToggle === false) {
      return;
    }

    this.showSub = !this.showSub;
  }

  created() {
    this.showSub = this.opened;
  }
}
</script>