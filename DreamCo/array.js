'use strict';

// Array ~~ 자료구조

// 1. Declaration
    const arr1 = new Array();
    const arr2 = [1, 2];        // 더 잘 쓰이는 방법, 길이가 2개 (index가 0, 1)

// 2. Index position
    // Index는 0에서부터 시작된다 
    const fruits = ['🍎','🥑'];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);     // 🍎 출력 
                                //배열은 index 에 해당하는 value 를 받아올 수 있다 
    console.log(fruits[1]);     // 🥑 출력 
    console.log(fruits[2]);     // undefined 안나온다 
    console.log(fruits[fruits.length - 1]);     // 🥑 출력 
        // 배열의 마지막 꺼 = 배열의 length - 1 하면 된다 -> 마지막 인덱스 가져오기

    console.log('-------------------');


// 3. Looping over an array
    // print all fruits
    // a. for 
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

    // b. for of
        for (let fruit of fruits) {
            console.log(fruit);
        }

    // c. forEach
    // callbackfn: (value: t, index: number, array: t[]) -> 이렇게 3가지가 있다 
        console.log('------c of 3------');
        fruits.forEach((fruit) => console.log(fruit));
            // 보통은 array 는 가져오지 않는다 
            // 익명 함수는 Arrow 함수 쓸 수 있다, 한 줄이면 {} 도 생략 

// 4. Addition, deletion, copy
    // push: add an item to the end
    fruits.push('🍌', '🍈');
    console.log(fruits);            // 바나나 메론 추가 -> 총 4개의 과일이 출력 

    // pop: remove an item from the end 
    fruits.pop();
    console.log(fruits);            // 멜론이 빠진 3개의 과일이 나온다 
    const poped = fruits.pop();     // pop 된 아이들을 불러올 수도 있다 


    // unshift: add an item to the beginning
    fruits.unshift('🍓', '🍍');
    console.log(fruits);

    // shift: remove an item from the beginning
    fruits.shift();
    fruits.shift();
    console.log(fruits);

    // Note !!! shift, unshift are slower than pop, push 
            // 뒤에서 접근 pop push >>> 속도 >>> 앞에서 접근 shif unshift
                // 앞에서 추가하거나 빼는 것은 뒤에 기존에 있는 것들을 먼저 옮겨야하기 때문

    // splice: remove an item by index position
            // #.splice(from index, how many)
            // 몇개 지울건지 쓰지 않으면 우리가 지정한 index 부터 다 지운다 
            // 지운 자리에 추가도 가능
    fruits.push('🍑', '🍆', '🥜');
    console.log(fruits);
    fruits.splice(1, 1);
    console.log(fruits);
    fruits.splice(1, 1, '🥝', '🍒');    // 이렇게 지운 자리에 추가도 할 수 있다 
    console.log(fruits);
    fruits.splice(5, 1);
    console.log(fruits);


    // concat : conbine two arrays
    const fruits2 = ['🍕', '🍔'];
    const newFruits = fruits.concat(fruits2);  // 두가지 배열을 합칠 수 있다, 뒤에 붙는다
    console.log(newFruits);



// 5. Searching
    // indexOf : find the index  ->  number / -1 (없을때)
    // includes : 배열에 포함되어 있는지  ->  true/false
    console.clear();
    console.log(fruits);
    
    // indexOf
    console.log(fruits.indexOf('🍎'));      // 0(번째) 출력
    console.log(fruits.indexOf('🥗'));      // -1 출력 -> 배열에 없기 때문

    // includes
    console.log(fruits.includes('🥝'));     // true
    console.log(fruits.includes('🥙'));     // false

    // lastIndexOf
    console.clear();
    fruits.push('🍎');                      // 같은 아이템이 두개라면?
    console.log(fruits);    
    console.log(fruits.indexOf('🍎'));      // 0 출력 -> 첫번째 값 출력
    console.log(fruits.lastIndexOf('🍎'));  // 5 출력 -> 마지막 값 출력

    console.log(poped);

/*
    요약

    배열 선언 
        => 1. new Array();  /  2. ['1', '2', '3']

    index : 0부터 시작 
        - .length : 배열 길이
        - [#] : #번째 배열은? 
        - .length - 1 : 마지막 배열

    Loof 방법 3가지
        - 1. for
        - 2. for of
        - 3. forEach

    배열 추가/빼기
        - push : 뒤에 추가 
        - pop : 뒤에서 빼기
        - unshift : 앞에서 추가
        - shift : 앞에서 빼기 
        
        - splice(from, how many, 추가 가능 ) 
                : 어디서부터 몇개 뺄지 + 그 자리에 추가 

        => 속도 : push, pop >>>>>> unshift/shift

    배열 합치기 : concat
    
    배열 index 찾기 : indexOf('')

    배열 있나 없나 : includes('')

    ctrl + array 눌러서 Array 부분 읽어보기 !
*/