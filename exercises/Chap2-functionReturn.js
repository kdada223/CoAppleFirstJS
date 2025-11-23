//====================================== 11-22 함수, 반환값, 소수 오차, 실전 함수 ===========================================

// [문제1] 분/초를 ms로 변환하는 함수 만들기
// 1분=60000ms, 1초=1000ms

function ms단위변환기(min, sec) {
	let minute = min * 60000;
	let seconds = sec * 1000;
	return minute + seconds;
}

// [강사 버전 - 좀 더 간결하게]
function 함수(a, b) {
	return (a * 60 + b) * 1000;
}

// [테스트]
// console.log(ms단위변환기(2, 30)); // 150000
// console.log(함수(2, 30));         // 150000

// [문제2] 10% 할인 함수 + 첫구매 true면 1.5달러 추가할인

function 할인가격변환기(price, first고객) {
	// (1) 10% 할인
	let sale = (price * 0.9).toFixed(1);
	let 숫자변환기 = parseFloat(sale);
	// (2) 첫구매자면 1.5달러 추가 할인, 아니면 그대로
	if (first고객 === true) {
		return Number((숫자변환기 - 1.5).toFixed(1));
	} else {
		return 숫자변환기;
	}
}

// [테스트]
// console.log(할인가격변환기(70, false)); // 63
// console.log(할인가격변환기(10, true));  // 7.5

// [실패 경험/메모]
// - toFixed() 결과는 문자열이므로, 연산 전 parseFloat / Number로 숫자 변환 필수
// - 소수 오차가 있으므로 .toFixed로 정리 (이후 연산시 또 숫자 변환 필요)
// - return 아래 코드는 절대 실행되지 않으니 조건 배치 신경쓰기
