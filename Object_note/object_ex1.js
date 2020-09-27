// 생성자 함수 

function A() {}

// new A 를 통해서 객체가 새로 만들어 졌는데 a 라는 변수에 할당된다 
const a = new A();
console.log(a, typeof a);
console.log(A());               // return 값이 없기 때문에 undefiend 라고 뜬다 


// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

// 인자에 아무것도 넣지 않으면 name, age 는 undefined가 됨

const b = new B();                              // undefined undefined
const c = new B('Mark', 37);                    // Mark 37
console.log(B());                               // undefined undefined
                                                // undefined 라고 3번 찍힌다 