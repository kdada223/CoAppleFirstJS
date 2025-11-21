# Chap3 - 캐러셀 슬라이드 버튼 기능

---

## 핵심 요약

- **캐러셀의 다음/이전 버튼 원리**

  - 현재 이미지 번호(imgcount)를 기준으로 슬라이드 컨테이너의 translateX 값 조정
  - 버튼 클릭마다 imgcount 값을 증/감시켜 이미지 위치 전환

- **경계(순환) 처리**
  - 다음 버튼: 마지막 이미지에서 다시 처음(0)으로 돌아감
  - 이전 버튼: 첫 이미지(0)에서 마지막 이미지로 돌아감

---

## 문제 풀이 / 헷갈린 점

### 문제

이미지가 3개(0, 1, 2번)일 때 다음/이전 버튼 누르면  
슬라이드가 순환하며 이동하도록 구현

### 초기 시도(헷갈림)

```js
document.querySelector('.nextImg').addEventListener('click', function () {
	if (imgcount === 0) {
		imgBox.style.transform = 'translateX(-100vw)';
		imgcount = 1;
	} else if (imgcount === 1) {
		imgBox.style.transform = 'translateX(-200vw)';
		imgcount = 2;
	} else {
		imgBox.style.transform = 'translateX(0vw)';
		imgcount = 0;
	}
});
document.querySelector('.beforeImg').addEventListener('click', function () {
	if (imgcount === 0) {
		imgBox.style.transform = 'translateX(-200vw)';
		imgcount = 2;
	} else if (imgcount === 1) {
		imgBox.style.transform = 'translateX(0vw)';
		imgcount = 0;
	} else if (imgcount === 2) {
		imgBox.style.transform = 'translateX(-100vw)';
		imgcount = 1;
	}
});
```

- 각 if문으로 케이스별 처리 → 코드가 복잡, 예외 관리 어렵고 확장성 떨어짐

### 헷갈림 극복 & 개선

- **문제:**

  - 이전 버튼 처리에서 0/2 경계가 혼동됨, 변수가 중복 변화하거나 순서가 꼬임
  - 여러 이미지를 추가하면 if문 분기가 계속 늘어남

- **해결법(수정 코드):**
  - 이미지 개수를 변수로 보관, 나머지 연산(modulo 연산)을 활용해서 관리
  - 아래와 같이 간결하게 처리 가능

```js
const imgLen = 3;
document.querySelector('.nextImg').addEventListener('click', function () {
	imgcount = (imgcount + 1) % imgLen;
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
document.querySelector('.beforeImg').addEventListener('click', function () {
	imgcount = (imgcount - 1 + imgLen) % imgLen;
	imgBox.style.transform = `translateX(-${imgcount * 100}vw)`;
});
```

---

## 추가 실험/정리

- 이미지를 4개, 5개로 늘려도 버튼 기능 유지(확장성 보장)
- 버튼 클릭 시 imgcount 로그 출력으로 상태 변화 디버깅 추천
- DOM에서 `.slide-box` 개수를 자동으로 세서 imgLen 할당하면 더 견고하게 관리 가능

---
