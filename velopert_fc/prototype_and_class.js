// 프로토 타입과 객체 

// 객체 생성자
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

// prototype
    // 객체 생성자로 새로운 객체들을 새로 만들었을 때
    // 그 객체들 끼리 공유할 수 있는 값이나 함수를 만드는 것
    // 객체 안에 넣어서 적는 거랑 Animal.prototype.say 랑 똑같다 



// 상속받기 !
    