//====================================== 11-24 이벤트 버블링/위임 실전 플레이그라운드 ===========================================

// [문제1] 로그인 모달에서 검은 배경(black-bg) 클릭 시만 모달 닫히도록 구현
// 브라우저는 자식 클릭이 부모에도 전파됨(버블링!)
// white-bg안에 input 등 클릭해도 black-bg까지 이벤트 도달한다는 사실이 핵심
// 따라서 "진짜" 까만배경만 클릭시만 닫아야 함 → e.target == 까만배경 체크 필수!

let 까만배경 = document.querySelector('.black-bg');
까만배경.addEventListener('click', function (e) {
	// 유저가 실제로 누른게 오버레이(까만배경)인지 체크
	if (e.target == 까만배경) {
		document.querySelector('.black-bg').classList.remove('noneModal');
	}
});

// [문제2] 탭 UI에 for문 없이 이벤트 위임 활용
// 버튼이 3개든 30개든 list(부모)에 이벤트 1개만 부여!
// data-id로 어떤 탭이 눌렸는지 판별 - 코드 확장, 유지보수 힘 엄청 절약!

let list = document.querySelector('.list');
let AllButton = document.querySelectorAll('.tab-button');
let Allcontents = document.querySelectorAll('.tab-content');

list.addEventListener('click', function (e) {
	// tab-button만 눌렀을 때(e.target.dataset.id 사용)
	if (e.target.dataset.id !== undefined) {
		tapOpen(Number(e.target.dataset.id));
	}
});

function tapOpen(i) {
	// 모든 내용/버튼에서 'show', 'orange' 지우고 인덱스 것만 부여
	Allcontents.forEach((item) => {
		item.classList.remove('show');
	});
	AllButton.forEach((item) => {
		item.classList.remove('orange');
	});
	Allcontents[i].classList.add('show');
	AllButton[i].classList.add('orange');
}

// [메모/깨달음]
// - 실제로 input, 버튼, white-bg 등 내부 요소 눌러도 black-bg까지 전달된다(의도치 않은 닫힘 방지에 if문 꼭 필요)
// - 탭 버튼 수 변동에도 코드 수정 거의 없이 유지 가능(data-id 인덱스 자동 연결)
// - "중복/반복" 대신 "구조화+위임"이 진짜 실무 패턴임을 확신!
// - console.log로 이벤트 순서를 추적해보면 진짜 눈에 들어옴
