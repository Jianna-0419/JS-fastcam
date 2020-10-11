// finally

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('Error 원인'));
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
    } catch(error) {            // catch 덕에 밑에 있는 finaly 가 정상 작동이 된다
        console.log(error);
    } finally {
        console.log('Finally end');
    }
})();