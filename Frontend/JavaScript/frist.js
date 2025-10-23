// alert('Sameer')

// let age =5
// age=10
// console.log(age);


//  const student = {
//  fullName : "Sameer",
//   age :23,
//   marks :936,
//  isFollow : true,
//  };

//  student.age = student.age +2;
//  console.log(student);


//   const product = {
//     name : ' ball pen ' ,
//     rating : 4,
//     isDeal : true ,
//     price : 170,
//     offer : 5 ,
//   };
//   console.log(product);


// let a = 50;
// let b = 10; 
// console.log ( "a = " ,  a,  "& b = ",b );
// console.log( "a + b =" ,  a + b);
// console.log( "a - b =" ,  a - b);
// console.log( "a * b =" ,  a * b);
// console.log( "a / b =" ,  a / b);
// console.log( "a % b =" ,  a % b);
// console.log( "a ** b =" ,  a ** b); exponentiatiton

// uniary operator

// a++;
// console.log("a =", a);

//  onsole.log("a++ = ",a++ );
//  console.log("a = ",a );

//  console.log("b = ",b );
 

// Assignment Operators

// let a = 5;
// let b = 2;

// a +=4;
// a -=4;
// a *=4;
// a /=4;
// a **=4; 
// console.log ('a =' , a);


// Comparision Operator

// let a = 5;
// let b = 2;

// a==b;
// a!=b;
// a<b;
// a>b;
// a<=b;
// a>b;
// a===b;
// a!==b;
// console.log("a!==b", a  !== b);

// Logical OPerators

// let a=6;
// let b=5;
 
// let cond1= a>4;
// let cond2= a==b;

// console.log("cond1 && cond2 =" , a>4 && a==b );   //and me 2no true hon to true hota hai//
// console.log("cond1 || cond2 =" , a>4 || a<b );   //or  me 1 true ho to true hota hai//
// console.log(" !(a<b) =", !(a<b) );  //logical not//


    // Conditional Statements

// let age = 23;
// if (age >=18){
//     console.log("you can vote");
// }

// if(age < 18 ){
//  console.log("you cannot vote");
// }



// let mode ="dark";
// let color;
// if(mode=== 'dark'){
//     color='black';
// }
// if(mode === 'light'){
//     color ='white';
// }
// console.log(color);


// let age = 17;
//  if (age >=18){
//      console.log("you can vote");
// } else{
//     console.log("you cannot vote");
// };

// let num =10;
// if( num % 2 == 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }


//  let mode ="dark";
//  let color;
//   if(mode=== 'dark'){
//      color='black';
//  }
//     else if(mode === 'blue'){
//      color ='blue';
//  }
//     else if(mode === 'pink'){
//         color ='pink';
//     } else{
//         color ='white';
//     }
//  console.log(color);


// Ternary Operator           uses 3 operands

// let age = 23;
// age >= 18 ? "adult" : "not adult";


// Exercise Question 1

// let num = prompt  ("enter a number")
// // console.log(num);
 
// if(num % 5 === 0){
//     console.log( num, " is a multiple of 5");
// } else {
//    console.log( num," is not a multiple of 5"); 
// }

// Exercise Question 2 


//  let num = 68;
//  let grade;
//  if(num >=80 &&  num === 100 ){
//     grade = "A";
// } else if(num >70 &&  num <= 89){
//      grade = "B";
// }else if(num >60 && num <=69 ){
//      grade = "C";
// }else if(num >50 && num <=59 ){
//      grade = "D";
// }else if(num >0 && num <=49 ){
//      grade = "F";
// } console.log(grade);


//  for( let i = 0; i<=10; i++){
//     console.log('i =' , i);
// }
//   console.log("loop has ended");

// sum of numbers using for loop

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum+ i ;
// }console.log(sum);

// let i = 0;
// while(i<=10){
//     console.log('i' , i);
//     i++;
// }

// let i=2;
// do{
//     console.log("Sameer");
//     i++;
// }while(i<=10);


// for of loop 


// let str = 'Sameer';

// let size=0;

// for(let val of str){
//     console.log(val);
//     size++;
// }
// console.log(size);

// for in loop     is for objects

// let student={ 
//     name :'Sameer',
//     age :23,
//     isPass :true,

// };

// for( let key in student){
//     console.log(key , student[key] );
// }


// Exercise Question 
// 1
// let num;
// for(num=0;num<=100;num++){
//     if(num %2 !== 0 ){
//         console.log(num);
//     }
// }

// 2


// let gameNum = 25;
// let userNum = prompt("Enter a number")
// while(userNum != gameNum){
//     userNum = prompt("You have entered a wrong number, Guess Again ")
// }
// console.log("Congratulations you have entered correct number ");


// Strings in JS

// let str = "Sameer";
// console.log( str[2]);

// template Literals   ctreades by backticks
// let  obj = {
//     item : 'pen',
//     price : 10,
// }
// let output=`The price of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log( "the price of " , obj .item , 'is ' , obj .price, "rupees");

// Escape Chatacters  \n  next line   \t  a tab space  

// String Interpolation    placeholders  ky liye use hoty hain 

// Strings Methods  
 
