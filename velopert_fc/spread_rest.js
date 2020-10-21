console.log('spread and rest 연결 확인!');

// spread 와 rest  
    // added in ES6

    // spread ... 
        // 퍼뜨리다, 펼치다 
        // 기존에 만들었던 객체를 사용해서 새로운 객체를 만들고 싶을 때 사용
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

            console.log(slime === cuteSlime);

            /*
                const cuteSlime = slime;
                cuteSlime.attribute = 'cute';

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

            console.log(spreadNumbers);



    // rest
        // object, array , function parameter 에 사용 가능하다
        // ...rest 에서 rest 를 다른 이름으로 사용 가능 하다
            // ex) ...others
        const { color, ...rest} = purpleCuteSlime;
        console.log(color);
        console.log(rest);      // rest 를 제외한 값들이 Object 로 출력된다