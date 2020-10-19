// 프로토 타입과 객체 

// 객체 생성자

// class 생기기 전 !
    function Animal(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    Animal.prototype.say = function() {
        console.log(this.sound);
    }   // 이렇게 하는거는 

    /*
        function say() {
            console.log(this.sound);
        }
        dog.say = say;
        cat.say = say;

        이렇게 쓰는거랑 똑같다 
    */

    function Dog(name, sound) {
        Animal.call(this, '개', name, sound);
    }

    function Cat(name, sound) {
        Animal.call(this, '고양이', name, sound);
    }

    Dog.prototype = Animal.prototype;
    Cat.prototype = Animal.prototype;

    const dog = new Animal('개', '벨', '멍멍');
    const cat = new Animal('고양이', '나비', '야옹');

    dog.say();
    cat.say();

// prototype  상속 느낌
    // 객체 생성자로 새로운 객체들을 새로 만들었을 때
    // 그 객체들 끼리 공유할 수 있는 값이나 함수를 만드는 것
    // 객체 안에 넣어서 적는 거랑 Animal.prototype.say 랑 똑같다 

    console.log('---------------');

// 클래스 
    // constructor : 생성자 라는 의미

        class Animal2 {
            constructor(type, name, sound) {
                this.type = type;
                this.name = name;
                this.sound = sound;
            }
            say() {
                console.log(this.sound);
            }
                // 클래스 내부에 함수는 prototype 으로 자동으로 등록된다
        }

        console.log(Animal2.prototype.say);     // say 함수 출력

    // extends
        // 상속받기

        class Dog2 extends Animal2 {
            // Animal2 에 있는 설정들을 가지고 있게됨
            // constructor 만 써주면 된다 
            constructor(name, sound) {
                super('개', name, sound);
            }
        }
    
        class Cat2 extends Animal2 {
            constructor(name, sound) {
                super('고양이', name, sound);
            }
        }

        const dog2 = new Dog2('멍멍이', '왈왈');
        const cat2 = new Cat2('고양이', '미야옹');

        dog2.say();
        cat2.say();