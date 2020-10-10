'use strict';

// 1. String concatenation(연속)
    console.log('my' + 'cat');
    console.log('1'+ 2);
    console.log(`string literals: 

    '''''
    1 + 2 = ${1 + 2}`);

    // console.log('ellie's book '') 이렇게 하면 특수문자(') 를 인식하지 못하고 오류가 난다
    // 이럴때는 특수문자 앞에 \ 를 쓰거나 이래야한다 (특수 문자열 검색)
    console.log('ellie\'s book')

// 2. Numeric operators
    console.log(1 + 1); // add
    console.log(1 - 1); // substract
    console.log(1 / 1); // divide
    console.log(1 * 1); // multiply
    console.log(5 % 2); // remainder
    console.log(2 ** 3);  // exponentiation ... 지수 

// 3. Increment and decrement operators
    let counter = 2;
    const preIncrement = ++counter;     // 변수 앞에 ++ 이 있으면 preIncrement 라고 한다
    console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  // 3 3
        // counter = counter  1;    이 식과 동일 
        // preIncrement = counter;
        
    const postIncrement = counter++;
    console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  // 3, 4
        // postIncrement = counter;
        // counter = counter + 1;
        // postIncrement 에 counter 값(3) 를 할당한 다음
        // counter 은 counter(3) + 1 이므로 4가 된다 
    

// 4. Assignment operators
    let x = 3;
    let y = 4;
    x += y; // x = x + y
    x -= y; 
    x *= y;
    x /= y;

// 5. Comparison operators  비교 연산자 
    console.log(10 < 6);    // less than
    console.log(10 <= 6);  // less than or equal
    console.log(10 > 6);    // greater than
    console.log(10 >= 6);   // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
    const value1 = false;
    const value2 = 4 < 2;

    // || (or), finds the firsst truthy value
    console.log(`or: ${value1 || value2 || check()}`);
        // ture 하나만 찾으면 되기 때문에 계산이 오래 걸리는 것은 맨 뒤로 보낸다 
        // 심플한 아이들을 앞으로!

    // && (and), finds the first falsy value
    console.log(`and: ${value1 && value2 && check()}`);
        // often used to compress long if-statement
        // nullableObject && nullableObject.something
        // 간편하게 코드 작성할 때 유용하게 쓰인다 
            // if (nullableObject !== null) {
            //     nullableObject.something
            // }

    function check() {
        for (let i = 0; i < 10; i++) {
            //wasting time
            console.log('check() 는 시간을 낭비하다가 결국 true 를 리턴하는 아이');
        }
        return true;
    }

    // ! (not)  -> 값의 반대로!
    console.log(!value1);


// 7. Equality
    const stringFive = '5';
    const numberFive = 5;

    // == loose equality, with type conversion  타입은 상관없다 
    console.log(stringFive == numberFive);
    console.log(stringFive != numberFive);

    // === strict equality, no type conversion  타입도 같아야 한다 
    console.log(stringFive === numberFive);
    console.log(stringFive !== numberFive);

    // 왠만하면 === 쓰자 

    // object equality by reference
    const ellie1 = {name: 'ellie'};
    const ellie2 = {name: 'ellie'};
    const ellie3 = ellie1;
    console.log(ellie1 == ellie2);      // false
    console.log(ellie1 === ellie2);     // false
    console.log(ellie1 === ellie3);     // true  

    // equality - puzzler
    console.log(0 == false);        // true
    console.log(0 === false);       // false
    console.log('' == false);       // true
    console.log('' === false);      // false
    console.log(null == undefined); // true
    console.log(null === undefined);    // false

// 8. Conditional operators: if 
    // if, else if, else
    console.clear();
    const name = 'ellie';
    if (name === 'ellie') {
        console.log('Welcome, Ellie!');
    } else if (name === 'coder') {
        console.log('You are amazing coder');
    } else {
        console.log('unknown');
    }


// 9. Ternary operator: ?
    // condition ? value1 : value2;
    // 조건이 true 면 value1 실행 / false 면 value2 실행
    console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
    // use for multiple if checks
    // use for enum-like value check
    // use for multiple type checks in TS
    const browser = 'IE';
    switch (browser) {
        case 'IE':
            console.log('go away!');
            break;
        case 'Chrome':
        case 'FireFox':
            console.log('love you!');
        default:
            console.log('same all!');
            break;
    }
    // 여러개의 case 가 실행하는 값이 같다면 chrome firefox 처럼 이어서 붙이면 된다 


// 11. Loops
    // while loop, while the condition is truthy,
    // body code is executed.
    let i = 3;
    while (i > 0) {
        console.log(`while: ${i}`);
        i--;
    }
    // do while loop, body code is executed first,
    // then check the condition.
    do {
        console.log(`do while: ${i}`);
        i--;
    }   while (i > 0);
    // 일단은 do 에 잇는 내용을 실행하고 while 의 조건이 false 면 멈추는 것
    // 무조건 1번은 실행이 된다 

    // 블록을 먼저 실행하고 싶으면 do while 을 
    // 조건이 맞을 때만 실행하고 싶으면 while 을 써야한다 

    // for loop, for(begin; condition; step)
    for (i = 3; i > 0; i--) {
        console.log(`for: ${i}`);
    }       // i 를 3으로 만들고 2번째에 있는 조건에 맞으면 실행 -> 다음 루프
            // begin 은 처음 한번만 호출, 조건, 스텝은 무한 반복(조건이 만족안될때까지)

    for (let i =3; i > 0; i = i -2) {
        // inline variable declaration
            // 블록 안에 let 이라는 지역 변수를 선언해서 작성하는 방법
        console.log(`inline vvariable for: ${i}`);
    }       // begin 은 처음에 한번만 호출, 2,3 번째는 반복
            // 

    // nested loops     피하는게 좋다 
        // for 안에 for 이 있을 때
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            console.log(`i: ${i}, j: ${j}`);
        }
    }
        // i = 0 일때 j = 1 ~ 9 까지 실행 
        // i = 1 일때 j = 1 - 9 까지 실행 하는 방식 
        // i 가 실행하지 않을때 j 도 실행되지 않는다 


console.clear();


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let a = 0; a < 11; a++) {
    if (a % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${a}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let b = 0; b < 11; b++) {
    if (b > 8) {
        break;
    }
    console.log(`q2: ${b}`);
}

// 루프에서는 레이블이라는 것도 있지만 현업에서는 사용하지 않기 때문에
// 궁금하면 직접 찾아봐야한다 