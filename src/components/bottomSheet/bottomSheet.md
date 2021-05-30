# BottomSheet

### 기본 사용

```html
<n-button @click="toggleDefault">show bottom sheet</n-button>
<n-bottom-sheet v-model="showDefault" :width="200">
    <div style="background: white;">
    <n-text>title</n-text>
    <n-text>title</n-text>
    <n-text>title</n-text>
    <n-button @click="toggleDefault">close</n-button>
    </div>
</n-bottom-sheet>
```