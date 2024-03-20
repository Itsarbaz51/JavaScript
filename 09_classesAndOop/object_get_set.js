const User = {
    _email: 'h@gamil.com',
    _password: 'arba',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const Info = Object.create(User)
console.log(Info.email);