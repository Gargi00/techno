// threaded, synchronous(line by line seq mein output),dynamic type,scripting lang(inpreted-run time)

console.log("hello techno"); //to print the value

// alert("hello gs")  //terminal pr error node ki fun nhi h html mein hoga

//var let const (diff is imp) 3keywords to define variables(imp)
// (1)variable declared by var can be reassigned or redeclared
// var num1=20;
// var num1=30; in this it will give no error and accepts the same name of var reassign
// (1)let num2=30;
// num2=40; //variable declard with let can be reassigned but cant be redeclared
// (1)const num1=10;
// const=50 //variable declared with const cannot be reassigned or redeclared

var firstnum = 20; //variable
console.log(firstnum)

// 2 datatypes primitive type-string,number,boolean,undefined,symbol,bigint
// reference or object type datatype-array,objects,date,null
var firstnam = undefined
var firstvar = "hey its gs" //"" '' valid strings
console.log(firstvar)
console.log(typeof firstvar) //iska type pta krne ke liye var ka
console.log(typeof firstnam)

//arrays collection of multiple datatypes
var firstvar1 = [20, 30, "hello", undefined]
console.log(firstvar1)
console.log(typeof firstvar) //null,array refernce types give object as typeof

var date = new Date();
console.log(date);
console.log(typeof date) //for date

var firstvar2 = {
    firstname: "gargi",
    lastnme: "sharma"
};  //object
console.log(firstvar2)
console.log(typeof firstvar2)

//array of objects [{} {} {}] json

//dynamic typing
// var firstvar3="ullu";
// firstvar3=[20,30]
// firstvar3={
//     firstn:"gun",
//     lastn:"bun"
// };
// firstvar3=true
// console.log(firstvar3) 

//operators
//arithmatic operators(+,-,*,/),comparision,logical
let a = 14;
let b = 20;
let add = a + b;
let sub = a - b;
console.log(add)
console.log(sub);

let firstname = "gan";
let lastnme = "shar";
console.log(firstname + '' + lastnme);

console.log(a ** b)

// console.log(5+'5') sirf is case mein 5 bhi string bn jaeega except this in -,/,* mathematical operation hoga
// console.log('gs'+10) will give gs10
// console.log('gs'-10)will give  num error nan

//additional assignment operators
let x = 5;
x = x + 10;
// x +=10;

// let str="shubham";
// let constr= +str;
// console.log(constr)
// console.log(typeof constr)//type poison isme + will try to convert into number but in shubham it will not so will giv nan but if"10" than this string can be con by +

let str1 = "5";
let str2 = +str1; //isme + string 5 ko convert krdega num
// console.log(5+'5'); will give 55

//sub assign operator
let y = 10;
// y-=10;
// y*=10;
// y/=10;

//comparision operators return boolean
let num1 = 10
let num2 = 10
console.log(num1 == num2) //only values compare
console.log(num1 === num2) //will compare datatype and values

//logical operators
//let isloggedin=true
//let isaddin=true
let isloggedin = 10; //any num greater than 0 it will return return the num written at addin as it is last
let isaddin = 20;//wherea 0 and num is there than 0 will give false
console.log("is the user logged in signed in", isloggedin && isaddin)
console.log(isaddin || isloggedin) //0||0 is 0,0||10 is 10

//conditional statements
//if else,switch,ternary operator
//functions
//array,object
//loops

// let count=20;
// if(count==20){
//     console.log("the count is 20");
// }
// else{
//     console.log("the count is not 20");
// }


//  if(count==20){
//      console.log("the count is 20");
//  }
//  else if(count>20){
//      console.log("the count is not 20");
//  }
//  else{
//     console.log("coun is less than 20");
//  }

// let firstnum1 = prompt("enter the first num"); //input from user but prompt does not work in nodejs
// console.log(firstnum1);
//prompt the user to enter their username and password
//if username is admin and password is 123 in numbers
//if succcess than author successful else not

// let user = prompt("enter your username")
// let pass = prompt("enter your password")
// if (user === "admin" && pass === 123) {
//     console.log("author successful");
// }
// else {
//     console.log("author not successful");
// }
//or
// if(username==="admin"){
//     if(password===123){
//         console.log()
//     }
// }
// elseconsole.log()

//ternary operators
// let count =20;
// count===20? console.log("count is 20"):console.log("not 20")
// count===20? console.log("count is 20"):count>20?console.log("the count is greater then 20"):console.log("less than 20");

// let username=prompt("enter username");
// let password=prompt("enter password");
// (username==="admin" && password===123)?console.log("auth successful"):console.log("auth failed")

//switch cases
let daynumber = 3;
let dayname;
switch (daynumber) {
    case 1:
        dayname = "monday"
        break; //to break loop if con is true
    case 2:
        dayname = "tuesday"
        break;
    case 3:
        dayname = "wednesday"
        break;
    case 4:
        dayname = "thursday"
        break;
    case 5:
        dayname = "friday"
        break;
    case 6:
        dayname = "sat"
        break;
    case 7:
        dayname = "sun"
        break;
    default:
        daynumber = "invaild day number"

}
console.log(dayname);

//3 functions
//func declaration
//func expression
// arrow function

// 1)func declaration
// function sum(){
//     console.log("this is sum function");
// }

// 2)func exp
// let sum =function(){
//     console.log("this is funvc exp");
// }

//3)arrow exp
// let sum=()=>{
//     console.log("this is arrow function")
// }

let ad = (a, b) => {  //let add=(a,b)=>a+b use if return is single lined
    return a + b;
}
let result = ad(2, 5)
console.log(result)

// 2 diff bet var,let const
//global,local,block({}everything is block scope except in func)
// (2)var is global scope variable but in function it becomes local scope var
// (2)let and const are block scope variable
// {
//     let a=20; //it is block scope var so bahar se acces nhi hoga
// }
// console.log(a)
// {
//     var b=20; //ye global var h ye accessible rhega except in func
// }
// console.log(b)

// function sum2(){
//     var a=20; //it is func so cant be accessed globally accessed locally
//     return a;
// }
// console.log(a) 

//if sum2(){ //it can be accessed globally
// var a=30; 
// return a;
// }
//console.log(a)

//array and objects
// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]); //to access last element

// nested arrays
let nestedarray=[10,20,30,[1,2,3,4],[20,,30,40,["aaa","aab",[true,false]]]];
let newarr=nestedarray[nestedarray.length-1.] //it will access whole last element
let newarr1=newarr[newarr.length-1] //it will access aaa
let newarr2=newarr1[newarr1.length-1] //it will access true
console.log(newarr2)

//console.log(arr.length)
// arr[arr.length]="shubh";
// console.log(arr);

//objects
// let obj={
//     "firstname":"g",
//     "lastname":"s"
// }
// console.log(obj.lastname);
// obj.section="fsd";



