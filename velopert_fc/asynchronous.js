console.log('비동기 vp 연결 확인 $~$');

// 동기적 Synchronous
    // 순차적으로 해야하는 처리
    // 1 => 2 => 3 => 4 ... 순차적으로 해결  (하나의 작업이 끝나야 다음 작업으로 넘어감)


// 비동기적 Asynchronous 
    // 동시다발적으로 처리
    // 1, 2, 3, 4 번 다 같이 처리 시작 가능
    console.log('-------------비동기-----------');

    // 동기적 함수 작성 

        function work() {
            const start = Date.now();
                    // Date.now  =  현재 날짜를 숫자의 형태로 나타내는 JS 내장 함수 
            
            for (let i = 0; i < 10000000; i++) {

            }

            const end = Date.now();
            console.log(end - start + 'ms');
        }

        work();
        console.log('다음 작업');
        // work 함수가 끝난 뒤에 다음 작업 실행


    // 비동기적 함수 작성
        // setTimeout 함수 사용
            // 1번째 인자 = 함수 
            // 2번째 인자 = 몇초 후에 실행

        function work2(callback) {
            setTimeout(() => {
                const start = Date.now();
                for (let i = 0; i < 10000000; i++) {

                }
                
                const end = Date.now();
                console.log(end - start + 'ms');
                callback(end - start);
            }, 4);
        }

        console.log('작업 시작 !');
        work2((ms) => {
            console.log('작업이 끝났어요!');
            console.log(ms + 'ms 정도 걸렸다고 하네용');
        });
        console.log('다음 작업2 ');
        /* 
            작업 시작
            다음 작업2
            15 ms 출력 

            작업 시작이 출력 => work 실행 
            => setTimeout 4ms 를 기다리는 동안에 다음 작업 실행
        */

