# NavigationBar

상단 네비게이션 바

### 기본 사용

```html
<n-navigation-bar>
    <n-button icon>
        <n-icon :name="'menu'"></n-icon>
    </n-button>    
    <n-navigation-bar-title>title</n-navigation-bar-title>
    <n-spacer></n-spacer>
    <n-button>
        example1
    </n-button>
    <n-button>
        example2
    </n-button>
    <n-button>
       example3
    </n-button>
</n-navigation-bar>
```
### 타이틀 중앙 배치

```html
<n-navigation-bar>
    <n-button icon>
        <n-icon :name="'menu'"></n-icon>
    </n-button>    
    <n-spacer></n-spacer>
    <n-navigation-bar-title>title</n-navigation-bar-title>
    <n-spacer></n-spacer>
    <n-button icon>
        <n-icon :name="'account_circle'"></n-icon>
    </n-button>
</n-navigation-bar>
```

```html
<n-navigation-bar>
    <n-navigation-bar-title><n-img :src="'https://s3.ap-northeast-2.amazonaws.com/cdn.swallow.fi/assets/images/platforms/defi_logo_compound.png'" :height="30"></n-img></n-navigation-bar-title>
</n-navigation-bar>
```
