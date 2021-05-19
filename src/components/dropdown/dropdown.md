# Dropdown

### 기본 사용

```html
<n-dropdown style="margin-bottom: 100px;">
    <template slot="target" slot-scope="{ on }">
        <n-button
        @click="on"
        >DROP DOWN</n-button>
    </template>
    <template slot="list">
        <ul>
            <li>123123123123</li>
            <li>123123123123</li>
            <li>123123123123</li>
        </ul>
    </template>
</n-dropdown>
```
