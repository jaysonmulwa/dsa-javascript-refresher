/**
  * Golden rule: datta can only be added or removed from top of the stack.
  * Uses: palindromes, recusrion, multple base conversion
  */
 class Stack {
     constructor() {
        this.stack = [];
        this.top = 0; 
     }

     push(element){
        this.stack[this.top++] = element;
     }

     pop(){
        this.top--;
         return this.stack[this.top];
     }

     peek(){
        return this.stack[this.top-1];
     }

     length(){
         return this.top;
     }

     clear(){
         this.stack = [];
         this.top = 0;
     }
 
 }

 function isPalindrome(word){
     let _word = word.split("");
     let _stack = new Stack(); 
     _word.forEach(element => {
        _stack.push(element);
     });

     let _r_word = "";
     while(_stack.length() > 0){
        _r_word += _stack.pop();
     }

     return word == _r_word ? "true" : "false";
 }
//console.log(isPalindrome("racecar"));


function factorial(n){
    let stack = new Stack();
    for(x = n; x > 0; x--){
        n > 1 ? stack.push(x): "";
    }
    let product = 1;
    let len = stack.length();
    for(y = 0; y < len; y++){
       product *= stack.pop();
    }
    return product;
}
// console.log(factorial(5));