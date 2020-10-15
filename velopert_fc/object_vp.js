console.log('객체 - velopert 연결 확인!');


// 1. 객체 만들기
    const ironMan = {
        name: '토니 스타크',
        actor: '로버트 다우니 주니어',
        alias: '아이언맨'
    }

    const captainAmerica = {
        name: '스티븐 로저스',
        actor: '크리스 에반스',
        alias: '캡틴 아메리카'
    }



// 2. 객체를 parameter 로 받기 + 객체 비구조화 

    function print(hero) {
        const { alias, name, actor} = hero;     // 어느 것을 빼올지 
        const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다`;
        console.log(text);
    }
        // const { } 로 빼왔으면 사용할 때 그냥 hero.name 이렇게 사용안하고 
        // name 만 써서 사용 가능하다 

    function print2({ alias, name, actor}) {
        const text2 = `${alias}(${name}) 역할은 ${actor}가 맡게 되었다!`;
        console.log(text2);
    }

    print(ironMan);
    print(captainAmerica);
    console.log('-------------------------');

    print2(ironMan);
    print2(captainAmerica);

    const { name } = ironMan;
    console.log(name);          // 이렇게도 가능

    console.clear();



// 3. 객체 안에 함수 넣기 

    const dog = {
        name: '멍멍이',
        age: 2,
        sound: '왈왈왈',
        say() {
            console.log(this.sound);
        }
    };

    dog.say();

    // 일반 함수은  this 를 쓰면 그 함수가 들어있는 객체를 가르키게 되서 사용 가능하다 
    // 화살표 함수는 객체 안에서는 쓸 수 없다, this 가 뭔지 모르기 때문

    const cat = {
        name: '야옹이',
        sound: '미야옹~',
    };

    cat.say = dog.say;      // cat.say 가 없었지만 만들어진다 dog.say 랑 똑같이 
    dog.say();
    cat.say();          // 미야옹 출력!!

    const catSay = cat.say;
    catSay();           // Error! catSay 에 this 가 뭔지 모르기 때문, undefined
    
    // 객체 안에 있는 함수를 밖으로 꺼내게 되면 객체와의 연걸이 끊어져서 this 가 인식 XX

    console.clear();

// Getter and Setter

    // getter    
    const numbers = {
        a: 1,
        b: 2,
        get sum() {
            console.log('sum 함수가 실행됩니다!');
            return this.a + this.b;
        }
    };

    console.log(numbers.sum);       // 조회만 했을 뿐인데도 sum 함수 실행
    numbers.b = 5;
    console.log(numbers.sum);


    // setter
    const doggy = {
        _name: '멍멍!',            // 꼭 언더바일 필요는 없다 

        get name() {
            console.log('_name 을 조회합니다...');
            return this._name;
        },

        set name(value) {           // set 은 무조건 parameter 을 받아와야한다 
            console.log('이릉미 바뀝니다...' + value);
            this._name = value;
        }
    }

    console.log(doggy.name);
    dog.name = '뭉뭉이';
    console.log(dog.name);


    const numbers2 = {
        // 1. 값이 바뀔 때마다 calculate 가 실행되는 함수 
            // 값 업데이트
        // _a : 1,
        // _b : 2,
        // sum: 3,
        // calculate() {
        //     console.log('calculate');
        //     this.sum = this._a + this._b;
        // },

        // get a() {
        //     return this._a;
        // },
        // get b() {
        //     return this._b;
        // },

        // set a(value) {
        //     this._a = value;
        //     this.calculate();       // 값 업데이트
        // },
        // set b(value) {
        //     this._b = value;
        //     this.calculate();
        // }


        // 2. 조회할 때마다 실행되는 함수 
        a: 1,
        b: 2,
        get sum() {
            console.log('sum 실행');
            return this.a + this.b;
        }
    };


    // 1번할 때 사용 
    console.log(numbers2.sum);      // 3
    numbers2.a = 5;
    numbers2.b = 7;
    numbers2.a = 9;                 // 값을 설정할 때마다 calculate 호출 총 3번 
    console.log(numbers2.sum);      // 값을 업데이트하여 쓴다 
                                    // 매번 값을 다시 계산할 필요 없어짐 

    // 2번할 때 사용
    console.log(numbers2.sum);
    console.log(numbers2.sum);      // 그냥 조회만 해도 실행된ㄷㅏ 
                                    // 하지만 이러면 매번 다시 계산을 해야한다 