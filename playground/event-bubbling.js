
// [문제1] 이벤트 버블링 실험: 아래 구조에서 <div class="parent"> 바깥과 <button class="child"> 버튼 각각 클릭시
// 어떤 핸들러가 실행되는지 관찰하세요. (e.target, e.currentTarget, this 비교!)
//
// <div class="parent"> 
//   <button class="child">Click!</button>
// </div>
// 
// [코드-틀]
let 부모 = document.querySelector('.parent');
let 자식 = document.querySelector('.child');

부모.addEventListener('click', function(e) {
  // 여기서 e.target, e.currentTarget, this를 각각 콘솔에 출력해보고 차이를 기록!
  console.log('e타켓부모',e.target);
  console.log('e커런트부모',e.currentTarget);
  console.log('디스부모',this);
});

자식.addEventListener('click', function(e) {
  // 이 핸들러도 콘솔로 타겟, 커렌트, this 찍어보기
  console.log('e타켓자식',e.target);
  console.log('e커런트자식',e.currentTarget);
  console.log('디스자식',this);
});

//자식 요소를 눌렀을 때 부모요소의 이벤트 핸들러까지 나타남.
//div만 눌러서 부모만 눌러보면 부모요소만 console에 나옴
//부모요소 쪽은 눌러도 자식요소는 나오지 않지만 자식요소를 누르면 부모요소까지 같이 나오게 됨
//다만 재미있던 점이 있음
//부모요소를 눌렀을 때 나오던 콘솔창은
//"e타켓부모" <div class="parent"> <button class="child">Click!</button></div> || "e커런트부모" <div class="parent"> <button class="child">Click!</button></div> || "디스부모" <div class="parent"> <button class="child">Click!</button></div>
//보다시피 부모요소의 전체 자식요소까지 다 콘솔에 등장하는 것을 볼 수있음
//그런데 버튼을 누르면? 
//당연히 자식요소들은 자식만 나와야함 그게 맞음 그리고 실제로 그렇게 나옴
//그런데 부모요소에서 다른 점이 생겼는데 "e타켓부모" <button class="child">Click!</button> e타겟부모쪽에서 자신이 아닌 자식을 출력함.
//이유가 뭘까?

// 추가 실험: 자식 버튼만 클릭했을 때, 부모 addEventListener까지 다 실행되는지 확인!

// [문제2] 하위 이벤트 전파 막기: 아래 구조에서 내부 .child 버튼 클릭시 부모 div의 click 이벤트가 실행되지 않게 하려면?
// (힌트: e.stopPropagation 사용 위치 실험)

// <div class="box"> 
//   <button class="child">Stop!</button>
// </div>

let box = document.querySelector('.box');
let childBtn = document.querySelector('.child');

box.addEventListener('click', function(e) {
  console.log('box div 클릭!');
});

childBtn.addEventListener('click', function(e) {
  // 여기에 코드 추가!
  e.stopPropagation();//부모 실행X
  console.log('child 버튼 클릭!');
  // e.stopPropagation(); //마찬가지 부모 실행X
});
//부모요소에 넣으면 실행됨



// [문제3] 실무에서도 자주 쓰는 "이벤트 위임/버블링"이 필요한 UI 시나리오 두 가지를 직접 상상해서 주석으로 써보세요.
//
// 예:
// // "동적으로 생성되는 리스트 아이템 클릭마다 action 처리"  
// // "삭제 버튼 누르면 상위 li만 없어지게 만드려면 등..."

// CS 공부 포인트:
// - e.target vs e.currentTarget vs this  
// - 실제 버블링 흐름(캡처링→타깃→버블링) 단계
// - 이벤트 위임이 for문에 비해 갖는 이점
// - data- 속성과 dataset, 실제 data-id vs 인덱스 관리
// - e.stopPropagation()의 역할과 전파 흐름
// - 언제 이벤트 버블링을 막는 것이 필요한가?
