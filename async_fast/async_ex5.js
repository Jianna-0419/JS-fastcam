// async 함수에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다 2

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('Error 원인'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(2000);       // p(1000) 을 먼저 해결한 뒤에 return 'Mark' 된다
    return 'Mark ' + ms;
}
    // async 함수의 return 값은 Promise.resolve 값으로 변환되서 리턴된다 

(async function main() {
    try {
        const name = await asyncP();        // await 로 호출 중 
        console.log(name);
    } catch(error) {
        console.log(error);
    }
})();