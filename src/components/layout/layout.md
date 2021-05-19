# layout

container, row, col로 구성된 레이아웃 시스템

### 기본 사용

```html
<n-container>
    <n-row>
        <n-col>row-1 col-1</n-col>
        <n-col>row-1 col-2</n-col>
    </n-row>
    <n-row>
        <n-col>row-2 col-1</n-col>
        <n-col>row-2 col-2</n-col>
        <n-col>row-2 col-3</n-col>
    </n-row>
    <n-row>
        <n-col>row-3 col-1</n-col>
        <n-col>row-3 col-2</n-col>
        <n-col>row-3 col-3</n-col>
        <n-col>row-3 col-4</n-col>
    </n-row>
</n-container>
```

```html
<n-container>
    <n-row>
        <n-col :col="6">row-1 col-1</n-col>
        <n-col :col="6">row-1 col-2</n-col>
    </n-row>
    <n-row>
        <n-col :col="2">row-2 col-1</n-col>
        <n-col :col="4">row-2 col-2</n-col>
        <n-col :col="6">row-2 col-3</n-col>
    </n-row>
    <n-row>
        <n-col :col="12">row-3 col-12</n-col>
    </n-row>
</n-container>
```
