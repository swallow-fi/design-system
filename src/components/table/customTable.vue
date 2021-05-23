<template lang="html">
  <div class="n-custom-table"
  :style="styles">
  <table>
    <thead>
        <tr>
            <th :class="getClass($index)" v-for="(tableHeader, $index) in tableHeaders" 
            :key="$index"
            @click="onClickSort(tableHeader.value, tableHeader.sortable)" :style="{'width': tableHeader.width + 'px'}">
                <div>
                    {{ tableHeader.text }}
                    <span class="arrow-sort" v-show="tableHeader.sortable">
                      <n-img :src="getSortAssetSrc(tableHeader.value, sortBy)"/>
                    </span> 
                </div>
                <div v-if="$index === 0"class="shadow"></div>
            </th>
        </tr>
    </thead>
    <tbody>
        <div class="template" v-for="(item, $index) in tableItems" :key="$index">
            <slot name="cell" :item="item"></slot>
        </div>
    </tbody>
  </table>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";

// https://jsfiddle.net/qwubvg9m/1/
import Table from "../../mixins/Table";
import TableSelectable from "../../mixins/TableSelectable";
import TableSortable from "../../mixins/TableSortable";

@Component({
  name: "n-custom-table",
})
export default class NTable extends mixins(
  Table,
  TableSelectable,
  TableSortable
) {
  @Prop({ default: false })
  fixedHeader!: boolean;

  @Prop({ type: [String, Number], default: "100%" })
  width!: string | number;

  @Prop({ type: [String, Number], default: "100%" })
  height!: string | number;

  @Prop({ default: {} })
  sortAssets!: {
    up: string;
    down: string;
    normal: string;
  };

  @Prop({ default: [] })
  headers!: {
    text: string;
    align: string;
    class: string;
    value: string;
    width?: number;
    updown?: boolean;
    actions?: string[];
    sortable?: boolean;
    flex?: number;
  }[];

  @Prop({ default: [] })
  items!: any[];

  private getSortAssetSrc(
    value: string,
    sortBy: { value: string; sort: string }
  ) {
    if (value === sortBy.value && sortBy.sort === "up") {
      return this.sortAssets.up;
    } else if (value === sortBy.value && sortBy.sort === "down") {
      return this.sortAssets.down;
    }

    return this.sortAssets.normal;
  }

  protected get tableHeaders() {
    return this.headers;
  }

  private getClass(index: number) {
    let headerClass = this.tableHeaders[index].value;
    let c: any = {};
    c[headerClass] = true;

    return c;
  }
}
</script>
