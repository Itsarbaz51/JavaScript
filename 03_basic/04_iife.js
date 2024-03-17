// Immediate Invoked Function Expressions


(function chai() {
    console.log(`DB CONNECTION`)
})();

( () => {
    console.log("ffff");
} )();

( (name) => {
    console.log(`name is ${name}`);
})("arbaz")