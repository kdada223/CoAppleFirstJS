//클래스 탈부착으로 개발하는 이유
//애니메이션 추가 쉬움, 나중에 재사용 편리함
//블로그 작성할 내용 쿼리셀렉터, 쿼리셀렉터 올, get엘리먼츠바이 ~~~ 이런애들 모아서 작성 1편
//토글, add, remove와 함께 현재 한 내용 + bootstrap + css 프레임워크
//one-way UI 애니메이션 만드는법 1. 시작스타일 2. 최종스타일 클래스토글형식으로 붙이면 됨 3. 원할 때 최종스타일로 변하라고 코드 4. trasition 추가
//모달 접히는 애니메이션 만들기
let list = document.querySelector('.list-group');
let boolean = true;

document.querySelector('.navbar-toggler').addEventListener('click', function () {
	// list.classList.toggle('show');
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
