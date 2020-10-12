console.log('연결 확인');

function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString);
        }, sec * 1000);
    });
}

function normalFunc() {
    return 'wow';
}

async function myAsync() {
    // delayP(3).then((time) => {
    //     console.log(time);
    // });
        // 이렇게 하면 return 이 먼저 되고 나서 실행이 되는데
    const result2 = await normalFunc();     // await  을 붙일 수는 있지만 붙이나 안붙이나 똑같다
        console.log(result2);

    const result = await delayP(3).then((time) => {
        return 'x';
    });     // result 에 then 안에 있는 최종 return 값이 들어간다 . Promise 가 될수도 있다
    console.log(result);
    
    return 'async';
} 
    // await 를 쓰게 되면 delayP 가 실행이 다 되고 나서 return 'async' 가 된다 


myAsync().then((result) => {    // result 값은 위에서 return 한 값이 들어간다 
    console.log(result);
});

// async 와 delayP 모두 Promise 를 리턴한다 

// async 
// : 란 함수를 Promise 를 리턴하는 함수로 만든다
// async 에서는 return = resolve / throw = reject 처럼 쓰인다 


// await
