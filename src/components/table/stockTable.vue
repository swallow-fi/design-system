<template lang="html">
  <div class="n-stock-table"
  :class="classes"
  :style="styles">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content">
      <table>
      <thead>
          <tr>
              <th :class="getClass($index)" v-for="(tableHeader, $index) in tableHeaders" :key="$index" @click="onClickSort(tableHeader.value, tableHeader.sortable)">
                <span>{{ tableHeader.text }}</span>
                <span v-show="tableHeader.sortable && sortBy.value === tableHeader.value">
                  {{ sortBy.sort }}
                </span>
              </th>
          </tr>
      </thead>
      <tbody>
        <tr @click="selectStock($index)" v-for="(tableItem, $index) in tableItems" :key="$index">
          <td :class="getClass($index)" v-for="(value, $index) in tableItem" :key="$index">
              <span>{{ value }}</span>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Route } from "vue-router";
import Table from "../../mixins/Table";
import TableSelecable from "../../mixins/TableSelectable";
import TableSortable from "../../mixins/TableSortable";

@Component({
  name: "n-stock-table",
})
export default class NStockTable extends mixins(Table, TableSortable) {
  private getClass(index: number) {
    let value = this.tableHeaders[index].value;
    return `${value}`;
  }
  private selectStock(index: number) {
    let item = this.items[index];
    let onSelect = item.onSelect;

    if (onSelect) {
      onSelect();
    }
  }
}
</script>