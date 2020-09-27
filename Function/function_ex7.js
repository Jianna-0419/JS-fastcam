// 생성자 함수를 이용하여 새로운 객체(obj)를 만들어 내는 방법

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}
// this 의 용도는 객체가 새로 만들어졌을 때 그 객체를 가리키는 용도 

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('Anna', 26);

console.log (a, a.name, a.age);

//  arrow 함수는 함수 안에 this 가 생기지 않는다 -> 새로운 객체를 만들 수가 없다

const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}

const c = new Cat('냥', 1);
// Cat is not a constructor 이라고 오류가 뜬다 