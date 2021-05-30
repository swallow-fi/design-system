# AutoComplete

### 기본 사용

```html
<n-auto-complete :width="300" :placeholder="'입력해주세요'" @change-text="changeText">
    <n-list :width="300">
        <n-list-item v-for="(item, $index) in filterdItems" :key="$index">
            <n-list-item--content>
                <n-list-item--content__title>{{ item }}</n-list-item--content__title>
            </n-list-item--content>
        </n-list-item>
    </n-list>
</n-auto-complete>
```
```js
data: function () {
    return {
        text: '',
        items: ['구글', '애플', '아마존', '페이스북', '넷플릭스']
    }
},
computed: {
    filterdItems: function () {
        const text: string = this.text;

        return this.$data.items.filter((item: string) => {
            return item.indexOf(text) > -1;
        });
    }
},
methods: {
    changeText: function (text: string) {
        this.$data.text = text;
    }
}
```
