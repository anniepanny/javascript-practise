//return and function
function hello(){
    return "Hello world!"
}

//
function a(){
    return "Hello a!"
}

//
function b() {
    return "Hello b!"
}

//function call
function greet(){
    return "Haydo!"
}
let salutation = greet();

//string concatenate
function greet(name){
    return "Hello " + name + "!";
}
greet("Grace");

//
function echo(Greta) {
    return Greta;
}
function echo(co2){
    return co2;
}

//console.log
function log(){
    console.log("Hello Console!");
}

//logging variables
function log(name) {
    console.log(name);
  }
log("Ken Thompson");

//loggings and strings
function shout(name){
    let result = name + name; 
    console.log(result);
    return result;
}
shout("Fire");

// string: length
function length(name) {
    let number = name.length;
    return number;
  }
  length("sun");

//string : touppper and lower case
function toCase(text){
    let town = text.toLowerCase();
    let town1 = text.toUpperCase();
    return town + "-" + town1;
}
toCase("Mthatha");

//string: charAt()
function shortcut(string1,string2){
    let one = string1.charAt(0);
    let two = string2.charAt(0);
    return one + two;
}
shortcut("Amnesty", "International");

//string:trim()
function firstChar(param){
    let output = param.trim().charAt(0);
    return output;
}
firstChar(" Rosa Parks ");

//string: indexof()
function indexOfIgnoreCase(string1,string2){
    let num1 = string1.toLowerCase();
    let num2 = string2.toLowerCase();
    return num1.indexOf(num2);
}
indexOfIgnoreCase(("bit","it"),("bit","IT"));

//string: indexOf() with from index
function secondIndexOf(string1, string2){
    let string = string1.indexOf(string2);
    return string1.indexOf(string2, string + 1);
 }
secondIndexOf("White Rabbit", "it");

//string: substr()
function firstWord(param){
    let word = param.indexOf(" ");
    return param.substr(0,word);
}
firstWord("see and stop");

//string: replace()
function normalize(date){
    return (date.replace(/-/g,'/'));
}
console.log(normalize('20-05-2017'));

//NUMBERS
//Adding number
function add(num1, num2){
    let add = num1 + num2 ;
    return add;
}
add(1, 2);

//fahrenheit
function toFahrenheit(c){
    let far = 1.8 * c + 32 ;
    return far;
}
toFahrenheit(0);

//Increment
let x = 3;
x++;
x = x * 2;
x--; // output: 7

//modulo
function onesDigit(n){
    let digit = n % 10 ;
    return digit ;
}
onesDigit(2674);

//parenthesis
function mean(n1,n2){
    let total = (n1+n2)/2;
    return total;
}
mean(1,2);

//Math
function hypotenuse(a,b){
    let cSq = Math.pow(a,2) + Math.pow(b,2) ;
    return Math.sqrt(cSq);
}
hypotenuse(3,4);

//min and max
function midrange(n1,n2,n3){
    let small = Math.min(n1,n2,n3);
    let great = Math.max(n1,n2,n3);
    let mean = (small + great)/2 ;
    return mean;
}
midrange(3,9,1);

//math.pi
function area(r){
    let area = Math.PI * Math.pow(r,2) ;
    return area;
}
area(1);

//rounding
function round100(n){
    let num = Math.round(n / 100) * 100
     return num;
}
round100(1749);

//random numbers
function dice(){
    let num = Math.floor(Math.random()*6)+1;
    return num;
}

//parseInt
function add (string) {
    let sum1 = parseInt(string, 10);
    let indexPlus = string.indexOf('+');
    let sAfter = string.substr(indexPlus+1);
    let sum2 = parseInt(sAfter,10);
    return sum1+sum2;
}
add('102+17');

//boolean nand
function nand(v1,v2){
    let boolean = v1 && v2;
    return !boolean;
}
nand(true,true);
nand(true,false);
   
//nor
function nor(v1, v2) {
    let or = v1 || v2 ;
    return !or;
}
nor(true,true);

//