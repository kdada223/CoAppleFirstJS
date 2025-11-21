// (A) 이벤트 루프 우선순위 실험
// 실행횟수 '5'
// setTimeout vs Promise vs queueMicrotask 실행 순서를 출력해보기
console.log('A');
setTimeout(() => console.log('B setTimeout'), 0);
Promise.resolve().then(() => console.log('C promise'));
queueMicrotask(() => console.log('D microtask'));
console.log('E');
// 예상 순서: A → E → C → D → B
//왜 이렇게 생성이 되는가?
//자바스크립트는 싱글 쓰레드이기에 추가적인 느려질 가능성이 매우 높음.
//그렇다면 어떻게 처리를 하는가? 브라우저에서 도와주는 역할을함.
//그게 바로 que라는 친구들임.
//그 친구들에게 부탁을 해서 이거 좀 처리해줘~ 하면 처리를 해줌
//그런데 처리에 따른 속도가 다름
//우리가 쓰는 걸 보면 보다시피 setTimeout vs Promise vs queueMicrotask
//이렇게 비교를하는데 timeout. click 이런 애들은 다 매크로태스트 큐(=>이벤트큐,콜백큐)라는 곳으로 들어감
//그렇게 들어가는데 하나 더 중요한 곳이 있음 바로 마이크로태스크 큐 여기는 promise then , observer callback 이런 애들이 들어감
//이렇게 하면 자연스레 타임아웃함수는 프로미스와 큐마이크로태스크 보다 느리다는게 증명됨
//그런데 왜 마이크로태스크와 프로미스와 비교하면 프로미스가 먼저나오는건가?
//그건 일반적인 이유인데 순차적으로 들어간게 프러미스가 먼저 들어가고 마이크로태스크가 뒤에 들어갔기 떄문에 aecdb가 나온것
//만약 위치를 바꾼다면? aedcb가 나올것
//결국 자바스크립트 순서는 동기코드 -> 비동기코드인데 여기서 순서는 ( 마이크로태스크 -> 매크로태스크) 이렇게  순서
//https://whales.tistory.com/130#google_vignette

// (B) setInterval 중복/클리어 실험
// 실행횟수 '10'
// 여러 interval을 시작하다가 clear 해볼 때…
let count1 = 0,
	count2 = 0;
const start = Date.now();

const id1 = setInterval(() => {
	const elapsed = Date.now() - start;
	console.log('1:', ++count1, 'ms:', elapsed);
}, 500);

const id2 = setInterval(() => {
	const elapsed = Date.now() - start;
	console.log('2:', ++count2, 'ms:', elapsed);
}, 600);

setTimeout(() => {
	clearInterval(id1);
	console.log('id1 인터벌 종료 at', Date.now() - start, 'ms');
}, 3000);

setTimeout(() => {
	clearInterval(id2);
	console.log('id2 인터벌 종료 at', Date.now() - start, 'ms');
}, 4000);

//테스트 목적 과연 셋인터벌은 정확히 그 시간에 도착하고 떨어지는가
//아니면 조금씩의 밀리는 시간이 있는가?
//id1이 구조상으로는 6번찍힌 후 3001ms 에 종료되는 것이 맞음
//id2는 6~7번이지만 7번은 4200ms이기 때문에 안찍히는 것이 옳음
//실행결과
// "1:" 1 "ms:" 502
// "2:" 1 "ms:" 611
// "1:" 2 "ms:" 1002
// "2:" 2 "ms:" 1204
// "1:" 3 "ms:" 1515
// "2:" 3 "ms:" 1812
// "1:" 4 "ms:" 2014
// "2:" 4 "ms:" 2405
// "1:" 5 "ms:" 2514
// "1:" 6 "ms:" 3014
// "2:" 5 "ms:" 3014
// "id1 인터벌 종료 at" 3014 "ms"
// "2:" 6 "ms:" 3606
// "id2 인터벌 종료 at" 4012 "ms"
//몇번을 돌리더라도 시간초가 밀리는 것은 어쩔 수 없었음

// (C) setTimeout 연쇄/재귀 실험
// 실행횟수 '10'
// setInterval 대신 setTimeout을 재귀함수로 써서 “정밀 반복”하는 패턴
function repeat(n, startTime = Date.now()) {
	if (n <= 0) return;
	const elapsed = Date.now() - startTime;
	console.log('count:', n, 'elapsed(ms):', elapsed);
	setTimeout(() => repeat(n - 1, startTime), 1000);
}
repeat(5);
// "count:" 5 "elapsed(ms):" 0
// "count:" 4 "elapsed(ms):" 1005
// "count:" 3 "elapsed(ms):" 2009
// "count:" 2 "elapsed(ms):" 3022
// "count:" 1 "elapsed(ms):" 4027
// "count:" 5 "elapsed(ms):" 0
// "count:" 4 "elapsed(ms):" 1011
// "count:" 3 "elapsed(ms):" 2014
// "count:" 2 "elapsed(ms):" 3027
// "count:" 1 "elapsed(ms):" 4042
// "count:" 5 "elapsed(ms):" 0
// "count:" 4 "elapsed(ms):" 1004
// "count:" 3 "elapsed(ms):" 2017
// "count:" 2 "elapsed(ms):" 3032
// "count:" 1 "elapsed(ms):" 4032

