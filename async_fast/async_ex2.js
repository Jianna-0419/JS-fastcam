// await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.
console.log('연결 확인!');

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행됩니다!`);
})();
    // await 는 async 함수 안에서만 가능 
    // 함수를 통째로 (함수)(); 로 감싸면 '바로 실행' 의 의미

// async await 의 장점은
// 비동기 임에도 불구하고 실행 순서가 수직적으로 처리가 되는 거 처럼 표현할 수 있기 때문이다 
