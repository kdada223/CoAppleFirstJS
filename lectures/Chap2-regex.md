# Chap2 - 정규식 기초와 폼 인증 실습

## 핵심 요약

- 정규식 `/[A-Z]/`를 쓰면 대문자 포함 체크 가능!
- 이메일 검사엔 `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` 사용(실무 예시)
- 폼 이벤트에서 `event.preventDefault()`로 기본 제출 막기 → 경고창/버튼 제어에 활용

## 문제 & 코드 실습

```html
<form action="success.html" class="loginForm">
	<div class="my-3">
		<input type="text" class="form-control" id="idInput" />
	</div>
	<div class="my-3">
		<input type="password" class="form-control" id="passInput" />
	</div>
	<button type="submit" class="btn btn-primary" id="post">전송</button>
	<button type="button" class="btn btn-danger" id="close">닫기</button>
</form>
```

```js
document.querySelector('.loginForm').addEventListener('submit', function (event) {
	const formId = document.getElementById('idInput').value;
	const formPass = document.getElementById('passInput').value;
	const email정규식 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const passWord대문자정규식 = /[A-Z]/; // [A~Z]가 아니라 [A-Z]

	// 비어있음 검사
	if (formId === '' && formPass === '') {
		event.preventDefault();
		alert('아이디 비번 입력하삼');
	} else if (formId === '') {
		event.preventDefault();
		alert('아이디 입력하삼');
	} else if (formPass === '') {
		event.preventDefault();
		alert('비번 입력하삼');
	} else if (formPass.length < 6) {
		event.preventDefault();
		alert('길이부족함');
	}
	// 이메일 형식 검사 (초기 실수: ! 빠뜨림)
	if (!email정규식.test(formId)) {
		alert('이메일 형식이 아님');
		event.preventDefault();
	} else if (!passWord대문자정규식.test(formPass)) {
		alert('대문자없음');
		event.preventDefault();
	}
});
```

## 헷갈린 점 & 해결

- 정규식 test 메서드에 !를 빼먹어서 잘못된 값도 그대로 통과됨(반전조건 빠짐)
- [A~Z]가 아니라 [A-Z]가 올바른 대문자 정규식
- test 메서드는 반드시 .test(값) 형식으로 써야 함

## 추가 개념/실험

```js
// [정규식 문법 총정리]

// 범위 지정
/[a-z]/.test('b'); // true (소문자 a~z)
/[A-Z]/.test('F'); // true (대문자 A~Z)
/[a-zA-Z]/.test('Y'); // true (모든 알파벳)
/[ㄱ-ㅎ가-힣]/.test('힣'); // true (한글 체크)
/[0-9]/.test('7'); // true (숫자)
/\S/.test('*'); // true (공백 아닌 어떤 문자 1개)

/^a/.test('apple'); // true (a로 시작하는가)
/a$/.test('cola'); // true (a로 끝나는가)
/a|b/.test('bat'); // true (a 또는 b가 포함)
/(a|b)/.test('cab'); // true (()로 그룹화 후 OR)
/\S@\S\.\S/.test('a@b.c'); // 한글자씩만 검사됨(실제로는 부족)
/\S+@\S+\.\S+/.test('aaa@bbb.ccc'); // +로 반복허용 → 이메일 가능

// 실무 이메일 정규식
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test('aaa@bbb.ccc'); // true
```

- ...실험 통해 \S는 문자 1개, + 를 붙여서 여러 글자 대응
- 실제 폼 검증에는 실무용 정규식을 쓰는 것이 안전

## 기타

- 실전에서는 비밀번호 더 복잡한 조합(lint 등) 정규식 필요
- 정규식 처음엔 어렵지만 반복 실습이 해법!

## 실험 링크

- exercises/02-regex-form-validation.js
