# Chap4 - 스크롤 이벤트와 DOM 응용 (2025-11-23)

## 핵심 요약

- **스크롤 이벤트**는 window, 특정 div 등에 감지 가능하며, 다양한 인터랙션에 활용.
- window.scrollY, .scrollTop, .scrollHeight, .clientHeight 등 속성으로 스크롤 위치/전체 높이/보이는 영역 값 계산.
- 스크롤 위치에 따라 상단 네비바 글자 크기 조정, div 스크롤 끝에 도달하면 alert, 페이지 진척도(progress bar) UI 구현.
- 스크롤 이벤트리스너는 1초에 수십회 이상 실행 → 상태변수로 중복 실행/alert 방지.

## 문제 & 코드 실습

### 문제1: 스크롤 100px 넘기면 내비브랜드 글자크기 축소 / 100px 미만이면 원상복귀

```js
window.addEventListener('scroll', function () {
	let 타겟지점 = 100;
	let 매장이름 = document.querySelector('.navbar-brand');
	if (window.scrollY > 타겟지점) {
		매장이름.classList.add('smfont');
	} else {
		매장이름.classList.remove('smfont');
	}
});
```

### 문제2: 약관 박스(div) 스크롤 끝에 도달하면 alert 띄우기

```js
let check = false;
document.querySelector('.lorem').addEventListener('scroll', function () {
	let 스크롤양 = this.scrollTop;
	let 실제높이 = this.scrollHeight;
	let 디브높이 = this.clientHeight;
	if (스크롤양 + 디브높이 > 실제높이 - 10) {
		if (!check) {
			alert('완료');
			check = true;
		}
	} else {
		check = false;
	}
});
```

- 스크롤양+박스높이가 실제내용높이-10보다 크다면 alert
- 상태변수 별도 사용: 스크롤이벤트는 1초 60회 이상 실행 → 경고창 중복 방지

### 문제3: 페이지 스크롤 진척도(progress bar) UI

```js
window.addEventListener('scroll', function () {
	const progressBar = document.querySelector('.pageLoad');
	const scrollTop = document.querySelector('html').scrollTop; // 스크롤양
	const clientHeight = document.querySelector('html').clientHeight; //보이는 높이
	const scrollHeight = document.querySelector('html').scrollHeight; //전체높이
	const progressItem = (scrollTop / (scrollHeight - clientHeight)) * 100;
	progressBar.style.width = progressItem + '%';
});
```

- scrollTop/(scrollHeight-clientHeight)로 읽은 비율 구해 width% 적용
- 네비게이션, alert 등과 함께 동작하면 인터랙션 풍부

## 헷갈린 점 & 디버깅

- 스크롤 이벤트 target(window, div, html)에 따라 scrollTop, scrollY 등 속성 달라짐
- div 스크롤/전체높이/보이기영역 속성: scrollTop, scrollHeight, clientHeight
- progress % 계산시 clientHeight 더해서 나누던 버그 → 정확한 퍼센트 구현은 (scrollTop/(scrollHeight-clientHeight))\*100

## 추가 개념/실험

- 스크롤-비헤이비어: auto 등이 적용되면 브라우저 애니메이션, 스크롤 이동이 달라짐
- window.scrollTo(x, y), window.scrollBy(x, y) 등 다양한 스크롤 조작 함수

## 실습 HTML/CSS (요약)

```html
<nav class="navbar navbar-light bg-light">
	<div class="container-fluid">
		<span class="navbar-brand">내매장이다</span>
		<span class="badge bg-dark">Dark 🔄</span>
		<button class="navbar-toggler" type="button">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<div class="pageLoad"></div>
<div style="width:200px; height:100px; overflow-y:scroll" class="lorem">...</div>
```

```css
.navbar {
	position: fixed;
	width: 100%;
	z-index: 5;
}
.navbar-brand {
	font-size: 30px;
	transition: all 0.5s;
}
.smfont {
	font-size: 24px;
}
.pageLoad {
	height: 5px;
	width: 0%;
	background: yellowgreen;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
}
```

---
