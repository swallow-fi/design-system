import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Table extends Vue {
    @Prop({ default: 0 })
    fixedFirst!: number;

    @Prop({ default: false })
    fixedHeader!: boolean;

    @Prop({ type: [String, Number], default: "100%" })
    width!: string | number;

    // @Prop({ default: undefined })
    // height!: number;

    @Prop({ type: [Object, Array], default: () => [] })
    actions!: {
        text: string;
        action: Function;
    }[];

    @Prop({ default: [] })
    headers!: {
        text: string;
        align: string;
        value: string;
        width?: number;
        updown?: boolean
        actions?: string[];
        sortable?: boolean;
    }[]; //

    @Prop({ default: [] })
    items!: any[];


    protected get tableHeaders() {
        return this.headers;
    }

    protected get hasActions() {
        return this.actions.length > 0;
    }

    protected tableItems: any[] = [];
    protected showActions: boolean = false;
    protected actionIndex: number = -1;

    protected onClickActions(index: number) {
        this.actionIndex = index;
        this.showActions = !this.showActions;
    }

    protected onClickAction(action: Function, index: number) {
        let item = this.tableItems[index];
        action(item);
    }

    protected getTableItems() {
        let headers = this.headers;
        let items: any[] = this.items;

        let tableItems: any[] = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let values = [];
            for (let h = 0; h < headers.length; h++) {
                let header = headers[h];
                let text = item[header.value];
                let value: {
                    color?: string;
                    text: string;
                } = {
                    text: item[header.value],
                };
                if (header.updown === true) {
                    if (Number(text) > 0) {
                        value.color = 'red'
                    } else if (Number(text) < 0) {
                        value.color = 'blue'
                    }
                }

                values.push(value);
            }

            // 배열 객체에 function을 넣음
            (values as any).onSelect = item.onSelect;
            (values as any).id = i;
            tableItems.push(values);
        }

        return tableItems;
    }

    protected get classes() {
        return {
            "n-table__header-fixed": this.fixedHeader,
            "n-table__first-fixed": this.fixedFirst > 0
        };
    }

    protected get styles() {
        return {
            width: this.width
        }
    }

    created() {
        this.tableItems = JSON.parse(JSON.stringify(this.items));
    }
}