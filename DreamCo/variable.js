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


// 3. Constants
// favor immutable data type always for a few reasons:  값을 선언함과 동시에 변경 불가
        // mutable : 변경가능한 immutable : 변경 불가능한
//   - security
//   - thread safety
//   - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
