//====================================== 11-23 스크롤 이벤트 실전 문제풀이 ===========================================

// [문제1] window 스크롤 100px 넘을 때 네비 브랜드 글자 크기 축소, 미만시 원복

window.addEventListener('scroll', function () {
	let 타겟지점 = 100;
	let 매장이름 = document.querySelector('.navbar-brand');
	if (window.scrollY > 타겟지점) {
		매장이름.classList.add('smfont');
	} else {
		매장이름.classList.remove('smfont');
	}
});

// [문제2] .lorem 박스 스크롤 끝에 도달하면 alert (중복 방지)

let check = false;
document.querySelector('.lorem').addEventListener('scroll', function () {
	let 스크롤양 = this.scrollTop;
	let 실제높이 = this.scrollHeight;
	let 디브높이 = this.clientHeight;
	// 약간의 오차 허용, 중복 alert 방지
	if (스크롤양 + 디브높이 > 실제높이 - 10) {
		if (!check) {
			alert('완료');
			check = true;
		}
	} else {
		check = false;
	}
});

// [문제3] 스크롤 진척도(progress bar) UI 구현

window.addEventListener('scroll', function () {
	const progressBar = document.querySelector('.pageLoad');
	const scrollTop = document.querySelector('html').scrollTop; // 스크롤양
	const clientHeight = document.querySelector('html').clientHeight;
	const scrollHeight = document.querySelector('html').scrollHeight;
	const progressItem = (scrollTop / (scrollHeight - clientHeight)) * 100;
	progressBar.style.width = progressItem + '%';
});

// [참고/메모]
// - 스크롤 이벤트는 매우 자주 실행됨 (1초 30~60회 이상) → alert나 복잡 연산은 조심!
// - window, div, html 별로 scrollTop/scrollHeight/clientHeight 구분 필수
// - 많은 브라우저에서 scroll-behavior, 요소 높이 등 차이 있음
