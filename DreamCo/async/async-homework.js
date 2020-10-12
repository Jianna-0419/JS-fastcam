class UserStorage {
      loginUser(id, password) {
        setTimeout(() => {
          if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'coding')
          ) {
            return id;
          } else {
            throw 'Error 발생';
          }
        }, 2000);
    }

     getRoles(user) {
        setTimeout(() => {
            if (user === 'ellie') {
              return {user: 'ellie', role: 'admin'};
            } else if (user === 'coder') {
              return {user: 'coder', role: 'visitor'};
            } else {
              throw 'error 발생';
            }
        });
    }

    async getUserWithRole(id, password) {
        const nickname = await UserStorage.loginUser;
        const role = UserStorage.getRoles;
        return `Hello ${nickname}, you have a ${role} role!`;
    }
}

const userStorage = new UserStorage;
const id = prompt('Enter your id');
const password = prompt('Enter your password');

userStorage.getUserWithRole(id, password)
  .then(alert);
