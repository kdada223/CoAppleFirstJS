# Chap4 - 고급 배열 메서드(map, filter, sort), Ajax(fetch), 데이터 동적 바인딩

---

## 핵심 요약

- **고차 배열 메서드**
  - `sort` : 정렬(문자/숫자, 오름/내림, lambda return이 음수/양수일 때 동작)
  - `filter` : 조건에 맞는 배열 만들기(원본 변화X, 새 배열)
  - `map` : 각 요소를 일괄 변환해 새 배열로(값가공, 출력, 변형 등)
- **Ajax (fetch)로 서버 비동기 데이터 받아오기**
  - then/catch로 응답, data형태 컨트롤  
  - 실전 API 연계/동적 html삽입 흐름 익힘
- **중복코드 함수화, state(상태)/UI 제어, 실무형 카드리스팅 전개**

---

## 실제 주요 코드 및 주석 설명

```js
// 숫자 배열에서 sort(오름/내림차순), map/filter 조합 실험!
let arr = [7, 1, 5, 2, 3, 40, 50];
// 문자순 정렬 : arr.sort()
// 숫자순 (오름차순)
arr.sort((a, b) => { return a - b }) // a-b가 음수면 a가 앞으로
// 내림차순 : b-a 사용
arr.sort((a, b) => { return b - a })
console.log('숫자정렬:', arr) // sort는 원본 배열을 직접 바꿉니다!

// array에서 내가 원하는 것만 필터하려면? filter
let newarr = arr.filter((a) => { return a < 4 }); // 4 미만만 추림
console.log('4미만만 남김', newarr)
// filter는 "새로운 배열"로 반환, 원본은 그대로.

// map은 각 값 일괄 변환 가능 (예: 미국→한화 가격), return 필수
let mappedArr = arr.map((a) => { return a * 4 });
console.log('모두 4배', mappedArr)

// 문자정렬 실험: sort는 가나다/알파벳순
let arr2 = ['a', 'c', 'b', 'e', 'd', 'A']
arr2.sort(); // 가나다순 (영문 대문자가 항상 먼저)
arr2.reverse(); // 역순 (sort 후 reverse)
// sort를 직접 커스텀해서 정렬도 가능
arr2.sort((a, b) => { return a > b ? -1 : 1 }) // 내림차순 등 매개변수 활용
```

---

### 카드 동적 생성/정렬/더보기(ajax) 주석 예시

```js
var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

let cardlist = document.querySelector('.row'); // 카드 그룹 html 요소
let clickcount = 0; // 더보기 버튼 횟수 기록

// 카드 생성 함수로 코드 중복 제거
function 포이치(runArr) {
  runArr.forEach(item => {
    let secCardList = `<div class="col-sm-4">
      <img src="https://placehold.co/600" class="w-100">
      <h5>${item.title}</h5>
      <p>가격 : ${item.price}</p>
    </div>`;
    cardlist.insertAdjacentHTML('beforeend', secCardList);
  });
}
포이치(products); // 최초 3개 카드 렌더링

// 가격순 정렬 버튼 이벤트: sort로 products 정렬 후 카드 갱신
document.querySelector('#priceArr').addEventListener('click', () => {
  products.sort((a, b) => { return a.price - b.price }); // 오름차순
  cardlist.innerHTML = ''; // 기존 카드 제거
  포이치(products); // 정렬된 카드 다시 추가
  clickcount = 0;
  document.querySelector('#moreData').style.display = 'block'; // 더보기 다시 표시
})

// 더보기: ajax fetch로 외부 더보기데이터 받아 반복삽입, 횟수따라 url 다르게
document.querySelector('#moreData').addEventListener('click', () => {
  if (clickcount === 0) {
    fetch('https://codingapple1.github.io/js/more1.json')
      .then(r => r.json())
      .then(data => { 포이치(data); });
  } else if (clickcount === 1) {
    fetch('https://codingapple1.github.io/js/more2.json')
      .then(r => r.json())
      .then(data => { 포이치(data); });
    // 버튼 숨기기(3번째엔 데이터 없음)
    document.querySelector('#moreData').style.display = 'none';
  }
  clickcount++;
});

// fetch GET/POST 단계별 주석
// fetch('API주소', {method:'POST', ...})
//   .then(응답처리)
//   .then(json변환/실데이터활용)
//   .catch(에러처리)
```

---

## 문제 풀이 / 헷갈린 점

- sort 비교함수 원리, filter/map 콜백의 구조, return 활용법 등 파라미터마다 주석 달아 실험
- "원본 조작"(sort) vs "새 배열 반환"(filter/map) 구분, 상태 관리 패턴 추가적으로 익힘
- fetch then-chain, catch 등 비동기 흐름에 대한 각 단계별 코드별로 직접 주석↑

---

## 추가 실험/정리

- sort/map/filter를 순서대로, 조합하여 값을 원하는대로 가공해보기
- fetch로 받은 데이터도 동일하게 반복문 함수로 돌려가며 렌더링, 코드 축약
- 카드 생성/정렬/추가 등 전체 흐름에 주석 달면서 설계 감각 키우기

---
