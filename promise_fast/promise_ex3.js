// executor 함수는 resolve 와 reject 를 인자로 가진다
//    (resolve, reject) => {...}

// resolve 와 reject 는 함수입니다.
//    resolve(), reject()

new Promise(/* executor */ (resolve, reject) => {});
        // 이렇게 생긴 형태 



// 생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 한다 
new Promise((resolve, reject) => {});       // pending


// pending 상태가 된후에 
// executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다
new Promise((resolve, reject) => {
    // 1. pending 상태 
    // 2. ... 비동기적 상태 
    resolve();      // fulfilled 상태 

});


// executor 함수 인자 중에 하나인 reject 함수를 실행하면, rejected (거부) 상태가 된다 
new Promise((resolve, reject) => {
    reject();       // rejected 상태 
});


// 1. new Promise(executor) 을 만든다
// 2. pending 상태에 돌입
// 3. 비동기적인 상황이 일어난다

// 4. 3번의 상황이 끝나면
    // 5-1 : fulfilled 성공적으로 끝  ->  fulfilled 함수 실행 
    // 5-2 : rejected 에러나 문제가 생겨서 실패 ->  rejected 함수 실행 