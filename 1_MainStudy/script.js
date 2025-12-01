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
let 자식수체크 = imgBox.children.length;
imgBox.style.width = 자식수체크 * 100 + 'vw'; //이렇게
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

//캐러셀을 터치되게 만들려면 이런 기능이 들어있는데
// 1. 드래그한 거리만큼 사진도 왼쪽으로 움직여야함
// 2. 마우스를 떼었을 때 일정거리 이상 이동했으면 사진2 보여줌 아니면 사진1 보여줌
// 기능1부터 만들어보는데 이거 만들려면 알아야할 이벤트가 3가지 정도있음
// mouse 이벤트 3개
// mousedown (어떤 요소에 마우스버튼 눌렀을 때)
// mouseup (어떤 요소에 마우스버튼 뗐을 때)
// mousemove (어떤 요소위에서 마우스 이동할 때)
// 그러면 코드를 어떻게 짜야할까?
// 현재 내가 찍은 마우스 위치에서 a px 만큼 이동하면 옮겨주세요~ 라고 코드를 짜면 될듯함
//숙제 나머지 2,3번 사진도 스와이프 기능 만들기
//첫 사진을 우측으로 스와이프 못하게 막으려면?
let 시작좌표 = 0;
let slideTouch = true;
let slideItem = document.querySelectorAll('.slide-box');
slideItem.forEach((item, index) => {
	//어느정도 정상작동은 하지만 문제가 있는게 일단 클릭했을때 계속 첫번째 사진이 보이는게 문제임
	//두번째 사진으로넘어가고 나서 슬라이드를 하기위해 사진을 누르면 2번째 사진이 눌린채로 스와이프 되야ㅕ하는데
	//현재는 스와이프를 누르려고 보면 첫번째 사진으로 넘어가서 스와이프 되다가 조건을 만족해서 넘아가면 1-> 3으로 감
	// 1 -> 2로 갔다가 2스와이프를 누르면 1화면이 보이다가 조건 만족시 3으로 넘어감
	//그래서 결국 지금 버튼을 클릭했을때 뭔가 이상한거임
	item.addEventListener('mousedown', (e) => {
		imgcount = index;
		시작좌표 = e.clientX; //시작좌표를 찍어주고
		slideTouch = false;
		imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
	});
	item.addEventListener('mousemove', (e) => {
		// console.log(e.clientX - 시작좌표); // 이동거리
		if (slideTouch === false) {
			imgBox.style.transform = `translateX(${e.clientX - 시작좌표}px)`;
		}
	});
	item.addEventListener('mouseup', (e) => {
		slideTouch = true;
		if (e.clientX - 시작좌표 < -500) {
			imgcount++;
			console.log(e.clientX - 시작좌표);
			imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
			imgBox.style.transition = 'transform all 0.5s';
		} else {
			imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
			imgBox.style.transition = 'transform all 0.5s';
		}
		imgBox.style.transition = 'transform none';
	});
});

//이 기능을 모바일에서 작동해보면 안되는걸 볼 수 있음
//왜? 이벤트리스너가 달라서 그런거임
//mouse 이벤트들을 touchstart, touchmove, touchend 로 변경해야함
//touch이벤트를 가져다 쓸 때 그냥 가져다가 쓰는게 아니라 touches[0]을 만들어줘야 하는데
//저거는 터치할 때 여러개를 동시에 터치할 수도 있다보니 하나만 터치했는지를 확인하려고 넣어놓은거임
//그리고 touchend에서는 클리어인트X를 가져다 쓸 때 touches가 아니라 changedTouches[0] 라고 가져다 써야함
