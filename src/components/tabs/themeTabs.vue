<template lang="html">
    <div class="n-theme-tabs" :class="computedClass">
        <div class="header">
            <n-text :bold="true" :size="20">{{ title }}</n-text>
        </div>
        <div class="tabs">
            <span class="tab" v-for="(theme, index) in themes">
                <span>#{{ theme.name }}</span>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Theme from "../../mixins/Theme";

@Component({
  name: "n-theme-tabs",
})
export default class NThemeTabs extends mixins(Theme) {
  @Prop()
  title!: string;

  @Prop()
  themes!: any[];

  private get computedClass() {
    return {
      "n-theme--dark": this.isDarkTheme,
    };
  }
}
</script>