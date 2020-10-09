// p.then 으로 callback 함수를 실행했기 때문에 fulfilled 되면서 callback 이 실행된다

const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();  // fulfilled
    }, 1000);
});

// promise 가 resolve(); 를 한 후 (fulfilled 가 된 후에 실행됨)
p.then(() => {
    console.log('1000ms 후에 fulfilled 됩니다');
});