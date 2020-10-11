// error 의 전파

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('Error 원인'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(2000);       
    return 'Mark ' + ms;
}

(async function main() {
    try {
        const name = await asyncP();        
        console.log(name);
    } catch(error) { 
        console.log(error);
    }
})();

// catch
// 만약 위에서 error 가 생겨서 reject 되면 더이상 아래있는 코드들은 실행이 되지 못하기 때문에
// 그걸 방지하기 위해서 catch 로 error 을 감싸주는 것
// catch 를 써주면 밑에 있는 코드들이 정상 작동 된다 