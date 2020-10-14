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

