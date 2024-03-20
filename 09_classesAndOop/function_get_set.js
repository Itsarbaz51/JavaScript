function User(email, password){
    this.email = email;
    this.password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })
}

const Info = new User("arbaz@gamil.com", "abc")
console.log(Info.email);
console.log(Info.password);