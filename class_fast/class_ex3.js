// 멤버 변수 

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Jeewon', 21));       // A {name: 'Jeewon', age: 21} 출력

// class field 는 런타임 확인
class B {
    name;           // undefined 여야한다 
    age;            // this.name 이랑 this.age 가 된다 
}

console.log(new B());   // 오류 
    // 바로 field 에 직접 써주는 방법은 어떤 런타임에서는 지원이 안된다 
    // 런타임에 항상 주의!! 지원하는지 체크!

class C {
    name = 'no name';
    age = 0;
        // 초기값이긴 하지만 constructor 로 새로 할당이 된다 

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new C('Belle', 10));