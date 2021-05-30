# Drawer

메뉴 판

### 기본 사용

```html
<n-button @click="toggleDefault">Toggle</n-button>

<n-drawer v-model="showDefault">
    <n-list>
        <n-list-item>
            <n-list-item--image></n-list-item--image>
            <n-list-item--content>
                <n-list-item--content__title>title1</n-list-item--content__title>
                <n-list-item--content__subtitle>subtitle1</n-list-item--content__subtitle>
                <n-list-item--content__description>description1</n-list-item--content__description>
            </n-list-item--content>
            <n-list-item--action></n-list-item--action>
        </n-list-item>
        <n-divider></n-divider>
        <n-list-item>
            <n-list-item--image></n-list-item--image>
            <n-list-item--content>
                <n-list-item--content__title>title2</n-list-item--content__title>
                <n-list-item--content__subtitle>subtitle2</n-list-item--content__subtitle>
            </n-list-item--content>
            <n-list-item--action></n-list-item--action>
        </n-list-item>
        <n-divider></n-divider>
        <n-list-item>
            <n-list-item--image></n-list-item--image>
            <n-list-item--content>
                <n-list-item--content__title>title3</n-list-item--content__title>
            </n-list-item--content>
            <n-list-item--action>
                <n-button>action</n-button>
            </n-list-item--action>
        </n-list-item>
    </n-list>
</n-drawer>
```

```html
<n-button @click="toggleRight">Toggle</n-button>

<n-drawer v-model="showRight" right>
    
</n-drawer>
```