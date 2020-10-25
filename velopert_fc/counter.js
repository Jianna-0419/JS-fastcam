// DOM 
// 각 태그에 대한 정보를 가지고 있는 객체

    const number = document.getElementById('number');
    const increase = document.getElementById('increase');
    const decrease = document.getElementById('decrease');
 
    console.log(number);
            // 태그 전체가 출력 
    console.log(number.innerText);
            //  태그 안에 있는 내용물만 출력
    console.log(increase.offsetTop);
            // Top 위치 값을 출력 
    console.log(decrease.id);
            // 해당 DOM 의 아이디 출력 