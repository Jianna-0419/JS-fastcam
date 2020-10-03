// 표준 내장 객체 : Array

const a = new Array('red', 'black', 'white');

console.log(a, typeof a);       // ['red', 'black', 'white'] 'object' 출력      -> 대괄호로 나온다 
console.log(a instanceof Array);        
console.log(a instanceof Object);       // true

const b = ['red', 'green', 'yellow'];
console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b.slice(0, 1));
        // .slice = 0 번째부터 1번째까지 자르는 것
console.log(Array.prototype.slice, Object.prototype.slice);

// 나는 지금 너무나도 졸립다 낮잠을 자고싶기도 하다 