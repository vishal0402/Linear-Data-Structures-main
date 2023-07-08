//Q1.Write a program to find all pairs of an integer array whose sum is equal to a given number?

let arr1=[2,3,5,2,1,6];
let sum=7;
for(let i=0;i<arr1.length;i++){
  for(let j=i;j<arr1.length;j++){
    if(sum===arr1[i]+arr1[j]){
      console.log([arr[i],arr1[j]]);
      
    }
  }
}
<!-- --------------------------------------------- -->


// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
let arr=[2,3,4,6,7,8,9];
let n =(arr.length)-1;
let mid = (arr.length)/2;

for(let i=0;i<mid;i++){
  let s=arr[i];
  arr[i]=arr[n-i];
  arr[n-i]=s;  
}
  console.log(arr);

<!-- -------------------------------------------------------- -->
//Q3 Write a program to check if two strings are a rotation of each other?
let s1="ABCD"
let s2="CDAB"
var s3= s1+s1;

if(s1.length!=s2.length){
  console.log("not rotation")
}

else if(s3.indexOf(s2)!=-1){
  console.log("rotation");
  
}
else{
  console.log("not")
}
//------------------------
//Q4. Write a program to print the first non-repeated character from a string?

let name="raja"

for(let i=0;i<name.length;i++){
  if(name.indexOf(name.charAt(i))==name.lastIndexOf(name.charAt(i))){
    console.log(name[i]);  
    break;
  }
}
////05 Read about the Tower of Hanoi algorithm. Write a program to implement it.
    function  towerOfHanoi(n, fromRod, toRod, useRod){
      if(n===1){
          console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return;
      }
      towerOfHanoi(n-1,fromRod,useRod,toRod)
        console.log(`move disk ${n} from ${fromRod} to ${useRod}`)
      towerOfHanoi(n-1 ,useRod,toRod,fromRod) 
    }
    towerOfHanoi(3,'a','c','b')


<!-- ---------------------------------- -->
//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
//     let post_exp = "ABC/-AK/L-*";
function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    // Convert postfix to Prefix expression
    function postToPre(post_exp)
    {
        let z = [];
        let length = post_exp.length;
        for (let i = 0; i < length; i++) {
            if (isOperator(post_exp[i])) {
                let op1 = z[z.length - 1];
                z.pop();
                let op2 = z[z.length - 1];
                z.pop();
                let temp = post_exp[i] + op2 + op1;
                z.push(temp);
            }
            else {
 
                z.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (z.length > 0)
            ans += z.pop();
        return ans;
    }
     


    console.log("Prefix : " + postToPre(post_exp));
<!-- --------------------------------- -->

//Q7. Write a program to convert prefix expression to infix expression.
    let exp = "*-A/BC-/AKL";
 function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
 
    // Convert prefix to Infix expression
    function convert(str)
    {
        let stack = [];
        let l = str.length;
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()

                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {

                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     

      
  console.log("Infix : " + convert(exp));


<!-- ---------------------------------------- -->
//Q8. Write a program to check if all the brackets are closed in a given code snippet.
function checkBalanced(s) {
    let i = -1;
    let stack = [];
    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
            i++;
        } else {
            if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
                stack.pop();
                i--;
            } else {
                return false;
            }
        }
    }
    return i === -1;
}
 
let expr = "{()}[]";
 
// Function call
if (checkBalanced(expr))
    console.log("Balanced");
else
    console.log("Not Balanced");




<!-- ...... -->
//Q9. Write a program to reverse a stack.
 let l
 class Stack{
  constructor(){
    this.data=[];
   }
 push(value){
    this.data.push(value);
  }
  pop(){
    if(this.data.length===0){
      return 0;
    }
    this.data.pop();
   }
   peek(){
   
     console.log(this.data[this.data.length-1])
   }
   isEmpty(){
     if(this.data.length===0){
      return;
     }
    
  }
 }

 let s=new Stack();
  s.push(1);
 s.push(2);
 s.push(3);
 s.push(4);
 s.push(5);
 s.peek()


 while(s.isEmpty()){
   s.peek()
   s.pop()
 }
<!-- ................................ -->
//Q10.  Write a program to find the smallest number using a stack.

 function findSmallest(stack1) {
 let min = 10;
  
  while (stack1.length > 0) {
    let item = stack1.pop();
    if (item < min) {
      min = item;
 }
 }
  
  return min;
 }

 let stack1 = [4, 2, 9, 1, 7];
 console.log("Stack:", stack1);

let smallest = findSmallest(stack1);

 console.log("Smallest Number:", smallest);
