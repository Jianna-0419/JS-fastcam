function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise.all([배열]);
// 배열들 다 실행 후에 출력 !

// (async function main() {
//     const results = await Promise.all([p(1000), p(2000), p(3000)]);
//         // 배열들이 다 실행이 된 후에 값이 results 로 들어감 (배열의 형태로)
//     console.log(results);   // [1000, 2000, 3000] 출력
// })();

// Promise.race
// 배열 중에 먼저 실행되는 애만 출력!
(async function main2() {
    const result = await Promise.race([p(1000), p(20000), p(3000)]);
    console.log(result);    // 1000 출력 
})();