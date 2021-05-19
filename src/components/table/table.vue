<template lang="html">
  <div class="n-table"
  :class="classes"
  :style="styles">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content" :style="{'margin-left': fixedFirst + 'px'}">
    <table>
    <thead>
        <tr>
            <th v-show="selectable === true">
              <span>+</span>
            </th>
            <th :class="{hard_left: $index === 0}" v-for="(tableHeader, $index) in tableHeaders" :key="$index" @click="onClickSort(tableHeader.value, tableHeader.sortable)">
              <span class="text" :style="{width: tableHeader.width ? tableHeader.width + 'px' : 'auto' }">
                {{ tableHeader.text }}
                <n-icon 
                v-show="tableHeader.sortable && sortBy.value === tableHeader.value"
                size="16" :name="sortBy.sort === 'up' ? 'arrow_upward' : sortBy.sort === 'down' ? 'arrow_downward' : ''"></n-icon>
              </span>
            </th>
            <th v-show="hasActions === true">
              <span>actions</span>
            </th>
        </tr>
    </thead>
    <tbody>
      <tr v-for="(tableItem, $tIndex) in tableItems" :key="$tIndex">
        <td v-show="selectable === true">=</td>
        <td :class="{hard_left: $index === 0}" @click="selectItem($tIndex)" v-for="(value, $index) in tableItem" :key="$index" :style="{color: value.color}">{{ value.text }}</td>
        <td v-show="hasActions === true" @click="onClickActions($tIndex)">
          <n-icon :name="'more_horiz'"></n-icon>
        </td>
      </tr>
    </tbody>
    </table>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <n-bottom-sheet v-model="showActions" :width="200">
      <div style="background: white;">
      <n-button v-for="(action, $index) in actions" :key="$index"
      @click="onClickAction(action.action, actionIndex)"
      >{{ action.text }}</n-button>
      </div>
    </n-bottom-sheet>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Table from "../../mixins/Table";
import TableSelectable from "../../mixins/TableSelectable";
import TableSortable from "../../mixins/TableSortable";

@Component({
  name: "n-table",
})
export default class NTable extends mixins(
  Table,
  TableSelectable,
  TableSortable
) {
  private selectItem(index: number) {
    let item = this.tableItems[index];
    let onSelect = item.onSelect;

    if (onSelect) {
      onSelect();
    }
  }
}
</script>