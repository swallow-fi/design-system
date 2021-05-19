<template lang="html">
  <div class="n-slot-table"
  :class="classes"
  :style="styles">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content" ref="content">
      <table>
      <thead>
          <tr>
              <th :class="getClass($index)" v-for="(tableHeader, $index) in tableHeaders" :key="$index" @click="onClickSort(tableHeader.value, tableHeader.sortable)"
              :style="{width: getWidth(tableHeader.width) }">
                <span class="text">
                {{ tableHeader.text }}
                <!-- <n-icon 
                v-show="tableHeader.sortable && sortBy.value === tableHeader.value"
                size="16" :name="sortBy.sort === 'up' ? 'arrow_upward' : sortBy.sort === 'down' ? 'arrow_downward' : ''"></n-icon> -->
                </span>
                <div class="shadow" v-if="fixedFirst && $index === 0"></div>
              </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(item, $index) in items" :key="$index">
            <slot name="cell" :item="item"></slot>
        </tr>
      </tbody>
      </table>
    </div>
    <!-- <div class="shadow" :style="{left: fixedFirst + 'px'}"></div> -->
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Table from "../../mixins/Table";
import TableSelecable from "../../mixins/TableSelectable";
import TableSortable from "../../mixins/TableSortable";

@Component({
  name: "n-slot-table",
})
export default class NSlotTable extends Vue {
  @Prop({ default: 0 })
  fixedFirst!: number;

  @Prop({ default: false })
  fixedHeader!: boolean;

  @Prop({ type: [String, Number], default: "100%" })
  width!: string | number;

  @Prop({ default: [] })
  headers!: {
    text: string;
    align: string;
    value: string;
    width?: number;
    updown?: boolean;
    actions?: string[];
    sortable?: boolean;
  }[];

  @Prop({ default: [] })
  items!: any[];

  protected get tableHeaders() {
    return this.headers;
  }

  protected get classes() {
    return {
      "n-table__header-fixed": this.fixedHeader,
      "n-table__first-fixed": this.fixedFirst > 0,
    };
  }

  protected get styles() {
    return {
      // height: this.height === undefined ? false : this.height + "px",
      width: this.width,
    };
  }

  protected getWidth(width: number | string | undefined) {
    if (width === undefined) {
      return "auto";
    }

    if (typeof width === "string") {
      return width;
    }

    return width + "px";
  }

  private getClass(index: number) {
    let value = this.tableHeaders[index].value;
    let c: any = {};
    c[value] = true;
    c["hard_left"] = index === 0;

    return c;
  }

  scrolling: boolean = true;

  // private detectScroll() {
  //   this.s
  // }

  mounted() {
    // let content = this.$refs.content as HTMLDivElement;
    // content.addEventListener('scroll', () => {
    //   this.scrolling =
    // })
  }

  created() {}
}
</script>