// let myName = "arbaz"

// console.log(myName.length);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.arbaz = function() {
    console.log(`arbaz is present in all object`);
}

Array.prototype.hyArbaz = function (){
    console.log(`learning JS`);
}
// heroPower.arbaz()
// myHeros.arbaz()
// myHeros.hyArbaz()



// inheritance

const user = {
    name: "chai",
    email: "google.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssifnment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "arbaz       "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`Ture length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"arbazkhan".trueLength()
"iceTea".trueLength()