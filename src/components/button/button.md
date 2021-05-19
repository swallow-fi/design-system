# Button

### 기본 상태

```html
<n-button>Default</n-button>
<n-button type="primary">Primary</n-button>
<n-button type="success">Success</n-button>
<n-button type="warning">Warning</n-button>
<n-button type="danger">Danger</n-button>
```

### disabled 상태

```html
<n-button disabled>Default</n-button>
<n-button type="primary" disabled>Primary</n-button>
<n-button type="success" disabled>Success</n-button>
<n-button type="warning" disabled>Warning</n-button>
<n-button type="danger" disabled>Danger</n-button>
```

### block 상태

```html
<n-button block>Button</n-button>
```

### icon 적용

```html
<n-button icon flat>
    <n-icon :name="'account_circle'"></n-icon>
</n-button>
<n-button>
    <n-icon :name="'account_circle'"></n-icon>
    account
</n-button>
```