// 함수를 안에서 함수를 만들어서 리턴

function plus(base) {
    return function(num) {
        return base + num;
    }
}

const plus5 = plus(5);          // 5라는 값이 base 로 들어간다 
// plust5(10);                    여기서 10은 num 으로 들어간다 

console.log(plus5(10));

/*
    plus5 = 5 + num 이 되는 거고
    plus5(10) 은 매개변수가 10이 들어가는 거니까 
    결국 5 + 10 이 되서 15라는 값이 나오는 거다 
*/

const plus7 = plus(7);
console.log(plus7(8));
        // 이렇게 하면 7 + 8 로 15가 나온다 