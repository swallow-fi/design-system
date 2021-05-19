# Nest 디자인 시스템

## 개요
- 불필요한 커뮤니케이션을 없애기 위해 체계적으로 정리한 시스템
- 서비스 전반에 공통으로 쓰이는 컬러와 각종 UI 컴포넌트에 대한 체계적인 관리
- 일관성을 잡고 비효율적인 디자인하는 시간을 줄인다
- 접근성을 높이기 위해 브랜딩이 같이 고려되어야한다
- 원칙을 지키고 니즈를 충족시켜야한다

> 스포티파이 디자인 팀은 분산된 디자이너들이 어떻게 일관된 경험을 만들 수 있을 지 고민하였고, 5가지 방법을 찾아냈습니다
> - **Principle**: 디자인 팀의 공통된 관점을 가지기 위해 디자인 원칙을 수립했습니다. 이 원칙들을 바탕으로 디자인 재정립 프로젝트를 진행하였습니다. 이 원칙들은 비즈니스 목표와 연결되어 있어 디자이너 이외의 조직 구성원들에게도 공감을 얻을 수 있었습니다. 
> - **Guideline**: 재정립된 디자인 일관성을 유지하기 위해, 스포티파이의 컴포넌트와 패턴, 스타일 문서를 담은 가이드라인을 오픈했습니다. 일관성뿐만 아니라, 디자이너와 개발자 간 용어를 제작함으로써 효율성도 높였습니다. 
> - **GLUE**: 가이드라인과 툴킷을 담당하는 팀을 만들어 조직의 중심에서 팀 간의 협업을 돕고 다양한 디자인 요구를 지원합니다. 
> - **Guild**: Silo의 디자이너와 GLUE의 팀원이 함께 길드를 결성하여 가이드라인과 디자인 사항을 합의하고 조율합니다. 
> - **디자인 QA**: 디자인 버그를 수정하기 위해 디자인 QA를 마련하였습니다. 체크리스트를 통해 스포티파이의 가이드라인과 디자인 원칙을 준수하도록 하였습니다.

<br>

## 원칙 (우선은 토스의 product principle을 참고하여 발전시킨다)
- **Casual Concept**: 어려운 금융의 개념을 친숙하고 이해하기 쉽게 만들었는가
- **1 thing per 1 page**: 하나의 화면에 하나의 명확한 목표가 드러나는가
- **Minimum Features**: 꼭 필요한 기능인가? 이걸 넣어야만 성장할 수 있나
- **Clear CTA**: 다음 단계로 진행하거나 과업을 완료하기 위한 CTA가 잘 보이고, 바로 누를 수 있는가
- **Minimum Policy**: 고객이 사용을 위해 '알아야 할 것'을 없앨 수 있는가
- **Mimimum Input**: 꼭 필요한 정보만 요구하고 있는가? 최소한의 터치만으로 완료할 수 있는가
<br>

## 스타일 가이드
<br>

## 구성요소
### 1. Atomic Design
``` 
atoms -> Elements -> Components -> Templates -> Pages
```
- **atoms**: 가장 작은 단위 (icon, text, image등 더 이상 쪼갤 수 없는 요소)
- **elements**: interaction이 가능한 atoms로 이루어진 최소 단위
- **components**: functions와 events를 가지는 atoms, eleements들로 이루어진 단위
- **templates**: components들로 이루어진 구성의 의도를 가진 단위
- **pages**: templates들로 이루어진 page
- **layouts**: container, grid, flex등 틀을 잡아주는 요소들
- **variables**: color, font, spacing등 값을 가지는 요소들
- **animations**: interaction시 사용되는 각 종 효과들

