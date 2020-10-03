'use strict';
// object-oriented programing  객체지향 언어 
// class: template
// object: instance of a class

// JavaScript classes
//    - introduced in ES6
//    - syntactical sugar over prototype-based inheritance


// 1. Class declarations
    class Person {
        // constructor 생성자를 이용해 필요한 데이터 전달받는다 
        constructor(name, age) {
            // fields
            this.name = name;
            this.age = age;
        }

        // method
        speak() {
            console.log(`${this.name} hello!`);
        }
    }

    const ellie = new Person('ellie', 20);
    console.log(ellie.name);
    console.log(ellie.age);
    ellie.speak();


// 2. Getter and setters
    // 다른 사람이 값을 잘못 입력했을 때(잘못입력) 방어적인 자세로 만들 수 있도록 하는 것
    // get -> 값을 리턴, set -> 값을 설정
    class User {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            // if (value < 0) {
            //     throw Error('age can not be negative');
            // }
            this._age = value < 0 ? 0 : value;      // 좀더 친절
        }
    }
    const user1 = new User('Steve', 'Job', -1);       // 사람의 나이가 마이너스일 수 없음
    console.log(user1.age);

    // get, set 에 그냥 this.age 를 쓰게 되면 세터를 계속 호출하게 된다 
    // 이걸 방지하기 위해서 this._age 를 쓴다 (정해진거는 아니지만)
    // User 안에는 총 3개의 fields : firstName, lastName, _age



// 3. Fields (public, private)
    //  Too soon!   최근에 추가 
    class Experiment {
        publicField = 2;    // 외부접근 가능
        #privateField = 0;  // 외부접근 불가능 hash 기호 # -> 클래스 외부에서는 볼수도 변경도 안된다 
    }
    const experiment = new Experiment();
    console.log(experiment.publicField);
    console.log(experiment.privateField);       // undefined


// 4. Static properties and methods
    // Too soon too!
    // object, 들어오는 값에 상관없이 공토적으로 클래스에서 쓸 수 있는 거에 쓴다 
    class Article {
        static publisher = 'Dream Coding';
        constructor(articleNumber) {
            this.articleNumber = articleNumber;
        }

        static printPublisher() {
            console.log(Article.publisher);
        }
    }

    const article1 = new Article(1);
    const araticle2 = new Article(2);
    console.log(article1.publisher);    // undefined
        // object 마다 있는 것이 아니라 class 에만 있기 때문에 오류 
    console.log(Article.publisher); 
    Article.printPublisher();
                

    // class 안에 있는 fields 와 methods 들은 새로운 오브젝트를 만들 때마다
    // 그대로 복제되어서 값만 지정한 값으로 변경되는데
    // 이런 object 와 상관없이 클래스가 가지고 있는 고유한 값과 
    // 이런 데이터들의 상관없이 동일하게 반복적으로 사용되어지는 methods 가 있을 수 있다
    // 그런 것들을 static 이라는 키워드를 붙이면 클래스 자체에 연결되어 있다


// 5. Inheritance 상속
    // a way for one class to extend another class.
    class Shape {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        }

        draw() {
            console.log(`drawing ${this.color} color!`);
        }

        getArea() {
            return this.width * this.height;
        }
    }

    // extends : 확장 연장
    class Rectangle extends Shape {}    // Shape 을 상속, shape methods 가 Rectangle 에 포함됨
    class Triangle extends Shape {
        draw() {
            super.draw();       // 부모의 method 가져오기
            console.log('📒');
        }
        getArea() {
            return this.width * this.height / 2;
        }

        toString() {
            return `Triangle: color: ${this.color}`;
        }
    }   // 필요한 method 만 다시 써서 덮어쓰기 가능 
        // 덮어쓰기 하기 전은 다시 불러올 수 없다 -> 불러오고 싶으면 super.method 하면됨

    const rectangle = new Rectangle(20, 20, 'blue');
    rectangle.draw();
    console.log(rectangle.getArea());

    const triangle = new Triangle(20, 20, 'red');
    triangle.draw();
    console.log(triangle.getArea());


// 6. Class checking: instanceof
    // 왼쪽에 있는 애가 오른쪽의 instance 인지 아닌지 true of false
    console.log(rectangle instanceof Rectangle);
    console.log(triangle instanceof Rectangle);
    console.log(triangle instanceof Triangle);
    console.log(triangle instanceof Shape);
    console.log(triangle instanceof Object);    // 모든 objects & classes 는 모두 Object 를 상속한 것


// Fun quiz time~~
// function calculate(command, a, b) 
// command:: add, substract, divide, multiply, remainder

// command 가 달라질때마다 값이 다르게 나오게 
    function calculate(command, a, b) {
        switch (command) {
            case 'add': {
                return a + b;
            }
            case 'substract': {
                return a - b;
            }
            case 'divide': {
                return a / b;
            }
            case 'multiply': {
                return a * b;
            }
            case 'remainder': {
                return a % b;
            }
            default:
                throw Error('unknown command');
        }
    }
    console.log(calculate('substract', 2, 3));
    console.log(calculate());