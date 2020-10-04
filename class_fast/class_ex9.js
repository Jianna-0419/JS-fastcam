// super

class Parent {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age) {
        super(name);    // Parent 에 있는 constructor 먼저 호출 후 실행
        this.age = age;
    }

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('Mark');
const c = new Child('Jeewon', 21);
console.log(p, c);

c.hello();