// callback-to-promise 에서 만든 코드들을
// async 와 await, API 들을 이용해서 다시 만들어 보기 


// 1. userStorage.loginUser 값을 받고 
// 2. 전달받은 값 + getRoles 값을 받아서 
// 3. 알림참으로 받기 




/*
    class UserStorage {
  // 이거 추가함
  async getUserWithRole(user, password) {
    const user = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}
// 그리고 쓸때는
// promise chaining -> ✨ async/await ✨
userStorage
  .getUserWithRole() 
  .catch(console.log)
  .then(console.log);
*/








