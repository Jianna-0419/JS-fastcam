// 객체 리터럴

const a = {};
console.log(a, typeof a);           // {} 'Object'  출력

const b = {
    name: 'Mark',
};
console.log(b, typeof b);           // {name: 'Mark'} 'Object'  출력 

const c = {
    name: 'Jeewon',
    hello1() {
        console.log('hello1', this.name);
    },
    hello2: function() {
        console.log('hello', this.name);
    },
    hello3: () => {
        console.log('hello3', this.name);
    }
};

c.hello1();
c.hello2();
c.hello3();