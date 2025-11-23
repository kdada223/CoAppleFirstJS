//이미지를 추가했을 때 자동으로 늘어나게 만들기
let imgcount = 0;
let imgBox = document.querySelector('.slide-container');
let 이미지컨트롤부모 = document.querySelector('.slide-container');
let 자식수체크 = 이미지컨트롤부모.children.length;
이미지컨트롤부모.style.width = 자식수체크 * 100 + 'vw'; //이렇게 추가
document.querySelector('.nextImg').addEventListener('click', function () {
	//이미지컨트롤부모.style.width = 자식수체크 * 100 + 'vw'; //실패코드 이렇게 넣었더니 문제가 생김 클릭을 했을 때 저 코드가 적용되니 그냥 밖으로 빼서 바로 실행되게 만들어야함
	imgcount++;
	if (imgcount >= 자식수체크) imgcount = 0;
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
document.querySelector('.beforeImg').addEventListener('click', function () {
	imgcount--;
	if (imgcount < 0) imgcount = 자식수체크 - 1; // 0에서 이전 누르면 마지막으로
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
// (응용2) 사진이 4개, 5개가 되어도 다음버튼 기능이 잘 동작하려면?
//이렇게 만들고나서 사진을 복사해서 추가를 했더니 css가 하드코딩되어있어서 아래로 내려감 이거는 완벽한 코드가 아님
//고로 이미지가 추가가 되면 마찬가지로 width값도 늘어나는 구조가 짜여야함
//어디서? 위의 코드에서
//추가 실패코드
// document.querySelector('.nextImg').addEventListener('click', function () {
// 	imgcount++;
// 	if (imgcount > 자식수체크) imgcount = 0;
// 	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
// });
// document.querySelector('.beforeImg').addEventListener('click', function () {
// 	imgcount--;
// 	if (imgcount < 자식수체크) imgcount = 2; // 0에서 이전 누르면 마지막으로
// 	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
// });
//이렇게 작성하면 안되는 점이 많음
//이미지카운트는 0으로 시작하고 자식수체크는 0,1,2... 이 아닌 1부터 시작하기에 문제가 생긴 것임
//그렇기에 imgcount의 초기값을 1로 변경을 하는 방법과 자식수체크의 값을 -1해서 수를 새는 방법으로 나눌수있음
//그리고 이전버튼에서의 문제점은 이전버튼을 자식수체크와 비교를 하면 imgcount는 이미 위의 다음버튼으로 크기가 늘어있는 상태임
//그렇기에 기존과 동일하게 자식수체크 버튼 식을 0과 비교해야함
