// Object
    // one of the JavaScript's data types.
    // a collection of related data and/or functionality.
    // Nearly all objects in JS are instances of Object
    // object = {key = value};     = KEY 와 value 의 집합체 
    // 변수와 변수가 가지고 있는 값     2 가지로 나누어진다 

    // primitive 타입은 변수 1개당 값 1개만 담을 수 있다 

'use strict';

// 1. Literals and properties
    const obj1 = {};            // 'object literal' syntax / 안에 값 넣기 
    const obj2 = new Object();  // 'object constructor' syntax / 클래스 만들기 

    function print(person) {
        console.log(person.name);
        console.log(person.age);
    }
        // 이렇게 쓰면 인자가 많아질 수록 쓰기 힘들고 묶어서 생각하기도 어렵다 

    const ellie = {name: 'ellie', age: 4};      // 클래스가 없어도 바로 object 생성
    print(ellie);

        // with JavaScript magic (dynamically typed language)
        // can add propertieds later (미친짓)

    ellie.hasJob = true;
    console.log(ellie.hasJob);

    // can delete properties later
    delete ellie.hasJob;
    console.log(ellie.hasJob);          // undefined


// 2. Computed properties = 계산된 properties
    // key should be always string   key 는 항상 'key' 이렇게 써서 받아와야한다 
    // dot으로 접근 & ['key']로 접근 (computed properties)  방법 2가지 

    console.log(ellie.name);
    console.log(ellie['name']);     // object 안에 있는 변수의 이름을 String 형태로 출력
    ellie['hasJob'] = true;
    console.log(ellie.hasJob);

        // dot = 코딩하는 그 순간에 값을 받아오고 싶을 때
        // [''] = 정확히 어떤 key 가 필요한지 모를 때 / 즉 Runtime 에서 결정될 때

    function printValue(obj, key) {
        // console.log(obj.key)              // 어떤 키를 받아오게 될지 모르는 상황
        console.log(obj[key]);               // 이렇게 써야한다 
    }
    printValue(ellie, 'name');
    printValue(ellie, 'age');


// 3. Property value shorthand (Lovely Shorthand)
    const person1 = {name: 'bob', age: 2};
    const person2 = {name: 'steve', age: 3};
    const person3 = {name: 'dave', age: 4};
    const person4 = new Person('ellie', 30);
    console.log(person4);


// 4. Constructor Function
    function Person(name, age) {
        // this = {}; 생략 
        this.name = name;
        this.age = age;
        // return this;
    }

// 5. in operator: property existence check (key in obj)
    console.log('name' in ellie);
    console.log('age' in ellie);
    console.log('random' in ellie);
    console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
    console.clear();
    for (let key in ellie) {
        console.log(key);
    }

    // for (value of iterable)
    const array = [1, 2, 4, 5];
    for (let value of array) {
        console.log(value);
    }

// 7. Fun Cloning  (object 복사하기)
// Object.assign(dest, [obj1, obj2, ogj3...])
    const user = {name: 'ellie', age: '20'};
    const user2 = user;        // user 의 reference(주소) 를 user2도 똑같이 복사해서 갖게 됨
    user2.name = 'coder';
    console.log(user.name);
                                // user2 에서 name 값을 바꾸면 user 값도 바뀐다 
                                // 하나의 ref 를 공유하는 느낌!

    // old way
    const user3 = {};
    for (let key in user) {
        user3[key] = user[key];
    }
    console.clear();
    console.log(user3);
        // user 안에 있는 키들을 빙글빙글 돌리게 된다 
        // 1번째 키 = name 2번째 키 = age
        // 1번째 키를 돌릴 때, 
        // user3 에 1번째 키를 만들건데 그 값은 user 의 1번째 키의 값을 넣는 것이다 (ellie)
        // 2번째 키를 돌릴 때,
        // user3 의 2번째 키를 만들고 그 값은 user 의 2번째 키(age) 의 값(20) 을 넣는다 


    // Object.assign
    const user4 = Object.assign({}, user);
    console.log(user4);

    // another example
    const fruit1 = {color: 'red'};
    const fruit2 = {color: 'blue', size: 'big'};
    const mixed = Object.assign({}, fruit1, fruit2);
    console.log(mixed.color)
    console.log(mixed.size);
        // blue & big 출력 
        // 뒤에 나오는 source 일수록 앞이랑 같은 property 가 있다면 덮어쓰게된다
        // 뒤의 값으로 덮어씌워진다  

