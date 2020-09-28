// prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
        // this.hello = function() {
        //     console.log(' hello', this.name, this.age);
        // }
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age);
}

const p = new Person('Mark', 37);

p.hello();                  // hello Mark 37  이라고 출력된다 


// 우리가 설정은 하지 않았는데도 출력이 되는 애들이 있다. 
console.log(p.toString());                      // [object object] 출력 
console.log(Person.prototype);                  // Person {}
console.log(Person.prototype.toString);         // [Function: toStringg]
console.log(Person.prototype.constructor);      // [Function: Person]
console.log(Person.hello);                      // undefined -> 객체로 생성이 되어야지 
                                                    // hello 함수를 사용할 수 있다
console.log(Person.prototype.hello);            // [Function]

// constructor 은 함수 자체를 의미 
// Function Person() 안에 있는 함수는 객체가 생성이 될 때 사용이 가능해 진다 

console.log(Object.prototype);                  // {}
console.log(Object.prototype.toString);         // [Function: toString]
console.log(Object.prototype.constructor);      // [Function: object]

// instanceof = 어디서부터 나온 인자인지 알려주는 연산자 
// p 라는 애가 Person 에서 나온 instance 이냐? 라고 물어보는 것
console.log(p instanceof Person);               // true
console.log(p instanceof Object);               // true

// prototype 은 자바스트립트에서 가장 중요한 개념 중에 하나 