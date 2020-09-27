global.a = 0;

{
    const a = 1;

    const test = new Function('return a');

    console.log(test());
}
// test 는 global 전역속성인 a 를 발견하고 그 a 값을 쓰게 된다 

{
    const a = 2;

    const test = function() {
        return a;
    }

    console.log(test());
}
// 하지만 이렇게 익명 함수를 할당해서 만들게 되면 블록 안에 있는 a 를 가져온다 