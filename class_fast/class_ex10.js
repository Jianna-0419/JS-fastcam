// static 상속

class Parent {
    static age = 37;
}

class Child extends Parent {}

console.log(Parent.age, Child.age);
    // static 변수도 상속이 잘 된다 

    // static은  new 로 새로 object 를 만들때는 상속 x
    // 하지만 extendds 로 진짜 상속할때는 받는다 