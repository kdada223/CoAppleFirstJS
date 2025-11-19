
//====================================== 11-19 setTimeOut ,정규식, 캐러셀 ===========================================

// [문제] 5초 이내 구매시 사은품 증정 div, 1초마다 5에서 0까지 감소, 0되면 안보이게 처리

/*
<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>
*/

// 풀이:
let num = 5;
setInterval(function () {
  let buyAlert = document.querySelector('.alert-danger');
  buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;
  if (num <= 0) {
    buyAlert.style.display = 'none';
  }
  num--;
}, 1000);

// [실행 결과]
// div 안에 숫자가 5 → 4 → 3 → ... → 0으로 매초 감소
// 0이 되자 div가 보이지 않는다

// [실패 경험/메모]
// - num을 인터벌 함수 안에 선언하면 매번 초기화되어 원하는 결과가 안 나옴. 함수 밖에 선언해 해결!
// - DOM 요소 선택이 null 일 수 있음: HTML 로드 순서/위치 주의



