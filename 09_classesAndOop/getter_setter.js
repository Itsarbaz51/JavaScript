class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    //email
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value.toUpperCase()
    }



    //password
    get password(){
        return `${this._password}arbaz`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const userInfo = new user("arbaz@gamil.com", "abc")
console.log(userInfo.password);
console.log(userInfo.email);