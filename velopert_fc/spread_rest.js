console.log('spread and rest 연결 확인!');

// spread 와 rest  
    // added in ES6

    // spread ... 
        // 퍼뜨리다, 펼치다 
        // 기존에 만들었던 객체를 사용해서 새로운 객체를 만들고 싶을 때 사용
            // 기존에 있던 값들을 다른 애들 안에서 퍼뜨리는 느낌!

        // spread 를 사용한다면 객체들은 다른 객체를 가리키게 된다 
            const slime = {
                name: '슬라임'
            };

            const cuteSlime = {
                ...slime,
                attribute: 'cute'
            };

            const purpleCuteSlime = {
                ...cuteSlime,
                color: 'purple'
            };

            const greenCuteSlime = {
                ...purpleCuteSlime,
                color: 'green'
            }
                // color 값이 덮어쓰기 된다,  수서가 중요

            console.log(slime);
            console.log(cuteSlime);
            console.log(purpleCuteSlime);
            console.log(greenCuteSlime);

            console.log(slime === cuteSlime);       // false

            /*
                const cuteSlime = slime;
                cuteSlime.attribute = 'cute';     이렇게 새로운 key value 추가하기!

                이런식으로 쓰게 되면 slime 에도 모든 값이 들어가게 된다
                -> 모든 객체가 slime 을 가리키고 있기 때문!
            */
        
        // 배열에도 적용 가능
            const animals = ['개', '고양이', '참새'];
            const anotherAnimals = [...animals, '비둘기'];
            // = animals.concat('비둘기') 랑 똑같다

            console.log(animals);
            console.log(anotherAnimals);

            const numbers = [1, 2, 3, 4, 5];
            const spreadNumbers = [...numbers, 1000, ...numbers];

            console.log(spreadNumbers);     // 1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5

        console.log('----------rest---------');

    // rest
        // object, array , function parameter 에 사용 가능하다
        // 따로 적은 값을 뺀 나머지 값들을 object 로 출력..???
        // ...rest 에서 rest 를 다른 이름으로 사용 가능 하다
            // ex) ...others

        const { color, ...rest} = purpleCuteSlime;
        console.log(color);     // purple 출력 
        console.log(rest);      
                // 따로 적은 key 값만 빼고, 나머지 = rest !
                // {name: '슬라임', attribute: 'cute'} 만 출력    (color 제외)

        const {name, ...nothing} = slime;
        console.log(name);          // 슬라임
        console.log(nothing);       // {} 출력 


        //함수 parameter 에서의 rest
            // 인자가 몇개 들어갈 지 모르는 상황!

                /* 
                    function sum(a, b, c, d, e, f, g) {
                        let result = 0;
                        if (a) result += a;
                        if (b) result =+ b;
                        ...

                        return result;
                    }

                    이렇게 쓰면 복잡하고 작성한것에서 1개 이상의 인자가 더 들어가게 되면
                    값이 안더해진다
                */     

        
            // reduce 를 쓰면 편해진다 
                // array.reduce(콜백함수, 기본값); 이렇게
                // ...rest 는 배열로 인자들을 받아오기 때문!

                    function sum(...rest) {
                        return rest.reduce((acc, current) => acc + current, 0);
                    }

                    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));       // 36

                // spread 를 이용 !!!
                    const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    console.log(sum(...numbers3));                  // 45


        // 함수 인자에서의 spread
                function subtract(x, y) {
                    return x - y;
                }

                const numbers2 = [1, 2];
                const result = subtract(...numbers2);

                console.log(result);


    console.log('---------Quiz--------');

// ** 파라미터와 인자의 차이점 
    // parameter  = 함수에서 받아오는 값  => function sum (x, y)
    // 인자 factor = 함수를 사용할 때 넣어주는 값  => sum (1, 2)


/* 
    Quiz !
    함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 가장 큰 값을 알아내라!
*/

    function max(...array) {
        return array.reduce((acc, current) => acc > current ? acc : current , array[0]);
    }

    const result2 = max(1, 2, 3, 4, 10, 5, 6, 7);
    console.log(result2);