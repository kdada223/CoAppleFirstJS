// 11-23 스크롤 이벤트 Playground - 실험, 실패, 깨달음 취합

// [1] window, document, html, body 각각의 scrollTop, scrollHeight 값 비교 실험
// - window.scrollY: 현재 브라우저 창에서 최상단(0)부터 사용자가 내린 Y축(수직) 스크롤 거리(px 단위)
// - document.documentElement.scrollTop: <html> 요소에서 콘텐츠의 최상단에서 현재 스크롤된 거리(px)
// - document.body.scrollTop: <body> 요소의 스크롤 위치(브라우저/모드별로 이 값이 다를 수도 있음)
// - document.documentElement.scrollHeight: <html>의 모든 콘텐츠가 차지하는 전체 높이(px). 즉, 스크롤로 도달 가능한 최대 높이.
// 스크롤을 조작하거나 위치를 계산할 때 각 값의 차이, 적용 위치를 반드시 주의해야 함!
console.log('window.scrollY:', window.scrollY);
console.log('document.documentElement.scrollTop:', document.documentElement.scrollTop);
console.log('document.body.scrollTop:', document.body.scrollTop);
console.log('document.documentElement.scrollHeight:', document.documentElement.scrollHeight);

// [2] window와 .lorem(div)에 scroll 이벤트 각각 부여하여 실시간 값 확인
// - window: 전체 페이지 스크롤 감지 (대부분 window.scrollY 사용)
// - element(여기서는 .lorem): 개별 박스 내부의 스크롤만 감지 및 조작(this.scrollTop)
window.addEventListener('scroll', function () {
	console.log('[window] scrollY:', window.scrollY);
});
document.querySelector('.lorem').addEventListener('scroll', function () {
	console.log('[.lorem] scrollTop:', this.scrollTop); // div 실제 스크롤 위치
});

// [3] 스크롤 진행도(progress bar) 공식 - 다양한 계산 시도 및 잘못된/바른 방식 비교
window.addEventListener('scroll', function () {
	const scrollTop = document.documentElement.scrollTop; // 현재 문서에서 최상단부터 스크롤된 거리(px)
	const scrollHeight = document.documentElement.scrollHeight; // 전체 문서의 실제(스크롤 가능한) 높이(px)
	const clientHeight = document.documentElement.clientHeight; // 현재 브라우저(보이는 화면) 높이(px)

	// (잘못된 방식) scrollTop+clientHeight 를 전체로 나누면 0이 100%가 아님
	const wrongProgress = ((scrollTop + clientHeight) / scrollHeight) * 100;
	console.log('오류있는(잘못된) 프로그래스:', wrongProgress + '%');

	// (정상 공식) (scrollTop / (scrollHeight - clientHeight)) * 100 이 정확한 0~100% 진척도
	const correctProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
	console.log('정상(수정된) 프로그래스:', correctProgress.toFixed(1) + '%');
});

// [4] .lorem(약관박스)에서 스크롤 도달 시 alert, 중복 실행 방지(check 변수 활용)
// - this.scrollTop: 박스 내용 최상단에서 현재 스크롤된 거리
// - this.scrollHeight: 박스 전체 내용의 총 높이 (스크롤로 볼 수 있는 총 길이)
// - this.clientHeight: 사용자가 "지금 볼 수 있는 박스 높이" (보이는 창 크기)
let check = false;
document.querySelector('.lorem').addEventListener('scroll', function () {
	let 스크롤양 = this.scrollTop; // 얼마나 내렸는지
	let 실제높이 = this.scrollHeight; // 총 실제 높이
	let 디브높이 = this.clientHeight; // 보이는 영역 높이

	// [실패] check 없이 if문만 두면 alert 연속 발생(불편)
	// [개선] check로 alert 한 번만 표시, 스크롤이 다시 위로 가면 check 해제
	if (스크롤양 + 디브높이 > 실제높이 - 10) {
		// 거의 끝까지 왔으면(10px 오차 허용)
		if (!check) {
			alert('약관을 모두 내렸습니다!');
			check = true;
		}
	} else {
		check = false;
	}
});

// [5] scrollBy, scrollTo로 브라우저 위치 변화 테스트
// - scrollBy(x, y): 현재 위치에서 x, y 만큼 추가로 이동
// - scrollTo(x, y): 문서 전체에서 x, y 위치로 바로 이동(절대 좌표)
// CSS의 scroll-behavior가 auto면 즉시, smooth면 부드럽게 이동됨(직접 실험)
window.scrollBy(0, 50);
setTimeout(() => window.scrollTo(0, 0), 600);

// [6] .lorem(div)의 동적 내용 추가로 scrollHeight/ clientHeight 값 변화 체크
// - clientHeight: div의 현재 "보이는 영역 높이" (padding 포함, border/scrollbar 제외)
// - scrollHeight: div 내 "전체 내용"의 실제 높이 (넘치면 스크롤로 모두 볼 수 있음)
let lorem = document.querySelector('.lorem');
console.log('초기 clientHeight:', lorem.clientHeight, 'scrollHeight:', lorem.scrollHeight);
lorem.innerHTML += '<br/>'.repeat(15); // 내용 추가(스크롤 길이 늘리기)
setTimeout(() => {
	console.log('내용 추가 후 clientHeight:', lorem.clientHeight, 'scrollHeight:', lorem.scrollHeight);
}, 400);

// ------------------------------------------------------------------------
// [플레이그라운드를 하면서 얻은 깨달음 / 추가 실험 목록]
// - scrollTop: 스크롤된 "양" (최상단=0, 스크롤할수록 값 증가)
// - scrollHeight: 전체 내용물 높이 (스크롤 끝까지 내려야 모두 볼 수 있음)
// - clientHeight: 사용자가 화면에서 직접 볼 수 있는 보기 영역의 높이
//   → 실제 스크롤 가능한 영역 크기 = scrollHeight - clientHeight
// - window.scrollY와 document.documentElement.scrollTop의 차이, 환경별(브라우저) 특성 직접 실험하면 좋음
// - div 등 요소의 스크롤 감지는 element.scrollTop 사용! (window는 없음)
// - scroll 이벤트는 매우 자주 발생, 성능/이벤트 최적화 필요(debounce/throttle 패턴 적용 실험)
// - CSS scroll-behavior(auto/smooth 등)에 따른 스크롤 이동/모션 테스트
// - scrollTo/scrollBy/scrollIntoView 등 다양한 스크롤 조절 메서드 직접 실습
// - 다양한 브라우저(크롬, 파폭, 모바일 등)·환경에서 값 차이/오차/버그 실험 필수
