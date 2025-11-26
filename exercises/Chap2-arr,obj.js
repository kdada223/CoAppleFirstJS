//====================================== 11-26 배열·객체 실전 실습/데이터 바인딩 ===========================================

// [문제1] products 배열(객체 배열)의 데이터를 동적으로 html 카드에 삽입
// - 배열과 for문을 활용해 각 상품 정보를 카드 형태로 DOM에 렌더링
// - Client-side rendering, JS 데이터 바인딩의 대표 사례!

var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

let cardlist = document.querySelector('.card-group');

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

// [문제2] 객체의 프로퍼티가 배열일 때 값을 html로 출력해보기
// - 객체 값에 배열, 객체, 함수 등 중첩 가능!
// - .(dot)과 [index]로 중첩 데이터 꺼내는 연습 필수

let car2 = {
  name: '소나타',
  price: [50000, 3000, 4000],
};

document.querySelector('.car-price').innerHTML = `가격: ${car2.price[0]}`;

// [메모/깨달음]
// - 배열(array)은 순서있는 데이터, 객체(object)는 "이름:값(키:밸류)" 식으로 저장!  
// - 배열→반복/정렬/자르기 등 순서기반 처리, 객체→이름기반 접근과 수정에 강점
// - JS에서 데이터 바인딩(흔히 client-side rendering)패턴은 미리 데이터와 템플릿을 분리, 유연하게 관리 가능
// - innerHTML(빠르지만 조심해서/보안), createElement+appendChild(견고, 안전) 구조 각각 손에 익히기
// - real-world : 서버(html완성후 발행/SSR) vs 클라이언트(빈html+js로 동적 완성/CSR) 차이도 개념 체감!
// - 중첩된 배열, 객체 접근할 때 헷갈리면 console.log로 직접 찍으며 탐구 추천
