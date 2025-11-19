//====================================== 11-19 정규식, 폼 인증 ===========================================

// [문제] 아래 폼 입력값을 받을 때
// - 아이디(이메일)와 비밀번호가 비어있으면 각각 알림!
// - 비밀번호 길이 최소 6자
// - 이메일 정규식 검사
// - 비밀번호에 대문자 필수
/*
<form action="success.html" class="loginForm">
  <input type="text" id="idInput">
  <input type="password" id="passInput">
  <button type="submit" id="post">전송</button>
  <button type="button" id="close">닫기</button>
</form>
*/

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

// [실패 경험/메모]
// - if(!email정규식.test(formId)): 조건에 ! 생략했다가, 정상 작동 안해서 디버깅함(반대로 넘어감)
// - [A~Z] 대신 [A-Z] 써야 정상 동작
// - test 메서드 뒤에 괄호로 값 반드시 넣기: .test(str)
