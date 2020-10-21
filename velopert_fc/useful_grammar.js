// 알아두면 유용한 자바스크립트 문법!


// 삼항 연산자 
    // condition ? true(실행문1) : false(실행문2) 
    // 가급적 1번씩만 사용하자 !
        // 조건이 true => 실행1 을 실행
        // false 면 => 실행 2 실행
        const array = [1, 2];
        let text = array.length === 0 
            ? '배열이 비어있다' 
            : '배열이 비어있지 않다';
        console.log(text);
            // 이런식으로 쓰자!


    // 여러번 겹쳐서 쓸 수 있다 
    // 하지만 이런식으로는 쓰지 않는게 좋다
        const condition1 = false;
        const condition2 = false;
        
        const value = condition1
            ? '와우'
            : condition2
                ? 'condition1 은 false 이고, condition2 는 true'
                : 'condition1, 2 둘 다 false';
        console.log(value);     // condition1, 2 둘 다 false 출력



// Truthy and Falsy
    // Truthy : true 로 취급
    // Falsy : false 로 취급
        
        function print(person) {
            if (!person) {          // person 의 값이 true 면 false ! (유효한 값이 있으면 true)
                return;
            }
            console.log(person.name);
        }

        const person = {
            name: 'Jojn'
        };

        print(person);
        print();        

    // false 의 반대는 ture !!
        console.log(!undefined);
        console.log(!null);
            // 인자가 전달되지 않을 것을 대비해서 코드를 짜야하는데
            // if (person === undefined || person === null) 이런식으로 매번 코드를 작성하기 어려우니까
            // 그냥 !person 이라고 간단하게 쓸 수 있다
        
    // falsy 한 값들
        // false, undefined, null, 0, '', NaN

    // Truthy 한 값들
        // falsy 한 값들을 제외한 나머지 값들
        // [] 이나 {} 도 truthy 한 값이다 

        const value2 = {a: 4};
        // const truthy = value2 ? true : false;
        const truthy = !!value2;        
                // value2 가 truthy한 값이면 false 로 바꿧다가 truthy 가 아닌 true 로 바꾸기 
        console.log(truthy);
        
    console.log('-----end of 삼항 연산자-----');

// 단축 평가 논리 계산법  Short-circuit evaluation
    true && true    // true
    true && false   // false
    true || false   // true
    false || true   // true
    

    // && 연산자 and
        const dog = {
            name: '멍멍이'
        };

        function getName(animal) {
            /*
                if (animal) {
                    return animal.name;
                }
                return undefined;

                이 코드를 단축시켜보자
            */
            return animal && animal.name;
        }

            const name = getName(dog);
            console.log(name);
            const name2 = getName();
            console.log(name2);     // undefined 가 출력된다 
        
            // animal && animal.name 이 왜 작동이 되는지 알아보자!
                console.log(true && 'hello');       // hello 출력
                console.log(false && 'hello');      // false 출력
                console.log('hello' && 'bye');      // bye 출력
                console.log(null && 'hello');
                console.log(1 && 0);
                
                // 둘다 truthy 한 값이라면 뒤에꺼가 결과 값이 된다 
                // 앞이 true 라면 뒤에 값에 따라 값이 결정 => hello 가 출력
                // 앞이 false 면 뒤에 것을 볼 필요가 없어진다

        const object = null;
        const name3 = object && object.name;        // object 가 null => null 출력
        console.log(name3);

    
    // || 연산자 or
        // 어떤 값이 falsy 하다면 그 값을 어떤 값으로 대체를 해줄 때 유용하다
            const namelessDog = {
                name: '뭉뭉이',
            };

            function getName2(animal) {
                const name = animal && animal.name;
                    // 만약 animal 이 true 면 animal.name 이 결과값이 된다
                /* if (!name) {
                    return '이름이 없는 동물입니다.';
                }
                return name; */

                // 혹은 이렇게 줄여쓸 수 있다
                return name || '이름이 없는 동물입니다.';
            }

            const name4 = getName2(namelessDog);
            console.log(name4);

            // 설명
            // 앞에 값이 false => 뒤에 값 = 결과  (둘다 false여도 뒤에 값 리턴)
                console.log(false || 'hello');
                console.log('' || '앞이 false 여서 뒤에 값이 출력된다');
                console.log('' || null);    // null

            // 앞이 truthy 값이면 뒤에 꺼를 보지도 않고 앞에 꺼가 결과가 된다
                console.log(1 || '여기 안본다');       
                console.log(true || '뒤에꺼 안보고 앞에꺼 리턴@');
                console.log('와아아아~~ 보건교사다' || '도망가자!! (노래임');

    console.clear();


