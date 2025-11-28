//====================================== 11-27 셀렉터 & for문 혼합 실전 PLAYGROUND ===========================================

/* 
[문제1] 카테고리-상품 연동 셀렉터 만들기
HTML:
<form class="category-form">
  <select class="form-select category">
    <option>과일</option>
    <option>야채</option>
  </select>
  <select class="form-select item">
    <!-- 여기에 JS로 옵션이 동적으로 삽입 -->
  </select>
</form>
*/
// (1) 아래 JS 배열, for문을 활용하여
// 카테고리 셀렉터 선택값에 따라 item 셀렉터의 옵션을 변경하세요.
// (예시: "과일" 선택 → 사과, 바나나, 딸기 / "야채" 선택 → 상추, 토마토, 당근)

const categories = {
  "과일": ['사과', '바나나', '딸기'],
  "야채": ['상추', '토마토', '당근']
};

document.querySelector('.category').addEventListener('change', function(e) {
  const itemSelect = document.querySelector('.item');
  itemSelect.innerHTML = '';
  const selected = e.target.value;
  // 아래에서 for문으로 categories[selected] 배열을 돌며 동적으로 <option> 추가!
  for (let i = 0; i < categories[selected].length; i++) {
    const item = categories[selected][i];
    const option = document.createElement('option');
    option.textContent = item;
    itemSelect.appendChild(option);
  }
});
// 초기 셋업(새로고침시 자동 세팅)
document.querySelector('.category').dispatchEvent(new Event('change'));

/*
[문제2] 상품 셀렉터에서 특정 조건(option의 텍스트가 "딸기"면 "이 상품은 인기상품!" 경고 띄우기)
*/
document.querySelector('.item').addEventListener('change', function(e){
  if(e.target.value === '딸기'){
    alert('이 상품은 인기상품!');
  }
});


/*
[문제3] for문과 forEach를 번갈아 써보자!
- categories 객체의 모든 KEY와 VALUE를 한 줄씩 콘솔에 'KEY: VALUE목록' 형태로 출력(순서 고려X)
- (예: "과일: 사과,바나나,딸기" "야채: 상추,토마토,당근")
*/
for (let key in categories) {
  // key는 "과일" 또는 "야채"
  // value는 categories[key] = ['사과','바나나',...]
  console.log(`${key}: ${categories[key].join(',')}`);
}
// forEach 방식으로도 해보기
Object.keys(categories).forEach(function(key){
  console.log(`${key}: ${categories[key].join(',')}`);
});


/* 
[응용문제] 
- 추가로, 사용자가 "과일" 셀렉터에서 "사과"를 선택했을 때만 <div class="recommend">추천: 사과 주스</div>를 아래에 보여주기
- 아니면 .recommend 영역이 비워지게!
*/
document.querySelector('.item').addEventListener('change', function(e){
  const recommendDiv = document.querySelector('.recommend');
  if(document.querySelector('.category').value === '과일' && e.target.value === '사과'){
    recommendDiv.textContent = '추천: 사과 주스';
  } else {
    recommendDiv.textContent = '';
  }
});

/*
--- HTML샘플 ---
<form class="category-form">
  <select class="form-select category">
    <option>과일</option>
    <option>야채</option>
  </select>
  <select class="form-select item"></select>
</form>
<div class="recommend"></div>
*/
