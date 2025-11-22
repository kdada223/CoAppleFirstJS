let list = document.querySelector('.list-group');
let boolean = true;

document
  .querySelector('.navbar-toggler')
  .addEventListener('click', function () {
    // list.classList.add('show');
    if (boolean === true) {
      list.classList.add('show');
      boolean = false;
    } else {
      list.classList.remove('show');
      boolean = true;
    }
  });
document.querySelector('.loginBtn').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.add('noneModal');
});
document.getElementById('close').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.remove('noneModal');
});
// form부분
document
  .querySelector('.loginForm')
  .addEventListener('submit', function (event) {
    const formId = document.getElementById('idInput').value; // 클릭할 때마다 최신 값 가져오기
    const formPass = document.getElementById('passInput').value;
    const email정규식 = /\S+@\S+\.\S+/;
    const passWord대문자정규식 = /[A~Z]/;
    if (formId === '' && formPass === '') {
      event.preventDefault();
      alert('아이디 비번 입력하삼');
    } else if (formId === '') {
      event.preventDefault();
      alert('아이디 입력하삼');
    } else if (formPass === '') {
      event.preventDefault();
      alert('비번 입력하삼');
    }

    if (!email정규식.test(formId)) {
      alert('이메일 형식이 아님');
      event.preventDefault();
    } else if (!passWord대문자정규식.test(formPass)) {
      alert('대문자없음');
      event.preventDefault();
    } else if (formPass.length < 6) {
      event.preventDefault();
      alert('길이부족함');
    }
  });
// 다크모드 boolean
let dark = true;
document.querySelector('.bg-dark').addEventListener('click', function () {
  if (dark === true) {
    document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
    dark = false;
  } else {
    document.querySelector('.bg-dark').innerHTML = 'Dark 🔄';
    dark = true;
  }
});

let num = 5;
setInterval(function () {
  let buyAlert = document.querySelector('.alert-danger');

  buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;

  if (num <= 0) {
    buyAlert.style.display = 'none';
  }
  num--;
}, 1000);

let imgcount = 0;
let imgBox = document.querySelector('.slide-container');

document.querySelector('.nextImg').addEventListener('click', function () {
  imgcount++;
  if (imgcount > 2) imgcount = 0;
  imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
document.querySelector('.beforeImg').addEventListener('click', function () {
  imgcount--;
  if (imgcount < 0) imgcount = 2; // 0에서 이전 누르면 마지막으로
  imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
// (응용2) 사진이 4개, 5개가 되어도 다음버튼 기능이 잘 동작하려면?

// =====================11월22일 스크롤이벤트
//오늘의 숙제 :

// 1. 스크롤바를 100px 내리면 로고 폰트사이즈를 작게 만들어오십시오.

// 반대로 100px 미만으로 내리면 로고 폰트사이즈를 크게 만들어옵시다.

// 2. 회원약관 박스를 거의 끝까지 스크롤하면 alert를 띄워줍시다.

//스크롤 이벤트 이게 뭐냐면 왼쪽에 window 자리에 있는 애가 scroll 되면 아래 코드 실행해주삼 이런거임
window.addEventListener('scroll', function () {
  console.log(window.scrollY); //이렇게 짜면 유저가 얼마나 스크롤 바를 내렸나를 px단위로 알려줌
  //알려주는 범위는 내가 화면을 내렸다 그러면 내가 현재보이는 위치에서 내려온 만큼의 범위를 알려줌 유저가 얼마나 스크롤을 내렸나
  //가로를 알고 싶으면 Y를 X로 바꾸면 됨
  // window.scrollTo(x,y) 이렇게 코드를 짜면 강제로 스크롤을 해버림 적용해보면 원래는 순간이동하듯이 움직여야 정상이지만
  //우리는 부투스트랩을 사용하고 있기에 스크롤 관련된 기능을 스무스하게 처리해줌
  //공부할 문제 css에서 root 안에 스크롤-비헤이비어 : auto라고 쓰면 아예 화면이 안움직임 이유가 뭘까? 공부하셈!!!!!!?!?!?!?!?!?!
  //window.scrollBy(x,y) 라는 것도 있는데 이거는 현재위치에서부터 강제로 100만큼 스크롤 해주세요~ 라는 소리임
  //뭐 버튼 누르면 100픽셀 밑으로 내려주세요~ 이런것도 가능
});

//약관박스에 스크롤 내리면 경고창 띄워주삼 하려면 스크롤 이벤트를 붙이고 스크롤Y로 알아내야하는데 아쉽게도
//div에는 못붙임 그래서 div를 찾아서 스크롤 했는지를 찾으면 됨 그리고나서
document.querySelector('.lorem').addEventListener('scroll', function () {
  //2번문제논리: div박스의 스크롤바 내린 양 === 실제높이 비교하면 맞으면 알러트창 띄우기
  let 스크롤양 = document.querySelector('.lorem').scrollTop;
  //이렇게 사용하면 스크롤바의 내린 높이를 알려줌 셀렉터.scrollTop
  // console.log(스크롤양);

  //이제 스크롤바를 내린 양은 스크롤양으로 찾았는데 실제 높이는 어떻게 찾을 수있냐?
  //실제 높이는 100px이지만 이걸 의미하는게아니고 스크롤 가능한 높이를 찾아야 함
  let 실제높이 = document.querySelector('.lorem').scrollHeight;
  //실제 높이를 찾는 방법은 셀렉터.scrollHeight 를 입력해 찾을 수 있음

  console.log(스크롤양, 실제높이);
  //실제로 출력을 해보면 스크롤양은 140 실제높이는 240이 나온다 그러면 위의 문제 논리가 안맞는데
  //그 이유는 스크롤탑이라는 특징때문에 그런데 위에서 얼마나 스크롤바를 내렸는지에 대해 알려주긴 하지만
  //유저가 보고있는 공간을 제외한 만큼의 범위를 알려줌
  //정리하자면 아직 보지 않은 공간을 제외하고 유저가 보고 있는 공간도 제외한 후 나머지 공간을 알려줌
  //2번문제논리: div박스의 스크롤바 내린 양 === 실제높이 비교하면 맞으면 알러트창 띄우기 그래서 이걸로 끝나는게 아니라
  //2번문제논리: div박스의 스크롤바 내린 양 + 100 === 실제높이 비교하면 맞으면 알러트창 띄우기  이렇게 더해줘야함
  //이 +100이 뭐냐 우리가 style에서 정의한 height의 높이만큼임
  //그런데 저렇게 하드코딩하는거 보다 좋은 방법이 있는데
  //2번문제논리: div박스의 스크롤바 내린 양 + 눈에보이는div박스 높이 === 실제높이 비교하면 맞으면 알러트창 띄우기  이렇게 더해줘야함
  //이거 구하는 방법은
  let 디브높이 = document.querySelector('.lorem').clientHeight;
  //이렇
});
