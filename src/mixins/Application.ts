import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Application extends Vue {
    protected updatePosition(position: {
        top?: number,
        right?: number,
        left?: number,
        bottom?: number
    }) {
        this.$nApp.updatePosition(position);
    }

    protected get isDarkTheme() {
        return this.$nApp.isDarkTheme;
    }
}
