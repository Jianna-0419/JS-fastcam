// Array !! 배열 

console.log('array 벨로퍼트 연결 확인!');


    // 대괄호 [] 를 사용합니다!
    // 항상 0부터 시작!

    const array = ['Belle', 2, 3, {}, 4];      // 배열 안에 아무거나 넣을 수 있음


    // array[몇번째] 인지 적으면 해당 배열이 나온다 
    console.log(array[1]);              // 2  


    // 객체로 이루어진 배열 
    const objects = [
        {name: '멍멍이'},
        {name: '야옹이'}
    ];



// 배열의 내장함수들 

    // push  =  배열 맨 뒤에 추가 ,   배열도 추가 가능
        objects.push({
            name: '뭉뭉이'
        });


    // length  = 배열의 길이 (안에 몇개가 들어있는지)
        console.log(objects.length);       // 3


        console.clear();



    // forEach  =  배열 안의 원소들을 일괄적으로 작업하고 싶을 때 사용 
        // forEach(함수 작성)
        const superheroes = [
            '아이언맨',
            '캠틴 아메리카',
            '토르',
            '닥터 스트레인지'
        ]

        for (let i = 0; i < superheroes.length; i++) {
            console.log(superheroes[i]);
        }

        console.log('------------------');

        superheroes.forEach((hero) => {
            console.log(hero);
        });
                // 이렇게 간단하게 만들 수 있다


    // map  =  배열 안의 모든 원소를 변환할 때 사용

        const array2 = [1, 2, 3, 4, 5, 6, 7, 8];


        // const squared = [];
        // for (let i = 0; i < array2.length; i++) {
        //     squared.push(array2[i] * array2[i]);
        // }

        const square = n => n * n;
        const squared = array2.map(square);     // 이렇게 함수를 넣어서 하면 간단!
                                                // 함수를 아예 저 () 안에 넣어도 된다 

        console.log(squared);


    // map => 객체로 이루어진 배열일 때
        const items = [
            {
                id: 1,
                text: 'hello'
            },
            {
                id: 2,
                text: 'bye'
            }
        ];

        const texts = items.map(item => item.text);
        console.log(texts);
            // text 들만 새로운 배열에 들어가게 하는 것


    // idexOf  
        // 해당 원소의 index 가 몇번인지 알려주는 함수 
        // 일치 하는게 없으면 -1 이 나온다 
            console.log(superheroes.indexOf('토르'));


    // findIndex (함수)
        // 배열이 객체이거나 특정 조건을 확인해야하는 경우 쓴다 
            const todos = [
                {
                    id: 1,
                    text: '자바스크립트 입문',
                    done: true
                },
                {
                    id: 2,
                    text: '함수 배우기',
                    done: true
                },
                {
                    id: 3,
                    text: '객체와 배열 배우기',
                    done: true
                },
                {
                    id: 4,
                    text: '배열 내장 함수 배우기',
                    done: false
                }
            ];

        const index = todos.findIndex(todo => todo.id === 3);
        console.log(index);

    // find  
        // 찾은 그 값(조건)에 해당하는 부분을 그냥 반환
        // 객체 자체를 리턴
            const todo = todos.find(todo => todo.done === false);
            console.log(todo);      // 객체가 반환된다 


    // indexOf, findIndex, find 는 모두 가장 먼저 찾은 아이를 반환한다 


    // filter
        // 특정 조건을 만족하는 원소들을 찾아서 새로운 배열을 만드는 함수
            const tasksNotDone = todos.filter(todo => todo.done === false); 
                // false 일 때의 조건이라면 !todo.done 이렇게 간단하게 쓸 수 있다 

             console.log(tasksNotDone);


    // splice  
        // 특정 항목을 제거할 때 사용 (기존 배열에서 자르는 것)
        // splice 의 결과 값 = 잘라진 애들
        // splice(어디서부터, 몇개를 자를지, '그자리에 추가', ...)
            const numbers = [10, 20, 30, 40];
            const a = numbers.indexOf(30);
            const spliced = numbers.splice(a, 2, '바보');
            console.log(spliced);       // [30, 40]  =>  잘라진 애들이 들어오게 된다
            console.log(numbers);


    // slice
        // 특정 부분을 복사해서 따로 배열을 만드는 느낌
        // 어느 index 에서부터 어느 index 전까지 자를 것인지 쓰기!
        // 기존의 배열에는 변화가 없음
            const numbers2 = [10, 20, 30, 40];
            
            const sliced = numbers2.slice(0, 2);
                // 0 번째 부터 2번째 인덱스 전까지 자르기 
            console.log(sliced);        // [10, 20] 출력
            console.log(numbers2);


    // shift 
        // 맨 앞 원소 빼기 (기존 배열)
        // 여러번 사용하면 여러번 빠진다 
            const numbers3 = [10, 20, 30, 40];

            const value = numbers3.shift();
            console.log(value);         // 10
            console.log(numbers3);      // 20, 30, 40

    
    // pop
        // 맨 뒤에서 원소 빼기 (기존 배열)
            console.log(numbers3.pop());    // 40


    // unshift
        // 맨 앞에 원소 추가 (기존 배열)
            numbers3.unshift(5);
            console.log(numbers3);          // [5, 20, 30]

    
    // concat
        // 여러개의 배열을 하나로 합치는 함수  =>  새로운 배열을 만든다
        // 기존의 배열에 영향 XX

            const array3 = [1, 2, 3];
            const array4 = [4, 5, 6];

            const concated = array3.concat(array4);
            console.log(concated);

        // spread ? 연산자 es6
            // concat 쓰는 거 대신에 사용하는 방법
            // 아직은 몰라도 된다!
            // [...array3, ...array4];   이렇게 씀

        
    // join
        // 배열 안에 있는 값들을 문자열로 함친다 
        // parameter = separator  문자(원소)를 구분해 주는 것 (default = ,)
            const array5 = [1, 2, 3, 4, 5];

            console.log(array5.join('|'));      // 1,2,3,4,5 출력  =>  '1,2,3,4,5' 처럼
            console.log(array5.join(', '));      

    // reduce 함수
        // 주어진 배열 안에 있는 모든 값들을 사용하여 어떤 값을 연산할 때 사용
        // 다양한 곳에 유용하게 사용된다 

        // 1번째 parameter  =  accumulator 과 current를 파라미터로 가져와서 결과를 가져오는 콜백함수
            // accumulator = 누적되는 값
            // current = 현재 원소 값

        // 2번째 parameter =  기본값

        // 원리!
            // 처음 콜백 함수가 호출되면 초기값부터 시작해서 current를 가지고  안에 있는 실행문이 실행되고
            // 그 결과값이 accumulator 로 설정된 다음
            // 다음 current 를 호출해서 다시 콜백함수 실행 ... 모든 원소가 실행된 다음 끝난다

            const numbers4 = [1, 2, 3, 4, 5];

            // 모든 원소의 합 구하기
                const sum = numbers4.reduce(
                    (accumulator, current, index, array) => accumulator + current, 0
                );
                console.log(sum);
                // 설명
                    // accumulator = 누적된 값
                    // 기본값 0 이 처음 accumulator 가 되고 current 는 1이 들어온다
                    // 그래서 0 + 1 의 값인 1이 그 다음 accumulator 가 되고
                    // 다음 값인 2가 current 로 들어가면서 반복된다 


            // 모든 원소 값의 평균을 구하기
                const avg = numbers4.reduce((accumulator, current, index, array) => {
                    if (index === array.length - 1) {
                        return (accumulator + current) / array.length;
                    }
                    return accumulator + current;
                }, 0);

                console.log(avg);       // 3 출력

                // 설명
                    // 일단 위에 sum 처럼 index 가 4가 되기 전까지는 그냥 누적된다
                    // 누적됐다가 index === array.length - 1, 즉 5 - 1  = 4가 되면
                    // 원래처럼 더하는 거 대신 더한 다음에 array.length 로 나눈 값이 리턴 된다!

            // 해당 원소가 몇개 들어있는 지 구하기
                const alphabets = ['a', 'a', 'b', 'c' ,'c', 'd', 'e'];

                const counts = alphabets.reduce((acc, current) => {
                    if (acc[current]) {
                        acc[current] += 1;
                    } else {
                        acc[current] = 1;
                    }
                    return acc;
                }, {});

                console.log(counts);

                // 설명 !
                    // acc[current] = acc['a'] = acc.a 라는 의미 
                    // 일단 초기값 {}, 즉 비어있는 객체가 acc 로 가게 된다
                    // 그리고 첫번째 원소인 'a' 가 current 
                    // 비어 있는 객체에 a 가 있나 검사하게 된다 
                    // 없으므로 값이 1 !
                    // 그 후에 acc 에는 'a' 가들어가게 되고 다음 current 인 'a' 가 시작
                    // acc 에는 'a' 가 있으므로 값이 acc.a = 1 + 1 = 2 가 된다 



/*
    Quiz ~~~

    숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만들어라!
*/

    console.clear();

        function countBiggerThanTen(numbers) {
            let howMany = 0;
            numbers.forEach(n => {
                if (n > 10) {
                    howMany++;
                }
            });
            return howMany;
        }

        const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
        console.log(count);     // 5 가 출력