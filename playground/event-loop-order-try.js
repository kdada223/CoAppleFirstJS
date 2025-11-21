// event-loop-order-try.js
// 목적: 이벤트 루프 순서 실험
// 실행: node playground/event-loop-order-try.js
// 예상 결과: 동기 → 마이크로태스크(Promise, queueMicrotask) → setTimeout

console.log('A sync start');
setTimeout(() => console.log('E setTimeout'), 0);
Promise.resolve().then(() => console.log('B promise then'));
queueMicrotask(() => console.log('D queueMicrotask'));
console.log('F sync end');