// 함수의 기본 파라미터 parameter
    // parameter 을 전달하지 않았을 때 기본값으로 설정해놓는 파라밑터를 말한다
    // parameter = default 값  => 이렇게 쓸 수 
    // 화살표 함수에서도 적용가능
    
    console.log('----------연산자----------');
        function calculateCircleArea(r = 1) {
                    // const radius = r || 1;          
                    // r 값이 주어지지 않았다면(앞에 값 = falsy) 1 을 쓴다 (뒤에 값)
            return Math.PI * r * r;
        }

        /*
            화살표 함수로 표현

            const calculateeCircleArea = (r = 1) => Math.PI * r * r;
        
        */
        console.log(calculateCircleArea(5));

        console.log(calculateCircleArea());     // 기본값이 없다면 안넣어준다면 NaN 출력



// 조건문 더 스마트하게 쓰기!
    // 좀 더 간결하고 읽기 쉬운 코드가 좋은 코드!!   (짧다고 다 좋은게 아님)

    console.log('----------조건문1----------');
        
        // 값의 존재 여부에 따라 true false 출력되는 코드 예시

            // 그냥 기본으로 쓰기
                function isAnimal(text) {
                    return (
                        text === '고양이' || text === '개' || text === '거북이'
                    );
                }

                console.log(isAnimal('개'));
                console.log(isAnimal('노트북'));
                // 하지만 이렇게 쓰는 것보다 배열로 해서 쓰는게 낫다 (아래 함수처럼)
            

            // 배열로 쓰기  => 간단해짐
                function isAnimal2(text) {
                    const animals = ['고양이', '개', '거북이', '너구리'];
                    return animals.includes(text);
                            // 값이 존재하면 true, 없으면 false
                }

                console.log(isAnimal2('개'));
                console.log(isAnimal2('핸드폰'));


            // 화살표 함수로 작성
                const isAnimal3 = text => ['고양이', '개', '거북이', '너구리'].includes(text);

                console.log(isAnimal3('거북이'));
        

        console.log('----------조건문2----------');
        // 값에 따라서 출력되는 메시지가 다른 코드 예시
        
            // 그냥 if 반복으로 작성
                // 하지만 너무 복잡, 쓸게 많음

                function getSound(animal) {
                    if (animal === '개') return '멍멍!';
                    if (animal === '고양이') return '야옹~';
                    if (animal === '참새') return '짹짹!';
                    if (animal === '비둘기') return '구구 구구';
                    return '... 정체가 모냐?'; 
                }

                console.log(getSound('고양이'));
                console.log(getSound('비둘기'));
                console.log(getSound('인간')); 
    
            
            // switch 이용
                // 여전히 보기 어려움, if 가 나을수도...

                function getSound2(animal) {
                    switch (animal) {
                        case '개': 
                            return '멍멍!';
                        case '고양이': 
                            return '야옹~';
                        case '참새': 
                            return '짹짹!';
                        case '비둘기': 
                            return '구구 구구';
                        default:
                            return '...?';
                    }
                }

                console.log(getSound2('참새'));
                console.log(getSound2('인간'));

            
            // 객체를 활용해서 작성
                // 조건에 따라 다른 값을 변환해야한다면 객체를 활용하면 좋다!

                // 아주 좋은 활용!
                function getSound3(animal) {
                    const sounds = {
                        개: '멍멍!',
                        고양이: '야옹',
                        참새: '짹짹',
                        비둘기: '구구구구구구구'
                    };

                    return sounds[animal] || '...?!?!';
                            // sounds[animal] => sounds 객체 안의 key 들을 조회해서 
                            // 해당되는 value 리턴
                }

            
            // 객체 안의 함수를 넣을 경우
                
                function makeSound(animal) {
                    const tasks = {
                        개: () => {
                            console.log('멍멍멍!');
                        },
                        고양이() {
                            console.log('야옹오옹~');
                        },

                        // 비둘기처럼 쓰기보다는 개나 고양이처럼 쓰는게 낫다
                        비둘기: function() {
                            console.log('구구구구 구');
                        }
                    }

                    const task = tasks[animal];
                    if (!task) {
                        console.log('..누구냐?');
                        return;
                    }
                    task();
                }

                makeSound('개');
                makeSound('고양이');


    console.clear();


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

        const {name5, languages} = deepObject.state.information;
        const { value3 } = deepObject;

        const extracted = {
            name = name5,
            languages,
            value = value5
        };
        console.log(extracted);