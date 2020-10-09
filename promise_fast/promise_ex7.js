// then 을 설정하는 시점을 정확히하고,
// 함수의 실행과 동식에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해!! (타이밍 조절)
// 프로미스 객체를 생성하면서 리턴한느 함수 (p) 를 만들어 (p) 실행과 동시에 then 을 설정한다


function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve();  // fulfilled
        }, 1000);
    });
}

p().then(() => {
    console.log('1000ms 후에 fulfilled 가 되는거 잊지마세요!');
})