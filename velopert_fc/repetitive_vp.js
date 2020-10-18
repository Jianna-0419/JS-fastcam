console.log('반복문 velopert 확인!');


// 반복문 ! Repetitive Statement
/*

        시작 --> 조건 -- true --> 구문 실행 --> 다시 조건으로 돌아가기(반복)
                  |
                false
                  |
                  끝 

    반복문은 조건이 true 면 실행했다가 다시 조건을 판결한 후 false 가 나올 때까지 반복하는 것

*/


// for 문
// for (초기값; 조건; 값 변화)
    for (i = 0; i < 10; i+=2) {
        console.log(i);
    }

    // i-- or i++ : 1씩 빼기 or 더하기 
    // i-=2 or i+=2 : 2씩 빼기or 더하기 

    console.clear();

    const names = ['멍멍이', '야옹이', '뭉뭉이'];
    for (let i = 0; i < names.length; i++) {        // i < 3 이니까 0 1 2 번째 아이들 소환
        console.log(names[i]);
    }
    
    console.clear();

// While 문 
// 조건이 언젠가는 false 가 되도록 작성해야한다 ( or 무한 루프)
    let e = 0;      // 초기값은 반복문 밖에 적는다  
    let isFun = false;

    while (e < 10) {
        console.log(e);
        e++;        // 값 변화 조건은 내부에서 적는다 
    }
    console.clear();


    // e = 30 이다 (위에 반복문 때문에)
    while (!isFun) {        // !isFun ===  true
        console.log(e);
        e++;
        if (e === 30) {
            isFun = true;
        }

        // isFun 이 중간에 true 로 바뀌였기 때문에 !isFun = false 
        // 조건이 false 가 되는 것이므로 while 문 정지 !
    }

    console.clear();



// for ... of 
// 대부분 배열을 다룰때 사용
    const numbers = [10, 20, 30, 40, 50];

    for (let number of numbers) {       // number 은 배열 안에 있는 아이들을 가리키게 됨
        console.log(number);
    }   
    // for of 반복문은 for in 반복문과 헷갈린다 

    for (let a = 0; a < numbers.length; a++) {
        console.log(numbers[a]);
    }
    // 위에 두 식은 똑같다 

    console.clear();


// for ... in

    const doggy2 = {
        name: '멍멍이다',
        sound: '멍멍거린다',
        age: 2
    }

    for (let key in doggy2) {
        console.log(`${key} : ${doggy2[key]}`);     // name : 멍멍이다 ... 출력
    }



// 객체를 배열의 형태로 만드는 방법!

    // Object.keys(객체)  =  객체의 key 들을 배열 형태로 만들기  [key, key, key]
    // Object.values(객체)  =  객체의 value 들을 배열로 가져오기 [value, value, value]
    // Object.entries(객체)  = 객체 안의 key : value 들을 한쌍으로 묶어서 배열로 배열에 넣는다


    const doggy = {
        name: '멍멍이',
        sound: '왈와왈',
        age: 2
    }

    console.log(Object.keys(doggy));
    console.log(Object.values(doggy));

    console.log(Object.entries(doggy));         
        // 각각의 key value 들이 배열 형태로 배열에 들어감
        // [Array(2), Array(2), Array(3)]       
        // ['name': '멍멍이'], ['sound' : '왈와왈']     요렇게 

    console.clear();

// break & continue     다른 조건문에서도 쓸 수 있다

    // continue  =  조건이 맞으면 뛰어넘고 다음꺼 !!
    // break  =  조건이 맞으면 멈춰!  다음은 없다!

    for (let j = 0; j < 10; j++) {
        if (j === 2)  continue;          // 실행 블록이 한줄이면 {} 생략가능
        console.log(j);

        if (j === 5) break;             // break 5에서 끝
    }


    console.clear();




/*
    Quiz ~~~~~~ !!!

    function sumOf 라는 함수 만들기 
    parameter 로 배열을 가지고오기 (numbers)
    배열 안에 있는 모든 값들의 합을 리턴하는 함수
*/

    function sumOf(numbers) {
        let sum = 0;
        for (let i = 0; i <numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    const result = sumOf([1,2,3,4,5]);
    console.log(result);



/*
    Quiz!!

    3 보다 큰 숫자들로만 이루어진 배열 리턴
*/

console.clear();

    function biggerThanThree(numbers) {
        const array = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 3) {
                array.push(numbers[i]);
            }
        }
        return array;           // 함수 제일 마지막에는 반드시 리턴을 시켜줘야한다 
    }

    const items = [1, 2, 3, 4, 5, 6, 7];
    console.log(biggerThanThree(items));