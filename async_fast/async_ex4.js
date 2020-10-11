// async function 자체를 사용하는 방법
// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('Error 원인'));
        }, ms);
    });
}

async function asyncP() {
    return 'Mark';
}
    // async 함수의 return 값은 Promise.resolve 값으로 변환되서 리턴된다 
(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch(error) {
        console.log(error);
    }
})();