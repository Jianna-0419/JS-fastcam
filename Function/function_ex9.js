// 함수를 인자로 하여 함수를 호출

// hello 함수 선언
function hello(c) {
    console.log(' hello 먼저 출력');
    c();
}
                    // 출력 후 c 실행

// hello 함수 실행 
hello(function() {
    console.log(' 콜백이 그 다음');
});
 
/*
    실행 순서 
        1. hello 함수가 실행 됨  (위에 선언 부분에 있는 바디 실행)
        2. 'hello' 출력
        3. 그 다음에 c(); 실행 
            - c 에는 함수가 들어있으므로 
        4. c에 해당하는 함수 실행
        5. 콜백 출력 
*/

// 함수가 아주 중요하므로 복습이 필수이다 