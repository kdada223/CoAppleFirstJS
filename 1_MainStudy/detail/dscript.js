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
//array 자료 추가 수정 하는법
//car[0] = '아반떼';
//수정하는 방법(하드코딩)
//car[3] = 2;
//추가하는 방법
// let car2 = {
// 	name: '소나타',
// 	price: 50000,
// 	color: 'white',
// };
//자료 이름 부분을 key 값을 value 라고 부름 키 밸류 형태로 저장가능한게 장점
//console.log(car2.name);
//obj에서 자료꺼내는 방법
//car2.price = 60000;
//obj 수정하는 방법

//arr 과 obj 차이
//arr은 순서대로 자료를 저장 obj는 자료에 이름을 붙여 저장
//array는 자료간 순서가 존재함, obj는 순서개념이 없음 키밸류로 저장하기 때문
//arr 는 자료간 정렬도 가능함.
//car.sort();
//sort라는 함수를 쓰면 숫자 -> abc -> 가나다 순으로 정렬됨
//중간에 자르기도 가능
//car2.slice(1, 3);
//1번 이후 3번 이전 까지 잘라줌
//자료검색도 가능, 맨앞/맨뒤에 자료추가 가능

//오늘의 숙제
//자바스크릅트 써서 car2에 있던 데이터들 html에 꽂아서 보여주기

//document.querySelector('.carInfor').innerHTML = `${car2.name} /  ${car2.price}`;
//백틱 써서 간단히 구현

//array obj - 2
let car2 = {
	name: '소나타',
	price: [50000, 3000, 4000],
};
//obj안에 아무거나 다 넣을 수 있음 obj,arr 넣기도 가능
//그러면 obj안에 있는 배열은 어떻게 꺼내올까연?
//그냥 obj꺼내서 그 안에 있는 배열 가져오면 됨
document.querySelector('.car-price').innerHTML = `가격: ${car2.price[0]}`;
//복잡하게 생긴 arr,obj 자료 다룰 땐 출력해보고 시작기호도 확인하면 쉬움

//유저가 웹서비스를 이용할 때 개발 방식의 2가지 정도 있는데
//서버에서 html을 완성해서 유저한테 보내주는방식
//빈 html 파일과 데이터를 같이 보내고 실제로 html완성하는걸 js에서 시킴 그러면 유저 브라우저에서 작동함
//첫번째 방법을 sever-side rendering
//서버가 html 다 만들어야해서 서버가 귀찮음
//두번째 방법을 client-side rendering
//서버가 좀 편하다 2번 방식으로 대부분 개발을 함 그래서 동적 생성이 필요한 것임
//데이터를 html에 꼽는 걸 데이터바인딩이라고 부름
