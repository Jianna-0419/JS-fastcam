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
                                //배열은 적은 index 에 해당하는 value 를 받아올 수 있다 
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

    // unshift: add an item to the beginning
    fruits.unshift('🍓', '🍍');
    console.log(fruits);

    // shift: remove an item from the beginning
    fruits.shift();
    fruits.shift();
    console.log(fruits);

    // Note !!! shift, unshift are slower than pop, push 
    // 뒤에서 접근 pop push >>> 속도 >>> 앞에서 접근 shif unshift
        // 뒤에서 뺄때는 앞에 기존에 있던 애들은 움직이지 않기 때문에 빠르다 
        // 하지만 앞에서 새로운 데이터를 더하려면
        // 1. 뒤에서부터 하나씩 뒤로 옮기고
        // 2. 그렇게 만든 앞 빈 공간에 새로운 데이터를 넣는다 
        // 반대로 앞에서 빼려면 
        // 1. 앞에 있는 데이터 먼저 빼고
        // 2. 뒤에 있는 애들을 순서대로 하나씩 앞으로 옮겨야한다 