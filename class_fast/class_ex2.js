// constructor
    // 객체가 생성될 때 실행되는 것

class A {}

console.log(new A());

class B {
    constructor() {
        console.log('constructor');
    }       // 생성될 때 실행
}
console.log(new B());

class C {
    constructor(name, age) {
        console.log('constructor 2', name, age);
    }
}

console.log(new C('Jeewon', 21));   // constructor 2 Jeewon 21
console.log(new C());       // 인자가 없으면 constructor 2 undefined undefined