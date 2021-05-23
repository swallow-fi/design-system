<template lang="html">
    <n-dialog v-model="showDialog" :width="200" :overlayOpacity="0.1" :backgroundClose="false">
        <n-candle-icon></n-candle-icon>
    </n-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "n-loading-dialog",
})
export default class NLoadingDialog extends Vue {
  @Prop({ default: false })
  value!: boolean;

  private showDialog = this.value;

  @Watch("showDialog")
  watchShowDialg(showDialog: boolean) {
    this.showDialog = showDialog;
    this.$emit("input", showDialog);
  }

  @Watch("value")
  watchValue(value: boolean) {
    this.showDialog = value;
  }

  private close() {
    this.$emit("input", false);
  }
}
</script>