// 셋인터벌이나 셋 타임 아웃이나 비슷하지만 셋타임아웃의 시간 지연이 평균적으로 더 오래 걸린 것을 볼 수 있다.
// 다만 셋인터벌과 셋타임아웃+재귀함수 방식에는 동작차이가 있는데
// 1. setInterval 방식
// 일정 시간(예: 1000ms)마다 _타이머 예약을 무조건 반복_해서 실행.
// JS에서는 콜백 실행이 “지연될 경우”도 예약은 고정주기로 들어가므로
// 콜백이 쌓이면 여러 번 연달아 실행될 수도 있음.
// 콜백 내부 코드가 오래 걸리면 실제 간격이 점점 밀리거나, 중첩될 수 있음.
// 2. setTimeout+재귀 방식
// 한 번 실행 → 코드 끝난 직후에 다음 예약을 “새로” 잡음.
// 이전 콜백이 끝나야만 다음 타임아웃이 예약됨.
// 콜백 내부 코드 시간이 포함되어 “진짜 지난 시간”에 더 가까운 주기가 됨.
// 실제 반복 시점이 더 정확해진다 (밀림이 적음, 중첩 없음)
// 정밀도/지연 측면
// setInterval은 고정 예약: 프로세스가 바쁘면 타임스탬프는 점점 밀려 누적 오차가 커질 수 있음.
// setTimeout+재귀는 실제 “시작~끝” 기준으로 반복 예약:
// → 이전 작업이 길어질 때는 반복 간격이 넓어지지만
// → 반복 사이에 중첩/동시 실행이 안 일어남
// → 정밀 반복(실제 기준)엔 setTimeout+재귀가 유리!
// ⏩ 즉, 정밀도가 더 좋은 건 setTimeout+재귀입니다!
// (중복/누락/동시성 문제를 막고, 실제 "끝~다음 시작"을 컨트롤할 수 있음)
// 실습 예시 결과 분석
// 만약 네가 실험해서 “setInterval이 오히려 오차가 적은 것 같다”고 느꼈다면

// 환경에 따라(코드가 아주 짧거나 콜백이 무겁지 않으면) setInterval이 일정하게 나올 때도 있습니다.
// 다만, 정말 반복 작업이 누적되거나, 콜백이 길면 setInterval에서 “중복 실행”이나 밀림 현상이 더 심해집니다.
// 실제 코딩 분석 포인트
// 각 콜백 실행마다 **Date.now()**로 ms 기록해서
// setInterval은 주기가 일정한지, setTimeout+재귀는 중첩 없는지 직접 비교
// 코드를 일부러 무겁게 만들어서 테스트해도 차이 확실!
// 결론 정리
// 정밀 반복이 필요한 경우엔 → setTimeout+재귀 방식 (예: 게임, UI 애니메이션, 측정기기 등)
// 간단 알림이나 “몇 초마다 한 번씩이면 충분”한 경우엔 → setInterval
// 🔔 코딩 교훈/회고에 남기기 좋은 정리
// Code
// - setInterval은 반복 예약 주기가 고정/독립 → "밀림, 중첩" 위험
// - setTimeout+재귀는 매번 끝나고 다음을 예약 → "정밀", "중복 없음", 실제 간격 기준 반복
// - 실험결과: 반복 작업이 길거나 무거울수록 setTimeout+재귀가 더 믿음직함!
// 앞으로 playground에 실험할 때 “콜백이 아주 무거운 경우”
// 두 방식(setInterval vs setTimeout+재귀)이 각각 어떻게 동작하는지 더 실험해보면
// 차이가 명확하게 드러나서 더욱 깊게 이해할 수 있어요!

// 궁금한 케이스/코드 샘플 요청하면 바로 실험용 코드를 뽑아줄 수도 있습니다.

// setInterval vs setTimeout 재귀 방식의 시간 지연/정밀도/동작 차이
//이 두개의 종합적인 내용은 자바스크립트 내 타이머는 정확하지 않다.
//싱글스레드가 다른작업이 많아 바빠질 경우 타이머가 딱 맞는 시점에 실행되지 않고 밀리는 현상이 발생
//그렇기에 내가 요구했던 시간보다 길어지는 일이 항상 발생함
//코드가 짧고 처리할 일이 적은 이 상황에서도 밀리게 된다면 싱글스레드의 할 일이 많아 지연되는 경우가 많이발생한다면 오래 밀릴 것으로 추정
//정확한 간격과 반복이 필요한 작업에 기본 타이머 함수만 쓰게 되면 동작시간이 누적되어 뒤로 밀릴 가능성이 높다.
//줄이기 위해서는 반복할 때마다 목표 시점을 계산해서 부족하면 그 만큼 더 짧게 타이머를 두는 방식
// 혹은 requestAnimationFrame 등 대체 사용(정밀 작업에서는)
