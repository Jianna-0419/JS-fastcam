// async & await
// clear style of using promise :)
// 비동기적인 작업을 좀 더 동기적이고 간결 간편하게 만들어 주는 것 

// 1. async     / 
// async function => 함수를 Promise 로 변환해준다 

    async function fetchUser() {            // 이렇게 function 앞에 async
        // do network request in 10 secs... 
        return 'ellie';
    }

    const user = fetchUser();   // Promise를 리턴
                                // (Promise 를 불러서 그 안에 resolve 값 전달하는 것)
    user.then(console.log);     // then 을 사용해서 (resolve 값을) 출력할 수 있다 
    console.log(user);

    // 비동기적 처리를 하지 않으면 사용자는 10초동안 아무것도 없이 그대로 기다려야한다 
    // 그래서 이렇게 오래 걸리는 일은 비동기적으로 처리를 해줘야한다
    // 하지만 이렇게 하면 번거럽기 때문에 !! 


    // 함수 앞에 async 를 쓰기만 하면 자동으로 Promise 로 변환이 된다 
        // 안에 new Promise 도 안적어도 되고 resolve 나 reject 도 필요 없다 


// 2. await ✨
    function delay(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms));
    }       // ms 초가 지나면 resolve 를 전달하는 함수 

    async function getRed() {
        await delay(2000);
        // throw 'error';      // Error 발생!
        return '❤';
    }   // 3초를 기다렸다가 빨간 하트를 리턴하는 Promise 가 만들어 진다(async)

    async function getYellow() {
        await delay(1000);
        return '💛';
    }   // 3초 있다가 오렌지 하트 리턴 하는 Promise 만듦

    // getYellow 를 Promise 를 이용해서 만들면
    // function getYellow() {
    //     return delay(3000);
    //     .then(() => '💛');
    // }
        // 이렇게 만들 수 있지만 이런식으로 체이닝 하는 것보다는 동기적인 코드를 만드는 것처럼
        // 더 잘 이해할 수 있는 코드를 만들 수 있다 

    async function pickHearts() {
        // promise 를 만들게 되면 바로 promise 안에 있는 실행 블록이 실행된다 
        // 병렬적으로, 동시 다발적으로 실행 (getRed & getYellow)
        const redPromise = getRed();
        const yellowPromise = getYellow();

        // delay(1000) 후에 
        const red = await redPromise;
        const yellow = await yellowPromise;
        return `${red} + ${yellow}`;
    }
        // 다 땡!!! XXXXXXXXXXXXXXX

    pickHearts().then(console.log);

    // Error 가 발생햇다면
    // try 를 써서 pickHearts 안에 있는 실행내용을 묶어주고
    // catch 를 이용해서 잡아준다 

    // 하지만 여기서 또 문제!
    // await 를 수직적으로 쓰게 되는 것! 
        //red 와 yellow 는 서로 연관이 없기 때문에 서로를 기다릴 필요가 없다!

    // redPromise 와 yellowPromise 를 쓰는 순간 getRed 와 getYellow 가 실행이 된다 거의 동시에 
    // 그래서 병렬적으로 둘다 실행이 되기 때문에 1 + 1 = 2 초가 아닌 1초만 기다리면 
    // red 와 yellow 가 할당이 되고 둘이 잠시 기다렸다가 return 으로 넘어간다

    
    // 하지만 병렬적으로 실행이 될 수 있다면 이렇게 코드를 복잡하게 작성할 필요가 없다 

// 3. useful Promise APIs

    // Promise.all([배열들]);
    //   : 프로미스 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을 때까지 모아주는 아이
    
    function pickAllHearts() {
        return Promise.all([getRed(), getYellow()])
        .then(hearts => hearts.join(' + '));
    }

    pickAllHearts().then(console.log);

    

    // Promise.race([배열들]);
    //  : 가장 먼저 끝나는 배열 전달 
    function pickOnlyOne() {
        return Promise.race([getRed(), getYellow()]);
    }
    pickOnlyOne().then(console.log);