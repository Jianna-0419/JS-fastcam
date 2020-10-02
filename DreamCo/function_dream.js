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
        function printAnother() {
            console.log(message);
            let childMessage = 'hello';
        }
        // console.log(childMessage);   // error
        return undefined;   // 기본적인 설정, 생략된 것 
    }
    printMessage(); 
    // console.log(message);   // 밖에서 부르면 오류!

// 6. Return a value
    function sum(a, b) {
        return a + b;
    }
    const result = sum(1, 2);   // 3
    console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
    // bad
    function upgradeUser(user) {
        if (user.point <= 10) {
            return;
        }
        // long upgrade logic...
        // 필요한 로직 작성
    }
        // 블록 안에 많은 것들은 쓰는 것은 가독성에 안좋다
        // 조건이 맞지 않을 때 리턴 -> 조건이 맞을 때 로직 작성 순으로 쓰는 게 좋다 



// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable    할당이 가능 
// can be passed as an argument to other functions.     매개변수 parameters 로 전달 가능
// can be returned by another function      리턴 값으로도 리턴이 된다 

// 1. Function expression
    // a function declaration can be called earlier than it is defined. (hoisted)
    // a function expression is created when the execution reaches it.
    // 선언 되기 이전에 함수를 불러올 수 있다 -> JS 가 함수의 선언 부분을 제일 위로 끌어올리기 때문
    const print = function() {      // anonymous function 익명 함수 
        console.log('print');       // named function 이름이 있는 함수 
    }
    print();
    const printAgain = print;
    printAgain();
    const sumAgain = sum;
    console.log(sumAgain(1, 3));


// 2. Callback function using function expression   콜백 현상
    // functions 을 parameters 로 불러서 상황에 따라 호출하는 것 
    function randomQuiz(answer, printYes, printNo) {
        if (answer === 'love you') {
            printYes();
        } else {
            printNo();
        }
    }
    const printYes = function() {
        console.log('Yes!');
    }

    // named function
    // better debugging in debugger's stack traces
    // recursions   반복 되풀이, 귀납식
    const printNo = function print() {
        console.log('No!');
        // print();      // recursion : 함수 안에서 스스로 혹은 함수를 부르는 것
                         // 이렇게 하면 무한으로 반복 -> call stack 꽉찼다고 에러
    }
    randomQuiz('wrong', printYes, printNo);
    randomQuiz('love you', printYes, printNo);


// Arrow function
    // always anonymous
    // const simplePrint = function() {
    //     console.log('simplePrint!');
    // }
    
    const simplePrint = () => console.log('simple Print!');
            // 이렇게 간단하게 만들 수 있다

    // const add = function(a, b) {
    //     return a + b;
    // }
    const add = (a, b) => a + b;        // 간결하게 쓰기 
    const simpleMultiply = (a, b) => {
        // do something more    한줄 이상이라면 블록{} 도 쓸 수 있다 
        return a * b;
    }


// IIFE: Immediately Invoked Function Expression
    // 함수 자체를 () 로 묶고 () 도 써주면 선언과 동시에 실행이 된다 
    // (function {})();    이런식으로 
    (function hello() {
        console.log('IIFE');
    })();   