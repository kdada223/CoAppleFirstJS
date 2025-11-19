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

//정규식 공부
//정규식의 장점 범위지정 가능
/[a~z]/.test; //a~z까지 아무거나 하나가 들어있냐
/[A~Z]/.test; //A~Z까지 아무거나 들어있냐 이런 식으로 테스트하기가 편하다
/[a~zA~Z]/ //이렇게 쓰면 아무 알파벳 하나 들어있냐
/[ㄱ-ㅎ가-힣]/.test; //이렇게 쓰면 아무 한글 체크 자음만 체크임 
/[0-9]/ //이거는 숫자임
/\S/ // 아무 문자 1개 특수기호까지 포함
/^a/ //^이거 앞에 뭔가를 쓰면 그걸로 시작하냐? 라고 물어보는거 현재 정규식으로는 a로 시작하냐임 
/a$/ //이거는 끝자리가 a로 끝나냐 임 
/a | b/ // | 마찬가지로 또는 기호임 a또는 b가 들어있냐 and기호도 있음 &
/(a | b)/ // 이렇게 괄호쓰면 이 안에있는것부터 검사를 함 그런데 정규식에서는 괄호 안에 있는걸 묶어서 한번에 검사를 해줌
/\S@\S\.\S/  //이게 이메일 정규식인데 해석해보면 \S 모든 문자오고 @ 오고 \S 모든 문자오고 \. .오고 \S 모든 문자오고임 다만 .은 정규식에서 특별한 문법이라 .을 검사하려면 \. 이렇게 검사해야함 그런데 이렇게 쓰면 오류가 있는게 \S는 문자 하나임 그래서 a@b.c 하면 맞다고 하지만 aaa@bbb.ccc 하면 잘못됐다고 나옴 그래서 어떻게 해야하나? + 기호를 붙여줘야함
/\S+@\S+\.\S+/.test; //이렇게 쓰면 문자 반복검색이기때문에 가능

{/* <form action="success.html" class="loginForm">
        <div class="my-3">
          <input type="text" class="form-control" id="idInput">
        </div>
        <div class="my-3">
          <input type="password" class="form-control" id="passInput">
        </div>
        <button type="submit" class="btn btn-primary" id="post">전송</button>
        <button type="button" class="btn btn-danger" id="close">닫기</button>
      </form> */}

document.querySelector('.loginForm').addEventListener('submit', function (event) {
	const formId = document.getElementById('idInput').value; // 클릭할 때마다 최신 값 가져오기
	const formPass = document.getElementById('passInput').value;
	const email정규식 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const passWord대문자정규식 = /[A~Z]/;
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

	if (!email정규식.test(formId)) {
		alert('이메일 형식이 아님');
		event.preventDefault();
	} else if (!passWord대문자정규식.test(formPass)) {
		alert('대문자없음');
		event.preventDefault();
	}
});

