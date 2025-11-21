// (A) 이벤트 루프 우선순위 실험

// setTimeout vs Promise vs queueMicrotask 실행 순서를 출력해보기
console.log('A');
setTimeout(() => console.log('B setTimeout'), 0);
Promise.resolve().then(() => console.log('C promise'));
queueMicrotask(() => console.log('D microtask'));
console.log('E');
// 예상 순서: A → E → C → D → B


// (B) setInterval 중복/클리어 실험

// 여러 interval을 시작하다가 clear 해볼 때…
let count1 = 0, count2 = 0;
const id1 = setInterval(() => console.log('1:', ++count1), 500);
const id2 = setInterval(() => console.log('2:', ++count2), 600);

setTimeout(() => {
  clearInterval(id1);
  console.log('id1 인터벌 종료');
}, 3000);
setTimeout(() => {
  clearInterval(id2);
  console.log('id2 인터벌 종료');
}, 4000);

// (C) setTimeout 연쇄/재귀 실험

// setInterval 대신 setTimeout을 재귀함수로 써서 “정밀 반복”하는 패턴
function repeat(n) {
  if (n <= 0) return;
  console.log(n);
  setTimeout(() => repeat(n - 1), 1000);
}
repeat(5);
// setInterval vs setTimeout 재귀 방식의 시간 지연/정밀도/동작 차이
