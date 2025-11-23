# Chap3 - 함수, 반환값, 소수 오차와 실전 함수 (2025-11-23)

## 핵심 요약

- **함수(Functions)**: 값/자료를 인자로 받아 변환 후 반환(return)하는 '변환기' 역할.
  - 함수 사용: 코드 재활용/유지보수 간편화, 반복 계산 처리, 원하는 값을 반환
- **return 문**: 함수 내 반환값 지정, return 아래 코드는 실행 안됨(자동종료)
- **소수점 오차**: JS(및 대부분의 프로그래밍 언어)는 이진법 변환 및 반올림 한계로 소수점 연산 시 미세한 오차가 발생할 수 있음
  - 해결법: `toFixed()`, `parseFloat()`, `parseInt()` 등으로 반올림/자료형 변환
- **실전 함수 제작**
  - 파라미터(입력값) 여러 개 사용, 조건문(if)과 결합, 다양한 자료형 반환
  - 할인, 단위 변환 등 실생활 연산 자동화

## 문제 & 코드 실습

### Q1. 분(min)/초(sec) → ms 변환 함수

(1분은 60,000ms, 1초는 1,000ms)

```js
// 내 풀이
function ms단위변환기(min, sec) {
	let minute = min * 60000;
	let seconds = sec * 1000;
	return minute + seconds;
}
// 강사 풀이(간결)
function 함수(a, b) {
	return (a * 60 + b) * 1000;
}
```

### Q2. 10% 할인 함수 (+첫구매 1.5달러 추가할인)

```js
// 내 풀이
function 할인가격변환기(price, first고객) {
	let sale = (price * 0.9).toFixed(1);
	let 숫자변환기 = parseFloat(sale);
	if (first고객 === true) {
		return Number((숫자변환기 - 1.5).toFixed(1));
	} else {
		return 숫자변환기;
	}
}
// 동작 예시
console.log(할인가격변환기(70, false)); // 63
console.log(할인가격변환기(10, true)); // 7.5
```

## 헷갈린 점 & 해결

- return 아래 코드는 실행 안됨(자동 종료)
- 소수점 오차: JS는 1.1, 0.3 등 곱셈·덧셈 결과에 0.000...01같은 오차 발생  
  → `.toFixed()`로 반올림, + parseFloat/Number로 숫자로 변환
- toFixed() 결과는 문자열! 연산할 땐 숫자 자료형 변환 필요

## 추가 개념/실험

- 다양한 인자 조합으로 함수 테스트
- parseInt(123.56), parseFloat('10.5abc'), Number('12.1')
- 실전 단위 변환/할인 함수에 조건문(if) · 소수처리 필수

---
