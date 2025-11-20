# 코딩애플 JavaScript 강의 학습 기록

![velocity](https://img.shields.io/badge/Daily_lectures-2~3-3B82F6?style=flat-square)
![status](https://img.shields.io/badge/Status-In%20Progress-F59E0B?style=flat-square)

> 목적: 단순 수강에 그치지 않고, 각 개념을 재정리 · 문제 변형 풀이 · 실험 · 회고로 JS 기초를 탄탄히 다지기  
> 운영 원칙: 강의별로 정리(lectures) · 문제풀이 기록(exercises) · 자유 실험(playground) · 일별 회고(notes). Velog는 수동 링크로 연결(주 1~3회만 작성).

---

## 📂 디렉터리 구조 (권장)

```
/
├─ README.md
├─ MainStudy          # 실습용 정적 파일(.html/.css/.js) — 실제 작동 확인용
├─ lectures/          # 강의별 핵심 요약(.md) — 강의 1개당 1파일
├─ exercises/         # 강의 문제 및 풀이(.js) — 문제별 파일, 실패·개선 버전 포함
├─ playground/        # 실험용 코드(try 파일.js) — 엣지 케이스/벤치마크 등 자유실험
├─ notes/             # 회고(일별/주별/월별 .md)
└─ assets/            # 이미지/GIF/스크린샷
 
```

---

## 🗃 파일 네이밍 규칙 (권장)

- 강의 요약: `Chap2-setTimeOutsetInterval.md` (Chap번호-주제.md)
- 문제 풀이: `Chap2-setTimeOutsetInterval.js` (Chap번호-주제.js)
- 플레이그라운드: `event-setTimeOutsetInterval.js` (event-주제.js)
- 일일 회고: `2025-11-19-daily.md`	(날짜-daily.md)
- 주간 인덱스: `2025-11-second-week.md` (날짜-주차-week.md)
- 월간 요약: `2025-11-month.md` (날짜-month.md)

---

## ✅ 오늘 루틴(권장)

1. 강의 시청: 2~3개
2. `lectures/`에 강의별 핵심 요약(3~10줄) 및 헷갈린 점·해결 기록
3. `exercises/`에 문제 풀이 업로드(원래 풀이 + 실패/개선 버전)
4. `playground/`에서 개념 검증(짧은 실험 코드)
5. `notes/`에 일일 회고(막힌 점/해결/내일 목표)
6. 커밋 & PR: 작업 단위별 브랜치 → PR(혼자라도) → Self-review → Squash merge → 브랜치 삭제

(참고: Velog는 주 1~3회 정도 수동으로 요약/회고를 업로드하고 있습니다.)

---

## ✍️ 작성 가이드 (항목별)

### lectures/ — 강의 한 개당 한 파일

목적: 강의 핵심 개념을 빠르게 복습 가능하도록 정리  
구성 추천:

- 제목 (Chap/강의명 + 날짜)
- 핵심 요약(3~7개 문장)
- 문제/퀴즈(간단 설명 + 정답 요약)
- 헷갈린 점 & 해결(실수/디버깅 팁)
- 추가 실험(플레이그라운드 파일 링크)
- Velog 링크(관련된 내용으로 글을 작성했다면 첨부)

예시(파일: `lectures/Chap2-setTimeOutsetInterval.md`):

```md
# Chap2 - setTimeout, setInterval (2025-11-19)

## 핵심 요약

- setTimeout: 일정 시간 이후 단발 실행
- setInterval: 주기적 반복 실행
- DOM 조작: querySelector / innerHTML / style.display

## 실습/문제(요약)

- 5초 알림 div에서 1초마다 숫자 감소, 0이 되면 숨김 (exercises/Chap2-setTimeOutsetInterval.js)

## 헷갈림 / 해결

- num 변수를 setInterval 내부에 두면 매번 초기화되는 문제 → 함수 밖으로 이동해 해결

## 추가 실험

- clearInterval 사용 실습 (playground/timer-clear-try.js)

## Velog

- 위와 동일
```

---

### exercises/ — 문제별 코드 + 설명(강의 한개당 한파일)

목적: 문제 풀이와 개선 과정을 코드와 주석으로 남기기  
구성 추천:

- 상단 주석: 문제 설명(HTML 필요 시 포함)
- 풀이 코드
- 간단 테스트/실행 방법
- 실패 경험/해결 메모

예시(파일: `exercises/Chap2-setTimeOutsetInterval.js`):

```js
// 문제: <div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>
// 1초마다 숫자 감소, 0되면 숨김

let num = 5;
const id = setInterval(function () {
	const buyAlert = document.querySelector('.alert-danger');
	if (!buyAlert) {
		clearInterval(id);
		return;
	}
	buyAlert.innerHTML = `${num}초 이내 구매시 사은품 증정`;
	if (num <= 0) {
		buyAlert.style.display = 'none';
		clearInterval(id);
	}
	num--;
}, 1000);

// 실패 경험: num을 인터벌 내부에 선언 → 매번 초기화되어 숫자 감소 안됨
```

---

### playground/ — 자유 실험실 (실험할 내용 존재할 시 생성)

목적: 엣지 케이스, 벤치마크, 타이머/이벤트 루프 실험 등

- 자유롭게 실패/실험 코드를 두고, 잘 되면 lectures/exercises로 승격
- 파일명 예: `event-setTimeOutsetInterval.js`

예시 아이디어:

- setTimeout vs Promise.then 실행 순서 실험
- 정규식 케이스별 테스트 스크립트
- 메모리 누수 간단 벤치

---

### notes/ — 회고 (일별/주별/월별)

목적: 공부 흐름·막힘 패턴·다음 목표를 기록해 누적 회고 만들기

- 일별: `YYYY-MM-DD-retro.md` — 그날 배운 것, 핵심 3개, 막힌 점, 내일 목표
- 주간/월간: 핵심 패턴/발전/우선순위 정리

예시(파일: `notes/2025-11-19-retro.md`):

```md
# 2025-11-19 회고

## 오늘 한 강의 / 문제

- setTimeout, setInterval / 정규식 기초

## 핵심 개념 픽 3

1. setTimeout은 비동기 단발
2. 정규식 `/[A-Z]/`로 대문자 체크
3. form submit 이벤트 preventDefault로 동작 제어

## 막힌 점 & 해결 시도

- 이메일 정규식 조건 반전(!)을 빼먹어 잘못된 통과 → !로 반전 처리해 해결

## 내일 목표

- 캐러셀 구현, return 문법 및 소수 처리 복습
```

---

## 🔁 커밋 · PR 규칙 (권장)

- 브랜치: `feat/`, `fix/`, `docs/`, `refactor/`, `chore/` 접두사 사용
- 커밋 메시지(Conventional style 예시):
  - `feat: add Chap2 timer exercise`
  - `docs: add lecture Chap2 summary`
  - `fix: correct regex validation`
- PR 흐름(혼자라도 권장): 브랜치 → PR 작성(간단 Summary / How to test / Checklist) → Self-review → Squash & merge → 브랜치 삭제

간단 PR 템플릿은 .github에 추가해두면 편리합니다.

---

## 🔗 Velog (연동 방식)

- Velog 자동화는 사용하지 않습니다.
- Velog는 주 1~3회 수동으로 요약/회고 업로드 예정 — 각 lectures 파일 상단에 수동으로 링크만 추가하세요.
- Velog 주소: https://velog.io/@kangh0852/posts

---

## ⚠️ 저작권 / 사용주의

- 강의 원본 코드는 그대로 복제하지 않습니다. (학습 목적: 핵심 로직 재작성 + 출처 표기)
- 공개 저장소이므로 민감 정보(비밀번호, API 키 등)는 절대 커밋하지 마세요.

---
