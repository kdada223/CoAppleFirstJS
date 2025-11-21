// 기본 3장 슬라이드 캐러셀 - 이전/다음 버튼 및 순환 구현
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
// 확장형: 사진 4~5장에도 잘 동작!
//개발 필요함
