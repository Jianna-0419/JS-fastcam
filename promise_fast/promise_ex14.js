/*
    then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면,
    비동기 작업을 순차적으로 아래로 표현할 수 있습니다
*/ 

functio p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p().then(() => {
    return p();         // 다시 Promise 객체 만들고 리턴 
})
.then(() => p())
.then(p)
.then(() => {
    console.log('4000ms 후에 fulfilled');
});