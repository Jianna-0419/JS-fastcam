var hello2;
console.log(hello2);

hello1();
// hello2();
hello3();

function hello1() {
    console.log('hello1을 출력');
}
// 선언적 함수를 아래에 만들고 위에서 호출하면?
    // 문제는 없다 

hello2 = function() {
    console.log('hello2');
}
// 오류가 난다. 
// -> var 을 사용했기 때문에 호이스팅 되면서 실제 순서는
// 맨 위에 var hello2;
//         console.log(hello2);
//         hello2();
//    이렇게 되므로 컴퓨터는 hello2 가 함수라고 생각을 못하기 때문에 undefined 나온다
// hello2 is not a function 으로 뜬다 

const hello3 = function() {
    console.log('hello3을 출력');
}
// 이렇게 쓰면 hello3 is not defined 라고 뜬다 = 뭔지를 모른다 
// 선언한 적이 없는 변수라고 생각하게 된다 

