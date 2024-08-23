"use strict" //globally defined
// without strict 
// let a=10;
// b=30;
// console,log(b); 
// function sum(a,a){  //duplicate value can be accepted 
// console.log(sum func){
// }
// sum()

// loops,strict mode,console type,array methods

// for,while,do while
// while
// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }


// do while
// do {             //it will run atleast one even if the condition is not satisfied
//     console.log(count);
//     count++
// } while (count <= 5)

//for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// for (let i = 0; i<=arr.length;i++) {
//     console.log(arr[i]);
// }

// // for of and for in lopps
// let items=["first","second","third",4,5,"sixth"]
// for(let item of items){   //elements it will give
//     console.log(item) ;    
// }
// for(let index in items){
//     console.log(index)  //it will give the indexing
//     console.log(items[index]); //to give indexing with each item
// }

// types of console used in html 
// console.log("log statement")
// console.error("to show error") //it willl show the error in red
// console.warn("warning") //it will show warning
// console.assert(5>10, "5 not greater than 10") //in assert if the condition false than the console will print
// console.assert(10>5,"10 is greater than 5")   //the condition is true than console will not run

let person = {
    name: "gargi",
    age: "20",
    address: {
        city: "udaipur",
        zipcode: "313001"
    },
    hobbies: ("singing", "travelling")
}
console.dir(person)

let data = [
    {
    name: "gargi", address: "jaipur", dept: "f50"
},
{
    name:"yahoo",address:"udaipur",dept:"cse"
},
{
    name:"cutie",address:"wifii",dept:"eco"
}
]
console.table(data);

// console.group("Group");
// console.log("message 1");
// console.log("m2");
// console.log("m3");
// console.groupEnd();

// console.count("counter");
// console.count("counter");
// console.count("counter");

// let arr =[10,20,30,40];
// let result=arr.push(1000); //to push the element
// console.log(result); //indexing btaega

// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// let arr=[10,20,30];
// console.log(arr.unshift(1000))
// console.log(arr); //unshift is used to add the element at 0 th index(returns array lenth)

// console.log(arr.shift()) //to remove the element from 0 the index
// console.log(arr);

// let arr1=[20,30];
// let arr2=[10,40];
// let result=arr2.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(concat); ///to concat both arrays but it doesnt change the original arrays it form new array

// slice(it doesnt change the original array)
// let arr=[10,20,30,40];
//  let slicearr=arr.slice(2,5) //here ye 2 indexing se start hogi slicing whereas to end 5 likhne pr wo 4 tk hi likh kr dega
//  console.log(arr);
// console.log(slicearr);

// splice(change the array)
// let arr3=[10,20,30,40];
// console.log(arr3.splice(2)); //to remove the element from back after 2 index
// arr3.splice(2,2,"gargi") //to repace the 2 element to gargi and will remove the second element
// // arr.splice(2,0,"gargi") to add the string but not to remove the 2 index
// console.log(arr3);

// includes
// let arr4=[20,30,40,50]
//     let result=arr4.includes(40); //if 40 is in the array it will return true
//     console.log(result1);

// // reverse
// arr3.reverse();
// console.log(arr);

// join
// let arr=[10,20,30,40,50,60];
// let result1=arr.join("+"); //to add + between each element predsent in arrays(mostly used for the format change of date)
// console.log(result1);

// flat
// let arr5=[10,20,[30,[40]]]
// let result2=arr5.flat(1) //it is used to remove the nested loop if 1 than it will remove one nested array from back
// console.log(result2)

//map,filter,reduce
let arr=[10,20,30,50,40];
 arr.map((item)=>{      //map is func which accepts another func in its parameter so it is called  and the function present inside is callback func or anonymous function
   return item*100;
 })   
 console.log(arr);
 let newarr=arr.map((item)=>{
       if(item==30){
        return item;
       }
 })//map returns new array with same lemngth as original

 //foreach(doent return anything undefinred only console krke print) except this same as map
 let result=arr.forEach((item)=>{
     return item;
 }
)