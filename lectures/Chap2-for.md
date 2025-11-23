# Chap5 - for문, 탭 메뉴, 반복문의 실제 쓰임 (2025-11-23)

## 핵심 요약

- **for문**은 반복적으로 동일한 로직을 여러 엘리먼트에 적용하는 데 필수적인 제어문.
- 탭 메뉴 UI 구현 시 각 버튼/콘텐츠 쌍을 반복문으로 접근해 클릭 이벤트를 바인딩할 수 있다.
- 하드코딩이 아닌 for/length 기반 코드는 구조가 바뀌어도 자동 대응(확장성 up)
- 클래스 추가/제거를 forEach, classList, querySelectorAll 등과 결합해 한 번에 처리.

## 문제 & 코드 실습

```js
let Allcontents = document.querySelectorAll('.tab-content');
let AllButton = document.querySelectorAll('.tab-button');
let list = document.querySelector('.list');

for (let i = 0; i < list.children.length; i++) {
	document.querySelectorAll('.tab-button')[i].addEventListener('click', function () {
		Allcontents.forEach((item) => {
			item.classList.remove('show');
		});
		AllButton.forEach((item) => {
			item.classList.remove('orange');
		});
		Allcontents[i].classList.add('show');
		AllButton[i].classList.add('orange');
	});
}
```

- for문으로 length만큼 반복하면서 각각의 버튼에 이벤트 리스너를 바인딩.
- 탭을 클릭하면 모든 div/button 클래스 제거→해당내용/버튼에 show/orange 효과 적용.
- 탭 수가 3개든 5개든 늘려도 코드가 자동 적용됨.

## 알면 좋은 점

- querySelectorAll과 forEach, for문 섞어 쓰기 패턴
- 버튼/콘텐츠 쌍 처리에서 인덱스(i)를 반드시 맞춰야 함
- 하드코딩(직접 인덱스 지정)은 구조 변경 시 불편, 반복문(length/자동관리)이 정답

## 추가 개념/실험

- NodeList의 length, forEach, for(var i=...) 활용 각 차이 익히기
- for-of, for-in, 고차함수(예: Array.from, map 등)도 실습

---
