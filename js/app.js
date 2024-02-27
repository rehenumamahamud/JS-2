
let num;
 document.getElementById('submit').onclick =function () {

     number = document.getElementById('number').value;


     if (number % 2 === 0) {
        document.write('Even')
     }
     else if (number % 2 === 1) {
        document.write('Odd')
     } else {
        document.write('Invaild')

     }
 }