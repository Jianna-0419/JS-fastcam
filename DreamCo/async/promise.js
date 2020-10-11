'use strict';
// Promise 의 공부 포인트!
// 1. State 상태 
// 2. Producer & consumer 의 차이점 

// asynchronous : 동시에 발생하지 않는 

// Promsie is a JavaScript object for asynchronous operation.
// State : pending 대기중 -> fulfilled 성공 or rejected 실패 
// Producer vs Consumer

// Promise 안에는 꼭 return 이 아닌 resolve/reject 를 통해 값을 전달해줘야한다 

// 프로미스 정리
    // 내가 언제 유저의 데이터를 받아 올지는 모르겠지만
    // 이 Promise 오브젝트를 가지고 있으면
    // 여기에 너가 then 이라는 콜백 함수만 등록을 해놓으면
    // 유저의 데이터가 준비되는 대로 너가 등록한 콜백 함술ㄹ 내가 불러 줄께!!


// 1. Producer
    // when new Promise is created, the executor runs automatically.
    const promise = new Promise((resolve, reject) => {
        // doin some heavy work (network, read files)
        console.log('doing something...');
        setTimeout(() => {
            resolve('ellie');       // ellie 라는 받아온 데이터를 2000ms 후에 resolve 를 통해 전달 
            // reject(new Error('no network 에러의 이유'));    // Uncaught Error 
        }, 2000);
    });
        // 주의사항
        // Promise 를 만드는 순간 우리가 전달한 executor(resolve, reject) 가 바로 실행이 된다
        // 사용자가 원하지 않았는데 executor 가 실행이 되면서 원치않는 데이터를 전송할 수 있다


// 2. Consumers : then, catch, finally
    promise.then((value) => {
        console.log(value);         // then 호출 -> 다시 promise 리턴 ->
    })                              
    .catch(error => {               // -> promise 의 catch 를 등록 
        console.log(error);
    })
    .finally(() => {                // finally : resolve 던 reject 던 무조건 실행 
        console.log('finally');
    });


// 3. Promise chaining
    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });

    fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

    // then 은 값을 바로 전달할 수도 있고 promise 를 전달할 수도 있다 



// 4. Error Handling    오류를 잘 처리하자! 
    const getHen = () => 
        new Promise((resolve, reject) => {
            setTimeout(() => resolve('🐔'), 1000);
        });
    const getEgg = hen =>
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error(`errr! ${hen} => 🥚`)), 1000);    //  '🐔 => 🥚' 리턴
        });     // Error 가 뜨게 할 때는 catch 를 사용해서 Handling 해주기!
    const cook = egg => 
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${egg} => 🥣`), 1000);    //  '🐔 => 🥚 => 🥣' 출력
        });
    
    // 1. getHen 을 통해서 resolve 값 🐔 받기 
    // 2. 1에서 얻은 값을 getEgg 가 hen 이라는 이름으로 받아서 resolve 🥚 값 리턴
    // 3. 🥚 을 cook 에서 egg 라는 변수로 받아와서 resolve 로 🥣 값 리턴 
    // 4. meal 에서는 최종적으로 resolve 된 애들을 합쳐서 출력
    // 5. 🐔 => 🥚 => 🥣 으로 출력이 된다 
        
    // 생략 x 버전
    // getHen()
    // .then(getEgg)           // 생략 가능 
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));   // 🐔 => 🥚 => 🥣 출력 

    // 생략 버전  => 가독성이 좀 떨어진다
    // getHen().then(getEgg).then(cook).then(console.log); 

    getHen()
        .then(getEgg)   
        .catch(error => {
            return '🥐';        // 결국 🥐 => 🥣 이 출력이 된다
        })
        .then(cook)
        .then(console.log)
        // 이렇게 줄바꿈해서 쓴다 
        // 위에서 그냥 reject 하기만 하면 핸들링하지 않은 오류가 나기 때문에 핸들링을 해줘야한다
        // .catch(console.log);    // 오류가 맨 밑으로 이동한다 

    
        // 만약 getEgg 단계에서 오류가 나면 다른 재료로 대체하고 싶다! 하면 
        // 오류부분 아래에 catch 를 써서 return 을 다른 재료로 해주면 된다 

        // 특정 부분에서 일어나는 에러를 잡고 싶을 때는 바로 catch 를 써서 문제를 해결하면 된다 
        // catch 의 순서가 중요하다 !!

        