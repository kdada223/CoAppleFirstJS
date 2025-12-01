# Chap2 - localStorage를 이용한 간단 장바구니 구현 및 주의사항

---

## 핵심 요약

- localStorage는 브라우저에 키:값(문자열) 형태로 영구 저장(도메인 단위, 탭/브라우저 재시작 후에도 유지). 세션스토리지는 탭 닫으면 삭제.
- 배열/객체는 그대로 저장할 수 없으므로 JSON.stringify로 문자열화해서 setItem, 꺼낼 때 JSON.parse로 복원해야 함.
- 저장/수정 패턴: 1) getItem → 2) 가공(추가/수정/삭제) → 3) setItem. 항상 null 체크와 기본값(예: []) 처리 필수.
- UI와 저장소의 동기화, 중복 처리(중복체크 또는 qty 증가) 설계가 핵심. 실무에선 ID 기반으로 저장하는 것이 안전.

---

## 문제 & 코드 실습

목표: 상품 리스트의 "구매" 버튼을 누르면 로컬스토리지에 상품명을 저장하고, cart.html에서 저장된 상품명을 모두 보여주기. (중복 방지, 초기값 처리 포함)

HTML (상품목록 페이지 예시)
```html
<!-- products.html (간단 예시)
각 상품에 .buy 버튼을 달아둔다. 버튼 순서와 products 배열 인덱스를 맞추는 방식을 사용.
-->
<div class="product">
  <h4>Blossom Dress</h4>
  <button class="buy">구매</button>
</div>
<div class="product">
  <h4>Springfield Shirt</h4>
  <button class="buy">구매</button>
</div>
<div class="product">
  <h4>Black Monastery</h4>
  <button class="buy">구매</button>
</div>
<script src="products.js"></script>
```

JS (products.js) — 안전성과 가독성 보강한 구현
```js
// products 데이터 (예시)
const products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

// DOM이 준비된 뒤 실행 (스크립트 위치 제약이 있을 때 안전)
document.addEventListener('DOMContentLoaded', () => {
  // 1) 로컬스토리지에서 cart 불러오기 (없으면 빈 배열로 초기화)
  //    JSON.parse(null) 은 null을 반환하므로 || [] 로 안전하게 대체
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 2) 구매 버튼들 선택 (.buy가 상품순서대로 배치되어 있다고 가정)
  const buyButtons = document.querySelectorAll('.buy');

  products.forEach((product, idx) => {
    const btn = buyButtons[idx];
    // 버튼이 없음(동적 렌더링 차이 등) 상황에 대비
    if (!btn) return;

    btn.addEventListener('click', () => {
      // 간단한 중복체크(상품명을 기준)
      if (!cart.includes(product.title)) {
        cart.push(product.title); // 배열에 추가
        localStorage.setItem('cart', JSON.stringify(cart)); // 문자열로 저장
        alert(`${product.title}이(가) 장바구니에 추가되었습니다.`);
      } else {
        alert('이미있음');
      }
    });
  });
});
```

cart.html (장바구니 페이지 예시)
```html
<!doctype html>
<html>
<body>
  <div class="seeItem" style="max-width:200px;background:#000;color:#fff;min-height:200px;padding:8px"></div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 가져온 값이 null일 수 있으므로 안전처리
      const raw = localStorage.getItem('cart');
      const items = raw ? JSON.parse(raw) : [];

      const container = document.querySelector('.seeItem');
      if (!items.length) {
        container.insertAdjacentHTML('beforeend', '<p>장바구니가 비어있습니다.</p>');
      } else {
        items.forEach(title => {
          container.insertAdjacentHTML('beforeend', `<p>${title}</p>`);
        });
      }
    });
  </script>
</body>
</html>
```

---

## 헷갈린 점 & 해결

- JSON.parse(localStorage.getItem('cart')) 만 바로 쓰면 localStorage에 값이 없을 때 null이 와서 forEach 등에서 에러가 남. 해결: JSON.parse(...) || [] 또는 null 체크 후 빈 배열 대체.
- localStorage에 배열을 직접 넣으면 "1,2,3" 같은 문자열로 저장되어 형변환 이슈가 발생. 항상 JSON.stringify/parse 패턴을 사용하자.
- 중복체크를 문자열.includes로 할 때는 대소문자/공백 차이로 판정이 달라질 수 있음. 실무에서는 title 대신 고유 id로 비교하는 것이 안전.
- localStorage 용량(대략 5MB)와 저장 가능한 타입(문자열만) 제한을 잊지 말 것.

---

## 추가 개념/실험

- 수량(qty)까지 저장하려면 객체 배열 형식을 사용:
```js
// 예: [{ id:0, title:'Dress', qty:2 }, ...]
let cartObj = JSON.parse(localStorage.getItem('cartObj')) || [];

function addToCart(product) {
  const found = cartObj.find(p => p.id === product.id);
  if (found) found.qty += 1;
  else cartObj.push({ id: product.id, title: product.title, qty: 1 });

  localStorage.setItem('cartObj', JSON.stringify(cartObj));
}
```
- 삭제/수정: 꺼내서(find/filter/map) 수정 → 다시 setItem
- 동기화: 여러 탭에서 localStorage 변경을 감지하려면 window.addEventListener('storage', ...) 사용 가능
- 보안: 민감정보는 절대 localStorage에 저장하지 말 것(토큰, 비밀번호 등).

---

## 기타

- UX 팁: 장바구니 추가 시 작은 토스트나 애니메이션을 보여주면 사용자 경험이 좋아짐.
- 확장 팁: 실제 서비스면 서버 DB에 저장해야 함. localStorage는 임시 혹은 클라이언트 캐시 용도로만 사용.
- 디버깅: DevTools -> Application -> Local Storage에서 키/값을 바로 확인/삭제 가능.

---


