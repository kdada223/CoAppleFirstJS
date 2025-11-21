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
document.querySelector('.loginForm').addEventListener('submit', function (event) {
	const formId = document.getElementById('idInput').value; // 클릭할 때마다 최신 값 가져오기
	const formPass = document.getElementById('passInput').value;
	const email정규식 = /\S+@\S+\.\S+/;
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
	}

	if (!email정규식.test(formId)) {
		alert('이메일 형식이 아님');
		event.preventDefault();
	} else if (!passWord대문자정규식.test(formPass)) {
		alert('대문자없음');
		event.preventDefault();
	} else if (formPass.length < 6) {
		event.preventDefault();
		alert('길이부족함');
	}
});
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


let num = 5;
setInterval(function () {
	let buyAlert = document.querySelector('.alert-danger');

	buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;

	if (num <= 0) {
		buyAlert.style.display = 'none';
	}
	num--;
}, 1000);


// 오늘의 숙제 :

// 버튼1, 버튼3 기능도 알아서 만들어옵시다.

// 넘 쉬워서 예습을 원하면 다음사진보기 & 이전사진보기 버튼과 기능도 만들어보십시오.
// 심심한 사람들은 다음 이전버튼 기능만들기
let imgcount = 0;
let imgBox = document.querySelector('.slide-container');
// document.querySelector('.nextImg').addEventListener('click', function () {
// 	if (imgcount === 0) {
// 		imgBox.style.transform = 'translateX(-100vw)';
// 		imgcount = 1;
// 	} else if (imgcount === 1) {
// 		imgBox.style.transform = 'translateX(-200vw)';
// 		imgcount = 2;
// 	} else {
// 		imgBox.style.transform = 'translateX(0vw)';
// 		imgcount = 0;
// 	}

// });
// document.querySelector('.beforeImg').addEventListener('click', function () {
// 	if (imgcount === 0) {
// 		imgBox.style.transform = 'translateX(-200vw)';
// 		imgcount = 2;
// 	} else if (imgcount === 1) {
// 		imgBox.style.transform = 'translateX(0vw)';
// 		imgcount = 0;
// 	} else if (imgcount === 2) {
// 		imgBox.style.transform = 'translateX(-100vw)';
// 		imgcount = 1;
// 	}
// });
//이전 버튼 헷갈렸던 코드
// document.querySelector('.beforeImg').addEventListener('click', function () {
// 	if (imgcount === 2) {
// 		imgBox.style.transform = 'translateX(0vw)';
// 		imgcount = 0;
// 	} else if (imgcount === 1) {
// 		imgBox.style.transform = 'translateX(-100vw)';
// 		imgcount--;
// 	} else {
// 		imgBox.style.transform = 'translateX(-200vw)';
// 		imgcount += 1;
// 	}
// });
document.querySelector('.nextImg').addEventListener('click', function () {
	imgcount++;
	if (imgcount > 2) imgcount = 0;
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
document.querySelector('.beforeImg').addEventListener('click', function () {
	imgcount--;
	if (imgcount < 0) imgcount = 2; // 0에서 이전 누르면 마지막으로
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
// (응용2) 사진이 4개, 5개가 되어도 다음버튼 기능이 잘 동작하려면?

