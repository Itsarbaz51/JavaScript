 class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
 }

 class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCouse(){
        console.log(`A new course was added by ${this.username}`);
    }
 }

 const userInfo = new Teacher("arbaz khan", "gmail.com", "123")
 userInfo.addCouse()
 userInfo.logMe()