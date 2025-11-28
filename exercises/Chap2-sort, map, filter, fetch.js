//====================================== 11-27 sort, map, filter, fetch, 카드생성 정리 EXERCISES ===========================================

/* [문제1] 숫자 배열 arr을 오름차순/내림차순으로 정렬하기 (원본 변화 비교까지) */

// 풀이:
let arr = [7, 1, 5, 2, 3, 40, 50];
arr.sort((a, b) => a - b); // 오름차순
console.log('오름차순:', arr); // [1,2,3,5,7,40,50]
arr.sort((a, b) => b - a); // 내림차순
console.log('내림차순:', arr); // [50,40,7,5,3,2,1]
// [실행 결과] : sort()는 원본 배열 arr 자체를 변형시킨다.

/* [문제2] arr에서 4보다 작은 값만 골라 새로운 배열로 반환하기, 전부 4배씩 곱하기 */

// 풀이:
let filteredArr = arr.filter(num => num < 4);
console.log('4보다 작은 값:', filteredArr); // [1,2,3]
let mappedArr = arr.map(num => num * 4);
console.log('4배 곱:', mappedArr); // [200,160,28,20,12,8,4]
// [실행 결과] : filter/map은 모두 "새로운 배열"로 반환 → 원본(arr)은 변하지 않음

// [실패 경험/메모]
// - filter/map 사용 시 return문 빠뜨리면 undefined 값이 들어감(아예 작동 안 하거나 결과가 엉뚱!)
// - filter의 조건식(boolean)이 false면 해당 값은 새 배열에 안 들어감
// - map으로 return 안 하면 undefined만 있는 배열


/* [문제3] products 상품 배열을 카드로 그리는 반복문 함수 renderCards(), 가격정렬, 더보기(fetch) 구현 */

// 풀이:
var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

let cardlist = document.querySelector('.row');
let clickcount = 0;

function renderCards(runArr) {
  runArr.forEach(product => {
    let cardHTML = `<div class="col-sm-4">
      <img src="https://placehold.co/600" class="w-100">
      <h5>${product.title}</h5>
      <p>가격 : ${product.price}</p>
    </div>`;
    cardlist.insertAdjacentHTML('beforeend', cardHTML);
  });
}
renderCards(products);

// 가격정렬 버튼
document.querySelector('#priceArr').addEventListener('click', () => {
  products.sort((a, b) => a.price - b.price); // 오름차순
  cardlist.innerHTML = '';
  renderCards(products);
  clickcount = 0;
  document.querySelector('#moreData').style.display = 'block';
});

// 더보기 버튼 (fetch로 json 받아 카드 추가)
document.querySelector('#moreData').addEventListener('click', () => {
  if (clickcount == 0) {
    fetch('https://codingapple1.github.io/js/more1.json')
      .then(response => response.json())
      .then(data => { renderCards(data); });
  } else if (clickcount == 1) {
    fetch('https://codingapple1.github.io/js/more2.json')
      .then(response => response.json())
      .then(data => { renderCards(data); });
    document.querySelector('#moreData').style.display = 'none';
  }
  clickcount++;
});

// [실행 결과]
// - renderCards 함수로 카드 여러 개 동적생성
// - 가격정렬 버튼 누르면 가격 순으로 재정렬, 더보기 버튼 누르면 fetch로 상품 추가
// - 더보기는 두 번째 클릭 이후 버튼이 사라짐

// [메모/실패 경험]
// - sort는 반드시 비교 함수 넣어줄 것(안 넣으면 문자 순서로 정렬)
// - fetch로 받아온 데이터(더보기 상품)도 같은 렌더 함수 활용해 코드 중복 줄임
// - 반복적으로 포이치(renderCards) 등 함수화하면 유지보수가 쉬워짐
// - clickcount 등 상태변수 증가시키는 순서, 조건문 순서 헷갈릴 수 있음!
