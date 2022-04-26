/* A greeting function that passes a function as an argument/ */


function hello(name){
    return `Hello ${name}!!`;
}
 
function greet_name(greeting,message,name){
       return `${greeting(name)} ${message}`;
}
 
greet_name(hello,'Welcome to my domain.');
