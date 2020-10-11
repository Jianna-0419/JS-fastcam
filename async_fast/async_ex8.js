function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise

    p(1000)
        .then(() => p(1000))
        .then(() => p(1000))
        .then(() => {
        console.log('3000 ms 후에 실행');
    })

// async await

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000 ms 후에 실행 with async await');
})();
    // 한 줄 한 줄이 끝나야 실행이 되는 느낌 (실행 순서와 똑같아 보임)