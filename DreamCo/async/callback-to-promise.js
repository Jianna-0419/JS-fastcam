// Callback Hell example
// 콜백 지옥을 그냥 세상으로 이뿌게 만들어보기 !

class UserStorage { 
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found!'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');

userStorage.loginUser(id, password)     // id 받기 
    .then(userStorage.getRoles)         // resolve(name: 'ellie, role: 'admin')
    .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);        // 에러가 뜨면 콘솔에 뜨기 

    // 1. userStorage 에서 로그인이 성공하면
    // 2. uesr 이 전달이 되고 그 user의 getRoles 를 호출 
    // 3. 1,2 가 성공한다면 최종적으로 받아오는 user 을 이용해서 alert!
    // 4. 문제가 생길 시에 대비해서 catch 를 이용


// Promise 는 쉽게 말해서 
// 무슨 행동을 할때 성공 vs 실패 두가지 상황에 대한 행동을 설정하는 느낌
// 성공하면 then 다음에 무엇을 할지 쓰고
// 실패하면 catch 로 무엇을 할지 쓰고
// 이런 느낌