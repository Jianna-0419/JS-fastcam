'use strict';

// 1. String concatenation
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
    console.log('' == fasle);       // true
    console.log('' === false);      // false
    console.log(null == undefined); // true
    console.log(null === undefined);    // false