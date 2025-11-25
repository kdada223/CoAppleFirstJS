Copilot said: 알겠어! **이벤트 버블링/위임 관련 핵심을 직접
알겠어!
이벤트 버블링/위임 관련 핵심을 직접 손으로 구현하고 실험해볼 수 있는 Playground
문제 형식으로 준비할게.

실전 구조(모달, 탭, 리스트, 중첩 클릭 등)에서 버블링, e.target vs e.currentTarget, 이벤트 위임, stopPropagation 등
직접 채울 코드 영역(힌트/추가 공부 주제), 주석에 문제 설명, CS 확장 포인트까지 포함!
JavaScript
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
});

자식.addEventListener('click', function(e) {
  // 이 핸들러도 콘솔로 타겟, 커렌트, this 찍어보기
});

// 추가 실험: 자식 버튼만 클릭했을 때, 부모 addEventListener까지 다 실행되는지 확인!

// CS 공부 포인트:
// - e.target vs e.currentTarget vs this  
// - 실제 버블링 흐름(캡처링→타깃→버블링) 단계

// [문제2] 모달창(black-bg, white-bg 구조)에서 검은 배경 클릭시만 닫히도록 if문을 완성하세요.
// white-bg, input 등 내부 클릭에는 반응하지 않게!
// (힌트: e.target === black-bg 비교)

let 까만배경 = document.querySelector('.black-bg');
까만배경.addEventListener('click', function (e) {
  // 아래에 닫기코드를 조건문에 넣어보세요!
  // document.querySelector('.black-bg').classList.remove('noneModal');
});

// [문제3] for문 없이 .tab-button 여러 개를 ul.list에 "이벤트 위임"으로 처리하세요.
// 버튼 클릭시 data-id 값을 활용해 parameter로 해당 인덱스 전달!  
// (data-id와 이벤트 위임 구조에 집중, for문 X)

let list = document.querySelector('.list');
let AllButton = document.querySelectorAll('.tab-button');
let Allcontents = document.querySelectorAll('.tab-content');

list.addEventListener('click', function (e) {
  // tab-button 들의 data-id를 활용해서
  // tapOpen(클릭한 버튼의 번호) 실행!
});

function tapOpen(i) {
  // 탭콘텐츠 show/버튼 orange 토글 로직!
}

// CS 공부 포인트:
// - 이벤트 위임이 for문에 비해 갖는 이점
// - data- 속성과 dataset, 실제 data-id vs 인덱스 관리

// [문제4] 하위 이벤트 전파 막기: 아래 구조에서 내부 .child 버튼 클릭시 부모 div의 click 이벤트가 실행되지 않게 하려면?
// (힌트: e.stopPropagation 사용 위치 실험)
//
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
  console.log('child 버튼 클릭!');
});

// CS 공부 포인트:
// - e.stopPropagation()의 역할과 전파 흐름
// - 언제 이벤트 버블링을 막는 것이 필요한가?

// [문제5] 실무에서도 자주 쓰는 "이벤트 위임/버블링"이 필요한 UI 시나리오 두 가지를 직접 상상해서 주석으로 써보세요.
//
// 예:
// // "동적으로 생성되는 리스트 아이템 클릭마다 action 처리"  
// // "삭제 버튼 누르면 상위 li만 없어지게 만드려면 등..."
