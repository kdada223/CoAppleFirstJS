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

// 다크모드 int
// let dark = 1;
// document.querySelector('.bg-dark').addEventListener('click', function () {
// 	if (dark % 2 === 1) {
// 		document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
// 		dark += 1;
// 	} else {
// 		document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
// 		dark += 1;
// 	}
// });

let num = 5;
setInterval(function () {
	let buyAlert = document.querySelector('.alert-danger');

	buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;

	if (num <= 0) {
		buyAlert.style.display = 'none';
	}
	num--;
}, 1000);
