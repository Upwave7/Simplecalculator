alert('This is a basic calculator' )

var num1 = parseInt(window.prompt('Enter your Firstnumber'))
var num2 = parseInt(window.prompt('Enter your Secondnumber'))
const operator = prompt('pick any operation +,-,/,*')
let result;
if (operator == '+'){
    result = num1 + num2;
}
else if(operator == '-'){
    result = num1 - num2;   
}
else if(operator == '/'){
    result = num1 / num2;   
   }
   else if(operator == '*'){
    result = num1 * num2;   
   }

alert(result);

