<template lang="html">
  <transition name="fade" @after-leave="handleAfterLeave">
      <div class="n-toast" v-show="show" :style="styles">
        <n-icon v-if="showIcon === true"></n-icon>
        <div class="content">
            <n-text class="message">{{ message }}</n-text>
            <n-spacer></n-spacer>
            <n-button v-if="showClose === true" @click="close" icon>
                <n-icon :name="'close'"></n-icon>
            </n-button>
        </div>
      </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "n-toast",
})
export default class NToast extends Vue {
  private timer: number | null = null;
  private show: boolean = false;

  // options
  private iconName: string = "";
  private showClose: boolean = true;
  private duration: number = 2000;
  private top: boolean = true;
  private topOffset: number = 16;
  private bottom: boolean = false;
  private center: boolean = true;
  private left: boolean = false;
  private right: boolean = false;
  private message: string = "";
  private color: string = "black";
  private background: string = "white";
  public onClose: Function = () => {};

  private get showIcon() {
    return this.iconName !== "";
  }

  private get classes() {
    return {};
  }

  private get styles() {
    return {
      top: this.topOffset + "px",
      // color: this.color
    };
  }

  private open() {
    this.show = true;
  }

  private close() {
    this.show = false;
  }

  private handleAfterLeave() {
    this.$destroy();
    const parentNode = this.$el.parentNode;
    if (parentNode === null) {
      return;
    }

    parentNode.removeChild(this.$el);
  }

  private startTimer() {
    if (this.duration <= 0) {
      // TODO: throw error emitter 만들어야함
      throw Error("0보다 큰 수");
    }

    this.timer = window.setTimeout(() => {
      this.close();
    }, this.duration);
  }

  mounted() {
    this.open();
    this.startTimer();
  }
}
</script>