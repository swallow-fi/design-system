# Table

### 기본

```html
<n-table :headers="stockHeaders" :items="stocks"></n-table>
```

### 커스텀 사용

```html
<n-custom-table class="crypto-currency-table" :headers="stockHeaders" :items="stocks" :fixedFirst="fixedFirst">
    <template slot="cell" slot-scope="{ item }">
        <tr class="custom-table-cell">
          <th class="name">
            <div>삼성전자</div>
            <div class="shadow"></div>
          </th>
          <td class="last">727130</td>
          <td class="change">+2.17%</td>
          <td class="open">727000</td>
          <td class="high">728000</td>
          <td class="low">723000</td>
        </tr>
    </template>
</n-custom-table>
```

