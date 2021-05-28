import { RouteConfig } from "vue-router";
import HomePage from '../pages/home/home.vue';
import ComponentPage from '../pages/component/component.vue';
import markdownLoader from '../markdownLoader';
import { unescapeHTML } from "../util/utils";

const routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/',
        component: HomePage,
        meta: {
            title: 'Nest'
        }
    }, {
        name: 'components',
        path: '/components',
        component: ComponentPage,
        meta: {
            title: 'Components',
        },
        children: [
            {
                name: 'button',
                path: 'button',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.button}
                    </section>
                    `
                }
            },
            {
                name: 'icon',
                path: 'icon',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.icon}
                    </section>
                    `
                }
            },
            {
                name: 'chip',
                path: 'chip',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.chip}
                    </section>
                    `
                }
            },
            {
                name: 'img',
                path: 'img',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.img}
                    </section>
                    `
                }
            },
            {
                name: 'divider',
                path: 'divider',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.divider}
                    </section>
                    `
                }
            },
            {
                name: 'layout',
                path: 'layout',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.layout}
                    </section>
                    `
                }
            },
            {
                name: 'sparkline',
                path: 'sparkline',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.sparkline}
                    </section>
                    `
                }
            },
            {
                name: 'candlestick',
                path: 'candlestick',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.candlestick}
                    </section>
                    `
                }
            },
            {
                name: 'navigationBar',
                path: 'navigationBar',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.navigationBar}
                    </section>
                    `
                }
            },
            {
                name: 'progressBar',
                path: 'progressBar',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.progressBar}
                    </section>
                    `
                }
            },
            {
                name: 'bottomNav',
                path: 'bottomNav',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.bottomNav}
                    </section>
                    `
                }
            },
            {
                name: 'chart',
                path: 'chart',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.chart}
                    </section>
                    `,
                    mounted: function () {

                    },
                    data: function () {
                        return {
                            options: {
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'none',
                                        label: {
                                            backgroundColor: '#6a7985'
                                        }
                                    }
                                },
                                xAxis: {
                                    show: false,
                                    type: "category",
                                    boundaryGap: false,
                                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                    axisPointer: {
                                        handle: {
                                            // show: true
                                        }
                                    }
                                },
                                yAxis: {
                                    show: false,
                                    type: "value",
                                },
                                series: [
                                    {
                                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                                        type: "line",
                                        areaStyle: {
                                            color: {
                                                type: 'linear',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0, color: 'rgba(0, 212, 255, 0.2)' // color at 0% position
                                                }, {
                                                    offset: 1, color: 'rgba(10, 37, 65, 0)' // color at 100% position
                                                }],
                                                global: false // false by default
                                            }
                                        },
                                        lineStyle: {
                                            color: '#00D4FF',
                                            width: 3
                                        },
                                        showSymbol: false,
                                        symbolSize: 14,
                                        symbol: 'path://M11 5.918c1.357 0 2.634.53 3.594 1.49 1.98 1.98 1.98 5.204 0 7.185-.96.96-2.237 1.49-3.594 1.49s-2.634-.53-3.594-1.49c-1.98-1.98-1.98-5.205 0-7.186.96-.96 2.237-1.49 3.594-1.49M11 1c-2.56 0-5.12.976-7.07 2.93-3.906 3.904-3.906 10.236 0 14.14C5.88 20.024 8.44 21 11 21s5.12-.976 7.07-2.93c3.906-3.904 3.906-10.236 0-14.14C16.12 1.976 13.56 1 11 1z'
                                    },
                                ],
                            },
                            options2: {
                                grid: {
                                    show: true,
                                    width: 80,
                                    height: 40,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    borderWidth: 0
                                },

                                tooltip: {
                                    show: false
                                },
                                xAxis: {
                                    show: true,
                                    type: "category",
                                    boundaryGap: false,
                                    data: ["a", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                                    axisLine: {
                                        lineStyle: {
                                            color: '#C7D6E2',
                                            type: 'dashed'
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: false
                                    }
                                },
                                yAxis: {
                                    show: false,
                                    type: "value",
                                },
                                visualMap: [{
                                    type: 'piecewise',
                                    show: false,
                                    seriesIndex: 0,
                                    pieces: [{
                                        gt: -1000,
                                        lte: 0,
                                        color: 'rgba(23, 118, 215, 1)',
                                    }, {
                                        gt: 0,
                                        lte: 1000,
                                        color: 'rgba(220, 30, 20, 1)',
                                    }],
                                    outOfRange: {
                                        color: '#999'
                                    }
                                }, {
                                    type: 'piecewise',
                                    show: false,
                                    seriesIndex: 1,
                                    pieces: [{
                                        gt: -1000,
                                        lte: 0,
                                        color: 'rgba(23, 118, 215, 0.1)',
                                    }, {
                                        gt: 0,
                                        lte: 1000,
                                        color: 'rgba(220, 30, 20, 0.1)',
                                    }],
                                    outOfRange: {
                                        color: '#999'
                                    }
                                }],
                                series: [
                                    {
                                        // data: [1290, 820, 932, 901, 934, 1290, 1330, 1320],
                                        data: [1290 - 1000, 820 - 1000, 932 - 1000, 901 - 1000, 934 - 1000, 1290 - 1000, 1330 - 1000, 1320 - 1000],
                                        type: "line",
                                        lineStyle: {
                                            width: 3
                                        },
                                        showSymbol: false,
                                    },
                                    {
                                        // data: [1290, 820, 932, 901, 934, 1290, 1330, 1320],
                                        data: [1290 - 1000, 820 - 1000, 932 - 1000, 901 - 1000, 934 - 1000, 1290 - 1000, 1330 - 1000, 1320 - 1000],
                                        type: "line",
                                        areaStyle: {},
                                        lineStyle: {
                                            width: 3
                                        },
                                        showSymbol: false,
                                    }
                                ],
                            }
                        }
                    }
                }
            },
            {
                name: 'dropdown',
                path: 'dropdown',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.dropdown}
                    </section>
                    `
                }
            },
            {
                name: 'list',
                path: 'list',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.list}
                    </section>
                    `
                }
            },
            {
                name: 'table',
                path: 'table',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.table}
                    </section>
                    `,
                    mounted: function () {
                        console.log(this)
                    }
                    ,
                    data: function () {
                        return {
                            fixedFirst: true,
                            stockHeaders: [
                                {
                                    text: '종목명',
                                    sortable: false,
                                    value: 'name',
                                    width: 100
                                },
                                { text: '현재가', value: 'last', sortable: true, width: 100 },
                                { text: '전일대비(%)', value: 'change', sortable: true, width: 100 },
                                { text: '시작가', value: 'open', sortable: false, width: 100 },
                                { text: '고가', value: 'high', sortable: false, width: 100 },
                                { text: '저가', value: 'low', sortable: false, width: 100 }
                            ],
                            stocks: [
                                {
                                    name: '삼성전자',
                                    viewing: 159,
                                    last: 727130,
                                    open: 727000,
                                    high: 728000,
                                    low: 723000,
                                    change: '+2.17%'
                                }, {
                                    name: '삼성전자',
                                    viewing: 159,
                                    last: 727130,
                                    open: 727000,
                                    high: 728000,
                                    low: 723000,
                                    change: '+2.17%'
                                }, {
                                    name: '삼성전자',
                                    viewing: 159,
                                    last: 727130,
                                    open: 727000,
                                    high: 728000,
                                    low: 723000,
                                    change: '+2.17%'
                                }
                            ],
                            headers: [
                                {
                                    text: 'Dessert (100g serving)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'name'
                                },
                                // { text: 'Calories', value: 'calories' },
                                // { text: 'Fat (g)', value: 'fat', sortable: true },
                                // { text: 'Carbs (g)', value: 'carbs' },
                                { text: 'Protein (g)', value: 'protein' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' },
                                { text: 'Iron (%)', value: 'iron' }
                            ],
                            desserts: [
                                {
                                    name: 'Frozen Yogurt',
                                    calories: 159,
                                    fat: 6.0,
                                    carbs: 24,
                                    protein: 4.0,
                                    iron: '1%'
                                },
                                {
                                    name: 'Ice cream sandwich',
                                    calories: 237,
                                    fat: 9.0,
                                    carbs: 37,
                                    protein: 4.3,
                                    iron: '1%'
                                },
                                {
                                    name: 'Eclair',
                                    calories: 262,
                                    fat: 16.0,
                                    carbs: 23,
                                    protein: 6.0,
                                    iron: '7%'
                                },
                                {
                                    name: 'Cupcake',
                                    calories: 305,
                                    fat: 3.7,
                                    carbs: 67,
                                    protein: 4.3,
                                    iron: '8%'
                                },
                                {
                                    name: 'Gingerbread',
                                    calories: 356,
                                    fat: 16.0,
                                    carbs: 49,
                                    protein: 3.9,
                                    iron: '16%'
                                },
                                {
                                    name: 'Jelly bean',
                                    calories: 375,
                                    fat: 0.0,
                                    carbs: 94,
                                    protein: 0.0,
                                    iron: '0%'
                                },
                                {
                                    name: 'Lollipop',
                                    calories: 392,
                                    fat: 0.2,
                                    carbs: 98,
                                    protein: 0,
                                    iron: '2%'
                                },
                                {
                                    name: 'Honeycomb',
                                    calories: 408,
                                    fat: 3.2,
                                    carbs: 87,
                                    protein: 6.5,
                                    iron: '45%'
                                },
                                {
                                    name: 'Donut',
                                    calories: 452,
                                    fat: 25.0,
                                    carbs: 51,
                                    protein: 4.9,
                                    iron: '22%'
                                },
                                {
                                    name: 'KitKat',
                                    calories: 518,
                                    fat: 26.0,
                                    carbs: 65,
                                    protein: 7,
                                    iron: '6%'
                                }
                            ]
                        }
                    }
                }
            },
            {
                name: 'rangeSlider',
                path: 'rangeSlider',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.rangeSlider}
                    </section>
                    `
                }
            },
            {
                name: 'text',
                path: 'text',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.text}
                    </section>
                    `,
                    data: function () {
                        return {
                            num: 123
                        }
                    },
                    methods: {
                        interval: function () {
                            console.log('interval');

                            setTimeout(() => {
                                (this as any).num = Math.floor(Math.random() * 10000);

                                (this as any).interval();
                            }, 5000);
                        }
                    },
                    mounted() {
                        console.log('mounted');
                        // (this as any).interval();
                    }
                }
            },
            {
                name: 'drawer',
                path: 'drawer',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.drawer}
                    </section>
                    `,
                    data: function () {
                        return {
                            showDefault: false,
                            showRight: false
                        }
                    },
                    methods: {
                        toggleDefault: function () {
                            this.$data.showDefault = !this.$data.showDefault;
                        },
                        toggleRight: function () {
                            console.log(11);
                            this.$data.showRight = !this.$data.showRight;
                        }
                    }
                }
            },
            {
                name: 'toast',
                path: 'toast',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.toast}
                    </section>
                    `,
                    data: function () {
                        return {
                            show: false
                        }
                    },
                    methods: {
                        showToast: function () {
                            (this as any).$toast('Hello world!');
                        }
                    }
                }
            },
            {
                name: 'input',
                path: 'input',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.input}
                    </section>
                    `,
                    data: function () {
                        return {
                            text: '입력 값'
                        }
                    },
                    methods: {
                    }
                }
            },
            {
                name: 'dialog',
                path: 'dialog',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.dialog}
                    </section>
                    `,
                    data: function () {
                        return {
                            showDefault: false,
                            showLoading: false
                        }
                    },
                    methods: {
                        toggleDefault: function () {
                            this.$data.showDefault = !this.$data.showDefault;
                        },
                        toggleLoading: function () {
                            this.$data.showLoading = !this.$data.showLoading;

                            setTimeout(() => {
                                this.$data.showLoading = !this.$data.showLoading;
                            }, 3000);
                        }
                    }
                }
            },
            {
                name: 'bottom-sheet',
                path: 'bottom-sheet',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.bottomSheet}
                    </section>
                    `,
                    data: function () {
                        return {
                            showDefault: true
                        }
                    },
                    methods: {
                        toggleDefault: function () {
                            this.$data.showDefault = !this.$data.showDefault;
                        }
                    }
                }
            },
            {
                name: 'carousel',
                path: 'carousel',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.carousel}
                    </section>
                    `,
                    data: function () {
                        return {
                            showDefault: true
                        }
                    },
                    methods: {
                        toggleDefault: function () {
                            this.$data.showDefault = !this.$data.showDefault;
                        }
                    }
                }
            },
            {
                name: 'tabs',
                path: 'tabs',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.tabs}
                    </section>
                    `,
                    data: function () {
                        return {
                            title: '오늘의 핫이슈',
                            themes: [{
                                id: '111',
                                name: '테마1',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '222',
                                name: '테마2',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '333',
                                name: '테마3',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '444',
                                name: '테마4',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '555',
                                name: '테마5',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '666',
                                name: '테마6',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '777',
                                name: '테마7',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '888',
                                name: '테마8',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '999',
                                name: '테마9',
                                type: 'sector',
                                hits: 100
                            }, {
                                id: '101010',
                                name: '테마10',
                                type: 'sector',
                                hits: 100
                            }]
                        }
                    }
                }
            },
            {
                name: 'auto-complete',
                path: 'auto-complete',
                component: {
                    template: `
                    <section class="n-page">
                    ${markdownLoader.autoComplete}
                    </section>
                    `,
                    data: function () {
                        return {
                            text: '',
                            items: ['구글', '애플', '아마존', '페이스북', '넷플릭스']
                        }
                    },
                    computed: {
                        filterdItems: function () {
                            const text: any = this.text;

                            return (this as any).$data.items.filter((item: string) => {
                                return item.indexOf(text) > -1;
                            });
                        }
                    },
                    methods: {
                        changeText: function (text: any) {
                            console.log(text);
                            this.$data.text = text;
                        }
                    }
                }
            }
        ]
    }
];

type ChildComponent = {
    template: string;
}
let componentsRouteChildren: RouteConfig[] = [];

for (const route of routes) {
    if (route.name === 'components' && route.children !== undefined) {
        componentsRouteChildren = route.children;
    }
}

let childMap = new Map();
for (let child of componentsRouteChildren) {
    const container = document.createElement('div');
    let component = child.component as ChildComponent;
    container.innerHTML = component.template;
    const languageHTMLEles: any = container.getElementsByClassName('language-html');
    let html = "";
    for (const languageHTMLEle of languageHTMLEles) {
        languageHTMLEle.innerHTML = unescapeHTML('<div class="example-block--component">' + languageHTMLEle.innerHTML + '</div>') + '<div class="example-block--text">' + languageHTMLEle.innerHTML + '</div>';
        html = container.innerHTML;
    }
    childMap.set(child.name, html)
}

for (let child of componentsRouteChildren) {
    let component = child.component as ChildComponent;
    component.template = childMap.get(child.name);
}


export default routes;