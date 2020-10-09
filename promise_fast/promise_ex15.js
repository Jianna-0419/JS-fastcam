/*
    value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다
    value 가 프로미스 객체면, resolve 된 then 메서드를 실행합니다
    value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then method 를 실행합니다
*/

// promise 라는 전역 객체의 안에 있는 resolve
Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아서 then이 실행됨', 
    data,
    ); 
})

Promise.resolve('bar').then(data => {
    console.log('then method 가 없는 경우, fulfilled 됩니다', data);
})