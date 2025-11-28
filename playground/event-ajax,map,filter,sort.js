//====================================== 11-27 고차함수/페칭/심화 for문 PLAYGROUND ===========================================

// [필수] 아래 products 배열과 renderCards() 함수, (필요시 .row div html 있음) 기준으로 문제 풀기!
var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

// html: <div class="row"></div>
function renderCards(arr) {
  arr.forEach(product => {
    let html = `<div class="col-sm-4">
      <img src="https://placehold.co/600" class="w-100">
      <h5>${product.title}</h5>
      <p>가격 : ${product.price}</p>
    </div>`;
    document.querySelector('.row').insertAdjacentHTML('beforeend', html);
  });
}

// ------------------- 문제 시작 -------------------

// [문제1] filter/map/sort를 이용하여 products 배열에서
// (1) "가격이 60000원 이상"인 객체만 뽑아 새 배열(filtered) 생성
// (2) "상품명을 전부 [한글로] 뒤에 '(특가)' 붙여서 출력"하는 배열(titleEvents) 생성
// (3) 가격 기준 내림차순 정렬하여(원본보존) cards로 그리기

// [문제2] for문 또는 forEach로 상품 가격의 총합을 구하세요
// (출력 예: "총 가격: 180000")

// [문제3] fetch로 외부 상품데이터 json을 가져와 카드목록에 추가하는 기능을 구현하세요
// - 버튼 클릭시 실행, 최대 2번까지 눌러서 new 상품이 추가되도록!
// 추가 fetch url: 
//   'https://codingapple1.github.io/js/more1.json'
//   'https://codingapple1.github.io/js/more2.json'
// - 이미 2번 모두 데이터를 받아오면 버튼 사라지게!
// - 필요한 html: <button id="getMore">더보기</button>

// [문제4] 상품명(title)에 특정 단어(예: 'Shirt')가 포함된 상품만 카드로 그려보기
// (힌트: includes 활용, renderCards 함수 재사용!)

// [문제5] localStorage를 사용하여 마지막으로 렌더링했던 상품명을 저장/로딩 기능 추가하기
// ex) 카드를 그릴 때마다 마지막 상품명(localStorage.setItem), 
//     페이지 새로고침 시엔 그 값을 콘솔에 자동 출력

/* [실행에 필요한 참고 코드/준비물]
products 배열, renderCards(), .row div, #getMore 버튼(문제3)
반드시 변수/함수/HTML 주석 참고해서 문제 풀이할 것!
*/
