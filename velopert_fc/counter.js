// DOM  = document
// 각 태그에 대한 정보를 가지고 있는 객체

    const number = document.getElementById('number');
    const increase = document.getElementById('increase');
    const decrease = document.getElementById('decrease');

    // 가끔 ID 가 설정 안되어 있을 경우  -> querySelector 을 사용 
        const buttons = document.querySelectorAll('button');
                // 태그로 찾기, 해당 태그들 다 불러옴
        console.log(buttons);       // 태그들이 배열로 출력 
        const [increases2, decrease1] = buttons;
                // 배열의 속성을 이용
                
 
    console.log(number);
            // 태그 전체가 출력 
    console.log(number.innerText);
            //  태그 안에 있는 내용물만 출력
    console.log(increase.offsetTop);
            // Top 위치 값을 출력 
    console.log(decrease.id);
            // 해당 DOM 의 아이디 출력 


    // 버튼을 클릭 시 나오는 이벤트 설정
        // 대부분 on____ 으로 설정을 한다 

        increase.onclick = () => {
            const current = parseInt(number.innerText, 10);
                    // 안에 텍스트를 숫자로 바꾸고 -> 10의 진수로 읽기 
            number.innerText = current + 1;
        }
        // parseInt  =  문자를 숫자로 바꿔주는 아이 


        decrease.onclick = () => {
            const current = parseInt(number.innerText, 10);
            number.innerText = current - 1;
        }