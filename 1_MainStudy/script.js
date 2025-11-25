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
///////////////////////////////////////////검은배경 누르면 닫히게 만들어주세요~
//브라우저 안에서는 여러가지 이벤트 버블링이 일어남
//이벤트 버블링이 뭐냐? 상위 html로 퍼지는 현상이 일어난다는 것
// white-bg를 클릭했다면 버블링현상으로 black-bg까지 눌리게 된것
//코드 짠걸 보면 블랙비지눌르면 닫아주세요~ 라고 코드를 짬
//그러면 아이디 입력input을 눌러보면? 타고올라가서 결국 블랙bg가 눌린것
//  e.target 은 유저가 실제로 누른거
// e.currentTarget;
let 까만배경 = document.querySelector('.black-bg');
까만배경.addEventListener('click', function (e) {
	// e.target; //유저가 실제로 누른거
	// console.log(e.target);
	// e.currentTarget; //이벤트리스너 달린 곳
	// this; //이것도 동일하게 사용 가능
	// console.log(e.currentTarget);
	// e.preventDefault(); //이벤트 기본동작 막는 방법
	// e.stopPropagation(); //이벤트 버블링 막아주세요
	if (e.target == 까만배경) {
		document.querySelector('.black-bg').classList.remove('noneModal');
	}
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

let imgcount = 0;
let imgBox = document.querySelector('.slide-container');
let 이미지컨트롤부모 = document.querySelector('.slide-container');
let 자식수체크 = 이미지컨트롤부모.children.length;
이미지컨트롤부모.style.width = 자식수체크 * 100 + 'vw'; //이렇게
document.querySelector('.nextImg').addEventListener('click', function () {
	imgcount++;
	if (imgcount >= 자식수체크) imgcount = 0;
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
document.querySelector('.beforeImg').addEventListener('click', function () {
	imgcount--;
	if (imgcount < 0) imgcount = 자식수체크 - 1; // 0에서 이전 누르면 마지막으로
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});

window.addEventListener('scroll', function () {
	const progressBar = document.querySelector('.pageLoad');
	let 타겟지점 = 100;
	let 매장이름 = document.querySelector('.navbar-brand');
	if (window.scrollY > 타겟지점) {
		매장이름.classList.add('smfont');
	} else {
		매장이름.classList.remove('smfont');
	}

	const scrollTop = document.querySelector('html').scrollTop;
	const clientHeight = document.querySelector('html').clientHeight;
	const scrollHeight = document.querySelector('html').scrollHeight;

	const progressItem = (scrollTop / (scrollHeight - clientHeight)) * 100;
	progressBar.style.width = progressItem + '%';
});
let check = false;
document.querySelector('.lorem').addEventListener('scroll', function (event) {
	let 스크롤양 = document.querySelector('.lorem').scrollTop;
	let 실제높이 = document.querySelector('.lorem').scrollHeight;

	let 디브높이 = document.querySelector('.lorem').clientHeight;
	if (스크롤양 + 디브높이 > 실제높이 - 10) {
		if (!check) {
			alert('완료');
			check = true;
		}
	} else {
		check = false;
	}
});
