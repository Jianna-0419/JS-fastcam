// static 변수, 함수 
// 객체가 아니고, 클래스의 변수와 함수
// new 로 만든 object 에 있는 게 아니라 말그대로 class 에 있는 것이다 


class A {
    static age = 37;
    static hello(){
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 37;
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
B.hello();
// new B().hello();    // Error! static 으로 된거기 때문에 object 에는 존재하지 않는다 

class C {
    static name = '이 클래스의 이름은 C 가 아니다 .';
}
console.log(C);