<template lang="html">
    <div class="n-theme-tabs" :class="classes">
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

import Theme from '../../mixins/Theme';

@Component({
  name: 'n-theme-tabs'
})
export default class NThemeTabs extends mixins(Theme) {
  private get classes() {
    const classes = {
      'n-theme--dark': this.isDarkTheme
    };

    return classes;
  }

  @Prop()
  title!: string;

  @Prop()
  themes!: any[];

};
</script>