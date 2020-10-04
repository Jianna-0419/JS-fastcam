// 상속 기본
class Parent {
    name = 'Lee';       // 멤버 변수 
    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}   // 자식이 부모 안의 것들을 가지고 가게 된다 

const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();