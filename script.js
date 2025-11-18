//클래스 탈부착으로 개발하는 이유
//애니메이션 추가 쉬움, 나중에 재사용 편리함
//블로그 작성할 내용 쿼리셀렉터, 쿼리셀렉터 올, get엘리먼츠바이 ~~~ 이런애들 모아서 작성 1편
//input 내용 체크하는 방법
let list = document.querySelector('.list-group');
let boolean = true;

document.querySelector('.navbar-toggler').addEventListener('click', function () {
	// list.classList.add('show');
	if (boolean === true) {
		list.classList.add('show');
		boolean = false;
	} else {
		list.classList.remove('show');
		boolean = true;
	}
});
document.querySelector('.loginBtn').addEventListener('click', function () {
	document.querySelector('.black-bg').classList.add('noneModal');
});
document.getElementById('close').addEventListener('click', function () {
	document.querySelector('.black-bg').classList.remove('noneModal');
});
// form부분
document.getElementById('post').addEventListener('click', function (event) {
	const formId = document.getElementById('idInput').value; // 클릭할 때마다 최신 값 가져오기
	const formPass = document.getElementById('passInput').value;
	if (formId === '' && formPass === '') {
		event.preventDefault();
		alert('아이디 비번 입력하삼');
	} else if (formId === '') {
		event.preventDefault();
		alert('아이디 입력하삼');
	} else if (formPass === '') {
		event.preventDefault();
		alert('비번 입력하삼');
	} else if (formPass.length < 6) {
		event.preventDefault();
		alert('길이부족함');
	}
});
// 다크모드 boolean
// let dark = true;
// document.querySelector('.bg-dark').addEventListener('click', function () {
// 	if (dark === true) {
// 		document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
// 		dark = false;
// 	} else {
// 		document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
// 		dark = true;
// 	}
// });

// 다크모드 int
let dark = 1;
document.querySelector('.bg-dark').addEventListener('click', function () {
	if (dark % 2 === 1) {
		document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
		dark += 1;
	} else {
		document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
		dark += 1;
	}
});

//var let const 차이
//let 변수
//재선언이 불가능함 let 이름 = '강'; let 이름 = '준' 이러면 에러나버림 오류,실수 방지 개꿀임
//const 변수
// 이것도 마찬가지 재선언 불가능 , 한술 더 떠서 재할당 불가능 한번 값을 집어넣으면 변하면 안되는 값을 보관(예 : 함수)
//var 변수
// 이거는 묶어서 설명하자면 var든 let이든 const든 함수 안에서 만들면 탈출 불가능함 전역변수는 못됨
// 다만 var는 함수 안에서 마음대로 쓸 수 있는 반면에 let이랑 const는 중괄호가 범위임 if문 안의 중괄호에서 함수를 만들면
// 그 밖에서 사용못함

//단리 계산
// let 예금액 = 10000;
// let 미래예금액 = 0;

// function 예금년도(몇년) {
// 	if (예금액 < 50000) {
// 		미래예금액 = 예금액 * 0.15 * 몇년 + 예금액;
// 		console.log(미래예금액);
// 		return;
// 	} else if (예금액 >= 50000) {
// 		// >= 또는 else 사용
// 		미래예금액 = 예금액 * 0.2 * 몇년 + 예금액;
// 		console.log(미래예금액);
// 		return;
// 	}
// }
// 예금년도(2);

//복리 계산
let 예금액 = 10000;
let 미래예금액 = 0;

function 예금년도(몇년) {
	if (예금액 < 50000) {
		미래예금액 = Math.round(예금액 * 1.15 ** 몇년);
		console.log(미래예금액);
		return;
	} else if (예금액 >= 50000) {
		// >= 또는 else 사용
		미래예금액 = 예금액 * 1.2 ** 몇년;
		console.log(미래예금액);
		return;
	}
}
예금년도(2);

// 미래예금액 = 예금액 * 1.2 ** 몇년; 복리공식
// 함수를 이용해서 만들고 싶어서 복리 공식에 대해 공부해 함수로 만들었더니?
// (응용 1)
// 위에서 1.2를 여러번 곱했는데 1.2를 10번 곱하려면 코드를 어떻게 짜야될까요?
// 1.2 * 1.2 * 1.2 ... 계속 하면 되긴 하는데
// 자바스크립트엔 ** 이런 거듭제곱 연산자 기능도 있습니다

//내방식 커피
// let first = 360;
// let second = 0;
// let third = 0;

// second = (first * 2) / 3;
// third = (second * 2) / 3;
// console.log(first + second + third);
//넘의 방식 커피
// let first = 360;
// let total = 0;
// total = first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
// console.log(total);
// (응용 2)

// 커피리필 문제에서

// 커피리필을 무한으로 해준다면 처음 담아주는 커피가 360ml일 때 총 몇 ml의 커피를 마실 수 있을까요?

// 무한등비수열의 합 그런건데 공식이 가물가물해서 여기까지 하겠습니다.
//추가문제!

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
