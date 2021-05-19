# list

단순 리스트

### 기본 사용

```html
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
```

### 그룹 사용

```html
<n-list>
    <n-list-group>
        <template slot="main">
            <n-list-item>
                <n-list-item--content>
                    <n-list-item--content__title>main1 item</n-list-item--content__title>
                </n-list-item--content>
                <n-list-item--action></n-list-item--action>
            </n-list-item>
        </template>
        <template>
            <n-list-item>
                <n-list-item--image></n-list-item--image>
                <n-list-item--content>
                    <n-list-item--content__title>sub item</n-list-item--content__title>
                    <n-list-item--content__subtitle>subtitle2</n-list-item--content__subtitle>
                </n-list-item--content>
                <n-list-item--action></n-list-item--action>
            </n-list-item>
            <n-divider></n-divider>
            <n-list-item>
                <n-list-item--image></n-list-item--image>
                <n-list-item--content>
                    <n-list-item--content__title>sub item</n-list-item--content__title>
                </n-list-item--content>
                <n-list-item--action>
                    <n-button>action</n-button>
                </n-list-item--action>
            </n-list-item>
            <n-divider></n-divider>
        </template>
    </n-list-group>
    <n-list-group>
        <template v-slot:main>
            <n-list-item>
                <n-list-item--content>
                    <n-list-item--content__title>main2 item</n-list-item--content__title>
                </n-list-item--content>
                <n-list-item--action></n-list-item--action>
            </n-list-item>
        </template>
        <template>
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
        </template>
    </n-list-group>
</n-list>
```