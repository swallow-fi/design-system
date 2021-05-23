<template lang="html">
    <n-button :type="'kakao-login'" 
    :background="'#fee500'"
    @click="onClick">
    <!-- <n-icon :name="'chat'"></n-icon> -->
    카카오 로그인
    </n-button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "n-kakao-login-button",
})
export default class NKakaoLoginButton extends Vue {
  private onClick(event: Event) {
    this.$kakao.sdk.Auth.login({
      success: (authObj: any) => {
        this.$emit("success", authObj);
      },
      fail: (err: any) => {
        console.error(err);
        this.$emit("fail", err);
      },
    });
  }

  created() {}
}
</script>