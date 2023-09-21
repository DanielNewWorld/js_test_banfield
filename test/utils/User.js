class User {
   constructor(login, pass) {
        this.login = login;
        this.pass = pass;
    }

    getLogin() {
        return this.login;
    }

    setLogin(login) {
        this.login = login;
    }

    getPass() {
        return this.pass;
    }

    setPass(pass) {
        this.pass = pass;
    }
}

module.exports = User;