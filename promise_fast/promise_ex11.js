// 보통 reject 함수를 실행하여 rejected 되는 이유를 넘기는데,
// 표준 내장 객체인 Error 의 생성자를 이용해서 Error 객체를 만든다

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(new Error('그냥 오류났어욤'));
        }, 1000);
    });
}

p()
    .then((message) => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch((error) => {
        console.log('1000ms 후에 rejected 됩니다.', error);
    });
