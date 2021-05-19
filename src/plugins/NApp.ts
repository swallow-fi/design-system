import Vue, { VueConstructor } from 'vue';

// @ts-ignore
import variables from "../styles/_variables.scss";

export class NApp {
    public top: number;
    public right: number;
    public left: number;
    public bottom: number;
    public width: number;

    public minWidth: number;
    public screenSize: string;

    public theme: string;
    public gridSizes: string[];
    public mobileGridSizes: string[];
    public desktopGridSizes: string[];
    public gridBreakPoints: any;

    constructor() {
        this.top = 0;
        this.right = 0;
        this.left = 0;
        this.bottom = 0;
        this.width = window.innerWidth;
        this.theme = 'light';
        this.gridSizes = variables.gridSizes.replace(/ /gi, "").split(',');
        this.mobileGridSizes = variables.mobileGridSizes.replace(/ /gi, "").split(',');
        this.desktopGridSizes = variables.desktopGridSizes.replace(/ /gi, "").split(',');
        this.gridBreakPoints = {};
        for (let size of this.gridSizes) {
            this.gridBreakPoints[size] = +variables[`${size}GridBreakpoint`]
        }

        // this.theme = 'dark';

        this.minWidth = variables.mdGridBreakpoint;
        this.screenSize = '';

        this.updateSize({});
        this.onResize();
    }

    public get isDarkTheme() {
        return this.theme === 'dark';
    }

    public updatePosition(position: {
        top?: number,
        right?: number,
        left?: number,
        bottom?: number
    }) {
        this.top = (position.top === undefined) ? this.top : position.top;
        this.right = (position.right === undefined) ? this.right : position.right;
        this.left = (position.left === undefined) ? this.left : position.left;
        this.bottom = (position.bottom === undefined) ? this.bottom : position.bottom;
    };

    public updateSize(size: {
        width?: number
    }) {
        this.width = size.width || window.innerWidth;
        for (let i = this.gridSizes.length - 1; i >= 0; i--) {
            let gridSize = this.gridSizes[i];
            if (this.width >= this.gridBreakPoints[gridSize]) {
                this.screenSize = gridSize;
                break;
            }
        }
    };

    public get isMobileSize() {
        for (let gridSize of this.mobileGridSizes) {
            if (this.screenSize === gridSize) {
                return true;
            }
        }
        return false;
    }

    public get isDesktopSize() {
        for (let gridSize of this.desktopGridSizes) {
            if (this.screenSize === gridSize) {
                return true;
            }
        }
        return false;
    }

    private onResize() {
        window.addEventListener("resize", (size: Event) => {
            this.updateSize({
                width: window.innerWidth
            });
        });
    }
}

const NAppPlugin = {
    install: (_Vue: VueConstructor<Vue>) => {
        const nApp = new NApp();
        (_Vue as any).util.defineReactive(nApp, 'left', nApp.left);
        (_Vue as any).util.defineReactive(nApp, 'right', nApp.right);
        (_Vue as any).util.defineReactive(nApp, 'width', nApp.width);
        (_Vue as any).util.defineReactive(nApp, 'top', nApp.top);
        (_Vue as any).util.defineReactive(nApp, 'screenSize', nApp.screenSize);
        _Vue.prototype.$nApp = nApp;
    }
};

export default NAppPlugin;