#### 참조
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [스타트업에서 디자인 시스템 만들기 1 by 케어닥](https://brunch.co.kr/@fifthsage/4)

<br>

### 2. layer
- **atoms**: 표현 레이아웃의 구성요소들 (color, text, icon)
- **표현 레이어**: 메시지를 다루는 부분이자 컴포넌트의 가장 기본이 되는 레이어. 표현레이어는 고유의 브랜드와 색상이 담기는 곳이며 더 작은 컴포넌트들로 나우어지지 않음
- **패턴 레이어**: 디자인 에셋들의 레이아웃. 패턴은 각각의 컴포넌트들이 어떻게 배치되어야 하는지에 대한 정확한 기준을 제시
- **컨셉 레이어**: 디자이너가 다른 모든 stakeholder들과 어떻게 소통할 것인지에 관한 것이고 우리의 디자인이 얼마나 좋은지를 평가하는 기준이 되는 레이어
- 표현 레이어가 우리의 알파벳이라면 패턴 레이어는 우리의 단어와 문장이다. 그리고 컨셉 레이어는 우리의 이야기입니다.

#### 참조
- [Design System Structure by Daniel Eden](https://daneden.me/2017/07/17/design-system-structure/)
- [Design System Grammar by Daniel Eden](https://daneden.me/2017/07/12/a-design-system-grammar/)
- [Design System at Buzzvil](https://www.buzzvil.com/ko/2018/03/28/design-system-at-buzzvil-디자인시스템-daniel-eden/)

<br>

## 협업

1. 문제 정의
2. 아무 말 대잔치로 해결안 찾기
3. 스펙 쳐내기
4. 디자인 및 개발
    - 4-1. 스케치에 디자이너가 심벌 기능을 이용해 합의된 모든 요소들을 정리하는 것부터 시작. 
    - 4-2. abstract로 초안과 시안등을 관리. abstract를 이용하면 굳이 sketch를 통하지 않고도 개발자들이나 기획자들이 쉽게 확인할 수 있다
    - 4-3. 확정된 작업 결과물을 zeplin에 있는 스타일 가이드를 이용해 native의 stylecode로 뽑아낸다
    - 4-4. 뽑아낸 스타일 코드를 퍼블리셔가 디자인 시스템 native 라이브러리의 해당 요소 컴포넌트에 style code를 적용한다.
    - 4-5. html, css를 바탕으로 각 프레임워크로 래핑하고 적용시킨다
5. QA 및 문서 업데이트
6. 저렴한 실패, 새로운 시작

#### 참조
- **toss**: 토스 디자인 시스템은 스케치 + 앱스트랙트 조합으로 활용되고 있다. TDS 스케치 파일을 앱스트랙트에서 라이브러리로 지정하고, PD들은 자신의 작업 파일에 TDS를 링크시킨다. 이렇게 하면 업데이트 되는 TDS가 실시간으로 적용되어, UI가 항상 최신 버전으로 유지될 수 있다. 개발자는 TDS 가이드에 따라 리팩토링 된 코드는 컴포넌트 추가를 매우 간편한 방식으로 한다 https://www.notion.so/1000-755c0950270c4f779f1979c2c3258ea6 이미지 참조)
- **wework**: https://github.com/wework/plasma
- **pinterest**: https://github.com/pinterest/gestalt

## 개발

### 기술 스택
- vue 2.0 (SPA)
- typescript
- scss
- webpack
- npm

### IDE
- vscode [다운로드](https://code.visualstudio.com/)

### 설치
1. npm (nodejs) 설치 (v5.0.0+)
2. `git clone`으로 프로젝트 받기
3. /package.json이 있는 폴더에서 `npm install` 로 모듈설치
4. `npm start`로 빌드 및 webpack dev서버 구동
5. http://localhost:8085/ 에서 확인

- 요소들의 단위는 폴더 단위가 될 수 있다.
- templates와 pages를 제외한 요소 단위는 모두 native library의 components로 작성될 것.
- 예를 들어 text atom component는 props로 크기, 서체 스타일, 굵기 등을 가진 native library component가 될 것이고, button element component는 props로 크기, 색상, 비활성화 여부등을 가지며 text atom component와 icon atom component 을 포함하고 fade animation을 가진 native library component가 될 것이다. 실제 코드레벨에서 사용하는 native 라이브러리와 요소 단위들을 통일함으로써 직관성을 획득해 - 디자이너와 개발자의 소통을 원활하게 해주고 또 처음 시작하는 팀 동료들의 러닝 커브를 줄이는데 도움이 됨

- class 명명법은 BEM을 따른다
- http://getbem.com/
- https://m.alphasights.com/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b
- https://m.alphasights.com/bem-i-finally-understand-b0c74815d5b0#.9vdcmiugz
- https://mytory.net/html-css-js/2015/05/07/mindbemding-getting-your-head-round-bem-syntax.html

1. 컴포넌트로 구분
- [Vuetify](https://vuetifyjs.com/ko/components/buttons)
- [element-ui](https://element.eleme.io/#/en-US/component/button)
- [semantic-ui](https://semantic-ui-vue.github.io/#/elements/button)
2.  클래스로 구분
- [bluma](https://bulma.io/documentation/layout/level/)
- [bootstrap](https://getbootstrap.com/docs/4.3/layout/overview/)
> vuetify, element-ui 가 가장 잘되어있어서 많이 참고한다

## 참조
- [Adele by UXPin (디자인 시스템을 확인하는 곳)](https://adele.uxpin.com/)
- [Design Systems Repo (디자인 시스템 및 관련 툴 확인하는 곳)](https://designsystemsrepo.com/)
- [Desgin Systems by Figma (디자인 시스템 및 관련 글 확인하는 곳)](https://www.designsystems.com/)
- https://story.pxd.co.kr/1434
- https://www.designspectrum.org/spectrumpicks-article46
- https://www.buzzvil.com/ko/2018/03/28/design-system-at-buzzvil-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C-daniel-eden/
- https://story.pxd.co.kr/1411
- http://icunow.co.kr/design-system/
- https://brunch.co.kr/@fifthsage/3
- https://brunch.co.kr/@fifthsage/4
- http://bradfrost.com/blog/post/atomic-web-design/
- https://www.instagram.com/p/B13k-O0BC3N/?igshid=rzjn99jv3ss2
- https://www.invisionapp.com/inside-design/guide-to-design-systems/
