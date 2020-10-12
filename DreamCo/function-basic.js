// Don't give up
// 포기하지 말자 💥

console.log('function basic 연결!!');

'use strict';

// 함수 선언
    function doSomething(add) {
        console.log(add);
        const result = add(2, 3);
        console.log(result);
    }
    // 선언만 하면 아무것도 출력이 되지 않는다 
    // doSomething 은 기능을 하는 함수 

    function add(a, b) {
        const sum = a + b;
        return sum;     // 계산한 값을 전달, 전달을 안하면 undefined 결과 값이 된다 
    }
    // add 는 어떤 특정한 값을 리턴하는 함수 

// 함수 호출
    // doSomething();                   // 그냥 doSomething 함수 실행 , 인자 없이 
    // const result = add(1, 2);       // 전달된 값을 변수에 할당 가능
    // console.log(result);

    // doSomething(add);       // 인자로 add 함수 전달

// 인자로 함수 호출할 때 차이점
    // 인자로 함수를 전달할 때는 함수의 이름만 전달해야한다 
    // doSomething(add);       // 함수의 인자로 함수를 전달!! 이렇게 해야함

    // doSomething(add());     // add 함수가 먼저 실행이 된 다음
                            // add 함수의 리턴값이 doSomething 함수의 인자로 들어가고 
                            // 결국 NaN 이 리턴된다 (add() 의 리턴은 NaN, 인자를 주지 않아서)
    
    // doSomething(add(1, 2)); // 그냥 add(1, 2) 의 값이 doSomething 의 인자값으로 들어가는 것

// New 함수 호출
    //doSomething(add);

    const addFun = add;         // 함수 자체를 전달 
    console.log(addFun);        // 그래서 함수 자체가 출력이 된다 
    addFun(3, 6);               // 이렇게 쓸 수 있다 
                                

/*
    총 정리

    함수를 선언만 하면 아무것도 작동이 안된다
    함수를 쓰기 위해서는 함수를 호출 해줘야함
    함수를 호출할 때는 add() 처럼 () 를 꼭 써줘야한다 

    함수의 인자로 함수를 넣을 수가 있다 (인자로 함수의 이름 자체를 전달)
    어떤 변수에도 함수 자체를 할당할 수가 있다 (이름만 전달하면)
 */