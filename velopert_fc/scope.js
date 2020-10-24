console.log('scope vp 연결 확인!');
'use strict';

// Scope
    // 변수나 함수의 유효 범위
    // Global , Function, Block  => 세가지의 범위가 있다


    const value = 'value 출력';      // Global 

    function myFunction() {
        console.log('myFunction: ');
        console.log(value);
    }

    function otherFunction() {
        console.log('otherFunction: ');
        const value = 'bye';        // Function ...?
        console.log(value);         // bye 출력

        const anotherValue = 'world';

        function functionInside() {
            console.log('functionInside: ');
            console.log(value);
            console.log(anotherValue);
        }
        functionInside();
    }

    myFunction();
    otherFunction();

    console.log('global scope: ');
    console.log(value);
    // console.log(anotherValue);          // not defined
                                        // 함수 밖이기 때문, 유효 XX


    // var 은 절대 금지!!  => const , let  사용하자 !


// hoisting !
    // 선언들을 끌어 올려서 사용!  => JS 에서는 모든 함수 선언은 위로 끌어올려진다
    // 하지만 hoisting 현상은 되도록이면 피해야한다
    // 코드가 읽기 어려워지기 때문에 / 유지 보수의 어려움 / 원하는 대로 코드가 안될 가능성
    // 선언 후에 아래에서 사용하는 것을 권장!

    exampleFunction();          // 호출됨

    // 뒤에 많은 코드들 ...
    // 호출은 되지만 함수가 어디있는지 찾기 어렵다


    function exampleFunction() {
        console.log('hello world!');
    }

    exampleFunction();

