<template lang="html">
  <div class="n-dropdown" ref="dropdown">
    <slot name="target" :on="on"></slot>
    <div class="list" ref="list" v-show="show"
    :class="computedClass" 
    :style="computedStyle" 
    >
      <slot name="list"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { events, positions } from "../../utils/consts";
import { convertSizeValue } from "../../utils/utils";

@Component({
  name: "n-dropdown",
})
export default class NDropdown extends Vue {
  @Prop({ default: false })
  value!: boolean;

  @Prop({ type: [String, Number], default: 300 })
  listWidth!: number;

  private show: boolean = this.value;
  private listPosition: string = positions.right;

  private get computedClass() {
    return {
      ["list--" + this.listPosition]: true,
    };
  }

  private get computedStyle() {
    return {
      width: convertSizeValue(this.listWidth),
    };
  }

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

  // 오른쪽 기준으로만 구현
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
      this.listPosition = positions.left;
    } else {
      this.listPosition = positions.right;
    }
  }

  private bindClickOutSide() {
    window.addEventListener(events.click, this.clickOutSide);
  }

  private bindResize() {
    window.addEventListener(events.resize, this.updateListPosition);
  }

  private unbindResize() {
    window.removeEventListener(events.resize, this.updateListPosition);
  }

  private unbindClickOutSide() {
    window.removeEventListener(events.click, this.clickOutSide);
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