# ChapX - 이벤트 버블링과 이벤트 위임 패턴

---

## 핵심 요약

- **이벤트 버블링**
  - 하위(자식) 요소에서 발생한 이벤트가 상위(부모) 요소로 전파되는 현상
  - input, button, div 등 안쪽을 눌러도 이벤트가 바깥(예: 검은 배경, black-bg)까지 전달된다
  - 모달창 닫기 등 UI에서 '진짜 바깥'을 눌렀을 때만 동작하려면 버블링 개념 반드시 고려!

- **e.target / e.currentTarget**
  - e.target: 유저가 실제로 클릭한 요소
  - e.currentTarget: 이벤트리스너가 걸려 있는 요소
  - 모달 예시에선 "e.target == .black-bg" 일때만 닫기

- **이벤트 위임과 data-속성 활용**
  - 여러 버튼/요소에 모두 이벤트리스너를 다는 대신,  
    부모(ul.list)에 이벤트리스너 하나만 설치
  - 각 버튼에 data-id 등 숨긴 정보로 '누가 눌렸는지' 식별, 탭(버튼) 갯수 바뀌어도 코드 한 줄로 커버

---

## 문제 풀이 / 헷갈린 점

### 문제

- 모달창 검은 배경(black-bg)을 클릭했을 때만 모달이 닫히도록 하려면?  
- for문 없이 탭(Products, Information, Shipping 등) 개수가 변해도  
  클릭한 버튼에 따라 각기 다른 내용(Content)을 보여주려면?

### 초기 시도(헷갈림)

```js
let 까만배경 = document.querySelector('.black-bg');
까만배경.addEventListener('click', function (e) {
	// 처음엔 그냥 addEventListener만 달면 내부 input, div 등 눌러도 닫히는 버그가 있다
	document.querySelector('.black-bg').classList.remove('noneModal');
});
```
- input, 버튼 클릭 등 내부 요소 누를 때도 모달이 닫힘
- 실제로 '진짜 바깥 검정부분'만 클릭시 닫고 싶다는 요구사항 충족이 안 됨

### 헷갈림 극복 & 개선

- **문제:**
  - 모든 자식 요소 클릭을 막지 않고, 오로지 '검은배경' 자체 클릭만 감지해야 함
  - 탭 버튼이 늘거나 줄어들면 for문에서 인덱스 관리가 귀찮고 비효율적임

- **해결법(수정 코드):**
  - 'e.target == e.currentTarget' 또는 'e.target == 까만배경' 조건으로 '진짜 바깥만' 감지
  - 이벤트 위임 + data-id 활용으로 탭버튼 몇 개든 동작하게 변환

```js
// 모달 오버레이 닫기 - 올바른 버블링 조건
let 까만배경 = document.querySelector('.black-bg');
까만배경.addEventListener('click', function (e) {
	if (e.target == 까만배경) {
		document.querySelector('.black-bg').classList.remove('noneModal');
	}
});

// 탭 클릭 기능 - for문 없이 위임+data-id
let list = document.querySelector('.list');
let AllButton = document.querySelectorAll('.tab-button');
let Allcontents = document.querySelectorAll('.tab-content');

list.addEventListener('click', function (e) {
	if (e.target.dataset.id !== undefined) {
		tapOpen(Number(e.target.dataset.id));
	}
});

function tapOpen(i) {
	Allcontents.forEach((item) => {
		item.classList.remove('show');
	});
	AllButton.forEach((item) => {
		item.classList.remove('orange');
	});
	Allcontents[i].classList.add('show');
	AllButton[i].classList.add('orange');
}
```

---

## 추가 실험/정리

- e.target과 e.currentTarget을 console.log로 전부 출력해보면 흐름이 다시 한 번 명확해짐
- 탭 버튼(data-id) 등은 실제로 버튼 개수만큼 자동 순회 가능해서 UI 확장성 Good
- 실무에선 동적으로 버튼이 늘어나도 (이벤트 위임+data-id 인덱스 활용) 구조가 견고하다

---
