function greet(name){
    console.log("Hello ${name}");

}
function greetAaliya(greetFn){
    const name="Aaliya";
    greetFn(name);
}
//a function which is passed as argument to another function is known as callback function
//a function which accepts a function as an argument or return a function is known as higher order function
greetAaliya(greet);
function highOrderFunction(callback){
    const name="Aaliya"
}