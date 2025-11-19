// 다크모드 boolean
let dark = true;
document.querySelector('.bg-dark').addEventListener('click', function () {
	if (dark === true) {
		document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
		dark = false;
	} else {
		document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
		dark = true;
	}
});

// 다크모드 int
let dark2 = 1;
document.querySelector('.bg-dark').addEventListener('click', function () {
	if (dark2 % 2 === 1) {
		document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
		dark2 += 1;
	} else {
		document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
		dark2 += 1;
	}
});

// var let const 차이
// let 변수
// 재선언이 불가능함 let 이름 = '강'; let 이름 = '준' 이러면 에러나버림 오류,실수 방지 개꿀임
// const 변수
// 이것도 마찬가지 재선언 불가능 , 한술 더 떠서 재할당 불가능 한번 값을 집어넣으면 변하면 안되는 값을 보관(예 : 함수)
// var 변수
// 이거는 묶어서 설명하자면 var든 let이든 const든 함수 안에서 만들면 탈출 불가능함 전역변수는 못됨
// 다만 var는 함수 안에서 마음대로 쓸 수 있는 반면에 let이랑 const는 중괄호가 범위임 if문 안의 중괄호에서 함수를 만들면
// 그 밖에서 사용못함

// 단리 계산
let 예금액 = 10000;
let 미래예금액 = 0;

function 예금년도(몇년) {
	if (예금액 < 50000) {
		미래예금액 = 예금액 * 0.15 * 몇년 + 예금액;
		console.log(미래예금액);
		return;
	} else if (예금액 >= 50000) {
		// >= 또는 else 사용
		미래예금액 = 예금액 * 0.2 * 몇년 + 예금액;
		console.log(미래예금액);
		return;
	}
}
예금년도(2);

//복리 계산
let 예금액2 = 10000;
let 미래예금액2 = 0;

function 예금년도2(몇년) {
	if (예금액2 < 50000) {
		미래예금액2 = Math.round(예금액2 * 1.15 ** 몇년);
		console.log(미래예금액2);
		return;
	} else if (예금액2 >= 50000) {
		// >= 또는 else 사용
		미래예금액2 = 예금액2 * 1.2 ** 몇년;
		console.log(미래예금액2);
		return;
	}
}
예금년도2(2);

// 미래예금액 = 예금액 * 1.2 ** 몇년; 복리공식
// 함수를 이용해서 만들고 싶어서 복리 공식에 대해 공부해 함수로 만들었더니?
// (응용 1)
// 위에서 1.2를 여러번 곱했는데 1.2를 10번 곱하려면 코드를 어떻게 짜야될까요?
// 1.2 * 1.2 * 1.2 ... 계속 하면 되긴 하는데
// 자바스크립트엔 ** 이런 거듭제곱 연산자 기능도 있습니다

//내방식 커피
let first = 360;
let second = 0;
let third = 0;

second = (first * 2) / 3;
third = (second * 2) / 3;
console.log(first + second + third);
//넘의 방식 커피
let first2 = 360;
let total = 0;
total = first2 + (first2 * 2) / 3 + (((first2 * 2) / 3) * 2) / 3;
console.log(total);
//(응용 2)

// 커피리필 문제에서

// 커피리필을 무한으로 해준다면 처음 담아주는 커피가 360ml일 때 총 몇 ml의 커피를 마실 수 있을까요?

// 무한등비수열의 합 그런건데 공식이 가물가물해서 여기까지 하겠습니다.
// 추가문제!

let maxCount = 3;
document.getElementById('send-answer').addEventListener('click', function () {
	let Quiz = Number(document.getElementById('answer').value);
	let 정답 = 1335;
	if (Quiz !== 정답) {
		alert('땡');
		maxCount--;
		console.log(maxCount);
		if (maxCount === 0) {
			alert('멍청아');
		}
	} else {
		alert('성공');
	}
});
//====================================== 11-19 setTimeOut ,정규식, 캐러셀   ===========================================
// setTimeout(function () {
// 	document.querySelector('.alert-danger').style.display = 'none';
// }, 5000);
// setTimeout(function(){ 실행할코드~ }, 기다릴시간);
// 반복해서 사용하고 싶다면? setInterval()
// if let function 이런건 자바스크립트 문법
// document setTimeout alert 이런건 브라우저 사용법 서로 다른거임
// 문제
// 위에서 만든 <div>안에 "5초 이내 구매시 사은품 증정" 이라는 문자가 있습니다.
// 1초마다 5라는 문자를 1씩 감소시켜봅시다.
// 0이 되면 <div>를 안보이게 처리합시다.

<div class='alert alert-danger'>5초 이내 구매시 사은품 증정</div>;

let num = 5;
setInterval(function () {
	let buyAlert = document.querySelector('.alert-danger');

	buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;

	if (num <= 0) {
		buyAlert.style.display = 'none';
	}
	num--;
}, 1000);
