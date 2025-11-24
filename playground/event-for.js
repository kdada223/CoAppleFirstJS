// [문제1] nums 배열에서 20보다 큰 첫 번째 값과 그 인덱스를 for문으로 찾아 출력해보세요.
let nums = [5, 15, 18, 23, 42, 7];
// 아래에 코드를 직접 작성해보세요!
for(let i = 0; i < nums.length; i++){
  if(nums[i] > 20){
    console.log('20보다 큰 값', nums[i]);
    break;
  }
}


// [문제2] 자바스크립트의 for문, forEach, for...of를 각각 사용해서 arr 배열의 모든 값을 한 줄씩 출력해보세요.
let arr = ['apple', 'banana', 'cherry'];
// 아래에 각각의 방식으로 출력해보세요!
for(let i = 0; i< arr.length; i++){
  console.log(arr[i]);
}
arr.forEach((item)=>{
  console.log(item);
})
for(let fruit of arr){
  console.log(fruit);
}

// [문제3] 상품목록 goods 배열을 <ul><li>...</li></ul>로 만들어서 실제 DOM에 추가해보세요.
let goods = ['노트북', '마우스', '키보드'];
// 아래에 코드를 직접 작성해보세요!
//오류코드 
// 일단 ul을 변수담아야 나중에 생성가능
// 네이밍이 안되는 오류 등
document.createElement('ul')
let ulobj = document.queryselector('ul');
for(let i = 0; i< goods.length; i++){
  const newLi = goods[i];
  ulobj.appendChild(newLi);
}

let ul = document.createElement('ul');
for(let i = 0; i < goods.length; i++) {
  let li = document.createElement('li');
  li.textContent = goods[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);

// [문제4] NodeList(예: .tab-button들)를 반복문으로 돌면서 각각에 'Hello!'를 콘솔로 출력해보세요.
// (HTML에 .tab-button이 여러 개 있다고 가정)
let btns = document.querySelectorAll('.tab-button');
// 아래에 코드를 직접 작성해보세요!
for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
  console.log('hello');
})
}


// [문제5] forEach와 for문에서 break/continue의 차이를 실험해보고, 결과를 주석으로 남겨보세요.
let nums2 = [3, 7, 22, 8, 41, 9];
// 아래에 코드를 직접 작성하고, 주석으로 차이점을 설명해보세요!
nums2.forEach((item)=>{
  if( item > 10){
   console.log('10이상', item);
    break;
    //continue
  }
})
//forEach에서는
//break 사용불가 사용자체가 안됨 에러남
//마찬가지로 컨티뉴 사용불가
//for문에서는 break 사용시 멈춤, continue 현재 반복은 건너뛰고 다음 반복 실행
//즉 i === 2 일때 continue를 쓰면 2일때의 상태는 넘어가고 1 => 3으로 넘어감



// [문제6] for...of와 for...in을 각각 arr, obj에 써보고 차이점을 주석으로 설명해보세요.
let testArr = [10, 20, 30];
let testObj = { a: 1, b: 2, c: 3 };
// 아래에 코드를 직접 작성해보세요!
for(let num of testArr){
  console.log(num);
}
for(let num in testArr){
  console.log(num);
}
//테스트 시 for of는 값을 반환 10,20,30
// for in은 index 값을 반환 0,1,2
for(let num2 of testObj){
  console.log(num2);
}
for(let num2 in testObj){
  console.log(num2);
}
//위와 같이 작성시
// for of 는 반복 불가능한 코드라고 에러코드발생
// for in은 각 "프로퍼티명(키)"를 출력함. a,b,c 출력

