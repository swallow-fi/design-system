# dateFormatter

### 기본 사용

```html
<div v-date-formatter="{fromNow: 1622444881103}"></div>
<div v-date-formatter="{fromNow: Date.now() + 1000 * 60 * 60 * 7}"></div>
<div v-date-formatter="{fromNow: Date.now() - 1000 * 60 * 60 * 3}"></div>
<div v-date-formatter="{fromNow: Date.now() + 1000 * 60 * 4}"></div>
<div v-date-formatter="{fromNow: Date.now() - 1000 * 60 * 3}"></div>
```