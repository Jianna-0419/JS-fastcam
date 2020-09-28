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

// var (don't ever use this !!)
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


// 3. Constants     될 수 있으면 많이 사용 
// favor immutable data type always for a few reasons:  값을 선언함과 동시에 변경 불가
        // mutable : 변경가능한 immutable : 변경 불가능한
//   - security 보안상 
//   - thread safety    
//   - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, bollean, null, undefined, symbol 
// object, box container
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
const canRead = ture;
const test = 3 < 1;  // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;     // null 로 값이 할당이 된 것 
console.log(`value: ${nothing}, type: ${nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);