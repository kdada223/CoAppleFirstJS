//====================================== 11-26 배열 & 객체 실전 플레이그라운드 ===========================================

// [문제1] 음식 이름이 들어있는 foods 배열에서, 6글자 이상인 항목만 모두 출력해보세요.
let foods = ['짜장면', '탕수육', '팔보채', '깐풍기', '볶음밥', '유산슬'];
// 아래에 코드를 직접 작성해보세요!
console.log(foods.length);
for(let i = 0; i < foods.length; i++){
  if(foods[i] > 6){
    console.log(foods[i]);
  }
  else{
    console.log('없음');
  }
}


// [문제2] 학생 이름과 점수를 담은 객체 student에서, score 프로퍼티를 10점 추가해 값이 100점 넘으면 '축하' 출력!
let student = { name: '홍길동', score: 95 };
// 아래에 코드를 직접 작성해보세요!
student.score += 10;

if(student.score > 100){
  console.log('축하');
}
else{
  console.log('공부하삼')
}



// [문제3] carList 배열(객체 배열)에서 10만 원 이하만 '이름(가격)' 형태로 한 줄씩 출력
let carList = [
  { model: '그랜저', price: 120000 },
  { model: '모닝', price: 80000 },
  { model: '레이', price: 95000 },
];
// 아래에 코드를 직접 작성해보세요!
for(let i = 0; i < carList.length; i++){
  if(carList[i].price > 100000){
    console.log(`${carList[i].model}(${carList[i].price})`)
  }
}



// [문제4] colorCodes 객체의 모든 key(색상명), value(코드값)를 '빨강: #ff0000' 형식으로 한 줄씩 출력
let colorCodes = { 빨강: '#ff0000', 초록: '#00ff00', 파랑: '#0000ff' };
// 아래에 코드를 직접 작성해보세요!
//객체도 forEach로 순회할 수 있음
//Object.keys(colorCodes)
//이렇게 순회가 가능함
Object.keys(colorCodes).forEach(item=>{
  console.log(item + ':' + colorCodes[item])
})

console.log(Object.keys(colorCodes).length)
//콘솔 뽑아보면 3개가 나오는 것으로보임.
//배열 객체와 오브젝트 객체는 서로 특성이 다른 객체인데, 배열 객체 메서드인 forEach()가 순회를 할 수 있는 것일까요?
// 있습니다. 단, 객체는 배열과 달리 순서가 없으므로 forEach 메서드를 직접 호출할 수는 없습니다. 
// 따라서 먼저 Object.keys 메서드를 이용해서 객체의 키 값을 배열로 추출한 후, 이 배열에 대해 forEach 메서드를 호출하여 객체의 각 속성을 순회할 수 있습니다. 아래 코드는 이러한 방법을 이용하여 객체의 각 속성을 출력하는 예제입니다.
// 위 예제에서는 먼저 Object.keys 메서드를 이용해서 person 객체의 키 값을 배열로 추출합니다. 이렇게 추출된 배열에 대해 forEach 메서드를 호출하면서, 각 키에 대한 값을 person[key] 형태로 접근하여 출력합니다.



// [문제5] scores 배열에서 최고점과 최저점을 구해 "최고점: X, 최저점: Y" 형태로 출력!
let scores = [100, 67, 87, 92, 70, 83];
// 아래에 코드를 직접 작성해보세요!
//보류 고민을 좀 더 해봐야할듯함


// [문제6] [CS] 객체(Object)와 배열(Array) 차이, 장단점, 실제 사용 예시를 주석으로 정리해보세요!
// (예: 데이터 순서가 중요한 경우/이름으로 빠르게 접근할 때/검색·정렬 상황 등)
// 객체는 말 하나씩 보관이 용이함 대량으로 보관을 한다고 가정했을 때 
// 배열은 index 값을 기억하고 빼내야하지만
// 객체는 key값을 가지고 빼면 되기에 용이함
// 다만 배열은 배열 그 자체만으로 index 번호가 들어가있고 객체는 번호는 없기에 그런 면에서 불편할 수 있음


// [문제7] 객체 배열에서 특정 값(예: 특정 모델 이름)이 있는지 검사하는 방법을 써보세요!
// carList에서 '모닝'이 있는지 찾아보고, 있으면 true/없으면 false 출력.
let carList = [
  { model: '그랜저', price: 120000 },
  { model: '모닝', price: 80000 },
  { model: '레이', price: 95000 },
];
for(let i =0; i< carList.length; i++){
  if(carList[i].model ==='모닝'){
    console.log(true)
  }
  else{
    console.log(false)
  }
}


// [CS 공부 포인트]
// - JS 배열(Array)는 실제로 객체(Object)로 구현되어 있으며, 배열의 true 장점은 '순서', 메서드(반복/정렬/검색)에 있음
// - 객체(Object)는 Index 대신 '이름(key)'으로 값 접근, O(1) 딕셔너리의 특성을 가진다 (hash map)
// - 자바스크립트에서 배열 메서드(forEach, map, filter, reduce)와 객체의 for...in, Object.keys/values/entries 차이 익혀두기
// - 배열과 객체의 메모리 구조, 속도/검색 방식, 실무 예시(데이터베이스·API/프론트컴포넌트)별 최적화 사례 공부해두면 유리!
