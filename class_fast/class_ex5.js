// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a);         // Mark!!! 출력 
console.log(a.name);    // Mark!!!@@@ 출력,  get 의 결과 
console.log(a._name);   // Mark!!! 출력 

// 내부에서만 쓸 때는 언더바를 쓰는 일이 많고 (문법적 강제 x)
// get 과 set 은 외부에서 접근할 수 있는 접근방법
// 내부적으로는 바뀌지 않지만 get, set 을 이용해서 바뀔 수 있게 하는 것


// readonly

class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}           // set 없이 

const b = new B();
console.log(b);
b.name = 'Mark';
console.log(b);     // {_name: 'no name'} 출력 
        // set 함수가 없기 때문에 get 이 동작을 하지 않는다 