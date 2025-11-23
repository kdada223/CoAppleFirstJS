//====================================== 11-23 for문, 탭 메뉴 동적코드 문제풀이 ===========================================

// [문제] 각 탭(.tab-button) 클릭 시 해당 내용만 show, 버튼은 orange 적용. 탭 3~n개 자동확장 가능.

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

// [실험/확장]
// - 탭 수(리스트/버튼/div) 늘려도 정상동작(자동 인덱스 부여, length로 반복)
// - 하드코딩 없이 반복문&length값 연동이 확장성과 유지보수성 모두 뛰어남

// [실패/메모]
// - querySelectorAll(...)[i]처럼 매 반복마다 DOM을 다시 전부 찾지는 않도록 미리 변수에 담아두는 습관이 중요.
// - forEach, for문, 각각의 인덱스/바인딩 관계 실습으로 이해 확고
// - 탭 구조 바꾸거나 버튼 클래스 네이밍만 바뀌어도 자동화 코드에서 변수/선택자 한 번만 수정해주면 해결
