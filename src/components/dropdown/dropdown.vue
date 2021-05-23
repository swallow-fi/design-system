<template lang="html">
  <div class="n-dropdown" ref="dropdown">
    <slot name="target" :on="on"></slot>
    <div class="list" :class="{'list--right': listPosition === 'right', 'list--left': listPosition === 'left'}" ref="list" v-show="show" :style="{width: listWidth + 'px'}">
      <slot name="list"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

enum Positioin {
  "left" = "left",
  "right" = "right",
}

@Component({
  name: "n-dropdown",
})
export default class NDropdown extends Vue {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ default: 300 })
  listWidth!: number;

  private show: boolean = this.value;
  private listPosition: string = Positioin.right;

  public on() {
    this.show = !this.show;

    this.$nextTick(() => {
      this.updateListPosition();
    });
  }

  private clickOutSide(e: any) {
    let dropdown = this.$refs.dropdown as any;
    let list = this.$refs.list as any;

    if (list!.contains(e.target) || dropdown!.contains(e.target)) {
      // console.log("in");
    } else {
      // console.log("outside");
      this.show = false;
    }
  }

  // 오른쪽 기준으로만..
  private updateListPosition() {
    if (this.show === false) {
      return;
    }

    let bodyRect: any = document.body.getBoundingClientRect();
    let dropdown = this.$refs.dropdown as HTMLDivElement;
    let dropdownRect: any = dropdown.getBoundingClientRect();

    let bodyWidth = bodyRect.width;
    let listRightSideX = dropdownRect.x + this.listWidth;

    if (listRightSideX > bodyWidth) {
      this.listPosition = Positioin.left;
    } else {
      this.listPosition = Positioin.right;
    }
  }

  private bindClickOutSide() {
    window.addEventListener("click", this.clickOutSide);
  }

  private bindResize() {
    window.addEventListener("resize", this.updateListPosition);
  }

  private unbindResize() {
    window.removeEventListener("resize", this.updateListPosition);
  }

  private unbindClickOutSide() {
    window.removeEventListener("click", this.clickOutSide);
  }

  mounted() {
    this.bindClickOutSide();
    this.bindResize();
  }

  destroyed() {
    this.unbindClickOutSide();
    this.unbindResize();
  }
}
</script>