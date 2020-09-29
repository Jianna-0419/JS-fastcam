
// 1. Use strict
    // added in ES 5
    // use this for Valina Javascript
'use strict';

// 2. Varaible
    // let (added in ES 6) -> JS 에서 '변수' 선언하는 단 한가지 방법
    let globalName = 'global name';

    {
        let name = 'ellie';
        console.log(name);
        name = 'hello';
        console.log(name);
        console.log(globalName);        // 중괄호 안에서도 부를 수 있다.
    }
    console.log(name);
        // 중괄호 밖에서는 부를 수가 없다 -> 아무 값도 나오지 않는다 

    console.log(globalName);
            // 이렇게 중괄호 밖에 선언한 애들은 어느 곳에서나 접근 가능 !

    // Var (don't ever use this !!)
        // var hoisting (move declaration from bottom to top)
        // has no block scope  = 블록을 철저히 무시 
    {
        age = 4;
        var age;
    }
    console.log(age);
            // 블록따위 무시한다!

        // var 의 위험성을 느꼈기 때문에 let 이 생겨나게 된 것!
        // 호환성도 확인하면 좋다  / 호환이 안된다면 나중에 babel 바벨을 이용해서 버전 낮추자


// 3. Constants   읽기만 가능 / 왠만해서는 될 수 있으면 많이 사용(값이 바뀔 이유가 없다면)
    
    const daysInWeek = 7;
    const maxNumber = 5;

    // Note!
        // Immutable data types: premitive types, frozen objects (i.e. object.freeze())
        // Mutable data types: all objects by default are mutable in JS
        // favor immutable data type always for a few reasons: 
            // - security
            // - thread safety
            // - reduce human mistakes
           

// 4. Variable types
    // primitive, single item: number, string, bollean, null, undefined, symbol 
            // 값 자체가 메모리에 저장됨 
    // object, box container
            // 값이 커서 메모리에 들어가지 않는다 -> ref 가 들어가게 됨
    // function, first-class function(변수에 할당 가능, 함수의 인자로도 전달가능, 함수의 return 타입으로도 가능)

    // 값에 상관없이 type = number 로 지정
    const count = 17;  //integer  정수 
    const size = 17.1;  // decimal number   소수점
    console.log(`value: ${count}, type: ${typeof count}`);
    console.log(`value: ${size}, type: ${typeof size}`);

    // 특별한 숫자 문법 numer - special numeric values: infinity, -infinity, NaN
    const infinity = 1 / 0;
    const negativeInfinity = -1 / 0;
    const nAn = 'not a number' / 2;
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);
        // 이렇게 오류가 뜰 수 있으므로
        // 연산을 할 때 진짜 값이 valid 한 값인지 확인하고 연산해야한다 !! 

    // bigInt (fairly new, don't use it yet)
    const bigInt = 123456789012345678901234567890n;
    console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
    Number.MAX_SAFE_INTEGER;
        // 다른 브라우저에서는 숫자 끝에 문자가 있다고 오류가 뜬다 

    // string
    const char = 'c';
    const brendan = 'brendan @-@';
    const greeting = 'hello' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`;  // template literals (string) 변수의 값이 나오게 된다 
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
            // template literals 를 이용해서 간단하게 나타낼 수 있다 

    // boolean
    // false: 0, null, undefined, NaN, ''
    // ture: any other value
    const canRead = true;
    const test = 3 < 1;  // false
    console.log(`value: ${canRead}, type: ${typeof canRead}`);
    console.log(`value: ${test}, type: ${typeof test}`);

    // null 
    let nothing = null;     // null 로 값이 할당이 된 것 
    console.log(`value: ${nothing}, type: ${nothing}`);

    // undefined
    let x;
    console.log(`value: ${x}, type: ${typeof x}`);

    // symbol, create unique identifiers fo object
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
            // 우선순위가 필요하거나 고유한 식별자가 필요할 때 쓰인다 
            // 동일한 id 를 가지고 만들었지만 다른 것으로 분류된다 
    console.log(symbol1 === symbol2);       // false 

    // 동일한 symbol 을 만들고 싶다 -> Symbol.for
    const symbol3 = Symbol.for('id');
    const symbol4 = Symbol.for('id');
    console.log(symbol3 === symbol4);       // true


// 5. Dynamic typing: dynamically typed language
    // 타입을 정해놓고 만드는 것이 아니라 값에 따라, Runtime 에 따라 타입이 변경될 수 있다.
    let text = 'hello';
    console.log(text.charAt(0));    //h
    console.log(`value: ${text}, type: ${typeof text}`);        // string 이 된다 

    text = 1;       // 값을 바꾸게 되면 값에 따라 
    console.log(`value: ${text}, type: ${typeof text}`);        // number 이 된다 

    text = '7' + '5';       // 문자열 7 + 문자열 5 로 인식하게 되고 
    console.log(`value: ${text}, type: ${typeof text}`);        // 75, string 이 된다 

    text = '8' / '2';
    console.log(`value: ${text}, type: ${typeof text}`);        // 4 , number 이 된다 
    // console.log(textAt(0));  오류가 난다 number 이기 때문에 

        // 값이 바뀔 수 있기 때문에 변수 이름만 보고 string 이라고 생각하여 오류가 나거나 한다
        // 컴퓨터 프로그래밍 언어에서는 indexing (순서) 할 때 '0 부터 시작한다'
        // 'hello' => h = 0번째 0 = 4번째 


    // object, real-life object, data structure
    const ellie = {name: 'ellie', age: 20}; //obj 변경 불가     
    ellie.age = 21;     // 이렇게는 변경 가능 
            // const 이기 때문에 다른 object 로는 할당이 불가능 하다 
            // ellie --(변경불가)-->  ref  -- name --> ellie
            //                             -- age --> 20