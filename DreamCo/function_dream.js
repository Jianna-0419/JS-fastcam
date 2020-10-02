// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
    // function name(param1, param2) {body.. return;}
    // one function === one thing
    // naming: doSomething, command, verb   (명령, 동사 형태로 쓴다)
    // e.g. createCardAndPoint -> createdCard, createPoint
    // function is object in JS
    function printHello() {
        console.log('Hello');
    }
    printHello();   // 좀 쓸모가 덜한 함수  

    function log(message) {
        console.log(message);
    }
    log('Home');    // 하지만 message 의 타입이 정해져 있지 않기 때문에
                    // 타입이 중요한 함수일 경우 조금 난해 할 수 있음 -> TypeScript
    
    // TypeScript 에서는 타입을 지정할 수 있음 function log(message: string) 이런 식으로


// 2. Parameters  매개 변수 
    // premitive parameters: passed by value
    // object parameters: passed by reference
    function changeName(obj) {
        obj.name = 'coder';
    }
    const ellie = {name: 'ellie'};
    changeName(ellie);
    console.log(ellie);

// 3. Default parameters (added in ES6)
    function showMessage(message, from = 'unknown') {
        console.log(`${message} by ${from}`);
    }
    showMessage('Hi!');     // from 이라는 매개변수를 전달하지 않으면 undefined 로 나온다 
    // from = 'unknown' 이라고 default 값을 정했기 때문에 이제는 unknown 이라고 뜬다 


// 4. Rest parameters (added in ES6)
    // 배열 형태로 전달
    function printAll(...args) {
        for (let i =0; i < args.length; i++) {
            console.log(args[i]);
        }

        for (const arg of args) {
            console.log(arg);
        }

        args.forEach((arg) => console.log(arg));
    }
    printAll('dream', 'coding', 'ellie');
    // for 문으로 쓸 수도 있지만 for of 를 사용해서 간단하게 쓸 수도 있다 


// 5. Local scope
    // "밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다."
    let globalMessage = 'global';   // global variable
    function printMessage() {
        let message = 'hello';
        console.log(message);   // local variable
        console.log(globalMessage);
    }

    printMessage(); 
    // console.log(message);   // 밖에서 부르면 오류!