// Promise 객체를 리턴하는 함수

    function p(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        })
    }
    

// Promise 객체를 이용해서 비동기 로직을 수행할 때 

    p(2000).then(ms => {
        console.log(`${ms} ms 후에 실행된다`);
    })      // 이때 ms 가 선언이 되는 건가 

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

    const ms = await p(3000);
    console.log(`${ms} ms 후에 실행된다22`);
    // Error! await is only valid in async function

     