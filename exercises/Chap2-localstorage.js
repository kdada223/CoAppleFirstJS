//====================================== 12-01 localStorage 장바구니 실습 ===========================================

// [문제] 아래 기능들을 구현하시오.
// - 상품페이지에서 "구매" 버튼을 누르면 해당 상품명이 localStorage('cart')에 저장될 것
// - 같은 상품을 다시 누르면 저장되지 않고 alert('이미있음')이 뜰 것 (중복체크)
// - 페이지 새로고침 후에도 저장된 항목은 남아있어야 함
// - cart.html(장바구니 페이지)에서 localStorage에 저장된 상품명들을 모두 보여줄 것
// - 추가(응용): 상품 수량(qty)까지 저장하도록 객체형식으로 저장하고 수량 증가 기능 구현

/* 제품 HTML (상품목록 페이지 예시)
   - 각 상품 요소에 .buy 버튼이 있어야 합니다.
   - 버튼 순서와 products 배열 인덱스를 맞추는 방식으로 예시 구현함.
   HTML 예시:
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
*/

// ---------------------- 풀이 (상품명만 저장, 안전한 구현) ----------------------
/* products.js */
document.addEventListener('DOMContentLoaded', () => {
  // 예시 상품 데이터
  const products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
  ];

  // 1) 기존 로컬데이터 불러오기(없으면 빈 배열로 초기화)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 2) 구매 버튼들 선택 (.buy 클래스)
  const buyButtons = document.querySelectorAll('.buy');

  products.forEach((product, idx) => {
    const btn = buyButtons[idx];
    if (!btn) return; // 버튼 수와 products 수가 맞지 않으면 안전하게 종료

    btn.addEventListener('click', () => {
      // 중복 체크: title 기준. (실무에선 id 기반 검사 권장)
      if (!cart.includes(product.title)) {
        cart.push(product.title);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} 장바구니에 추가됨`);
      } else {
        alert('이미있음');
      }
    });
  });
});

// ---------------------- cart.html (장바구니 페이지) 안전한 렌더링 ----------------------
/*
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"><title>장바구니</title></head>
<body>
  <div class="seeItem" style="max-width:200px;background:#000;color:#fff;min-height:200px;padding:8px;"></div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 안전하게 값 꺼내기 (null 체크)
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
*/

// ---------------------- 응용: 객체형(cartObj)으로 수량관리 ----------------------
/* 목적: { id, title, qty } 배열로 저장하면 수량 증가/감소가 쉬워짐.
   저장 키: 'cartObj'
*/
document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' }
  ];

  // 객체형 카트 불러오기
  let cartObj = JSON.parse(localStorage.getItem('cartObj')) || [];
  const buyButtons = document.querySelectorAll('.buy');

  products.forEach((product, idx) => {
    const btn = buyButtons[idx];
    if (!btn) return;

    btn.addEventListener('click', () => {
      const found = cartObj.find(p => p.id === product.id);
      if (found) {
        found.qty += 1; // 이미 있으면 qty 증가
      } else {
        cartObj.push({ id: product.id, title: product.title, qty: 1 });
      }
      localStorage.setItem('cartObj', JSON.stringify(cartObj));
      alert(`${product.title} 추가됨 (현재 수량: ${found ? found.qty : 1})`);
    });
  });
});

/* cartObj을 cart.html에서 렌더링하는 예시(간단)
  let cartObj = JSON.parse(localStorage.getItem('cartObj')) || [];
  cartObj.forEach(item => {
    container.insertAdjacentHTML('beforeend', `<p>${item.title} × ${item.qty}</p>`);
  });
*/

// ---------------------- 실행 결과 ----------------------
// - 구매 버튼 클릭 시 localStorage에 데이터가 문자열(JSON) 형태로 저장된다.
// - 중복은 방지되며(문자열 배열 방식), 객체형(cartObj)일 경우 수량이 증가한다.
// - 페이지 새로고침 후에도 데이터 유지됨.

// ---------------------- 실패 경험 / 메모 ----------------------
// - JSON.parse(localStorage.getItem('cart')) 를 바로 forEach에 넣으면 getItem이 null일 때 에러 발생.
//   => 항상 null 체크 후 빈 배열([])로 대체해야 안전.
// - 버튼 셀렉터와 products 배열 길이가 맞지 않으면 undefined 접근 오류가 발생함.
// - localStorage는 문자열만 저장 가능하므로 항상 JSON.stringify/JSON.parse 패턴을 사용.
// - 실무에서는 제목(title) 대신 고유 id로 중복 체크 및 key 관리를 해야 일관성 유지 가능.
// - localStorage 용량(약 5MB) 초과 주의, 민감정보 저장 금지.
