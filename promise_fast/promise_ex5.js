/*
    p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행된다
*/


const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();  // fulfilled
    }, 1000);
});

// promise 가 resolve(); 를 한 후 (fulfilled 가 된 후에 실행됨)
p.then(() => {
    /* callback */
});