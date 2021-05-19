import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Theme extends Vue {
    protected get isDarkTheme() {
        return this.$nApp.isDarkTheme;
    }
}
