import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Table from './Table';

@Component
export default class TableSelectable extends mixins(Table) {
    @Prop({ default: false })
    selectable!: boolean;

    @Prop({ default: () => [] })
    selectedItems!: number[]; // index
}