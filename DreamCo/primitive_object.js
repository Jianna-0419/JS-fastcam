// 변수 varia = 데이터를 담고 있는 아이 
//변수의 이름은 자유롭게 

// let 을 통해 정의할 수 있다.
// number, string, boolean, null, undefined, symbol = 가장 작은 단위
        // -> 이런 것들을 제외한 모든 아이는 다 object 이다 

let age = 2;
let num = 2;
console.log(age);
console.log(num);

num = 3;
console.log(age);
console.log(num);

// let 변수의 값은 바꿀 수 있다. 값 덮어쓰기 가능 

// Objext 

// object 최소한 1,2가지 등의 다양한 데이터를 묶어놓은 아이
        // 배열 list 함수도 Object 이다

        // object는 크기 때문에 메모리 1개가 감당하기는 어렵다 
            // 그래서 각각의 keywords 들에 메모리를 준다 
            // object 메모리에는 키워드들을 감싸고 있는 주소값만 할당이 된다.
            //    (메모리에는 1개씩만 가능)

let obj = {
    name: 'Jianna',
    age: 21
}
console.log(obj.name);
    // name age 에 해당하는 메모리가 할당이 된다. 
    // 메모리들의 위치를 나타내는 referece 가 이따 (ref)

let obj2 = obj;
console.log(obj2.name);
// obj2 는 obj의 123을 가리키게 된다 ! obj 의 값(123) 을 그대로 복사!

// obj.name = obj2.name    (obj 내용이 수정되면 obj2 도 바뀐다)
obj.name = 'James';
console.log('--------');
console.log(obj.name);
console.log(obj2.name);

//const obj
