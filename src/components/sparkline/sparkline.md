# Sparkline

### 기본 사용

```html
<n-sparkline :width="500" :height="210" :stroke-color="'red'"
:data="[
    40,
    39,
    37,
    39,
    39,
    40,
    41,
    42,
    43,
    46,
    47,
    48,
    48,
    50,
    49,
    48,
    48,
    49,
  ]"
  :fill-gradient="[[205,55,47,0.5], [255,255,255,0]]"
  :line-data="[43, 43]"
  :line-color="'gray'"
  :line-style="'dash'"
  :line-width="3"
></n-sparkline>
```
