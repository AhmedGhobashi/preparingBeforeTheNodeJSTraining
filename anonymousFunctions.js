// JUST SOME EXAMPLES

function test (){
    console.log('hello world from test function')
}

var x  = test (); // hello world from test function
var y = test(); // hello world from test function
var z = test (); // hello world from test function

var m = test; // >>> this means the function itself without calling it
// and because of that we can now call m like... m()
m (); // hello world from test function



// ANONYMOUS FUNCTION AND CALLBACK FUNCTION EXAMPLES


// meow will be the lower order function now...
function meow (){
    console.log ("meow");
}


// the "higherOrderFunction" is the higher order function that 
// will take the lower order function "meow" as a parameter
function higherOrderFunction (lowerFunction){
    console.log ("hello from higher order function");
    lowerFunction();
}

higherOrderFunction(meow); // hello from higher order function
                           // meow




// one of the examples about the callback function is the setTimeout function in javascript
setTimeout (function (){
    console.log ("hello world after 3 seconds")
}, 3000);



// another example is "forEach" function...
const arr = [10, 20, 30, 40];
arr.forEach (function(el){
    console.log (el*2);
})


 
