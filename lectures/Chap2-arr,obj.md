# Chap2 - 상품카드 동적생성, 배열/객체/데이터 바인딩 기초

---

## 핵심 요약

- **배열(array)와 객체(object)의 활용 차이**
  - 배열: 순서대로 값 저장, 인덱스로 접근
  - 객체: key-value 쌍(이름-값)으로 저장, 순서 개념 없이 의미를 부여
  - 배열·객체 속에 배열, 객체, 함수 등 무엇이든 넣을 수 있어서 복잡한 데이터 구조도 자유롭게 다룸

- **데이터 바인딩의 시작**
  - JS에서 배열/객체 데이터를 이용해 동적으로 HTML(DOM)을 구성
  - 서버에서 완제품 HTML을 주는 방식(SSR) vs JS로 클라이언트단에서 완성하는 방식(CSR)
  - 카드레이아웃 상품 정보도 array/object를 바탕으로 JS에서 직접 “꽂기” (client-side rendering & 데이터 바인딩)

---

## 문제 풀이 / 헷갈린 점

### 문제

- products 배열(객체 배열)로 3개의 상품 데이터를 JS에서 받아  
  카드를 for문으로 동적으로 생성해서 카드그룹(.card-group)에 자동으로 추가
- 객체 car2의 값도 html에 직접 꽂아넣기(속성이 배열일 때의 꺼내기 연습)

### 초기 시도(헷갈림)

```js
for (let i = 0; i < products.length; i++) {
  let item = document.createElement('div');
  item.innerHTML = `
    <div class="card">
      <img src="https://placehold.co/600">
      <div class="card-body">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
        <button class="btn btn-danger">주문하기</button>
      </div>
    </div>
  `;
  cardlist.appendChild(item.firstElementChild);
}
```
- item 첫 div만 넣어주기, HTML 엘리먼트 생성/삽입 개념 익히기
- car2의 price가 배열일 때 [0], [1] 등 인덱싱 제대로 활용하는 부분,  
  백틱(``)으로 값 합쳐서 html 꽂는 것도 연습

### 헷갈림 극복 & 개선

- **문제:**
  - innerHTML과 createElement/appendChild 관계가 헷갈릴 수 있음
  - 객체 배열에서 값 꺼낼 때 `products[i].title` 등, dotsyntax에 조금 부담
  - 서버에서 “완제품 html” vs “빈 html + 데이터 넘겨주고 client에서 완성”의 차이, 처음엔 개념 헷갈릴 수 있음

- **해결법(수정 방향):**
  - createElement, innerHTML, appendChild의 흐름을 한 번 직접 따라가며 정복
  - 배열, 객체, 그 속의 배열(중첩)까지 . / [] 인덱싱 연습 반복
  - 실제 웹서비스 대다수는 csr(client-side rendering) 방식임을 사례로 이해  
  - 데이터 바인딩과 SSR/CSR 용어 의미 구분까지 해보기

---

## 추가 실험/정리

- 상품 갯수가 바뀌어도(card, li, tr 등) for문 돌려 자동화 → 확장성 키우기
- 객체 안에 배열이 올 수도, 배열 안에 객체가 올 수도 있어서 중첩 꺼내기 연습 (e.g., car2.price[0])
- innerHTML 쓸 때는 XSS(스크립트 주입)도 조심해야 하며,  
  createElement/appendChild 조합은 좀 더 안전/정확
- data-*속성과 querySelector, dataset 등 실제 현장 활용련 연결까지 이해해두면 좋음

---
