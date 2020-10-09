// JSON
// JavaScript Object Notation
// ECMAScript 3rd 1999
// Object {key: value} 로 되어있다

// 거의 대부분의 언어에서 사용 가능 !!

// JSON 안에는 총 2가지 API : parse, stringify, stringify (overloading)

// parse 
// string 값을 변환해서 어떤 값으로 만들때 좀 더 세밀하게 쓸 수 있다

// sgringify
// 어떤 값을 받아와서 string 값으로 만드는 것 


// 1. Object to JSON   오브젝트를 JSON 파일로 변환 
    // JSON 이라는 Object를 사용하면 간단 !
    // stringfy(obj)    : string 으로 오브젝트로 변환하는 것?!?!
    let json = JSON.stringify(true);
    console.log(json);
    
    // 배열 => JSON
    json = JSON.stringify(['apple', 'banana']);
    console.log(json);      // ["apple", "banana"]  -> 큰 따움표로 나온다, JSON 의 규격 사항

    // Object => JSON
    const rabbit = {
        name: 'tori',
        color: 'white',
        size: null,
        birthDate: new Date(),      // 오늘 날짜 가져옴
        jump: () => {
            console.log(`${name} can jump!!`);
        },
    };
    
    json = JSON.stringify(rabbit);
    console.log(json);
    // jump, symbol 은 출력이 안된다 -> json 에 포함 X

    json = JSON.stringify(rabbit, ['name', 'color']);
    console.log(json);      // 해당하는 property 만 JSON 으로 전달 가능

    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return key === 'name' ? 'ellie' : value;        
            // key 가 name 이면 무조건 'ellie' 라고 설정, 아니면 그냥 original value 사용
    });
    console.log(json); 

console.clear();


// 2. JSON to Object   JSON 을 오브젝트로 변환하는 방법 
    // parse(json)
    json = JSON.stringify(rabbit);
    const obj = JSON.parse(json, (key, value) => {
        console.log(`key: $[key], value: ${value}`);
        return key === 'birthDate' ? new Date(value) : value;
    });
    console.log(obj);
    rabbit.jump();      // rabbit 에는 jump 가 있지만 serialize 할때는 포함이 안되어 있기 때문에
    // obj.jump();         // Error !!  이 점 주의해서 써야한다 
                        // 그래서 다시 JSON 에서 Object 를 만든것에는 jump 가 존재하지 않는다

    console.log(rabbit.birthDate.getDate());
    console.log(obj.birthDate);
    console.log(obj.birthDate.getDate());  

/*
    각각 callback 함수를 사용해서 좀 더 세밀하게 값을 만들 수가 있다 
*/