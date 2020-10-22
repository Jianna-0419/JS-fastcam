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
    console.log(anotherValue);          // not defined
                                        // 함수 밖이기 때문, 유효 XX


// var 은 절대 금지!!  => const , let  사용