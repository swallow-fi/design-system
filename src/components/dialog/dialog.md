# Dialog

### 기본

```html
<n-button @click="toggleDefault">show dialog</n-button>
<n-dialog v-model="showDefault" :width="200">
    <div style="background: white;">
    <n-text>Dialog</n-text>
    <n-text>Dialog</n-text>
    <n-text>Dialog</n-text>
    <n-button @click="toggleDefault">close</n-button>
    </div>
</n-dialog>
```

### 로딩용

```html
<n-button @click="toggleLoading">show dialog</n-button>
<n-loading-dialog v-model="showLoading"></n-loading-dialog>
```