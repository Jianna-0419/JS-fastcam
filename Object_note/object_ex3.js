// new Object
// 별로 권장 되지 않는다 
// new Object 로 만들어진 변수는 객체로 변한다 ( a -> 객체)

const a = new Object();
console.log(a, typeof a);
                // {} object  가 출력 

const b = new Object(true);
console.log(b, typeof b);
                // [Boolean: true] object 가 출력

const c = new Object({name : 'Mark'});
console.log(c, typeof c);
                // {name: 'Mark'} object 가 출력 
                // literal : 문자 그대로 작성된 객체 

const J = new Object(0);
console.log(J, typeof J);

// a, b, c, J 모두 타입은 object 이다 