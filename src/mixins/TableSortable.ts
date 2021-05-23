import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Table from './Table';

@Component
export default class TableSortable extends mixins(Table) {
    @Watch("items")
    watchItems(items: any[]) {
        this.sortTableItems(this.sortBy.value, this.sortBy);
    }

    protected sortBy: {
        value: string;
        sort: string; // up || down
    } = {
            value: "",
            sort: "",
        };

    protected onClickSort(value: string, sortable?: boolean) {
        if (sortable === false || sortable === undefined) {
            return;
        }

        if (this.sortBy.value === "" || this.sortBy.sort === "") {
            this.sortBy.value = value;
            this.sortBy.sort = "down";
            this.sortTableItems(value, this.sortBy);
            return;
        }

        if (this.sortBy.value == value && this.sortBy.sort == "down") {
            this.sortBy.value = value;
            this.sortBy.sort = "up";
            this.sortTableItems(value, this.sortBy);
            return;
        }

        if (this.sortBy.value == value && this.sortBy.sort == "up") {
            this.sortBy.value = "";
            this.sortBy.sort = "";
            this.sortTableItems(value, this.sortBy);
            return;
        }

        if (this.sortBy.value != value) {
            this.sortBy.value = value;
            this.sortBy.sort = "down";
            this.sortTableItems(value, this.sortBy);
            return;
        }
    }

    protected sortTableItems(
        value: string,
        sortBy: {
            value: string;
            sort: string; // up || down
        }
    ) {
        let items = JSON.parse(JSON.stringify(this.items));

        if (this.sortBy.value === "" || this.sortBy.sort === "") {
            this.tableItems = items;
            return;
        }

        if (this.sortBy.value == value && this.sortBy.sort == "down") {
            this.tableItems = items.sort((a: any, b: any) => {
                return a[value] - b[value];
            });
            return;
        }

        if (this.sortBy.value == value && this.sortBy.sort == "up") {
            this.tableItems = items.sort((a: any, b: any) => {
                return b[value] - a[value];
            });
            return;
        }
    }
}