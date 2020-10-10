'use strict';

// JavaScript is synchronous   동시 발생하는 
// Execute the code block by order after hoisting.
// 동기 : 바로 출력 , 비동기 : 기다렸다가 출력 되는 느낌
// hoisting: var, function declaration  => 선언들을 맨 위로 !!

    // 어느 것이 먼저 실행될지 모를 수도 있다 
    console.log('1');           // 그냥 바로 실행 , 동기
    setTimeout(() => {
        console.log('2');       // 1초를 지난 뒤에 실행, 비동기 
    }, 1000); 
    console.log('3');           // 그냥 바로 출력 , 동기 
    // 순서는 1 2 3 이지만 실제로는 1 3 2 순으로 출력이 된다 
    

// Synchronous callback
    function printImmediately(print) {
        print();
    }       // 함수의 선언은 hoisting 이 된다 

    printImmediately(() => console.log('hello'));   // 동기 


// Asynchronous callback
    function printWithDelay(print, timeout) {
        setTimeout(print, timeout);
    }
    printWithDelay(() => console.log('async callback'), 2000);  // 비동기 

 
// 콜백 지옥  => 콜백으로 대부분이 이뤄져 있는 코드들, 함수 안에서 다른 함수 부르고 부르고 부르고...


// Callback Hell example
    class UserStorage { 
        loginUser(id, password, onSuccess, onError) {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    onSuccess(id);
                } else {
                    onError(new Error('not found'));
                }
            }, 2000);
        }

        getRoles(user, onSuccess, onError) {
            setTimeout(() => {
                if (user === 'ellie') {
                    onSuccess({name: 'ellie', role: 'admin'});
                } else {
                    onError(new Error('no access'));
                }
            }, 1000);
        }
    }
    // 1. id, password 받기 
    // 2. 서버에게 보내 로그인
    // 3. Roles 요청해서 받기
    // 4. 사용자의 Object 를 출력 

    const userStorage = new UserStorage();
    const id = prompt('Enter your id');
    const password = prompt('Enter your password');
    userStorage.loginUser(
        id, 
        password, 
        user =>  {
            userStorage.getRoles(
                user, 
                userWithRole => {
                    alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
                }, 
                error => {
                    console.log(error);
                })
        }, 
        error => {
            console.log(error)
        }
    );

    // 콜백 체인의 문제점!
    // 콜백 안에서 콜백 부르고 부르고 부르고 부르기 = 콜백 지옥
    // 1. 가독성이 떨어진다 
    // 2. Business 로직을 한번에 이해하기 어렵다 
    // 3. 디버깅도 어렵다, 문제 분석 어려움 (어디가 어떻게 되는건지 찾기 어렵다)


    // 효율적인 코딩 => Promise 와 Async 를 사용!! 