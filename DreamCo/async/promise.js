'use strict';
// Promise 의 공부 포인트!
// 1. State 상태 
// 2. Producer & consumer 의 차이점 
// asynchronous : 동시에 발생하지 않는 

// Promsie is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
    // when new Promise is created, the executor runs automatically.
    const promise = new Promise((resolve, reject) => {
        // doin some heavy work (network, read files)
        console.log('doing something...');
        setTimeout(() => {
            resolve('ellie');       // ellie 라는 받아온 데이터를 resolve 를 통해 전달 
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



// 4. Error Handling
    const getHen = () => 
        new Promise((resolve, reject) => {
            setTimeout(() => resolve('🐔'), 1000);
        });
    const getEgg = hen => 
        new Promise((resolve, reject) => );