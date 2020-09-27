// new Function('매개변수1', '매개2', '매개3', ... , 함수의 바디 );

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3));