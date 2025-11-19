# 🎯 코딩애플 JavaScript 학습 레포 (JS 연습장)

![progress](https://img.shields.io/badge/Progress-34%2F120-4CAF50?style=flat-square)
![velocity](https://img.shields.io/badge/Daily_lectures-2~3-3B82F6?style=flat-square)
![status](https://img.shields.io/badge/Status-In%20Progress-F59E0B?style=flat-square)

요약  
이 레포는 코딩애플 JavaScript 강의 수강과 문제 풀이, 실험(playground), 일일 회고 기록을 위한 개인 학습 저장소입니다. 강의 요약·풀이·실험·회고를 꾸준히 쌓아 포트폴리오와 학습 이력을 증명하는 목적입니다.

---

## 목차

- 목적
- 구조
- 파일/네이밍 규칙
- 일일 루틴(권장)
- 템플릿
  - 강의 요약 템플릿
  - 문제 풀이 템플릿
  - 일일 회고 템플릿
  - 플레이그라운드 가이드
- 커밋/브랜치 규칙
- Velog / 외부 글 연동
- 자동화(선택)
- 유지/관리 팁

---

## 목적

- 강의 내용의 핵심을 정리하여 이해도를 높임
- 문제 풀이 기록으로 알고리즘/문제해결 능력 증명
- 실험 코드를 통해 개념 검증(실험 → 실패도 기록)
- Velog와 연계하여 글·코드 모두 증거로 남김

---

## 디렉터리 구조 (권장)

```
/
├─ README.md
├─ lectures/          # 강의별 핵심 요약(.md)
├─ exercises/         # 강의 문제 및 풀이(.js)
├─ playground/        # 실험용 코드(try 파일)
├─ notes/             # 회고(일별/주별/월별)
├─ assets/            # 이미지/GIF/스크린샷
└─ .github/           # PR/Issue 템플릿 등(권장)
```

---

## 파일 네이밍 규칙

- 강의 요약: `01-변수와스코프.md` 또는 `07-prototype.md`
- 문제 풀이: `15-array-flatten.js` (번호-짧은설명)
- 플레이그라운드: `event-loop-order-try.js`
- 일일 회고: `notes/2025-11-19-retro.md`
- 주간 인덱스: `notes/index-2025-week47.md`
- 월간 요약: `notes/2025-11-summary.md`

파일 이름에 날짜/번호를 붙이면 정렬과 추적이 편해집니다.

---

## 오늘 루틴(권장)

1. 강의 시청: 2~3개
2. lectures/ 에 핵심 요약 작성 (5~10줄)
3. exercises/ 에 문제 풀이 업로드 (실패 버전 포함)
4. playground/ 에 실험 코드로 개념 검증
5. notes/ 에 일일 회고 작성 (간단 회고 + 내일 목표)
6. Velog에 핵심 회고/정리 업로드 → README 또는 해당 강의 파일에 Velog 링크 추가
7. 커밋과 PR(혼자라도 브랜치 → PR → Squash)로 기록 남기기

---

## 템플릿

### 강의 요약 템플릿 (lectures/NN-title.md)

```md
# 07 - Prototype

## 핵심 요약

- 프로토타입 체인은 **proto** 로 상위 객체를 탐색한다.
- 메서드는 prototype에 두어 메모리 공유를 권장한다.

## 헷갈린 점 / 해결

- Circle.prototype = {} 로 교체하면 constructor가 사라진다 → 복구 필요

## 추가 실험

- prototype 재정의 vs 기존 객체 확장 성능 비교 (playground/ 참고)

## Velog

- https://velog.io/@yourid/...
```

### 문제 풀이 템플릿 (exercises/NN-name.js)

```js
// 15-array-flatten.js
// 목적: 중첩 배열 평탄화 (재귀 vs 스택)
// 작성자: yourname
// 실행: node exercises/15-array-flatten.js

function flattenRecursive(arr) {
	return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenRecursive(cur) : cur), []);
}

function flattenStack(arr) {
	const stack = [...arr];
	const res = [];
	while (stack.length) {
		const item = stack.pop();
		if (Array.isArray(item)) {
			stack.push(...item);
		} else {
			res.push(item);
		}
	}
	return res.reverse();
}

// 간단 테스트
console.log(flattenRecursive([1, [2, [3]], 4]));
console.log(flattenStack([1, [2, [3]], 4]));
```

### 일일 회고 템플릿 (notes/YYYY-MM-DD-retro.md)

```md
# 2025-11-19 회고

## 오늘 한 강의 / 문제

- Lecture 07 Prototype / Exercise 15 Array Flatten

## 핵심 개념 픽 3

1. 프로토타입 체인 탐색 (**proto**)
2. constructor 소실 주의
3. 재귀 vs 스택

## 막힌 점 & 해결 시도

- 이벤트 루프 순서(setTimeout vs Promise) → playground/event-loop-order-try.js 실험 예정

## 코드/실험 링크

- lectures/07-prototype.md
- exercises/15-array-flatten.js

## Velog

- https://velog.io/@yourid/...

## 내일 목표(1~2개)

- 이벤트 루프 다이어그램 그리기
- prototype 성능 미니 벤치

## 짧은 자기 피드백

- 핵심 요약 양 괜찮음(7줄 내외)
```

---

## Playground(실험 공간)

- 목적: 아이디어/의문을 빠르게 검증(완성도 불필요)
- 규칙:
  - 파일명: `<주제>-try.js` (예: `event-loop-order-try.js`)
  - 상단 주석에 목적/실행/예상 결과/참조링크 명기
  - 유용하면 main 코드로 승격(파일 이동)하고, 그렇지 않으면 보존
- 예시 (playground/event-loop-order-try.js):

```js
console.log('A sync start');
setTimeout(() => console.log('E setTimeout'), 0);
Promise.resolve().then(() => console.log('B promise then'));
queueMicrotask(() => console.log('D queueMicrotask'));
console.log('F sync end');
```

---

## 커밋 / 브랜치 규칙 (권장)

- 브랜치: feat/..., fix/..., refactor/..., docs/...
- 커밋 메시지: Conventional Commits 권장
  - feat: add event loop experiment
  - docs: add daily retro 2025-11-19
  - fix: correct flatten algorithm
- 혼자 작업 시에도 PR → Self-review → Squash and merge 권장

---

## Velog 연동 (추천)

- Velog 글을 작성하면 해당 강의 .md / 회고 파일 상단에 Velog 링크를 추가하세요.
- README에 최신 Velog 글 목록을 자동으로 삽입하려면 GitHub Actions로 RSS 파싱 워크플로(예전 대화 참고)를 설정할 수 있습니다.

---

## 간단 자동화 스크립트 (오늘 회고 빠르게 생성)

아래 스크립트를 `.bin/create-daily-retro.sh` 등으로 두고 실행하면 오늘 회고 파일을 자동 생성합니다.

```bash
#!/usr/bin/env bash
TODAY=$(date +%Y-%m-%d)
FILE="notes/${TODAY}-retro.md"
if [ -f "$FILE" ]; then
  echo "already exists: $FILE"
else
  cat > "$FILE" <<EOF
# ${TODAY} 회고
## 오늘 한 강의 / 문제
-

## 핵심 개념 픽 3
1.
2.
3.

## 막힌 점 & 해결 시도
-

## 코드/실험 링크
-

## Velog
-

## 내일 목표
-

## 짧은 자기 피드백
-
EOF
  echo "created: $FILE"
fi
```

(실행 권한 필요: `chmod +x .bin/create-daily-retro.sh`)

---

## 권장 추가 파일 (프로젝트 루트에 두세요)

- `.editorconfig`, `.prettierrc`, `.eslintrc.json` : 포맷/규칙 통일
- `.github/pull_request_template.md` : PR 작성 템플릿
- `.github/ISSUE_TEMPLATE/` : 버그/기능 요청 템플릿

---

## 유지/관리 팁

- 기록은 삭제하지 말고 누적하세요. (일자별 파일 → 주간 인덱스 → 월간 요약)
- 큰 실습 레포는 `exclude_repo`로 언어 비율 카드 왜곡 방지
- Velog 포스트와 레포 파일을 서로 링크하면 신뢰도 상승
- 주기적으로(주/월) README의 진행률 배지 숫자를 업데이트하거나 자동화하세요

---

## 예시 요약(복사해서 사용)

- 강의 요약 예시: `lectures/07-prototype.md`
- 문제 풀이 예시: `exercises/15-array-flatten.js`
- 회고 예시: `notes/2025-11-19-retro.md`
- 실험 예시: `playground/event-loop-order-try.js`

---

필요하시면:

- 이 README를 그대로 repo에 커밋할 수 있는 파일 형태(.md)로 만들어 드리겠습니다.
- Velog 최신글 자동 삽입 워크플로(.github/workflows)도 함께 생성해 드릴게요.
- `.editorconfig` / `.prettierrc` / `.eslintrc.json` 파일도 바로 만들어 드릴까요?

원하시는 다음 동작을 알려주세요.
