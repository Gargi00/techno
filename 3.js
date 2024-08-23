//filter(returns new array always)
// let arr=[10,20,30,40,50];
// let filteredARR=arr.filter((item)=>item!=30);
// console.log(filteredARR);

//reduce(to reduce the array)
// let sum=arr.reduce((acc,curr)=>acc+curr); //accumulator,current or
// let sum=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },1000);  //here bydefault 1000 will be taken by acc if not given than it will take 0
// acc curr
// 0   10   10(sum will again stored in acc)
// 10  20   30
// 30  30   60
// 60  40   100
// 100 50   150
// console.log(sum);

// find(returns only 1 item the next item satisfied by its test case)
// let arr=[10,20,30,40,50];
// let founditem=arr.find((item)=>item>20);
// console.log(founditem);

// find index(it will give the index of the element returned by find function)
// let arr=[10,20,30,40,50];
// let foundelementindex=arr.findIndex(item=>item>20);
// console.log(foundelementindex);

// some(if the single element is even than it will return true else false)
// let arr=[11,21,31,41,51];
// let hasEven=arr.some((item)=>item%2==0);
// console.log(hasEven);

// every(each element should satisfy the condition than only it will return true)
// let arr=[21,31,41,51,61];
// let evenArr=arr.every((item)=>item%2==0);
// console.log(evenArr);

// 2)object methods(all imp)
let obj = {
    firstname: "gargi",
    lastname: "sharma"
}
// (i)
// let keys=Object.keys(obj);//here object constructor is used in obj than only we can access these and the name is in() whereas in arrays direct arr. is done
// console.log(keys); //here keys will give firstname 

// (ii)
//  let values=Object.values(obj);
// console.log(values);  //values will give gargi

// (iii)
// let entries=Object.entries(obj);
// console.log(entries)   //it will give all key and value

// (iv)freeeze(it will not allow to change the properties of object constant)
// Object.freeze(obj);
// obj.address="udaipur"; freeze ke baad new element bhi add nhi hoga
// console.log(obj);

// (v)const (will change object element from outside but will not change the object)
// const object1={ 
//     firstname:"gar",
//     lastname:"sh"
// }
// object1.firstname="yaahoo"; //agr yha pr sirf object1="gan" hota to error aata
// console.log(object1);

// (vi)seal(will allow to change the values inside object but will not allow to add new element)
// Object.seal(obj);
// obj.firstname="no";
// obj.address:"udaipur"  //it will not add rhis new element
// console.log(obj);

// (vii)the only property which is accesees directly by obj and it returns true or fallse
// console.log(obj.hasOwnProperty("gender"));

// 3)string methods
let str="boom dhoom";

// (i)charAt tells at this position which character exists
// let char=str.charAt(2);
// console.log(char);

// (ii)concat (to add new word in existing string)
// let newstr=str.concat(" troom");
// console.log(newstr);

// (iii)include (returns true if trhe word mentioned is in the string and is case sensitive)
// let incl=str.includes("dhoom");
// console.log(incl);

// (iv)indexOf,lastindexOf
// let incl=str.indexOf("o"); //it willl return the index of o coming from first
// let incl1=str.lastindexOf("o"); //it will return the index of o coming from last
// console.log(incl1);

// (v)Slice(it will take - values also)
// let slicedarr=str.slice(2,7); //it will slice the main string to the index mentioned from-to
// console.log(slicedarr);

// (vi)substring(it will consider - valuues as 0 so it will return the ori string only otherwise same as slice)
// let subStr=str.substring(4,7);
// console.log(subStr);

// (vii)toUppercase
// let newStr=str.toUpperCase();
// console.log(newStr);

// (viii)trim (used to trim the space from starting and end of the string not from between)
// let str1="     yoyoy      ";
// console.log(str.length);
// let trimmedstr=str1.trim();
// console.log(trimmedstr);

// slice(string,array) splice(array) split(string) diff is imp

// (ix)split (it is used to break the string where space is availabe in " " this case and if space is not given"" than it will spit each character)
// let splitedarr=str.split(); //and if "" is also not added than it will give the original string in array
// console.log(splitedarr);

// (x)replace(to replace any part of string from other word)
// let reparr=str.replace("dhoom","troom");
// console.log(reparr);

// (xi)repeat(to repeat string any no of time as specified)
// let newarr=str.repeat(2);
// console.log(newarr);

//math object
// let num=Math.random();
// console.log(num)

// to convert decimal to integer
// let num=10.6574;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// pow
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));

// to generate 4 digit otp
// let num=Math.floor(Math.random() *10000);  2 digit or 3 dig num can come
// let num=Math.floor(1000 +Math.random() *10000); ab range is from 1000 to 10,999(5 digit can come)
// let num=Math.floor(1000 +Math.random() *9000); //ab range is from 1000 to 9999
// console.log("otp is",num);
