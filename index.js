console.log("sunil savaliya")

function add(a,b) {
     sum=a+b;
}

// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.

const number=7;

if(number % 2 == 0){
     console.log("Even");
}
else 
{
    console.log("odd");
}


// 2. Find the Maximum of Two Numbers

const a=5;
const b=9;

if(a>b){
    console.log(`${a}`);
}
else
{
    console.log(`${b}`);
}


// 3. Check Leap Year

let year = 2020;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
    console.log("Leap Year");
}
else
{
    console.log("Not Leap Year");
}

// 4. Sum of Natural Numbers

const j = 5
let sum = 0;
for(i=1;i<=j;i++)
{
    sum += i
    console.log("i:",i)
}
console.log(sum)

// 5. Factorial of a Number

let no = 4;
let fact = 1;
for (let i = 1; i <= no; i++) {
    fact *= i;
}
console.log(fact);

// 6. Multiplication table

let num = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 7. Reverse a Number

let num1=12345;
let rev=0;

while(num1>0)
{
    rev=rev*10 + num1%10;
   num1=Math.floor(num1/10);
}
console.log(rev)


import add from "./add.js";
console.log(add(33,11));
