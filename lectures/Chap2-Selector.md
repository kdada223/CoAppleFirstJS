# Chap2 - 동적 셀렉터/반복문/화살표 함수 this, forEach & for in의 기본

---

## 핵심 요약

- **동적 셀렉터(옵션박스) 생성:**
  - 상품종류(select) 선택에 따라 JS에서 다양한 사이즈 option을 동적으로 생성  
  - 기존 select option을 지우고, forEach 반복문으로 새 옵션들만 삽입
  - 서버에서 배열로 값을 받아온다고 가정하며 로직 구현(확장성/유지보수↑)

- **반복문(forEach vs for in)과 용도**
  - **forEach:** 배열에서 순서대로 모든 항목/인덱스/배열 자체에 대해 반복, 콜백 함수 활용. 배열에만 동작
  - **for in:** 객체에서 key(속성명)를 순회할 때 사용, 각 key로 값 꺼내기 용도  
  - 각 구조에서 가장 자연스럽고 효율적인 반복문 선택법 이해가 핵심

- **화살표함수(arrow function)와 function의 this 차이**
  - function(){ ... } : 내부 function 스코프(this)가 동적으로 바뀜(이벤트 리스너 내부 등)
  - ( ) => { ... } 화살표 함수: 자신을 감싼 바깥 this(상위스코프)를 그대로 가져온다
  - 반복문, 콜백 등에서 this 컨트롤이 필요할 때 차이와 원리 꼭 인지해야 실전에서 오류 예방 가능

---

## 문제 풀이 / 헷갈린 점

### 문제

- 상품 select 옵션에서 "셔츠", "바지" 등 선택시 해당 카테고리별 사이즈 옵션을 아래 셀렉터에 forEach로 동적으로 생성하기
- 서버에서 받아온 배열 데이터(pants, shirts)를 활용, option 태그를 insertAdjacentHTML로 반복 삽입
- 객체의 key/value를 for in으로 모두 출력하는 실습

### 초기 시도(헷갈림 & 코드 예시)

```js
let shirts = [90, 95, 100];
let pants = [28, 30, 32, 34];

document.querySelector('.form-select').addEventListener('change', function (e) {
	let secondSelect = document.querySelectorAll('.form-select')[1];
	let target = e.target.value;
	if (secondSelect) {
		secondSelect.innerHTML = '';
	}
	if (target === '셔츠') {
		shirts.forEach(item => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	} else if (target === '바지') {
		pants.forEach(item => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	}
});
```
- 기존 수동 HTML 문자열이 아닌 데이터 기반 forEach 변환이 처음엔 번거로워 보였으나, 유지보수 편리함 체험
- forEach의 (item, idx, arr) 구조, 실행 컨텍스트 익힘

```js
let obj = { name: 'kim', age: 20 };
for (let key in obj) {
	console.log(key);        // key 출력
	console.log(obj[key]);   // value 출력
}
```
- for in구문으로 객체의 모든 속성(key,value) 반복 찍는 연습

### 헷갈림 극복 & 개선

- **문제:**  
  - select option 삭제/추가 타이밍, 두 번째 셀렉터 선택/초기화  
  - for in 사용시 객체 아닌 배열에 쓸 때 위화감, key와 index 혼동
  - this의 동작방식, 화살표 함수 내부에서 this가 의외로 "바깥값"이 되는 점

- **해결법/교훈:**  
  - addEventListener, DOM선택-수정-삽입 흐름을 직접 익혀 확실히 이해  
  - forEach는 배열의 메서드, for in은 객체용. 용도 구분하며 사용!
  - 화살표함수와 function의 "this가 다르다"는 예제/콘솔 실험으로 체득

---

## 추가 실험/정리

- 서버 데이터가 바뀌거나 옵션 구조가 추가되어도 forEach반복문 하나면 쉽게 동적 변경 가능함 실감
- insertAdjacentHTML/location을 조절해 원하는 위치에 옵션 추가, createElement vs innerHTML 등 장단점도 직접 비교 추천
- forEach에서 두 번째 인자(index), 세 번째 인자(array) 활용, 실습
- for in을 객체/배열에 각각 써보고 차이, 배열에 쓸 때 예상치 못한 key 등장(예: length 등)도 경험 가능
- this의 동작방식: addEventListener 내 function과 arrow function에서의 차이,  
  class에서 메서드 선언시 자동 바인딩 여부 등도 실험해보면 실제 실수 줄일 수 있음

---
