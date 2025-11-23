//버튼 0 누르면
// 버튼 0에 orange 클래스명 추가
// 모든버튼에 붙은 orange 클래스명 제거
// div0에 show 클래스명 추가
// 모든 div에 show 클래스명 제거

let Allcontents = document.querySelectorAll('.tab-content');
let AllButton = document.querySelectorAll('.tab-button');
let list = document.querySelector('.list');

for (let i = 0; i < list.children.length; i++) {
	document.querySelectorAll('.tab-button')[i].addEventListener('click', function () {
		Allcontents.forEach((item) => {
			item.classList.remove('show');
		});
		AllButton.forEach((item) => {
			item.classList.remove('orange');
		});
		Allcontents[i].classList.add('show');
		AllButton[i].classList.add('orange');
	});
}
//응용문제
//탭이 4,5개로 늘어나도 잘 작동하게 만들어야함
//결론: 쉬움 전에 캐러셀했듯이 length값 받아와서 작성하면됨
