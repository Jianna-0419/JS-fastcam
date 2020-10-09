// JSON
// JavaScript Object Notation
// JSON 안에는 총 2가지 API : parse, stringify, stringify (overloading)

// parse 
// string 값을 변환해서 어떤 값으로 만들때 좀 더 세밀하게 쓸 수 있다

// sgringify
// 어떤 값을 받아와서 string 값으로 만드는 것 


// 1. Object to JSON
    // stringfy(obj)
    let json = JSON.stringify(true);
    console.log(json);

    json = JSON.stringify(['apple', 'banana']);
    console.log(json);      // ["apple", "banana"]  -> 큰 따움표로 나온다, JSON 의 규격

    const rabbit = {
        name: 'tori',
        color: 'white',
        size: null,
        birthDate: new Date(),
        symbol: Symbol('id'),
        jump: () => {
            console.log(`${name} can jump!!`);
        },
    };
    
    json = JSON.stringify(rabbit);
    console.log(json);
    // jump, symbol 은 json 에 포함 X

    json = JSON.stringify(rabbit, ['name', 'color', 'size']);
    console.log(json);

    json = JSON.stringify(rabbit, (key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return key === 'name' ? 'ellie' : value;
    });
    console.log(json);

// 2. JSON to Object
    // parse(json)
