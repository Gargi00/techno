// threaded, synchronous(line by line seq mein output),dynamic type,scripting lang(inpreted-run time)

console.log("hello techno"); //to print the value

// alert("hello gs")  //terminal pr error node ki fun nhi h html mein hoga

//var let const (diff is imp) 3keywords to define variables(imp)
//variable declared by var can be reassigned or redeclared
// var num1=20;
// var num1=30; in this it will give no error and accepts the same name of var reassign
// let num2=30;
// num2=40; //variable declard with let can be reassigned but cant be redeclared
// const num1=10;
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

let firstname="gan";
let lastnme="shar";
console.log(firstname+ '' +lastnme);

console.log(a**b)

// console.log(5+'5') sirf is case mein 5 bhi string bn jaeega except this in -,/,* mathematical operation hoga
// console.log('gs'+10) will give gs10
// console.log('gs'-10)will give  num error nan

//additional assignment operators
let x=5;
x=x+10;
// x +=10;

// let str="shubham";
// let constr= +str;
// console.log(constr)
// console.log(typeof constr)//type poison isme + will try to convert into number but in shubham it will not so will giv nan but if"10" than this string can be con by +

let str1="5";
let str2=+str1; //isme + string 5 ko convert krdega num
// console.log(5+'5'); will give 55

//sub assign operator
let y=10;
// y-=10;
// y*=10;
// y/=10;

//comparision operators return boolean
let  num1=10
let num2=10
console.log(num1 == num2) //only values compare
console.log(num1===num2) //will compare datatype and values

//logical operators
let isloggedin=10; //any num greater than 0 it will return
let isaddin=20;
console.log("is the user logged in signed in");
isloggedin && isaddin;




