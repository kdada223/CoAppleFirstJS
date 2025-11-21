# JS 타이머와 이벤트 루프 실험/정리

---

## 1. 이벤트 루프 우선순위 실험

### 🔹 실험 코드

```js
console.log('A');
setTimeout(() => console.log('B setTimeout'), 0);
Promise.resolve().then(() => console.log('C promise'));
queueMicrotask(() => console.log('D microtask'));
console.log('E');
// 예상 출력 순서: A → E → C → D → B
```

### 🔹 결과/원리

- **동기(synchronous) 코드가 먼저 실행됨**: `A`, `E`
- **비동기(비blocking) 코드:**
  - `Promise.then`, `queueMicrotask` → **마이크로태스크 큐(microtask queue)**
  - `setTimeout` → **매크로태스크 큐(macrotask/event queue)**
- **실행 우선순위:**

  1. 동기
  2. 마이크로태스크 (등록 순서)
  3. 매크로태스크

  → 즉, `C`(promise), `D`(microtask), 그 다음에 `B`(setTimeout) 순.

- 등록 순서에 따라 마이크로태스크 내에서도 순서가 바뀔 수 있음.
- **이벤트 루프**의 큐 개념: 싱글 스레드에서 비동기 작업을 효율적으로 처리

---

## 2. setInterval 중복/클리어 실험

### 🔹 실험 코드

```js
let count1 = 0,
	count2 = 0;
const start = Date.now();
const id1 = setInterval(() => {
	const elapsed = Date.now() - start;
	console.log('1:', ++count1, 'ms:', elapsed);
}, 500);

const id2 = setInterval(() => {
	const elapsed = Date.now() - start;
	console.log('2:', ++count2, 'ms:', elapsed);
}, 600);

setTimeout(() => {
	clearInterval(id1);
	console.log('id1 인터벌 종료 at', Date.now() - start, 'ms');
}, 3000);

setTimeout(() => {
	clearInterval(id2);
	console.log('id2 인터벌 종료 at', Date.now() - start, 'ms');
}, 4000);
```

### 🔹 실험 결과/해석

- 500ms, 600ms 간격의 반복이 **이론대로 딱 맞지는 않음**
- 실제 로그:
  - 502, 1002, 1515, 2014, 2514, 3014 ...(중간에 약간씩 밀림)
  - id1은 6회 반복, id2는 6회 또는 7회 반복될 수 있지만 정확히 예상 횟수/시간이 안 맞음
- JS는 싱글 스레드/이벤트 루프 구조라 **다른 작업이 많으면(콜스택 밀림)** 타이머 실행이 지연됨
- 반복 횟수/시간이 누적해서 "밀림" 발생

---

## 3. setTimeout 재귀를 이용한 반복 실험

### 🔹 실험 코드

```js
function repeat(n, startTime = Date.now()) {
	if (n <= 0) return;
	const elapsed = Date.now() - startTime;
	console.log('count:', n, 'elapsed(ms):', elapsed);
	setTimeout(() => repeat(n - 1, startTime), 1000);
}
repeat(5);
```

### 🔹 실험 결과/해석

- 각 반복마다 1000ms씩 딱 맞게 실행될 것 같지만 실제로는 5~30ms씩 점점 밀림
- 예) 1005, 2009, 3022, 4027 등
- 이 방식은 **이전 콜백이 실행 끝난 후에 다시 예약**  
  → 중복/누락 없이 반복은 되지만, 누적 오차가 생김

---

## 4. setInterval vs setTimeout+재귀 비교 및 정밀도 정리

| 구분           | setInterval                     | setTimeout+재귀        |
| -------------- | ------------------------------- | ---------------------- |
| 예약 방식      | 독립 고정 예약                  | 직전 완료 후 다음 예약 |
| 반복 오차      | 누적 밀림+중복 위험             | 누적 오차(중첩 없음)   |
| 중첩/동시 실행 | 콜백 오래 걸리면 중복될 수 있음 | 중복                   |
