// ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // encryptPassword the password
    encryptPassword(){
        return `${this.password}abc`
    }

    // changeUsername
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userInfo = new user("arbaz", "arbaz@gmail.com", "123")
// console.log(userInfo.encryptPassword());
// console.log(userInfo.changeUserName());




// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}
User.prototype.changeUserPassword = function() {
    return `${this.password}567`
}

const userInfomation = new User("arbaz khan", "@gamil.com", "1234");
console.log(userInfomation.changeUserName());
console.log(userInfomation.changeUserPassword());