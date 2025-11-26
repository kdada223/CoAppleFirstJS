let Allcontents = document.querySelectorAll('.tab-content');
let AllButton = document.querySelectorAll('.tab-button');
let list = document.querySelector('.list');

list.addEventListener('click', function (e) {
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

let car = ['소나타', 50000, 'white'];
let car2 = {
	name: '소나타',
	price: [50000, 3000, 4000],
};

document.querySelector('.car-price').innerHTML = `가격: ${car2.price[0]}`;

//옵션에서 셔츠를 선택하면 하단에 사이즈 셀렉터 하나 더 추가해주셈
let selectPr = document.querySelector('.form-group');
// let newselect = `<select class="form-select mt-2">
// <option>95</option>
// <option>100</option>
// </select>`; //셔츠도 지우고 팬츠도 지우고 서버에서 동적으로 받아온다고 생각하고 만들기
// let 수동pants = `<select class="form-select mt-2">
// <option>28</option>
// <option>30</option>
// </select>`; //이걸 쓰는게 아니라 서버에서 가져온다고 생각하고 배열로 대강 만들어보자고
let pants = [28, 30, 32, 34];
let shirts = [90, 95, 100];
document.querySelector('.form-select').addEventListener('change', function (e) {
	let secondSelect = document.querySelectorAll('.form-select')[1];
	let target = e.target.value;
	if (secondSelect) {
		// secondSelect.remove(); //기존에 수동으로 받아오던거 없앰
		secondSelect.innerHTML = '';
	}
	if (target === '셔츠') {
		// selectPr.insertAdjacentHTML('beforeend', newselect); //기존에 수동으로 받아오던거 없앰
		secondSelect.innerHTML = '';
		shirts.forEach((item) => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	} else if (target === '바지') {
		// selectPr.insertAdjacentHTML('beforeend', 수동pants); //기존에 수동으로 받아오던거 없앰
		secondSelect.innerHTML = '';
		pants.forEach((item) => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	}
});

//자바스크립트로 html 생성법 너무 길고 복잡함
// let a = document.createElement('p');
// a.innerHTML = 'ㅎㅇ';
// a.classList.add('?');
// document.querySelector('.anything').appendChild(a);
//생성법 2
// let newhtml = '<p>ㅎㅇ</p>';
// document.querySelector('.anything').insertAdjacentHTML('beforeend', newhtml);
//insertAdjacentHTML 앞에 요소 안에 문자형 html을 추가해주세요 라는 말이고 첫번째 파라미터가 어느위치에 추가할지 beforeend 맨밑에 추가
//성능면에서는 createElement 쓰는게 더 빠르다. 2배정도 빠름

//forEach에 대해 배웠음 첫번째 파라미터는 내가 돌릴아이템, 두번째는 인덱스값 이거는 자주쓰는거라 간단함
//for in은 객체를 돌릴 때 씀

let obj = { name: 'kim', age: 20 };
for (let key in obj) {
	console.log(obj[key]); // 객체의 밸류값이 나옴
	console.log(key); //객체의 키값이 나옴
}
//반복문 용도
//코드반복, 객체/배열 데이터 전부 꺼낼 때 사용

//화살표함수에 대해서 설명할텐데 화살표함수 안의 this는 기존 function을 사용했을 떄와 뜻이 다름
//화살표함수 안에서 쓰면 바깥에서 this를 가져오는데 function안에서 쓰면 안에서 알맞게 재정의됨
