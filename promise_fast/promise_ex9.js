// executor 의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있다
// 데이터를 받아와서 쓰기 !
/*
    resolve('hello');
    then((message) => {...})
*/

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    });
}

p()
    .then((message) => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch(() => {
        console.log('1000ms 후에 rejected 됩니다.');
    });

// 'hello' 가 message 에 할당된다 (데이터를 받아서 쓰기)