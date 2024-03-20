class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
         console.log(`username: ${this.username}`);
    }

    static createId() {
        return `1234`
    }
}

const userinfo = new User("arbaz khan")
// console.log(userinfo.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const userinfomtion = new Teacher("khan sahab", "sahab@gamil.com")
console.log(userinfomtion.createId())