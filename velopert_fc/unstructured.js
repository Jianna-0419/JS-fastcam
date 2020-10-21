// 비구조화 할당 (구조 분해)
    // 객체의 비구조 할당
    const object2 = { a: 1, b: 2};
    const { a, b } = object2;
    
    console.log(a);     // 1 출력
    console.log(b);     // 2 출력 

    // 함수의 parameter 에도 가능
        // 기본값도 설정 가능
            // const object3 = {c: 1};

            // function print({c, d =2}) {
            //     console.log(c);
            //     console.log(d);
            // }

            // print(object3);


    // 새로운 이름을 지어서 밖으로 꺼낼 수도 있다
        const animal2 = {
            name: '멍멍이',
            type: '개'
        };

        const {name: nickname} = animal2;

        console.log(nickname);
        console.log(animal2);       // animal2 안은 변화가 없다


    console.log('----------비구조화----------');
// 배열의 비구조 할당

    const array2 = [10, 20];
    const [one, two] = array2;

    // 기본값도 할당 가능
    const array3 = [30];
    const [three, four = 40] = array3;

    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);



// 객체 깊숙하게 있는 애들 꺼내기
    const deepObject = {
        state: {
            information: {
                name: 'Jianna',
                languages: ['korean', 'english', 'chinese']
            }
        },

        value: 5
    };

    const { name, languages} = deepObject.state.information;
    const { value } = deepObject;

    const extracted = {
        name,
        languages,
        value
    };
    console.log(extracted);