// let str= 'sameer';
// console.log(str);
//  console.log (str.toUpperCase());                upercase letter bnany k liye
// console.log (str.toLowerCase());                    lowercase letter bnany k liye 
    // str.trim()                                       remove starting and ending spaces in strings
    // str.slice(start , end ?)                          return part of the string which you want
//    str1.concat(str2)                                    joins str1 and str2 
    //   str.replace(searchVal,  newVal)                     replaces values with in string 
    //  str.charAt(idx)                                        tells which  character is at chosen index

// Exercise Question

    //  let fullName = prompt("Enter Full Name")
    //   let username= '@' + fullName + fullName.length;
    //   console.log(username);

//   Arrays in JS                               arrays is typeof object      non primitive data type
 
//  let marks =[98,56,75,88,54,33];
// console.log(marks);
// console.log(marks.length);

// if we want to print a number at a single or specific index
// console.log(marks[0]);
// 
// if you want to change marks
// marks[0] = 66;
// console.log(marks);


// let heroes =['Superman', 'Batman','Spiderman','Aquaman'];
// console.log(heroes);

// loops

// let heroes =['Superman', 'Batman','Spiderman','Aquaman'];
// for( i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// let heroes =['Superman', 'Batman','Spiderman','Aquaman'];

// for(let el of heroes){
//     console.log(el.toLocaleUpperCase());
// }


// Exercise Question 1

// let marks=[98,82,76,65,52,33];
// sum=0;
// for(let val of marks){
//     sum = sum + val;
// }
// let avg=  sum /marks.length;
// console.log(`the avg marks of the class = ${avg}`);

// 2

// let items=[250,645,300,900,50];
// let i = 0;
// for( let val of items){
//     console.log(val);
//     let offer= val/10; 
//     items[i]=items[i]-offer;
//     console.log(`values after offer is ${items[i]}`);
//     i++;
// } 

// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
//     console.log(`value after offer is ${items[i]}`);
// }

// Array Methods 

// let foodItems=['banana','mango','apple','strawberry'];
// console.log(foodItems);
// foodItems.push('blueberry');
// foodItems.pop();
// console.log(foodItems.toString());

// let marvelHeroes=['thor','hulk'];
// marvelHeroes.unshift('antman'); 

// let dcHeroes=['superman','batman'];
// dcHeroes.shift('joker');

// let allHeroes= marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

//  let foodItems=['banana','mango','apple','strawberry'];
//  console.log(foodItems.slice(1,3));

// let num=[1,2,3,4,5];
// num.splice(1,2,101,102);
// console.log(num.splice(1,2,101,101));
// console.log(num);

// 2
// let companies=['bloomberg','microsoft','uber','google','ibm','netflix' ];
// console.log(companies);
// companies.push('amazon');
// companies.shift('bloomberg');
// companies.splice(2,1,'ola')
// console.log(companies);

// Functions and Methods

// function sum(a,b){
// console.log(a+b);
// }
// sum(5,5);

// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

// Arrow Functions                           small and convinient way of making functions 

//  const arrowSum = (a,b)=>{
//     console.log(a+b);
//  };
//  arrowSum(3,4);

// const arrowMul = (a,b)=>{
//     console.log(a*b);
//  };
//  arrowMul(3,4);

// const arrowSum = (a,b)=>{
//     return (a+b);
//  };
//   console.log (arrowSum(3,4));
 

// Exercise Question 1 

// function countVowels(str){
//  let count = 0;
//  for( const char of str ){
//     if( char === 'a' ||  char === 'e' ||   char === 'i' ||   char === 'o' ||   char === 'u'  ) {
//         count++;

//     }
//  }

//        console.log(count);}
//        console.log(countVowels("Sameer"));

// arr=[1,2,3,4,5];
// arr.forEach( function printVal(val){
//     console.log(val);
// })

// aay=[1,2,3,4];
// aay.forEach(val=>{
//     console.log(val);
// })

//  let Arr=[2,5,9,15];
// Arr.forEach ( function val(val){
//     console.log(val*val);

// } )



// let num = [ 32,45,67];
// let newArr=num.map((val)=>{
//     return val*val;
    
// }) 
// console.log(newArr);

// let marks=[1,2,3,4,5,6,7,8,9,10];
// let newMarks=marks.filter((val) =>{
//     return val %2===0;
// })
// console.log(newMarks);

// let sum=[1,2,9,3,4];
//  let totalSum=sum.reduce((pre,cur)=>{
//     return pre+cur;
//      return pre>cur? pre : cur;        to find larget num in array
//  })
//  console.log(totalSum);

// Exercise Question 1 

// let marksofStudents=[33,56,78,90,93,95,97,99];
// let brilliantStudents=marksofStudents.filter((val)=>{
//     if(val>=90){
//         return val;
//     }
// }) 
// console.log(brilliantStudents);

// 2

//  let n= prompt("Enter a number");

//  let arr=[];

//  for( let i=1;i<=n;i++){
//      arr[i-1]=i;
//  }
//  console.log(arr);

//  let newArr = arr.reduce((pre,cur) => {
//      return pre+cur;
//  })
//  console.log(newArr);

//  let proArr = arr.reduce((pre,cur)=>{
//     return pre*cur;
//  })
//  console.log(proArr);



// DOM  Document Object Model 


