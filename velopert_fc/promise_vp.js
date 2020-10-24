console.log('Promise vp 연결 확인했다요!');

// Promise
    // ES6 도입
    // 비동기적인 작업을 편하게 처리할 수 있도록 도와준다 

    function increaseAndPrint(n, callback) {
        setTimeout(() => {
            const increased = n + 1;
            console.log(increased);
            if (callback) {
                callback(increased);
            }
        }, 1000);
    }

    // callback 지옥 Hellllll
   /*  increaseAndPrint(0, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    increaseAndPrint(n, n => {
                        console.log('작업 끝...');
                    })
                })
            })
        })
    })
 */

    // Promise 사용해보자 !
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error());
            }, 1000);
        });

        myPromise.then(result => {
            console.log(result);
        }).catch(error => {
            console.error(error);
        })

    
    // Promise 를 만드는 함수 작성
        function increaseAndPrint2(n) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const value = n + 1;
                    if (value === 5) {
                        const error = new Error();
                        error.name = 'ValueIsFiveError';
                        reject(error);
                        return;
                    }
                    console.log(value);
                    resolve(value);
                }, 2000);
            });
        }

        increaseAndPrint2(0)
            // .then(n => {            // Promise의 resolve 된 값을 n 으로 받아오는 것!
            //     console.log('result: ', n);
            // })
            .then(increaseAndPrint2)
            .then(increaseAndPrint2)
            .then(increaseAndPrint2)
            .then(increaseAndPrint2)
            .then(increaseAndPrint2)
            .catch(error => {console.error(error);})
            // 코드가 간단하게 작성된다!
            // But! 어디서 오류가 날지 catch 를 써야할 지 모르는 상황에서는 사용이 어렵고
            // 중간에 만약 다른 작업을 넣어야 하거나 이런 경우에도 어렵다 
            // 이것을 위해서는 async await 를 사용하는 방법이 있다 


// async & await
/* 
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms);
        }

        async funcion process() {
            console.log('안녕하세요');
            await sleep(1000);
            console.log('반값습니다');
        }

        process();          안녀하세요 반값습니다 차례대로 출력

*/