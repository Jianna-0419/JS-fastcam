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

// push  =  배열 맨 뒤에 추가 ,   배열도 추가 가능
    objects.push({
        name: '뭉뭉이'
    });


// length  = 배열의 길이 (안에 몇개가 들어있는지)
   console.log(objects.length);       // 3