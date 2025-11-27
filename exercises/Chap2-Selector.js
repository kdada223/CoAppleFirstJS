//====================================== 11-27 셀렉터 & 반복문/콜백/this 실전 실습 ===========================================

// [문제1] 상품 카테고리 셀렉터에서 "셔츠" 또는 "바지" 선택시, 해당 사이즈 배열을 forEach로 option에 동적으로 삽입
// - 배열 데이터(서버에서 받아온 것처럼 가정)를 기반으로 select option 생성
// - 기존 수동 option생성법(x), 배열+반복문 방식이 유지보수와 확장성에 훨씬 유리!

let pants = [28, 30, 32, 34];
let shirts = [90, 95, 100];

document.querySelector('.form-select').addEventListener('change', function (e) {
	let secondSelect = document.querySelectorAll('.form-select')[1];
	let target = e.target.value;
	if (secondSelect) {
		secondSelect.innerHTML = ''; // 기존 옵션 모두 삭제
	}
	if (target === '셔츠') {
		shirts.forEach(item => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	} else if (target === '바지') {
		pants.forEach(item => {
			secondSelect.insertAdjacentHTML('beforeend', `<option>${item}</option>`);
		});
	}
});
// - insertAdjacentHTML의 위치 'beforeend'는 맨 아래 옵션 추가
// - 데이터만 바뀌면 로직 수정 거의 없이 확장 가능( 진짜 실무 패턴!! )

// [문제2] 객체의 모든 key, value 꺼내기(for in 반복문 연습)
// - 객체의 key는 for in으로, value는 obj[key]로 찍어서 콘솔에 확인
let obj = { name: 'kim', age: 20 };
for (let key in obj) {
	console.log(key);        // 객체의 키값이 나옴(name, age)
	console.log(obj[key]);   // 객체의 밸류값이 나옴(kim, 20)
}

// [문제3] 화살표함수의 this 값 / function의 this 값 비교 실험
let testObj = {
	name: "Lee",
	showThis_Arrow: () => {
		console.log('arrow this:', this); // window(최상위 or 상위스코프)
	},
	showThis_Function: function() {
		console.log('function this:', this); // 호출 맥락(여기선 testObj)
	}
};
testObj.showThis_Arrow();
testObj.showThis_Function();
// - arrow function: this가 바깥스코프(여기선 window/전역)
// - function: this가 객체 자신(testObj)에 바인딩됨

// [메모/깨달음]
// - 동적으로 셀렉터 option 만들 때, forEach/배열 활용법이 진짜 실무형임(엄청 익숙해질 것!)
// - for in은 객체 key, obj[key]로 value 모두 확인 가능.  
// - 화살표함수의 this와 function의 this가 다른 진짜 원리를 예제/콘솔로 체감! 
// - 반복문은 순회/출력, 콜백의 this 컨트롤 두 가지 모두 마스터가 필수임.
// - 실습해보니 직접 콘솔로 this, key, value 찍으며 패턴 파악하는 게 이해의 지름길!
