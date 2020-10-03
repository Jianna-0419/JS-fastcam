// prototype 상속

function Person() {}

Person.prototype.hello = function() {
    console.log('hello');
}   
    // 부모의 객체를 자식의 객체에 활용하는 방법

function Korean(region) {
    this.region = region;
    this.where = function () {
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);
    // 셋다 true 가 나온다 

