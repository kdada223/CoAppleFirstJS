//버튼 0 누르면
// 버튼 0에 orange 클래스명 추가
// 모든버튼에 붙은 orange 클래스명 제거
// div0에 show 클래스명 추가
// 모든 div에 show 클래스명 제거

let Allcontents = document.querySelectorAll('.tab-content');
let AllButton = document.querySelectorAll('.tab-button');
let list = document.querySelector('.list');

// for (let i = 0; i < list.children.length; i++) {
// 	document.querySelectorAll('.tab-button')[i].addEventListener('click', function () {
// 		tapOpen(i);
// 	});
// }
//11-24 탭기능 다르게 만들기 -> for문 안쓰고 이벤트리스너 1개만 쓰기
//이벤트 리스너를 사용할 때마다 램용량 1개를 잡아먹음 되도록 덜 쓰는게 좋음
//list 이것만 쓸건데 어캐 이것만 쓰고 가능하냐? 이벤트 버블링효과로 버튼 뭘 눌러도 list라는 애를 누른거랑 똑같음
//이벤트버블링을 알고 있으면 이벤트리스너 많이 쓸 필요없음
//개발자는 유저몰래 html태그에 정보숨기기 가능 심어넣는 방법은 data-작명 = '값'
//숨겼던 자료 출력은 셀렉터.dataset.자료이름
// document.querySelector('.tab-button').dataset.id;
// ('0'); 요런 느낌으로 가능함
//html 버튼 3개에 각각 date-id='0','1','2' 라고 작명을 했음
//이러면 if문 저렇게 많이 안써도 됨
list.addEventListener('click', function (e) {
	// if (e.target == document.querySelectorAll('.tab-button')[0]) {
	// 	tapOpen(0);
	// } else if (e.target == document.querySelectorAll('.tab-button')[1]) {
	// 	tapOpen(1);
	// } else if (e.target == document.querySelectorAll('.tab-button')[2]) {
	// 	tapOpen(2);
	// }

	//tapOpen 파라미터 자리에 지금 누른 버튼에 숨겨져있는 data-id 를 출력해주는 변수를 집어넣으면 됨
	//그런데 e.target.dataset.id 이렇게만 작성하면 데이터 값이 숫자가 아닌 문자일 가능성이있어서 숫자로 변환해주는거쓰면 더 완벽할듯
	tapOpen(Number(e.target.dataset.id));
});

function tapOpen(i) {
	Allcontents.forEach((item) => {
		item.classList.remove('show');
	});
	AllButton.forEach((item) => {
		item.classList.remove('orange');
	});
	Allcontents[i].classList.add('show');
	AllButton[i].classList.add('orange');
}
//응용문제
//탭이 4,5개로 늘어나도 잘 작동하게 만들어야함
//결론: 쉬움 전에 캐러셀했듯이 length값 받아와서 작성하면됨
