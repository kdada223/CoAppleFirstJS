// (A) 이벤트 루프 우선순위 실험
// 실행횟수 '5'
// setTimeout vs Promise vs queueMicrotask 실행 순서를 출력해보기
console.log('A');
setTimeout(() => console.log('B setTimeout'), 0);
Promise.resolve().then(() => console.log('C promise'));
queueMicrotask(() => console.log('D microtask'));
console.log('E');
// 예상 순서: A → E → C → D → B
//왜 이렇게 생성이 되는가?
//자바스크립트는 싱글 쓰레드이기에 추가적인 느려질 가능성이 매우 높음.
//그렇다면 어떻게 처리를 하는가? 브라우저에서 도와주는 역할을함.
//그게 바로 que라는 친구들임.
//그 친구들에게 부탁을 해서 이거 좀 처리해줘~ 하면 처리를 해줌
//그런데 처리에 따른 속도가 다름
//우리가 쓰는 걸 보면 보다시피 setTimeout vs Promise vs queueMicrotask
//이렇게 비교를하는데 timeout. click 이런 애들은 다 매크로태스트 큐(=>이벤트큐,콜백큐)라는 곳으로 들어감
//그렇게 들어가는데 하나 더 중요한 곳이 있음 바로 마이크로태스크 큐 여기는 promise then , observer callback 이런 애들이 들어감
//이렇게 하면 자연스레 타임아웃함수는 프로미스와 큐마이크로태스크 보다 느리다는게 증명됨
//그런데 왜 마이크로태스크와 프로미스와 비교하면 프로미스가 먼저나오는건가?
//그건 일반적인 이유인데 순차적으로 들어간게 프러미스가 먼저 들어가고 마이크로태스크가 뒤에 들어갔기 떄문에 aecdb가 나온것
//만약 위치를 바꾼다면? aedcb가 나올것
//결국 자바스크립트 순서는 동기코드 -> 비동기코드인데 여기서 순서는 ( 마이크로태스크 -> 매크로태스크) 이렇게  순서
https://whales.tistory.com/130#google_vignette


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
