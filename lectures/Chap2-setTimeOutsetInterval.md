# Chap2 - setTimeout, setInterval

## 핵심 요약

- setTimeout: 일정 시간 후 단 한번 실행
- setInterval: 일정 시간마다 반복 실행
- DOM에서 `<div>`의 내용/스타일을 JS로 바꾸는 방법 (querySelector, innerHTML, style.display)

## 문제 풀이

```html
<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>
```

> 1초마다 “5초 이내 구매시...”의 5가 4, 3, 2, 1로 바뀌게,  
> 0이 됐을 때 div를 사라지게 하는 코드 작성

```js
let num = 5;
setInterval(function () {
	let buyAlert = document.querySelector('.alert-danger');
	buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;
	if (num <= 0) {
		buyAlert.style.display = 'none';
	}
	num--;
}, 1000);
```

- **실행 결과**: 1초마다 숫자 감소, 0 되면 div가 사라짐

## 헷갈린 점 & 해결

- 처음에 `let num = 5;`를 **setInterval 함수 안**에 두었다가,  
  변수(num)가 매번 초기화되어 숫자가 계속 5로만 보이는 문제 발생
- 해결: 변수를 **함수 밖**에 선언해 상태가 보존되도록 수정함

## 추가 정리/실험

- setTimeout vs setInterval 차이 명확하게 구분
- periodical timer에서 상태 보존 필요할 때 스코프 위치 주의!
