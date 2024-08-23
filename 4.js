// date,rest,spread,dob
// let date=new Date(); 
// console.log(typeof date());
// console.log(date.getDate()); //currentdate getdate
// console.log(date.getDay()); //1-7
// console.log(date.getmonth()); //0-12
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getTime());  //we can use it to generate unique numbers also
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.toTimeString())
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());


// destructure
// let arr=[10,20,30,40,50];
// let [num1, ,num3]=arr; //it will access 1 and 3 element from array as sec is not mentioned and can be skipped by ,
// let[num1, ...newarr]=arr;  //rest operator ...(if 3dot left side than rest and right side of = than it is spread) //num1 is stores 1 element of the array
// console.log(num1,num3);
// console.log(newarr);

// let arr1=[10];
// let[num1,num2=100]=arr1; //u can add new elemnet also, here num will give undefned so we can give default value here also
// console.log(num1,num2)

// object destructuring
// let firstname;
// let obj={
//     firstname: "gs",
//     lastname:"aa",
//     addresss:"abc",
//     gender:"female"
// }
// let{firstname,address,school="SGSSS"}=obj; //they are accessed by key name so no need for space directly can access any element
// let{firstname:a}=obj; //as already a variable of same name exist(30) so we will access this with a so that no conflict occurss
// console.log(firstname)
// console.log(a);

// let obj1={};
// obj1[firstname]="dhoom";
// obj1[address]="hi";
// console.log(obj1);

// let arr1=[10,20,30]; reference type focus on addresses (here it will copy the addrress) so here 1000 will be pushed on both the arr as they are assigned same address
// let arr2=arr1;
// arr2.push(1000);
// console.log(arr1===arr2)

// let arr3=[10,20,30]; primitive type it will focus on the values directly so 1000 will be pushed only in arr4
// let arr4=[10,20,30];
// arr4.push(1000);
// console.log(arr3===arr4);

//spread operator
// let arr1=[10,20,30]
// let arr2=[...arr1] //here we use spread opertor so that all the values of arr1 is in arr2 but access is diff they will be assigned diff addresses so now 1000 will be pushed in arr2 only
// arr2.push(1000);
// console.log(arr1);
// console.log(arr2);

// let arr1=[10,20,30]
// let arr2=[20,30,40]
// // let arr3=[arr1,arr2] //than it will form nested array
// let arr3=[...arr1,200,...arr2,60,70]
// console.log(arr3)

// let obj1={
//     firstname:"hi",
//     lastname:"bye"
// }
// let obj2={
//     firstname:"vinu", //here firstname is 2 times so in obj 3 the value will be replaced the firstname mentioned at last that name will be considered
//     address:"udp",
//     gender:"male"
// }
// let obj3={...obj1,...obj2,school:"SGSSS"};
// console.log(obj3);