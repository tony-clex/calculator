
let input = document.getElementById('button-number');
let btn = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btn);
console.log(arr)
arr.forEach(button => {
console.log(button)
  
    button.addEventListener('click', (e) =>{
console.log(e)

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})